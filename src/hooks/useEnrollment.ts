import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface EnrollmentPayload {
  fullName: string;
  email: string;
  phoneNumber: string;
  highestLevelOfEducation?: string;
  yearsOfExperience?: string;
  learningGoals: string;
}

interface EnrollmentResponse {
  status: boolean;
  message: string;
}

export const useEnrollment = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const enroll = async (payload: EnrollmentPayload) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.post<EnrollmentResponse>(
        `${process.env.NEXT_PUBLIC_URL}/enrollment/enroll`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (!data.status) {
        setError(data.message);
        return data;
      }

      setSuccess(data.message);
      return data;
    } catch (err: unknown) {
      let errorMessage = "Something went wrong. Please try again.";

      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          // Redirect to login page on authentication error
          router.push("/login");
          return;
        }
        if (err.response?.data?.message) {
          errorMessage = err.response.data.message;
        }
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    enroll,
    loading,
    error,
    success,
  };
};
