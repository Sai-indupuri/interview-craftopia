
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCompanyProfile, updateCompanyProfile, uploadCompanyLogo } from "@/lib/api/profile";
import { toast } from "@/hooks/use-toast";

export function useCompanyProfile() {
  return useQuery({
    queryKey: ["companyProfile"],
    queryFn: getCompanyProfile
  });
}

export function useUpdateCompanyProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => updateCompanyProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companyProfile"] });
      toast({
        title: "Company profile updated",
        description: "Your company profile has been updated successfully."
      });
    }
  });
}

export function useUploadCompanyLogo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => uploadCompanyLogo(file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companyProfile"] });
      toast({
        title: "Logo uploaded",
        description: "Your company logo has been updated successfully."
      });
    }
  });
}
