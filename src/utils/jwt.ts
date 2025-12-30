import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  id?: string;
  exp?: number;
  iat?: number;
  [key: string]: unknown;
}

export const decodeToken = (): JwtPayload | null => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    return jwtDecode<JwtPayload>(token);
  } catch {
    return null;
  }
};

export const isTokenExpired = (): boolean => {
  const payload = decodeToken();
  if (!payload?.exp) return true;
  
  // Check if the token is expired
  return Date.now() >= payload.exp * 1000;
};
