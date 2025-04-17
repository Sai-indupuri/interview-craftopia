import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileText, Users, Code, BrainCircuit, Video, MessageSquare, Clock } from "lucide-react";
import InterviewRoom from '@/components/interview/InterviewRoom';

const interviewTypes = [
  {
    id: "technical",
    title: "Technical Interview",
    description: "Technical knowledge and problem-solving questions",
    icon: Code,
    color: "text-interview-blue"
  },
  {
    id: "behavioral",
    title: "Behavioral Interview",
    description: "Questions about past experiences and soft skills",
    icon: Users,
    color: "text-interview-purple"
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Architecture and design discussions for senior roles",
    icon: BrainCircuit,
    color: "text-interview-teal"
  }
];

const interviewDurations = [
  { id: "short", label: "15 minutes", value: "15" },
  { id: "medium", label: "30 minutes", value: "30" },
  { id: "long", label: "45 minutes", value: "45" }
];

const interviewModes = [
  { id: "video", label: "Video Interview", icon: Video },
  { id: "chat", label: "Chat Interview", icon: MessageSquare }
];

const MockInterviews = () => {
  const [selectedType, setSelectedType] = useState("technical");
  const [selectedDuration, setSelectedDuration] = useState("30");
  const [selectedMode, setSelectedMode] = useState("video");
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);

  const sampleQuestions = [
    "Tell me about yourself and your experience.",
    "What are your greatest strengths and weaknesses?",
    "Where do you see yourself in 5 years?",
    "Why do you want to work for our company?",
    "Describe a challenging situation at work and how you handled it."
  ];

  const handleStartInterview = () => {
    setIsInterviewStarted(true);
  };

  const handleInterviewComplete = () => {
    setIsInterviewStarted(false);
    console.log("Interview completed");
  };

  if (isInterviewStarted) {
    return (
      <InterviewRoom
        mode={selectedMode as "video" | "chat"}
        questions={sampleQuestions}
        onComplete={handleInterviewComplete}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Mock Interviews</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Configure your personalized mock interview session
          </p>
          
          <Tabs defaultValue="custom" className="mt-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="custom">Customize Interview</TabsTrigger>
              <TabsTrigger value="resume">Resume-Based</TabsTrigger>
            </TabsList>
            
            <TabsContent value="custom" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {interviewTypes.map((type) => (
                  <Card 
                    key={type.id}
                    className={`cursor-pointer hover-scale transition-all ${selectedType === type.id ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    <CardHeader>
                      <div className={`${type.color} mb-2`}>
                        <type.icon size={24} />
                      </div>
                      <CardTitle>{type.title}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Interview Duration</h3>
                  <RadioGroup 
                    value={selectedDuration} 
                    onValueChange={setSelectedDuration}
                    className="flex gap-4"
                  >
                    {interviewDurations.map((duration) => (
                      <div key={duration.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={duration.value} id={duration.id} />
                        <Label htmlFor={duration.id} className="flex items-center cursor-pointer">
                          <Clock size={16} className="mr-1" />
                          {duration.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Interview Mode</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {interviewModes.map((mode) => (
                      <Card 
                        key={mode.id}
                        className={`cursor-pointer transition-all ${selectedMode === mode.id ? 'ring-2 ring-primary' : ''}`}
                        onClick={() => setSelectedMode(mode.id)}
                      >
                        <CardContent className="flex items-center justify-center p-4">
                          <mode.icon size={24} className="mr-2" />
                          <span>{mode.label}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="mt-4 bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90"
                onClick={handleStartInterview}
              >
                Start Interview
              </Button>
            </TabsContent>
            
            <TabsContent value="resume" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Label htmlFor="resume" className="text-lg font-medium mb-4 block">
                    Paste Your Resume
                  </Label>
                  <Textarea
                    id="resume"
                    placeholder="Paste your resume text here..."
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    className="h-64"
                  />
                </div>
                
                <div>
                  <Label htmlFor="job-description" className="text-lg font-medium mb-4 block">
                    Paste Job Description
                  </Label>
                  <Textarea
                    id="job-description"
                    placeholder="Paste the job description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="h-64"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Interview Duration</h3>
                  <RadioGroup 
                    value={selectedDuration} 
                    onValueChange={setSelectedDuration}
                    className="flex gap-4"
                  >
                    {interviewDurations.map((duration) => (
                      <div key={duration.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={duration.value} id={`resume-${duration.id}`} />
                        <Label htmlFor={`resume-${duration.id}`} className="flex items-center cursor-pointer">
                          <Clock size={16} className="mr-1" />
                          {duration.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Interview Mode</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {interviewModes.map((mode) => (
                      <Card 
                        key={mode.id}
                        className={`cursor-pointer transition-all ${selectedMode === mode.id ? 'ring-2 ring-primary' : ''}`}
                        onClick={() => setSelectedMode(mode.id)}
                      >
                        <CardContent className="flex items-center justify-center p-4">
                          <mode.icon size={24} className="mr-2" />
                          <span>{mode.label}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="mt-4 bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90"
                onClick={handleStartInterview}
                disabled={!resume.trim() || !jobDescription.trim()}
              >
                Generate Personalized Interview
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MockInterviews;
