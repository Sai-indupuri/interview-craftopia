
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";

type MockInterview = Database["public"]["Tables"]["mock_interviews"]["Row"];
type MockInterviewInsert = Database["public"]["Tables"]["mock_interviews"]["Insert"];

export async function createMockInterview(interview: Omit<MockInterviewInsert, "id" | "created_at" | "updated_at">) {
  const { data, error } = await supabase
    .from('mock_interviews')
    .insert(interview)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getUserMockInterviews() {
  const { data, error } = await supabase
    .from('mock_interviews')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function updateMockInterview(id: string, updates: Partial<MockInterview>) {
  const { data, error } = await supabase
    .from('mock_interviews')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteMockInterview(id: string) {
  const { error } = await supabase
    .from('mock_interviews')
    .delete()
    .eq('id', id);

  if (error) throw error;
}
