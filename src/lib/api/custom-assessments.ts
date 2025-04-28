
import { api } from "./apiClient";
import { Database } from "@/integrations/supabase/types";

type CustomAssessment = Database["public"]["Tables"]["custom_assessment_requests"]["Row"];
type CustomAssessmentInsert = Database["public"]["Tables"]["custom_assessment_requests"]["Insert"];

// For regular custom assessment requests
export async function createCustomAssessmentRequest(request: Omit<CustomAssessmentInsert, "id" | "created_at" | "updated_at">) {
  return api.post<CustomAssessment>('custom-assessments', request);
}

// For company-specific assessment programs
export interface CompanyAssessmentProgram {
  id: string;
  companyId: string;
  name: string;
  description: string;
  industry: string;
  skillsAssessed: string[];
  difficultyLevel: string;
  estimatedDuration: number;
  status: 'draft' | 'active' | 'archived';
  createdAt: string;
  updatedAt: string;
}

export async function createCompanyAssessmentProgram(program: Omit<CompanyAssessmentProgram, "id" | "createdAt" | "updatedAt">) {
  return api.post<CompanyAssessmentProgram>('company/assessment-programs', program);
}

export async function getCompanyAssessmentPrograms() {
  return api.get<CompanyAssessmentProgram[]>('company/assessment-programs');
}

export async function getCompanyAssessmentProgram(id: string) {
  return api.get<CompanyAssessmentProgram>(`company/assessment-programs/${id}`);
}

export async function updateCompanyAssessmentProgram(id: string, updates: Partial<CompanyAssessmentProgram>) {
  return api.put<CompanyAssessmentProgram>(`company/assessment-programs/${id}`, updates);
}

export async function deleteCompanyAssessmentProgram(id: string) {
  return api.delete<void>(`company/assessment-programs/${id}`);
}

// The original custom assessment functions
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
