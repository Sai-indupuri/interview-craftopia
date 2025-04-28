
import { api } from "./apiClient";
import { Database } from "@/integrations/supabase/types";

type CustomAssessment = Database["public"]["Tables"]["custom_assessment_requests"]["Row"];
type CustomAssessmentInsert = Database["public"]["Tables"]["custom_assessment_requests"]["Insert"];

export async function createCustomAssessmentRequest(request: Omit<CustomAssessmentInsert, "id" | "created_at" | "updated_at">) {
  return api.post<CustomAssessment>('custom-assessments', request);
}

export async function getUserCustomAssessments() {
  return api.get<CustomAssessment[]>('custom-assessments');
}

export async function getCustomAssessment(id: string) {
  return api.get<CustomAssessment>(`custom-assessments/${id}`);
}

export async function updateCustomAssessment(id: string, updates: Partial<CustomAssessment>) {
  return api.put<CustomAssessment>(`custom-assessments/${id}`, updates);
}

export async function deleteCustomAssessment(id: string) {
  return api.delete<void>(`custom-assessments/${id}`);
}
