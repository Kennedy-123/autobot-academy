import { useState } from "react";
import axios from "axios";

interface RegisterPayload {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
}

interface RegisterResponse {
  status: boolean;
  message: string;
}

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const register = async (payload: RegisterPayload) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { data } = await axios.post<RegisterResponse>(
        `${process.env.NEXT_PUBLIC_URL}/auth/register`,
        payload
      );

      if (data.status) {
        setSuccess(data.message);
      } else {
        setError(data.message);
      }

      return data;
    } catch (err: unknown) {
        let errorMessage = "Something went wrong. Please try again.";
      
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    loading,
    error,
    success,
  };
};
