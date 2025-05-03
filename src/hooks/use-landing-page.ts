
import { useLocation } from 'react-router-dom';

// Define routes that are landing/marketing pages
const landingRoutes = [
  '/',
  '/mock-interviews-landing',
  '/coding-practice-landing',
  '/assessments-landing',
  '/company-mock-interviews',
  '/company-custom-assessments',
  '/about',
  '/contact',
  '/privacy'
];

export const useLandingPage = () => {
  const location = useLocation();
  
  // Check if current path is in the landing routes array
  return landingRoutes.includes(location.pathname);
};
