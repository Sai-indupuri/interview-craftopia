
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUserProfile, updateUserProfile, uploadProfileImage } from "@/lib/api/profile";
import { toast } from "@/hooks/use-toast";
import { Database } from "@/integrations/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export function useUserProfile() {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile
  });
}

export function useUpdateUserProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Profile>) => updateUserProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully."
      });
    }
  });
}

export function useUploadProfileImage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => uploadProfileImage(file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      toast({
        title: "Image uploaded",
        description: "Your profile image has been updated successfully."
      });
    }
  });
}
