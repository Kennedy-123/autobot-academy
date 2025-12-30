import { useState } from "react";
import axios, { AxiosError } from "axios";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  status: boolean;
  message: string;
  token?: string;
}

interface ErrorResponse {
  message: string;
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = async (payload: LoginPayload) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post<LoginResponse>(
        `${process.env.NEXT_PUBLIC_URL}/auth/login`,
        payload
      );

      if (data.status && data.token) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
      }

      return data;
    } catch (err: unknown) {
      const axiosError = err as AxiosError<ErrorResponse>;
      const message =
        axiosError?.response?.data?.message || "Something went wrong";
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    error,
    token,
  };
};
