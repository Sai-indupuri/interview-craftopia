
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getUserAssessmentAttempts,
  getAssessmentAttempt,
  createAssessmentAttempt,
  updateAssessmentAttempt,
  deleteAssessmentAttempt
} from "@/lib/api/assessments";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

type AssessmentAttempt = {
  id: string;
  userId: string;
  categoryId: string;
  assessmentTitle: string;
  score?: number;
  answers?: any;
  startTime: string;
  endTime?: string;
  createdAt: string;
};

type AssessmentAttemptInput = Omit<AssessmentAttempt, "id" | "createdAt">;

export function useAssessmentAttempts() {
  return useQuery({
    queryKey: ["assessmentAttempts"],
    queryFn: getUserAssessmentAttempts
  });
}

export function useAssessmentAttempt(id: string | undefined) {
  return useQuery({
    queryKey: ["assessmentAttempt", id],
    queryFn: () => (id ? getAssessmentAttempt(id) : null),
    enabled: !!id
  });
}

export function useCreateAssessmentAttempt() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: (data: Omit<AssessmentAttemptInput, "userId">) => 
      createAssessmentAttempt({
        ...data,
        userId: user?.id || '',
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["assessmentAttempts"] });
      toast({
        title: "Assessment started",
        description: "Your assessment has been started successfully."
      });
    }
  });
}

export function useUpdateAssessmentAttempt() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<AssessmentAttempt> }) => 
      updateAssessmentAttempt(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["assessmentAttempts"] });
      queryClient.invalidateQueries({ queryKey: ["assessmentAttempt", data.id] });
      toast({
        title: "Assessment updated",
        description: "Your assessment has been updated successfully."
      });
    }
  });
}

export function useDeleteAssessmentAttempt() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteAssessmentAttempt(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["assessmentAttempts"] });
      toast({
        title: "Assessment deleted",
        description: "Your assessment has been deleted successfully."
      });
    }
  });
}
