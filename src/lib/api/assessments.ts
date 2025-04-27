
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";

type AssessmentAttempt = Database["public"]["Tables"]["assessment_attempts"]["Row"];
type AssessmentAttemptInsert = Database["public"]["Tables"]["assessment_attempts"]["Insert"];

export async function createAssessmentAttempt(attempt: Omit<AssessmentAttemptInsert, "id" | "created_at">) {
  const { data, error } = await supabase
    .from('assessment_attempts')
    .insert(attempt)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getUserAssessmentAttempts() {
  const { data, error } = await supabase
    .from('assessment_attempts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function updateAssessmentAttempt(id: string, updates: Partial<AssessmentAttempt>) {
  const { data, error } = await supabase
    .from('assessment_attempts')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}
