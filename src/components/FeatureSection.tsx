
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Video, Code, BrainCircuit, LineChart, CheckCircle } from "lucide-react";

const features = [
  {
    title: "Resume-Based Questions",
    description: "Upload your resume and get interview questions tailored to your experience and skills.",
    icon: FileText,
    color: "text-interview-blue"
  },
  {
    title: "Video Mock Interviews",
    description: "Practice with realistic AI interviewers in a video setting to build confidence.",
    icon: Video,
    color: "text-interview-purple"
  },
  {
    title: "Coding Environment",
    description: "Solve technical challenges in our multi-language coding environment with instant feedback.",
    icon: Code,
    color: "text-interview-teal"
  },
  {
    title: "Aptitude Assessments",
    description: "Test your knowledge with assessments for data structures, algorithms, and more.",
    icon: BrainCircuit,
    color: "text-interview-blue"
  },
  {
    title: "Performance Analytics",
    description: "Track your progress and identify areas for improvement with detailed insights.",
    icon: LineChart,
    color: "text-interview-purple"
  },
  {
    title: "Personalized Feedback",
    description: "Receive detailed feedback and suggestions after each mock interview session.",
    icon: CheckCircle,
    color: "text-interview-teal"
  }
];

const FeatureSection = () => {
  return (
    <div className="container py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        <span className="gradient-text">Comprehensive Interview Preparation</span>
      </h2>
      
      <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-16">
        Our platform offers everything you need to excel in your next job interview, 
        from technical challenges to behavioral questions.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover-scale glass-card">
            <CardHeader>
              <div className={`${feature.color} mb-4`}>
                <feature.icon size={32} />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
