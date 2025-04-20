
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrainCircuit, ChevronRight, Clock, FileText, BarChart, GraduationCap, BookOpen, BookText, FileBadge, Scale, Stethoscope, Share2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// All assessment categories
const assessmentCategories = [
  {
    id: "tech",
    label: "Technology",
    assessments: [
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
    ]
  },
  {
    id: "civil-services",
    label: "Civil Services",
    assessments: [
      {
        title: "UPSC Prelims - General Studies",
        description: "Based on last 10 years' question papers on current affairs, history, geography, economics.",
        icon: BookOpen,
        time: "120 min",
        questions: 100,
        color: "bg-interview-blue/10 text-interview-blue"
      },
      {
        title: "UPSC Prelims - CSAT",
        description: "Comprehension, logical reasoning, analytical ability, and basic numeracy.",
        icon: BrainCircuit, 
        time: "120 min",
        questions: 80,
        color: "bg-interview-purple/10 text-interview-purple"
      },
      {
        title: "Indian Constitution & Polity",
        description: "Constitutional framework, amendments, governance, and political system of India.",
        icon: Scale,
        time: "60 min",
        questions: 50,
        color: "bg-interview-teal/10 text-interview-teal"
      },
      {
        title: "Indian & World Geography",
        description: "Physical, social, and economic geography of India and the world.",
        icon: GraduationCap,
        time: "45 min",
        questions: 40,
        color: "bg-interview-blue/10 text-interview-blue"
      },
      {
        title: "Indian History & Culture",
        description: "Ancient, medieval, modern history, and cultural heritage of India.",
        icon: BookText,
        time: "60 min",
        questions: 50,
        color: "bg-interview-purple/10 text-interview-purple"
      },
      {
        title: "Economy & International Relations",
        description: "Economic concepts, Indian economy, and foreign relations.",
        icon: Share2,
        time: "45 min",
        questions: 40,
        color: "bg-interview-teal/10 text-interview-teal"
      }
    ]
  },
  {
    id: "banking",
    label: "Banking",
    assessments: [
      {
        title: "Banking Awareness",
        description: "Banking history, institutions, financial policies, and current banking trends.",
        icon: FileBadge,
        time: "30 min",
        questions: 40,
        color: "bg-interview-blue/10 text-interview-blue"
      },
      {
        title: "Quantitative Aptitude",
        description: "Mathematical problems relevant to banking exams like SBI, IBPS, RBI.",
        icon: BrainCircuit,
        time: "45 min",
        questions: 35,
        color: "bg-interview-purple/10 text-interview-purple"
      },
      {
        title: "Reasoning Ability",
        description: "Logical reasoning, analytical reasoning, and verbal reasoning for banking exams.",
        icon: FileText,
        time: "45 min",
        questions: 35,
        color: "bg-interview-teal/10 text-interview-teal"
      }
    ]
  },
  {
    id: "healthcare",
    label: "Healthcare",
    assessments: [
      {
        title: "Medical Terminology",
        description: "Common medical terms, abbreviations, and definitions for healthcare professionals.",
        icon: Stethoscope,
        time: "30 min",
        questions: 50,
        color: "bg-interview-blue/10 text-interview-blue"
      },
      {
        title: "Anatomy & Physiology",
        description: "Human body systems, functions, and anatomical structures.",
        icon: BrainCircuit,
        time: "45 min",
        questions: 60,
        color: "bg-interview-purple/10 text-interview-purple"
      },
      {
        title: "Patient Care & Ethics",
        description: "Medical ethics, patient communication, and healthcare standards.",
        icon: FileText,
        time: "30 min",
        questions: 40,
        color: "bg-interview-teal/10 text-interview-teal"
      }
    ]
  }
];

const Assessments = () => {
  const [selectedCategory, setSelectedCategory] = useState("tech");
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("all");

  // Filter assessments based on search term and year (for past papers)
  const filteredAssessments = assessmentCategories
    .find(category => category.id === selectedCategory)?.assessments
    .filter(assessment => 
      assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assessment.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Domain-Specific Assessments</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Test your knowledge across various domains with our specialized assessments
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/4">
              <div className="sticky top-4 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Categories</h3>
                  <Tabs 
                    value={selectedCategory} 
                    onValueChange={setSelectedCategory}
                    orientation="vertical" 
                    className="w-full"
                  >
                    <TabsList className="flex flex-col h-auto w-full bg-transparent space-y-1">
                      {assessmentCategories.map(category => (
                        <TabsTrigger 
                          key={category.id}
                          value={category.id}
                          className="w-full justify-start text-left px-3 py-2 data-[state=active]:bg-primary/10"
                        >
                          {category.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>
                
                {selectedCategory === "civil-services" && (
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Previous Year Papers</h3>
                    <Select value={yearFilter} onValueChange={setYearFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Years</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2019">2019</SelectItem>
                        <SelectItem value="2018">2018</SelectItem>
                        <SelectItem value="2017">2017</SelectItem>
                        <SelectItem value="2016">2016</SelectItem>
                        <SelectItem value="2015">2015</SelectItem>
                        <SelectItem value="2014">2014</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Search</h3>
                  <Input 
                    placeholder="Search assessments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Card className="bg-gradient-to-r from-interview-blue/20 to-interview-purple/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Need Custom Assessments?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We can create tailored assessments for your specific domain or organization.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Contact Us
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            
            <div className="md:w-3/4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAssessments.map((assessment, index) => (
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
              
              {filteredAssessments.length === 0 && (
                <div className="text-center py-10">
                  <h3 className="text-xl font-medium mb-2">No assessments found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria or explore other categories.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Assessments;
