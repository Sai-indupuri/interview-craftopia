import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { CheckCircle, Video, MessageSquare, Upload, Clock, Calendar, Search, Code, BarChart4 } from 'lucide-react';

const MockInterviewsLanding = () => {
  const interviewTypes = [
    {
      id: 'technical',
      title: 'Technical Interviews',
      description: 'Practice coding, system design, and technical concepts',
      icon: <Code className="h-10 w-10 text-primary" />,
      features: [
        'Real-time coding environment',
        'System design whiteboard',
        'Technical concept evaluation',
        'Algorithmic problem solving'
      ],
      popularity: 95
    },
    {
      id: 'behavioral',
      title: 'Behavioral Interviews',
      description: 'Master common behavioral and situational questions',
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      features: [
        'STAR method guidance',
        'Situational question practice',
        'Communication skills feedback',
        'Leadership scenario simulation'
      ],
      popularity: 87
    },
    {
      id: 'domain',
      title: 'Domain-Specific',
      description: 'Specialized interviews for your industry or role',
      icon: <Search className="h-10 w-10 text-primary" />,
      features: [
        'Role-specific questions',
        'Industry knowledge assessment',
        'Domain expertise evaluation',
        'Specialized technical questions'
      ],
      popularity: 82
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      image: "https://i.pravatar.cc/100?img=1",
      content: "The mock interviews were incredibly realistic. The AI-generated questions were challenging and relevant to my job search. The feedback I received helped me improve my communication skills substantially."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager at Meta",
      image: "https://i.pravatar.cc/100?img=2",
      content: "I was nervous about my product management interviews, but after practicing with these mock interviews, I felt much more prepared. The detailed feedback on my responses was invaluable."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Scientist at Amazon",
      image: "https://i.pravatar.cc/100?img=3",
      content: "The technical questions in the mock interviews were spot-on for data science roles. Being able to record and review my responses helped me refine my explanations of complex concepts."
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
                Ace Your Interviews with Personalized Mock Sessions
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Practice real-world interview scenarios with AI-powered mock interviews. 
                Choose between chat and video formats, upload your resume, and get 
                personalized feedback to help you land your dream job.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/mock-interviews">
                  <Button size="lg" className="bg-white text-interview-purple hover:bg-white/90">
                    Start Mock Interview
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  View Demo
                </Button>
              </div>
            </div>
          </div>
          
          {/* Floating video interview preview */}
          <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-1/3">
            <div className="glass-card p-6 rounded-lg">
              <div className="mb-4">
                <Badge className="bg-white/20 mb-2">Technical Interview</Badge>
                <h3 className="text-lg font-semibold mb-1">Mock Video Interview</h3>
                <div className="text-sm text-white/80 flex items-center">
                  <Clock className="h-4 w-4 mr-1" /> 30 Minutes
                </div>
              </div>
              
              <div className="aspect-video bg-black/30 rounded-md mb-4 relative flex items-center justify-center">
                <div className="text-center">
                  <Video className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Your video will appear here</p>
                </div>
                
                <div className="absolute bottom-3 right-3 p-2 bg-black/50 rounded text-xs">
                  Live Transcription
                </div>
              </div>
              
              <div className="bg-white/10 p-3 rounded-md">
                <p className="text-sm">
                  "Could you explain how you would design a distributed caching system 
                  for a high-traffic web application?"
                </p>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Chat Interviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Practice with text-based interviews that simulate real-time 
                    conversation with an interviewer, perfect for quick practice sessions.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 2 */}
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Video Interviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Record yourself answering interview questions with live transcription 
                    for a more realistic interview experience.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 3 */}
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Resume Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Upload your resume and job description to receive targeted questions 
                    based on your experience and the role you're applying for.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 4 */}
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BarChart4 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Detailed Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive comprehensive feedback on your performance, including communication 
                    skills, technical accuracy, and areas for improvement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Interview Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="gradient-text">Choose Your Interview Type</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Select the interview format that best matches your needs and career goals
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {interviewTypes.map(type => (
                <Card key={type.id} className="hover:shadow-md transition-shadow border">
                  <CardHeader>
                    <div className="mb-4">{type.icon}</div>
                    <CardTitle className="text-2xl">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/mock-interviews/${type.id}`} className="w-full">
                      <Button className="w-full">Select {type.title}</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="gradient-text">How It Works</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Our platform makes it easy to prepare for your next interview
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Select Interview Type</h3>
                <p className="text-muted-foreground">
                  Choose between technical, behavioral, or domain-specific interviews based on your needs.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customize Your Experience</h3>
                <p className="text-muted-foreground">
                  Upload your resume, select interview duration, and choose between chat or video formats.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Receive AI Feedback</h3>
                <p className="text-muted-foreground">
                  Get detailed performance analysis and personalized recommendations for improvement.
                </p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/mock-interviews">
                <Button size="lg" className="bg-gradient-to-r from-interview-blue to-interview-purple text-white">
                  Start Practicing Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Mock Interview Demo */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <Badge className="mb-2">Live Demo</Badge>
                      <h3 className="text-xl font-bold">Mock Interview Session</h3>
                    </div>
                    <Badge variant="outline">Video Interview</Badge>
                  </div>
                  
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <Video className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
                      <p className="text-muted-foreground">Preview not available in demo</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                      <div className="text-sm font-semibold mb-1">Interviewer</div>
                      <p className="text-sm">
                        "Tell me about a challenging project you worked on and how you overcame obstacles during its implementation."
                      </p>
                    </div>
                    
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <div className="text-sm font-semibold mb-1">You</div>
                      <p className="text-sm">
                        "In my previous role, I led a team that had to migrate our legacy payment system to a new microservices architecture..."
                      </p>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>Time Remaining</span>
                        <span>02:45</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1">End Interview</Button>
                    <Button className="flex-1">Next Question</Button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="gradient-text">Realistic Interview Experience</span>
                </h2>
                <p className="text-lg mb-8 text-muted-foreground">
                  Our mock interviews simulate real-world scenarios with challenging questions 
                  tailored to your experience level, industry, and target roles.
                </p>
                
                <Tabs defaultValue="video">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="video">Video Interview</TabsTrigger>
                    <TabsTrigger value="chat">Chat Interview</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="video">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium">Live Video Recording</h3>
                          <p className="text-sm text-muted-foreground">
                            Practice answering questions on camera to build confidence and improve body language.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium">Real-time Transcription</h3>
                          <p className="text-sm text-muted-foreground">
                            Your responses are transcribed in real-time for comprehensive feedback.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium">Nonverbal Communication Analysis</h3>
                          <p className="text-sm text-muted-foreground">
                            Get feedback on body language, eye contact, and overall presentation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="chat">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium">Text-based Interviews</h3>
                          <p className="text-sm text-muted-foreground">
                            Practice formulating clear, concise answers in a text-based format.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium">Real-time Feedback</h3>
                          <p className="text-sm text-muted-foreground">
                            Receive immediate suggestions on your responses and communication style.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-2 bg-primary/10 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-medium">Content Analysis</h3>
                          <p className="text-sm text-muted-foreground">
                            Get feedback on the relevance, completeness, and clarity of your answers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-8">
                  <Link to="/mock-interviews">
                    <Button className="bg-gradient-to-r from-interview-blue to-interview-purple text-white">
                      Try a Mock Interview
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="gradient-text">What Users Are Saying</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Success stories from professionals who improved their interview skills
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map(testimonial => (
                <Card key={testimonial.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <Separator className="mb-4" />
                    <p className="italic text-muted-foreground">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-interview-blue to-interview-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Ace Your Next Interview?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Practice makes perfect. Start your personalized mock interview today 
              and gain the confidence you need to succeed.
            </p>
            <Link to="/mock-interviews">
              <Button size="lg" className="bg-white text-interview-purple hover:bg-white/90">
                Start Mock Interview
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MockInterviewsLanding;
