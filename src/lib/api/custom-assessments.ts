
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";

type CustomAssessment = Database["public"]["Tables"]["custom_assessment_requests"]["Row"];
type CustomAssessmentInsert = Database["public"]["Tables"]["custom_assessment_requests"]["Insert"];

export async function createCustomAssessmentRequest(request: Omit<CustomAssessmentInsert, "id" | "created_at" | "updated_at">) {
  const { data, error } = await supabase
    .from('custom_assessment_requests')
    .insert(request)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getUserCustomAssessments() {
  const { data, error } = await supabase
    .from('custom_assessment_requests')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function updateCustomAssessment(id: string, updates: Partial<CustomAssessment>) {
  const { data, error } = await supabase
    .from('custom_assessment_requests')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}
