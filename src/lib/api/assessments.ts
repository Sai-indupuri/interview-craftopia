
import { api } from "./apiClient";
import { Database } from "@/integrations/supabase/types";

type AssessmentAttempt = Database["public"]["Tables"]["assessment_attempts"]["Row"];
type AssessmentAttemptInsert = Database["public"]["Tables"]["assessment_attempts"]["Insert"];

export async function createAssessmentAttempt(attempt: Omit<AssessmentAttemptInsert, "id" | "created_at">) {
  return api.post<AssessmentAttempt>('assessments/attempts', attempt);
}

export async function getUserAssessmentAttempts() {
  return api.get<AssessmentAttempt[]>('assessments/attempts');
}

export async function getAssessmentAttempt(id: string) {
  return api.get<AssessmentAttempt>(`assessments/attempts/${id}`);
}

export async function updateAssessmentAttempt(id: string, updates: Partial<AssessmentAttempt>) {
  return api.put<AssessmentAttempt>(`assessments/attempts/${id}`, updates);
}

export async function deleteAssessmentAttempt(id: string) {
  return api.delete<void>(`assessments/attempts/${id}`);
}
