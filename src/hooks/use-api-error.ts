
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

export const useApiError = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleError = (error: any, options?: { 
    redirect?: string;
    fallbackMessage?: string;
    showToast?: boolean;
  }) => {
    const {
      redirect,
      fallbackMessage = "An unexpected error occurred. Please try again.",
      showToast = true
    } = options || {};
    
    // Get error message
    const errorMessage = error?.message || fallbackMessage;
    
    // Check if it's an authentication error
    const isAuthError = error?.status === 401 || error?.response?.status === 401;
    
    if (isAuthError) {
      // Clear token
      localStorage.removeItem("authToken");
      
      // Show toast
      toast({
        title: "Authentication Error",
        description: "Your session has expired. Please sign in again.",
        variant: "destructive",
      });
      
      // Redirect to login
      navigate("/auth", { state: { from: window.location.pathname } });
      return;
    }
    
    // Show error toast if enabled
    if (showToast) {
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
    
    // Redirect if specified
    if (redirect) {
      navigate(redirect);
    }
    
    return errorMessage;
  };
  
  return { handleError };
};
