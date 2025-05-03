
import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

// Define routes where the footer should be displayed (landing pages)
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

const FooterWrapper = () => {
  const location = useLocation();
  
  // Check if current path is in the landing routes array
  const shouldShowFooter = landingRoutes.includes(location.pathname);
  
  if (!shouldShowFooter) {
    return null;
  }
  
  return <Footer />;
};

export default FooterWrapper;
