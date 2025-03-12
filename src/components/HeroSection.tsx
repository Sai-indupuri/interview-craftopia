
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-interview-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-interview-purple/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 py-20 lg:py-32 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          <span className="gradient-text">Master Your Interviews</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-center text-muted-foreground max-w-3xl mb-10">
          Personalized interview preparation with AI-powered mock interviews, 
          coding challenges, and tailored assessments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90 shadow-lg">
            <Link to="/mock-interviews">
              Start Your Mock Interview
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
            <Link to="/coding-practice">
              Try Coding Practice
            </Link>
          </Button>
        </div>
        
        <div className="mt-16 animate-float">
          <img 
            src="/interview-dashboard.png" 
            alt="Interview Dashboard" 
            className="w-full max-w-5xl rounded-xl shadow-2xl glass-card"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/1200x675/4f46e5/ffffff?text=Interview+Dashboard&font=montserrat";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
