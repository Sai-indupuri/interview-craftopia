
import { api } from "./apiClient";
import { Database } from "@/integrations/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];
type CompanyProfile = {
  id: string;
  companyName: string;
  industry: string;
  size: string;
  location: string;
  about: string;
  website: string;
  contactEmail: string;
  contactPhone: string;
  logo?: string;
};

export async function getUserProfile() {
  return api.get<Profile>('profile');
}

export async function getCompanyProfile() {
  return api.get<CompanyProfile>('company-profile');
}

export async function updateUserProfile(updates: Partial<Profile>) {
  return api.put<Profile>('profile', updates);
}

export async function updateCompanyProfile(updates: Partial<CompanyProfile>) {
  return api.put<CompanyProfile>('company-profile', updates);
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

export async function uploadCompanyLogo(file: File) {
  const formData = new FormData();
  formData.append('logo', file);
  
  return fetch(`${import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api"}/company-profile/logo`, {
    method: 'POST',
    body: formData,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
  }).then(res => res.json());
}
