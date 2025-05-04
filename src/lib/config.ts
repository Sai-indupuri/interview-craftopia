
/**
 * Environment configuration for the application
 */
export const config = {
  // API endpoint configuration
  api: {
    baseUrl: import.meta.env.VITE_BACKEND_API_URL || "http://localhost:8000/api",
  },
  
  // Authentication configuration
  auth: {
    tokenName: "authToken",
    refreshInterval: 14 * 60 * 1000, // 14 minutes
  },
  
  // Feature flags
  features: {
    enableMockInterviews: true,
    enableAssessments: true,
    enableCodingPractice: true,
    enableCustomAssessments: true,
  }
};
