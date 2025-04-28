
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ClipboardCheck, Users, FileText, Settings, PieChart, ArrowRight } from 'lucide-react';
import { useCompanyProfile } from '@/hooks/use-company-profile';

const CompanyDashboard = () => {
  const { data: profile } = useCompanyProfile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="gradient-text">Company Dashboard</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Manage your assessment programs and interview processes
              </p>
            </div>
            <div>
              <Link to="/company-profile">
                <Button variant="outline">
                  <Settings size={16} className="mr-2" /> Company Settings
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Assessment Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+1 from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+4 from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Candidates Evaluated</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87</div>
                <p className="text-xs text-muted-foreground">+23 from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Average Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">76%</div>
                <p className="text-xs text-muted-foreground">+2% from last month</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Assessment Programs</CardTitle>
                  <CardDescription>
                    Custom assessment programs created for your company
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold mb-1">Frontend Developer Assessment</h3>
                          <p className="text-sm text-muted-foreground">Created 2 weeks ago · Active</p>
                        </div>
                        <Link to="/custom-assessments">
                          <Button variant="ghost" size="icon">
                            <ArrowRight size={16} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold mb-1">Product Manager Assessment</h3>
                          <p className="text-sm text-muted-foreground">Created 1 month ago · Active</p>
                        </div>
                        <Link to="/custom-assessments">
                          <Button variant="ghost" size="icon">
                            <ArrowRight size={16} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold mb-1">UX Designer Assessment</h3>
                          <p className="text-sm text-muted-foreground">Created 3 days ago · Draft</p>
                        </div>
                        <Link to="/custom-assessments">
                          <Button variant="ghost" size="icon">
                            <ArrowRight size={16} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Link to="/custom-assessments">
                        <Button>
                          Create New Assessment Program
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link to="/custom-assessments">
                      <Button variant="outline" className="w-full justify-start">
                        <ClipboardCheck size={16} className="mr-2" /> 
                        Create Assessment Program
                      </Button>
                    </Link>
                    <Link to="/interview-programs">
                      <Button variant="outline" className="w-full justify-start">
                        <Users size={16} className="mr-2" /> 
                        Schedule Interviews
                      </Button>
                    </Link>
                    <Link to="/company-dashboard/reports">
                      <Button variant="outline" className="w-full justify-start">
                        <PieChart size={16} className="mr-2" /> 
                        View Reports
                      </Button>
                    </Link>
                    <Link to="/company-dashboard/templates">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText size={16} className="mr-2" /> 
                        Assessment Templates
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Company Info</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Company Name</p>
                        <p>{profile?.companyName || "Your Company"}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Industry</p>
                        <p>{profile?.industry || "Not specified"}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Location</p>
                        <p>{profile?.location || "Not specified"}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyDashboard;
