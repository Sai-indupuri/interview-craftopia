
import { api } from "./apiClient";
import { Database } from "@/integrations/supabase/types";

type MockInterview = Database["public"]["Tables"]["mock_interviews"]["Row"];
type MockInterviewInsert = Database["public"]["Tables"]["mock_interviews"]["Insert"];

export async function createMockInterview(interview: Omit<MockInterviewInsert, "id" | "created_at" | "updated_at">) {
  return api.post<MockInterview>('interviews', interview);
}

export async function getUserMockInterviews() {
  return api.get<MockInterview[]>('interviews');
}

export async function getMockInterview(id: string) {
  return api.get<MockInterview>(`interviews/${id}`);
}

export async function updateMockInterview(id: string, updates: Partial<MockInterview>) {
  return api.put<MockInterview>(`interviews/${id}`, updates);
}

export async function deleteMockInterview(id: string) {
  return api.delete<void>(`interviews/${id}`);
}

export async function submitInterviewFeedback(id: string, feedback: any) {
  return api.post<MockInterview>(`interviews/${id}/feedback`, { feedback });
}
