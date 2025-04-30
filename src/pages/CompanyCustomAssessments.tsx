
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, ClipboardCheck, BarChart4, Users, Layers } from 'lucide-react';

const CompanyCustomAssessments = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Create Custom Assessments for Your Team
              </h1>
              <p className="text-xl mb-8">
                Tailor assessments to suit your hiring process and test the skills that matter most to your organization.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/company-dashboard">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                    Request a Demo
                  </Button>
                </Link>
                <Link to="/custom-assessments">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-indigo-700">
                    Start Creating Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Evaluate Candidates with Precision</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform allows you to create custom assessments tailored to your company's specific needs. 
                Evaluate candidates based on the exact skills and knowledge required for the role, 
                ensuring you make informed hiring decisions.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're hiring for technical roles, management positions, or specialized industry positions,
                our flexible assessment creation tools give you the power to design tests that truly measure what matters.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="bg-indigo-100 dark:bg-indigo-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Customizable Assessments</h3>
                  <p className="text-muted-foreground">
                    Build assessments from scratch or choose from our library of pre-built questions. 
                    Modify to match your specific requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <BarChart4 className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
                  <p className="text-muted-foreground">
                    Track candidate performance with comprehensive analytics. Compare results and make 
                    data-driven hiring decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <ClipboardCheck className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Multiple Question Formats</h3>
                  <p className="text-muted-foreground">
                    Support for various question types including multiple choice, coding challenges, 
                    and scenario-based questions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Scalability</h3>
                  <p className="text-muted-foreground">
                    Create assessments for teams of any size, whether you're hiring for a few positions 
                    or scaling up your organization.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="bg-amber-100 dark:bg-amber-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Integration Options</h3>
                  <p className="text-muted-foreground">
                    Seamlessly integrate with popular hiring platforms and applicant tracking systems (ATS)
                    to streamline your recruitment workflow.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="bg-red-100 dark:bg-red-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-red-600 dark:text-red-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                  <p className="text-muted-foreground">
                    Enable multiple team members to collaborate on assessment creation and review candidate results together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Benefits for Your Business</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 dark:text-indigo-300 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Save Time in the Hiring Process</h3>
                    <p className="text-muted-foreground">
                      Streamline candidate screening with automated assessments that quickly identify top talent, 
                      reducing the time spent on initial interviews.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 dark:text-indigo-300 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Improve Hiring Quality</h3>
                    <p className="text-muted-foreground">
                      Make more informed hiring decisions based on objective data rather than subjective impressions, 
                      leading to better matches for your team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 dark:text-indigo-300 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reduce Hiring Costs</h3>
                    <p className="text-muted-foreground">
                      Identify mismatches early in the process, reducing turnover and the costs associated 
                      with making poor hiring decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 dark:text-indigo-300 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ensure Unbiased Evaluations</h3>
                    <p className="text-muted-foreground">
                      Standardize the assessment process to provide a fair and consistent evaluation of all candidates, 
                      helping to eliminate unconscious bias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 text-4xl text-indigo-500">❝</div>
                  <p className="mb-6 italic">
                    "The custom assessments allowed us to precisely evaluate the skills we needed most. 
                    It transformed our hiring process and helped us find candidates who truly fit our requirements."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full text-white flex items-center justify-center">
                      JS
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">Jennifer Smith</p>
                      <p className="text-sm text-muted-foreground">HR Director, TechGlobe Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 text-4xl text-indigo-500">❝</div>
                  <p className="mb-6 italic">
                    "We reduced our hiring time by 40% using these custom assessments. The quality of candidates 
                    reaching the interview stage has improved dramatically."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full text-white flex items-center justify-center">
                      MC
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">Michael Chen</p>
                      <p className="text-sm text-muted-foreground">Talent Acquisition Lead, FinServe Partners</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 text-4xl text-indigo-500">❝</div>
                  <p className="mb-6 italic">
                    "The analytics provided with each assessment helped us make data-driven hiring decisions. 
                    We could clearly see which candidates had the specific skills we were looking for."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full text-white flex items-center justify-center">
                      PS
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">Priya Sharma</p>
                      <p className="text-sm text-muted-foreground">CEO, HealthTech Solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg font-semibold mb-4">Trusted by leading organizations</p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800">
                  TechGlobe Inc.
                </div>
                <div className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800">
                  FinServe Partners
                </div>
                <div className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800">
                  HealthTech Solutions
                </div>
                <div className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800">
                  Global Education Alliance
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring Process?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start creating custom assessments today and find the perfect candidates for your team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/company-dashboard">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Request a Demo
                </Button>
              </Link>
              <Link to="/custom-assessments">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-indigo-700">
                  Start Creating Assessments
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyCustomAssessments;
