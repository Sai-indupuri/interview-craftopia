
/**
 * API client for connecting to Django/FastAPI backend
 */

// Replace this with your actual backend API URL
const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL || "http://localhost:8000/api";

/**
 * Base API client to handle HTTP requests to the backend
 */
export async function backendClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {})
  };

  // Get the auth token from localStorage
  const token = localStorage.getItem("authToken");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    ...options,
    headers
  };

  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.message || `Error ${response.status}: ${response.statusText}`;
      
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}

export const backend = {
  get: <T>(endpoint: string) => 
    backendClient<T>(endpoint),
  
  post: <T>(endpoint: string, data: any) => 
    backendClient<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data)
    }),
  
  put: <T>(endpoint: string, data: any) => 
    backendClient<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data)
    }),
  
  patch: <T>(endpoint: string, data: any) => 
    backendClient<T>(endpoint, {
      method: "PATCH",
      body: JSON.stringify(data)
    }),
  
  delete: <T>(endpoint: string) => 
    backendClient<T>(endpoint, {
      method: "DELETE"
    })
};
