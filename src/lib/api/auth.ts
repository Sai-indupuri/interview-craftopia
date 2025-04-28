
import { api } from "./apiClient";

interface AuthUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  accountType: 'individual' | 'company';
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  accountType: 'individual' | 'company';
  companyName?: string;
}

interface AuthResponse {
  user: AuthUser;
  token: string;
}

export async function signIn(credentials: SignInCredentials): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>('auth/signin', credentials);
  
  // Store the auth token
  if (response.token) {
    localStorage.setItem("authToken", response.token);
  }
  
  return response;
}

export async function signUp(credentials: SignUpCredentials): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>('auth/signup', credentials);
  
  // Store the auth token
  if (response.token) {
    localStorage.setItem("authToken", response.token);
  }
  
  return response;
}

export async function signOut(): Promise<void> {
  await api.post<void>('auth/signout', {});
  localStorage.removeItem("authToken");
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    return await api.get<AuthUser>('auth/me');
  } catch (error) {
    localStorage.removeItem("authToken");
    return null;
  }
}
