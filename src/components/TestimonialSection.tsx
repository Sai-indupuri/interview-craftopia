
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Interview Craftopia helped me land my dream job at Google. The AI-generated questions matched almost exactly what I was asked in the real interview!",
    name: "Alex Johnson",
    title: "Senior Software Engineer",
    avatar: "AJ"
  },
  {
    quote: "The coding environment is fantastic. I practiced DSA problems daily and aced the technical rounds at multiple companies.",
    name: "Sara Chen",
    title: "Backend Developer",
    avatar: "SC"
  },
  {
    quote: "The personalized feedback after each mock interview was invaluable. I improved significantly over just a few weeks of practice.",
    name: "Michael Rodriguez",
    title: "Full Stack Developer",
    avatar: "MR"
  }
];

const TestimonialSection = () => {
  return (
    <div className="bg-muted py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Success Stories</span>
        </h2>
        
        <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          See how our platform has helped job seekers ace their interviews and land their dream jobs.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <blockquote className="text-lg mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="" alt={testimonial.name} />
                      <AvatarFallback className="bg-interview-purple text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
