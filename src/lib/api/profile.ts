
import { api } from "./apiClient";
import { Database } from "@/integrations/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export async function getUserProfile() {
  return api.get<Profile>('profile');
}

export async function updateUserProfile(updates: Partial<Profile>) {
  return api.put<Profile>('profile', updates);
}

export async function uploadProfileImage(file: File) {
  const formData = new FormData();
  formData.append('image', file);
  
  return fetch(`${import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api"}/profile/image`, {
    method: 'POST',
    body: formData,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
  }).then(res => res.json());
}
