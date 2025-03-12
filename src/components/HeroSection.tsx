import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="container py-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ace Your Next Interview with <span className="gradient-text">Interview Craftopia</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Practice realistic mock interviews, get personalized feedback, and land your dream job.
          </p>
          
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90 shadow-lg">
            <Link to="/mock-interviews">
              Start Practicing Now
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
        
        {/* Right Column */}
        <div className="relative">
          <img 
            src="/hero-image.png"
            alt="Interview Scenario"
            className="rounded-2xl shadow-2xl"
          />
          
          {/* Decorative Elements (Orbs) */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-interview-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-interview-purple/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

