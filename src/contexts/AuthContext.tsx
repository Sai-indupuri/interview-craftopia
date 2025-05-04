
import { createContext, useContext, useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { signIn, signUp, signOut, getCurrentUser, refreshToken } from '@/lib/api/auth';

interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  accountType: 'individual' | 'company';
}

interface AuthContextType {
  user: User | null;
  signUp: (email: string, password: string, accountType: 'individual' | 'company', companyName?: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  accountType: 'individual' | 'company' | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [accountType, setAccountType] = useState<'individual' | 'company' | null>(null);
  const { toast } = useToast();

  // Set up auth token refresh
  useEffect(() => {
    const refreshInterval = 14 * 60 * 1000; // 14 minutes
    
    const refreshUserToken = async () => {
      await refreshToken();
    };
    
    const intervalId = setInterval(refreshUserToken, refreshInterval);
    
    return () => clearInterval(intervalId);
  }, []);

  // Check for user on initial load
  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const userData = await getCurrentUser();
        
        if (userData) {
          setUser(userData);
          setAccountType(userData.accountType);
          console.log('User loaded:', userData.email, userData.accountType);
        } else {
          setUser(null);
          setAccountType(null);
        }
      } catch (error) {
        console.error('Error loading user:', error);
        setUser(null);
        setAccountType(null);
      } finally {
        setLoading(false);
      }
    };
    
    loadUser();
  }, []);

  const handleSignUp = async (email: string, password: string, accountType: 'individual' | 'company', companyName?: string) => {
    try {
      console.log('Signing up:', email, accountType);
      const response = await signUp({ 
        email, 
        password,
        firstName: '',
        lastName: '',
        accountType,
        companyName
      });
      
      setUser(response.user);
      setAccountType(response.user.accountType);
      
      toast({
        title: "Sign up successful!",
        description: "Your account has been created.",
      });
    } catch (error) {
      console.error('Sign up error:', error);
      toast({
        variant: "destructive",
        title: "Error signing up",
        description: error instanceof Error ? error.message : "An error occurred",
      });
      throw error;
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    try {
      console.log('Signing in:', email);
      const response = await signIn({ email, password });
      
      setUser(response.user);
      setAccountType(response.user.accountType);
      
      toast({
        title: "Welcome back!",
        description: "Successfully signed in.",
      });
    } catch (error) {
      console.error('Sign in error:', error);
      toast({
        variant: "destructive",
        title: "Error signing in",
        description: error instanceof Error ? error.message : "An error occurred",
      });
      throw error;
    }
  };

  const handleSignOut = async () => {
    try {
      console.log('Signing out');
      await signOut();
      
      setUser(null);
      setAccountType(null);
      
      toast({
        title: "Signed out",
        description: "Successfully signed out.",
      });
    } catch (error) {
      console.error('Sign out error:', error);
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: error instanceof Error ? error.message : "An error occurred",
      });
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      signUp: handleSignUp, 
      signIn: handleSignIn, 
      signOut: handleSignOut, 
      loading,
      accountType
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
