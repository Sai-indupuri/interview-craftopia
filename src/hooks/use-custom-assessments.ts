
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getUserCustomAssessments,
  getCustomAssessment,
  createCustomAssessmentRequest,
  updateCustomAssessment,
  deleteCustomAssessment
} from "@/lib/api/custom-assessments";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

type CustomAssessment = {
  id: string;
  userId: string;
  orgName: string;
  domain: string;
  description: string;
  features?: string[];
  contactEmail: string;
  contactPhone?: string;
  status?: string;
  deliveryDate?: string;
  createdAt: string;
  updatedAt: string;
};

type CustomAssessmentInput = Omit<CustomAssessment, "id" | "createdAt" | "updatedAt" | "userId">;

export function useCustomAssessments() {
  return useQuery({
    queryKey: ["customAssessments"],
    queryFn: getUserCustomAssessments
  });
}

export function useCustomAssessment(id: string | undefined) {
  return useQuery({
    queryKey: ["customAssessment", id],
    queryFn: () => (id ? getCustomAssessment(id) : null),
    enabled: !!id
  });
}

export function useCreateCustomAssessment() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: (data: CustomAssessmentInput) => 
      createCustomAssessmentRequest({
        ...data,
        userId: user?.id || '',
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customAssessments"] });
      toast({
        title: "Request submitted",
        description: "Your custom assessment request has been submitted successfully."
      });
    }
  });
}

export function useUpdateCustomAssessment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<CustomAssessment> }) => 
      updateCustomAssessment(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["customAssessments"] });
      queryClient.invalidateQueries({ queryKey: ["customAssessment", data.id] });
      toast({
        title: "Request updated",
        description: "Your custom assessment request has been updated successfully."
      });
    }
  });
}

export function useDeleteCustomAssessment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCustomAssessment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customAssessments"] });
      toast({
        title: "Request deleted",
        description: "Your custom assessment request has been deleted successfully."
      });
    }
  });
}
