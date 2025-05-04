
import { toast } from "@/hooks/use-toast";
import { backend } from "./backendClient";

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
  try {
    const response = await backend.post<AuthResponse>('auth/login', credentials);
    
    // Store the auth token
    if (response.token) {
      localStorage.setItem("authToken", response.token);
    }
    
    return response;
  } catch (error: any) {
    console.error("Login error:", error);
    throw new Error(error.message || "Failed to sign in");
  }
}

export async function signUp(credentials: SignUpCredentials): Promise<AuthResponse> {
  try {
    const response = await backend.post<AuthResponse>('auth/register', credentials);
    
    // Store the auth token if registration automatically logs in the user
    if (response.token) {
      localStorage.setItem("authToken", response.token);
    }
    
    return response;
  } catch (error: any) {
    console.error("Registration error:", error);
    throw new Error(error.message || "Failed to sign up");
  }
}

export async function signOut(): Promise<void> {
  try {
    // Call backend logout endpoint if needed
    await backend.post<void>('auth/logout', {});
    
    // Remove token from localStorage
    localStorage.removeItem("authToken");
  } catch (error: any) {
    console.error("Logout error:", error);
    throw new Error(error.message || "Failed to sign out");
  }
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    if (!localStorage.getItem("authToken")) {
      return null;
    }
    
    return await backend.get<AuthUser>('auth/me');
  } catch (error) {
    console.error("Error getting current user:", error);
    // If unauthorized, clear the token
    if ((error as any).status === 401) {
      localStorage.removeItem("authToken");
    }
    return null;
  }
}

export async function refreshToken(): Promise<string | null> {
  try {
    const response = await backend.post<{ token: string }>('auth/refresh-token', {});
    
    if (response.token) {
      localStorage.setItem("authToken", response.token);
      return response.token;
    }
    
    return null;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
}
