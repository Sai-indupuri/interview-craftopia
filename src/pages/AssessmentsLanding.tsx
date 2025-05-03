
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ClipboardCheck, BarChart4, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

const AssessmentsLanding = () => {
  const assessmentDomains = [
    { 
      id: 'tech', 
      name: "Software Engineering", 
      description: "Data structures, algorithms, system design, and more",
      icon: "💻",
      assessmentCount: 42,
      popularity: 95
    },
    { 
      id: 'data', 
      name: "Data Science", 
      description: "Statistics, machine learning, data analysis, and visualization",
      icon: "📊",
      assessmentCount: 38,
      popularity: 90
    },
    { 
      id: 'prod', 
      name: "Product Management", 
      description: "Product strategy, roadmapping, user research, and metrics",
      icon: "🚀",
      assessmentCount: 24,
      popularity: 82
    },
    { 
      id: 'design', 
      name: "UX/UI Design", 
      description: "User experience, interface design, prototyping, and usability",
      icon: "🎨",
      assessmentCount: 18,
      popularity: 78
    },
  ];

  const featuredAssessments = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      domain: "Software Engineering",
      questions: 45,
      timeEstimate: "60 min",
      mcqPercentage: 70,
      descriptivePercentage: 30,
      popularity: 98
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      domain: "Data Science",
      questions: 35,
      timeEstimate: "45 min",
      mcqPercentage: 60,
      descriptivePercentage: 40,
      popularity: 92
    },
    {
      id: 3,
      title: "System Design & Architecture",
      domain: "Software Engineering",
      questions: 25,
      timeEstimate: "90 min",
      mcqPercentage: 40,
      descriptivePercentage: 60,
      popularity: 96
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-interview-blue to-interview-purple py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Prepare for Success with Tailored Assessments
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Access domain-specific assessments with a mix of multiple-choice and 
                descriptive questions, including previous years' papers to benchmark your skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/assessments">
                  <Button size="lg" className="bg-white text-interview-purple hover:bg-white/90">
                    Browse Assessments
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  View Demo Assessment
                </Button>
              </div>
            </div>
          </div>
          
          {/* Floating assessment preview */}
          <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-1/3">
            <div className="glass-card p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold">System Design Assessment</h3>
                  <div className="text-sm text-white/80">45 Questions • 60 Minutes</div>
                </div>
                <Badge className="bg-white/20">Advanced</Badge>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 p-3 rounded-md">
                  <p className="text-sm mb-2">Which of the following is NOT a benefit of microservices architecture?</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <div className="w-4 h-4 border border-white/50 rounded-full mr-2"></div>
                      <span>Independent scaling of services</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 border border-white/50 rounded-full mr-2"></div>
                      <span>Easier deployment and maintenance</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 border border-white/50 rounded-full mr-2"></div>
                      <span>Simplified database schema management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Core Features</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <ClipboardCheck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Domain-Specific Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Choose from various domains like Software Engineering, Data Science, 
                    Product Management, and more to match your career path.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 2 */}
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Customizable Question Mix</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Select from previous years' papers and set custom difficulty levels 
                    with a personalized mix of MCQs and descriptive questions.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 3 */}
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BarChart4 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">AI Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive comprehensive AI-generated reports with detailed feedback on 
                    strengths, weaknesses, and personalized improvement plans.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Assessment Domains */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="gradient-text">Assessment Domains</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Choose from a wide range of domains to assess and improve your skills
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {assessmentDomains.map(domain => (
                <Card key={domain.id} className="overflow-hidden hover:shadow-md transition-shadow border">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-4xl mb-2">{domain.icon}</div>
                        <h3 className="text-xl font-semibold mb-1">{domain.name}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{domain.description}</p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>{domain.assessmentCount} Assessments</span>
                          <span>•</span>
                          <span>Updated Weekly</span>
                        </div>
                      </div>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                        Popular
                      </Badge>
                    </div>
                    
                    <div className="mt-6">
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span>Popularity</span>
                        <span className="font-medium">{domain.popularity}%</span>
                      </div>
                      <Progress value={domain.popularity} className="h-2" />
                    </div>
                    
                    <div className="mt-6">
                      <Link to={`/assessments?domain=${domain.id}`}>
                        <Button className="w-full">Explore {domain.name}</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Assessments */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  <span className="gradient-text">Featured Assessments</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Popular assessments taken by thousands of professionals
                </p>
              </div>
              
              <Tabs defaultValue="all" className="w-full md:w-auto mt-4 md:mt-0">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="tech">Tech</TabsTrigger>
                  <TabsTrigger value="data">Data</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredAssessments.map(assessment => (
                <Card key={assessment.id} className="hover-scale">
                  <CardHeader>
                    <CardTitle>{assessment.title}</CardTitle>
                    <CardDescription>{assessment.domain}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span>{assessment.questions} Questions</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{assessment.timeEstimate}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6 space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Multiple Choice</span>
                          <span>{assessment.mcqPercentage}%</span>
                        </div>
                        <Progress value={assessment.mcqPercentage} className="h-1" />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Descriptive</span>
                          <span>{assessment.descriptivePercentage}%</span>
                        </div>
                        <Progress value={assessment.descriptivePercentage} className="h-1" />
                      </div>
                    </div>
                    
                    <Link to={`/assessment/tech/${assessment.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button className="w-full">Take Assessment</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/assessments">
                <Button variant="outline" size="lg">
                  View All Assessments
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* AI Evaluation Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="gradient-text">AI-Powered Evaluation</span>
                </h2>
                <p className="text-lg mb-8 text-muted-foreground">
                  After completing each assessment, our AI generates a detailed performance 
                  report with personalized feedback and improvement recommendations.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-full mt-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Comprehensive Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Detailed breakdown of your performance across different topics and question types.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-full mt-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Improvement Plan</h3>
                      <p className="text-sm text-muted-foreground">
                        Personalized study plan focusing on areas that need improvement.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-full mt-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium">Progress Tracking</h3>
                      <p className="text-sm text-muted-foreground">
                        Track your improvement over time with visual progress indicators.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link to="/assessments">
                  <Button className="bg-gradient-to-r from-interview-blue to-interview-purple text-white">
                    Experience AI Evaluation
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border">
                <div className="mb-6">
                  <Badge className="mb-4">Assessment Report</Badge>
                  <h3 className="text-xl font-bold mb-1">Full-Stack Development Assessment</h3>
                  <p className="text-sm text-muted-foreground">Completed on May 2, 2025</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-4">Performance Summary</h4>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <Card className="border-0 shadow-sm">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-primary">82%</div>
                        <p className="text-xs text-muted-foreground">Overall Score</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-0 shadow-sm">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-green-500">90%</div>
                        <p className="text-xs text-muted-foreground">MCQ Score</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-0 shadow-sm">
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-yellow-500">74%</div>
                        <p className="text-xs text-muted-foreground">Descriptive Score</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Topic Breakdown</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Frontend Development</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Backend Development</span>
                        <span className="font-medium">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Database Design</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>API Development</span>
                        <span className="font-medium">68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">AI Recommendations</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Based on your performance, we recommend focusing on:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline">API Development</Badge>
                    <Badge variant="outline">RESTful Services</Badge>
                    <Badge variant="outline">Authentication</Badge>
                  </div>
                  <Button size="sm" variant="outline" className="w-full mt-2">
                    View Full Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-interview-blue to-interview-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Test Your Skills?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Take your first assessment and get personalized feedback to improve your expertise.
            </p>
            <Link to="/assessments">
              <Button size="lg" className="bg-white text-interview-purple hover:bg-white/90">
                Browse Assessments
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AssessmentsLanding;
