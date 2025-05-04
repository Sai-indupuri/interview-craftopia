
import { backend } from "./backendClient";

type Profile = {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  roleTitle?: string;
  aspiringRole?: string;
  education?: string;
  skills?: string;
  domain?: string;
  experience?: string;
  about?: string;
};

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
  return backend.get<Profile>('profiles/user');
}

export async function getCompanyProfile() {
  return backend.get<CompanyProfile>('profiles/company');
}

export async function updateUserProfile(updates: Partial<Profile>) {
  return backend.put<Profile>('profiles/user', updates);
}

export async function updateCompanyProfile(updates: Partial<CompanyProfile>) {
  return backend.put<CompanyProfile>('profiles/company', updates);
}

export async function uploadProfileImage(file: File) {
  const formData = new FormData();
  formData.append('image', file);
  
  const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL || "http://localhost:8000/api";
  
  return fetch(`${API_BASE_URL}/profiles/user/image`, {
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
  
  const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL || "http://localhost:8000/api";
  
  return fetch(`${API_BASE_URL}/profiles/company/logo`, {
    method: 'POST',
    body: formData,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
  }).then(res => res.json());
}
