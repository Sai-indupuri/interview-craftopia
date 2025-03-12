
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, ChevronRight, Clock, FileText, BarChart } from "lucide-react";

const assessments = [
  {
    title: "Data Structures & Algorithms",
    description: "Test your knowledge of arrays, linked lists, trees, sorting algorithms, etc.",
    icon: BrainCircuit,
    time: "45 min",
    questions: 25,
    color: "bg-interview-blue/10 text-interview-blue"
  },
  {
    title: "Database Systems",
    description: "SQL queries, database design, normalization, indexing, and transactions.",
    icon: BarChart,
    time: "30 min",
    questions: 20,
    color: "bg-interview-purple/10 text-interview-purple"
  },
  {
    title: "System Design",
    description: "Architecture, scalability, microservices, caching, load balancing.",
    icon: FileText,
    time: "60 min",
    questions: 15,
    color: "bg-interview-teal/10 text-interview-teal"
  },
  {
    title: "Operating Systems",
    description: "Processes, threads, memory management, file systems, and scheduling.",
    icon: BrainCircuit,
    time: "30 min",
    questions: 20,
    color: "bg-interview-blue/10 text-interview-blue"
  },
  {
    title: "Computer Networks",
    description: "TCP/IP, HTTP, DNS, network security, and socket programming.",
    icon: BarChart,
    time: "45 min",
    questions: 25,
    color: "bg-interview-purple/10 text-interview-purple"
  },
  {
    title: "General Aptitude",
    description: "Logical reasoning, quantitative aptitude, and verbal ability.",
    icon: FileText,
    time: "30 min",
    questions: 30,
    color: "bg-interview-teal/10 text-interview-teal"
  }
];

const Assessments = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Technical Assessments</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Test your knowledge across various technical domains
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessments.map((assessment, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className={`inline-flex items-center justify-center p-2 rounded-lg ${assessment.color} mb-4`}>
                    <assessment.icon size={24} />
                  </div>
                  <CardTitle>{assessment.title}</CardTitle>
                  <CardDescription>{assessment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground">
                      <Clock size={16} className="mr-1" />
                      <span>{assessment.time}</span>
                    </div>
                    <div className="text-muted-foreground">
                      {assessment.questions} questions
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full group">
                    Start Assessment
                    <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Assessments;
