
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 gradient-text">About Interview Craftopia</h1>
          
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              At Interview Craftopia, we believe everyone deserves access to high-quality interview preparation resources. 
              Our mission is to revolutionize the way candidates prepare for technical interviews by leveraging 
              cutting-edge AI technology and industry expertise to create personalized learning experiences.
            </p>
            <p className="text-muted-foreground">
              We aim to level the playing field in the tech industry by providing tools that simulate real-world 
              interview scenarios, offer constructive feedback, and build confidence through practice.
            </p>
          </Card>

          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Interview Craftopia was founded in 2023 by a team of experienced tech professionals who recognized 
              the challenges faced by candidates during the technical interview process. Having conducted hundreds 
              of interviews themselves, they understood the gap between theoretical knowledge and practical application.
            </p>
            <p className="text-muted-foreground">
              What began as a small tool for friends and colleagues quickly grew into a comprehensive platform 
              serving thousands of users worldwide. Today, Interview Craftopia continues to evolve with new features 
              and improvements based on user feedback and industry trends.
            </p>
          </Card>

          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Alex Chen</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Priya Sharma</h3>
                <p className="text-sm text-muted-foreground">CTO</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Michael Johnson</h3>
                <p className="text-sm text-muted-foreground">Head of Content</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push the boundaries of what's possible in interview preparation 
                  by integrating the latest AI technologies.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe quality interview preparation should be available to everyone, 
                  regardless of their background or resources.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  We uphold the highest standards in our content and platform, ensuring users 
                  receive realistic and valuable practice.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We foster a supportive community where users can learn from each other and grow together.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
