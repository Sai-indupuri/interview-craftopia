
import { backend } from "./backendClient";

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

// For regular custom assessment requests
export async function createCustomAssessmentRequest(request: Omit<CustomAssessment, "id" | "createdAt" | "updatedAt">) {
  return backend.post<CustomAssessment>('custom-assessments', request);
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
  return backend.post<CompanyAssessmentProgram>('company/assessment-programs', program);
}

export async function getCompanyAssessmentPrograms() {
  return backend.get<CompanyAssessmentProgram[]>('company/assessment-programs');
}

export async function getCompanyAssessmentProgram(id: string) {
  return backend.get<CompanyAssessmentProgram>(`company/assessment-programs/${id}`);
}

export async function updateCompanyAssessmentProgram(id: string, updates: Partial<CompanyAssessmentProgram>) {
  return backend.put<CompanyAssessmentProgram>(`company/assessment-programs/${id}`, updates);
}

export async function deleteCompanyAssessmentProgram(id: string) {
  return backend.delete<void>(`company/assessment-programs/${id}`);
}

// The original custom assessment functions
export async function getUserCustomAssessments() {
  return backend.get<CustomAssessment[]>('custom-assessments');
}

export async function getCustomAssessment(id: string) {
  return backend.get<CustomAssessment>(`custom-assessments/${id}`);
}

export async function updateCustomAssessment(id: string, updates: Partial<CustomAssessment>) {
  return backend.put<CustomAssessment>(`custom-assessments/${id}`, updates);
}

export async function deleteCustomAssessment(id: string) {
  return backend.delete<void>(`custom-assessments/${id}`);
}
