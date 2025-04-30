
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Video, MessageSquare, ClipboardCheck, Users, Settings } from 'lucide-react';

const CompanyMockInterviews = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Prepare Your Candidates with Mock Interviews
              </h1>
              <p className="text-xl mb-8">
                Give candidates the experience they need with realistic mock interviews to help them succeed.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/company-dashboard">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Schedule a Demo
                  </Button>
                </Link>
                <Link to="/mock-interviews">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                    Start Conducting Interviews
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
              <h2 className="text-3xl font-bold mb-6">Enhance Your Recruitment Process</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform allows you to offer realistic mock interviews to your candidates, 
                helping them prepare effectively and perform better during actual interviews.
              </p>
              <p className="text-lg text-muted-foreground">
                By providing candidates with mock interview opportunities, you not only improve their 
                performance but also reduce the risk of failure during the actual interview process, 
                saving time and resources for your organization.
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
                  <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Video className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Realistic Simulations</h3>
                  <p className="text-muted-foreground">
                    Create lifelike interview scenarios that replicate real-world interviews, 
                    including technical and behavioral questions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="bg-indigo-100 dark:bg-indigo-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Role-Specific Interviews</h3>
                  <p className="text-muted-foreground">
                    Customize mock interviews to match specific roles, industries, or skill sets required 
                    for different positions in your organization.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <ClipboardCheck className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Detailed Feedback</h3>
                  <p className="text-muted-foreground">
                    Provide candidates with comprehensive feedback after each mock interview, 
                    helping them understand their strengths and areas for improvement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Scalable for Teams</h3>
                  <p className="text-muted-foreground">
                    Set up mock interviews for individual candidates or entire teams, making it easy to 
                    scale your interview preparation process.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="bg-amber-100 dark:bg-amber-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Customizable Questions</h3>
                  <p className="text-muted-foreground">
                    Create a bank of custom interview questions that align with your company's values, 
                    culture, and specific job requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="bg-red-100 dark:bg-red-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Video className="h-6 w-6 text-red-600 dark:text-red-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Multiple Interview Modes</h3>
                  <p className="text-muted-foreground">
                    Support for both video and text-based mock interviews, allowing candidates to practice 
                    in different formats based on their preferences.
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
                  <div className="bg-blue-100 dark:bg-blue-900 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 dark:text-blue-300 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Improved Candidate Performance</h3>
                    <p className="text-muted-foreground">
                      Candidates who practice through mock interviews typically perform better in actual interviews, 
                      leading to more accurate assessments of their abilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 dark:text-blue-300 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reduced Hiring Risks</h3>
                    <p className="text-muted-foreground">
                      By preparing candidates thoroughly, you reduce the likelihood of poor performance due to 
                      nervousness or lack of preparation, leading to better hiring decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 dark:text-blue-300 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enhanced Candidate Experience</h3>
                    <p className="text-muted-foreground">
                      Offering mock interviews shows candidates that you are invested in their success, 
                      improving their experience and perception of your company.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 dark:text-blue-300 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Time Efficiency</h3>
                    <p className="text-muted-foreground">
                      Well-prepared candidates lead to more productive and efficient actual interviews, 
                      saving valuable time for your hiring managers and interview panels.
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
                  <div className="mb-4 text-4xl text-blue-500">❝</div>
                  <p className="mb-6 italic">
                    "The mock interview platform helped our candidates come to interviews more prepared and confident. 
                    We've seen a significant improvement in the quality of our actual interviews."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full text-white flex items-center justify-center">
                      RL
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">Robert Lee</p>
                      <p className="text-sm text-muted-foreground">Head of Talent, Innovate Solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 text-4xl text-blue-500">❝</div>
                  <p className="mb-6 italic">
                    "Our interview process is quite rigorous, but the mock interviews helped candidates understand 
                    what to expect and how to prepare. It's been a game-changer for our recruitment."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full text-white flex items-center justify-center">
                      AJ
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">Anita Johnson</p>
                      <p className="text-sm text-muted-foreground">Recruitment Manager, DataTech Corp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 text-4xl text-blue-500">❝</div>
                  <p className="mb-6 italic">
                    "We've received overwhelmingly positive feedback from candidates about the mock interview option. 
                    They appreciate the opportunity to practice and improve before the real thing."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full text-white flex items-center justify-center">
                      DM
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">David Martinez</p>
                      <p className="text-sm text-muted-foreground">HR Director, Global Finance Group</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg font-semibold mb-4">Trusted by leading organizations</p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800">
                  Innovate Solutions
                </div>
                <div className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800">
                  DataTech Corp
                </div>
                <div className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800">
                  Global Finance Group
                </div>
                <div className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800">
                  Edge Systems Inc.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Interview Process?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start conducting mock interviews today and help your candidates succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/company-dashboard">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Schedule a Demo
                </Button>
              </Link>
              <Link to="/mock-interviews">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  Start Conducting Interviews
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

export default CompanyMockInterviews;
