
import { backend } from "./backendClient";

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

export async function createMockInterview(interview: Omit<MockInterview, "id" | "createdAt" | "updatedAt">) {
  return backend.post<MockInterview>('interviews', interview);
}

export async function getUserMockInterviews() {
  return backend.get<MockInterview[]>('interviews');
}

export async function getMockInterview(id: string) {
  return backend.get<MockInterview>(`interviews/${id}`);
}

export async function updateMockInterview(id: string, updates: Partial<MockInterview>) {
  return backend.put<MockInterview>(`interviews/${id}`, updates);
}

export async function deleteMockInterview(id: string) {
  return backend.delete<void>(`interviews/${id}`);
}

export async function submitInterviewFeedback(id: string, feedback: any) {
  return backend.post<MockInterview>(`interviews/${id}/feedback`, { feedback });
}
