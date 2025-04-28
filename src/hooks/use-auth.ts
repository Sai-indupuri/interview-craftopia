
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn, signUp, signOut, getCurrentUser } from "@/lib/api/auth";
import { toast } from "@/hooks/use-toast";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    retry: false
  });
}

export function useSignIn() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      toast({
        title: "Sign in successful",
        description: "You have been signed in successfully."
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Sign in failed",
        description: error.message || "There was an error signing in. Please try again.",
        variant: "destructive"
      });
    }
  });
}

export function useSignUp() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      toast({
        title: "Sign up successful",
        description: "Your account has been created successfully."
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Sign up failed",
        description: error.message || "There was an error creating your account. Please try again.",
        variant: "destructive"
      });
    }
  });
}

export function useSignOut() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast({
        title: "Sign out successful",
        description: "You have been signed out successfully."
      });
    }
  });
}

export function useIsCompany() {
  const { data: user } = useCurrentUser();
  return user?.accountType === 'company';
}

export function useIsIndividual() {
  const { data: user } = useCurrentUser();
  return user?.accountType === 'individual';
}
