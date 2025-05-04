
import { backend } from "./backendClient";

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

export async function createAssessmentAttempt(attempt: Omit<AssessmentAttempt, "id" | "createdAt">) {
  return backend.post<AssessmentAttempt>('assessments/attempts', attempt);
}

export async function getUserAssessmentAttempts() {
  return backend.get<AssessmentAttempt[]>('assessments/attempts');
}

export async function getAssessmentAttempt(id: string) {
  return backend.get<AssessmentAttempt>(`assessments/attempts/${id}`);
}

export async function updateAssessmentAttempt(id: string, updates: Partial<AssessmentAttempt>) {
  return backend.put<AssessmentAttempt>(`assessments/attempts/${id}`, updates);
}

export async function deleteAssessmentAttempt(id: string) {
  return backend.delete<void>(`assessments/attempts/${id}`);
}
