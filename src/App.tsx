
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
            <Route path="/mock-interviews" element={<MockInterviews />} />
            <Route path="/coding-practice" element={<CodingPractice />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/assessment/:categoryId/:assessmentTitle" element={<AssessmentView />} />
            <Route path="/assessment-results/:categoryId/:assessmentTitle" element={<AssessmentResults />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/support" element={<Support />} />
            <Route path="/custom-assessments" element={<CustomAssessments />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/company-dashboard" element={<CompanyDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
