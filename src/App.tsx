
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MockInterviews from "./pages/MockInterviews";
import CodingPractice from "./pages/CodingPractice";
import Assessments from "./pages/Assessments";
import AssessmentView from "./pages/AssessmentView";
import AssessmentResults from "./pages/AssessmentResults";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import CustomAssessments from "./pages/CustomAssessments";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import { AuthProvider } from "@/contexts/AuthContext";
import { RequireAuth } from "@/components/auth/RequireAuth";
import CompanyProfile from "./pages/CompanyProfile";
import CompanyDashboard from "./pages/CompanyDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route 
              path="/mock-interviews" 
              element={
                <RequireAuth>
                  <MockInterviews />
                </RequireAuth>
              } 
            />
            <Route 
              path="/coding-practice" 
              element={
                <RequireAuth>
                  <CodingPractice />
                </RequireAuth>
              } 
            />
            <Route 
              path="/assessments" 
              element={
                <RequireAuth>
                  <Assessments />
                </RequireAuth>
              } 
            />
            <Route 
              path="/assessment/:categoryId/:assessmentTitle" 
              element={
                <RequireAuth>
                  <AssessmentView />
                </RequireAuth>
              } 
            />
            <Route 
              path="/assessment-results/:categoryId/:assessmentTitle" 
              element={
                <RequireAuth>
                  <AssessmentResults />
                </RequireAuth>
              } 
            />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/profile" 
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              } 
            />
            <Route path="/support" element={<Support />} />
            <Route 
              path="/custom-assessments" 
              element={
                <RequireAuth>
                  <CustomAssessments />
                </RequireAuth>
              } 
            />
            {/* Company routes */}
            <Route 
              path="/company-profile" 
              element={
                <RequireAuth>
                  <CompanyProfile />
                </RequireAuth>
              } 
            />
            <Route 
              path="/company-dashboard" 
              element={
                <RequireAuth>
                  <CompanyDashboard />
                </RequireAuth>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
