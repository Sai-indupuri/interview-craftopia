
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InterviewRoom from '@/components/interview/InterviewRoom';
import { InterviewTypeSelection } from '@/components/interview/InterviewTypeSelection';
import { InterviewSettings } from '@/components/interview/InterviewSettings';
import { ResumeUpload } from '@/components/interview/ResumeUpload';

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
              <InterviewTypeSelection 
                selectedType={selectedType}
                onTypeSelect={setSelectedType}
              />
              
              <InterviewSettings
                selectedDuration={selectedDuration}
                selectedMode={selectedMode}
                onDurationChange={setSelectedDuration}
                onModeChange={setSelectedMode}
              />
              
              <Button 
                size="lg" 
                className="mt-4 bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90"
                onClick={handleStartInterview}
              >
                Start Interview
              </Button>
            </TabsContent>
            
            <TabsContent value="resume" className="mt-6">
              <ResumeUpload
                resume={resume}
                jobDescription={jobDescription}
                onResumeChange={setResume}
                onJobDescriptionChange={setJobDescription}
              />
              
              <InterviewSettings
                selectedDuration={selectedDuration}
                selectedMode={selectedMode}
                onDurationChange={setSelectedDuration}
                onModeChange={setSelectedMode}
              />
              
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
