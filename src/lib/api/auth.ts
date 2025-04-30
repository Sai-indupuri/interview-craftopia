
import { api } from "./apiClient";
import { supabase } from "@/integrations/supabase/client";

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
  const { data, error } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  });

  if (error) {
    throw new Error(error.message);
  }

  if (!data.session || !data.user) {
    throw new Error("Invalid login");
  }

  // Transform to our AuthResponse format
  return {
    user: {
      id: data.user.id,
      email: data.user.email || '',
      firstName: data.user.user_metadata?.first_name,
      lastName: data.user.user_metadata?.last_name,
      accountType: data.user.user_metadata?.account_type || 'individual',
    },
    token: data.session.access_token,
  };
}

export async function signUp(credentials: SignUpCredentials): Promise<AuthResponse> {
  const { data, error } = await supabase.auth.signUp({
    email: credentials.email,
    password: credentials.password,
    options: {
      data: {
        first_name: credentials.firstName,
        last_name: credentials.lastName,
        account_type: credentials.accountType,
        company_name: credentials.companyName,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  if (!data.session || !data.user) {
    throw new Error("Signup completed but requires confirmation");
  }

  // Transform to our AuthResponse format
  return {
    user: {
      id: data.user.id,
      email: data.user.email || '',
      firstName: data.user.user_metadata?.first_name,
      lastName: data.user.user_metadata?.last_name,
      accountType: data.user.user_metadata?.account_type || 'individual',
    },
    token: data.session.access_token,
  };
}

export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
  localStorage.removeItem("authToken");
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const { data, error } = await supabase.auth.getSession();
    
    if (error || !data.session || !data.session.user) {
      return null;
    }
    
    const user = data.session.user;
    
    return {
      id: user.id,
      email: user.email || '',
      firstName: user.user_metadata?.first_name,
      lastName: user.user_metadata?.last_name,
      accountType: user.user_metadata?.account_type || 'individual',
    };
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}
