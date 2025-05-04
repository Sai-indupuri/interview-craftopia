
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getUserMockInterviews,
  getMockInterview,
  createMockInterview,
  updateMockInterview,
  deleteMockInterview,
  submitInterviewFeedback
} from "@/lib/api/mock-interviews";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

type MockInterview = {
  id: string;
  userId: string;
  title: string;
  mode: string;
  duration: string;
  domain: string;
  interviewType: string;
  date: string;
  jobDescription?: string;
  resumeData?: string;
  status: string;
  score?: number;
  feedback?: any;
  createdAt: string;
  updatedAt: string;
};

type MockInterviewInput = Omit<MockInterview, "id" | "createdAt" | "updatedAt" | "userId">;

export function useMockInterviews() {
  return useQuery({
    queryKey: ["mockInterviews"],
    queryFn: getUserMockInterviews
  });
}

export function useMockInterview(id: string | undefined) {
  return useQuery({
    queryKey: ["mockInterview", id],
    queryFn: () => (id ? getMockInterview(id) : null),
    enabled: !!id
  });
}

export function useCreateMockInterview() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: (data: MockInterviewInput) => 
      createMockInterview({
        ...data,
        userId: user?.id || '',
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mockInterviews"] });
      toast({
        title: "Interview scheduled",
        description: "Your mock interview has been scheduled successfully."
      });
    }
  });
}

export function useUpdateMockInterview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<MockInterview> }) => 
      updateMockInterview(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["mockInterviews"] });
      queryClient.invalidateQueries({ queryKey: ["mockInterview", data.id] });
      toast({
        title: "Interview updated",
        description: "Your mock interview has been updated successfully."
      });
    }
  });
}

export function useDeleteMockInterview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteMockInterview(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mockInterviews"] });
      toast({
        title: "Interview deleted",
        description: "Your mock interview has been deleted successfully."
      });
    }
  });
}

export function useSubmitInterviewFeedback() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, feedback }: { id: string; feedback: any }) => 
      submitInterviewFeedback(id, feedback),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["mockInterviews"] });
      queryClient.invalidateQueries({ queryKey: ["mockInterview", data.id] });
      toast({
        title: "Feedback submitted",
        description: "Your interview feedback has been submitted successfully."
      });
    }
  });
}
