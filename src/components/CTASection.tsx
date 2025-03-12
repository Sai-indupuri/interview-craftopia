
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, UserPlus } from "lucide-react";
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div className="container py-20">
      <div className="glass-card rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-64 bg-interview-blue/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-interview-purple/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ace Your Next Interview?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of job seekers who have improved their interview skills and landed their dream jobs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90 shadow-lg">
              <Link to="/mock-interviews">
                Start Practicing Now
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 shadow-lg">
              <Link to="/signup">
                Create Account
                <UserPlus className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
