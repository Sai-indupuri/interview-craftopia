
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";
import { CheckCircle2, XCircle, Clock, BarChart2, Book, LineChart, Share2, Download } from "lucide-react";
import { assessmentCategories } from '@/data/assessmentData'; 

const AssessmentResults = () => {
  const { categoryId, assessmentTitle } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Sample result data
  const results = {
    score: 75,
    totalQuestions: 20,
    correctAnswers: 15,
    incorrectAnswers: 3,
    unanswered: 2,
    timeTaken: "28:45",
    percentile: 85,
    strengths: ["Data Structures", "Database Design"],
    weaknesses: ["System Design", "Algorithms"],
    questionBreakdown: [
      { subject: "Arrays", correct: 3, incorrect: 0, total: 3 },
      { subject: "Linked Lists", correct: 2, incorrect: 1, total: 3 },
      { subject: "Trees", correct: 2, incorrect: 1, total: 3 },
      { subject: "Sorting Algorithms", correct: 2, incorrect: 0, total: 2 },
      { subject: "Database Design", correct: 3, incorrect: 0, total: 3 },
      { subject: "SQL Queries", correct: 2, incorrect: 0, total: 2 },
      { subject: "System Design", correct: 1, incorrect: 1, total: 2 },
    ],
    performanceMetrics: [
      { subject: "Arrays", score: 100 },
      { subject: "Linked Lists", score: 67 },
      { subject: "Trees", score: 67 },
      { subject: "Sorting", score: 100 },
      { subject: "Databases", score: 100 },
      { subject: "SQL", score: 100 },
      { subject: "System Design", score: 50 },
    ],
    recommendations: [
      "Focus on system design principles, particularly scalability concepts.",
      "Review linked list operations and edge cases.",
      "Practice tree traversal algorithms for better understanding.",
      "Continue with your strong database knowledge, which shows good comprehension."
    ]
  };

  // Find the category and assessment data
  const category = assessmentCategories.find(cat => cat.id === categoryId);
  const assessment = category?.assessments.find(
    a => a.title.toLowerCase().replace(/\s+/g, '-') === assessmentTitle
  );
  
  // Data for charts
  const pieData = [
    { name: "Correct", value: results.correctAnswers, color: "#22c55e" },
    { name: "Incorrect", value: results.incorrectAnswers, color: "#ef4444" },
    { name: "Unanswered", value: results.unanswered, color: "#d4d4d8" }
  ];
  
  const barData = results.questionBreakdown.map(item => ({
    name: item.subject,
    correct: (item.correct / item.total) * 100,
    incorrect: (item.incorrect / item.total) * 100,
  }));
  
  const radarData = results.performanceMetrics.map(item => ({
    subject: item.subject,
    score: item.score,
    fullMark: 100
  }));
  
  if (!assessment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Assessment results not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Assessment Results
              </h1>
              <div className="flex items-center text-muted-foreground space-x-2">
                <span>{category?.label}</span>
                <span>•</span>
                <span>{assessment.title}</span>
                <span>•</span>
                <span>Completed on {new Date().toLocaleDateString()}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
          
          {/* Score overview cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="hover-scale">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <div className={`inline-flex items-center justify-center p-2 rounded-lg bg-interview-blue/10 text-interview-blue mr-2`}>
                    <BarChart2 size={20} />
                  </div>
                  Overall Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{results.score}%</div>
                <p className="text-sm text-muted-foreground">
                  Top {100 - results.percentile}% of test takers
                </p>
                <Progress 
                  value={results.score} 
                  className="h-2 mt-2" 
                />
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <div className={`inline-flex items-center justify-center p-2 rounded-lg bg-green-500/10 text-green-500 mr-2`}>
                    <CheckCircle2 size={20} />
                  </div>
                  Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {Math.round((results.correctAnswers / (results.totalQuestions - results.unanswered)) * 100)}%
                </div>
                <p className="text-sm text-muted-foreground">
                  {results.correctAnswers} correct out of {results.totalQuestions - results.unanswered} attempted
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <div className={`inline-flex items-center justify-center p-2 rounded-lg bg-purple-500/10 text-purple-500 mr-2`}>
                    <Clock size={20} />
                  </div>
                  Time Taken
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{results.timeTaken}</div>
                <p className="text-sm text-muted-foreground">
                  Out of {assessment.time} minutes
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <div className={`inline-flex items-center justify-center p-2 rounded-lg bg-yellow-500/10 text-yellow-500 mr-2`}>
                    <Book size={20} />
                  </div>
                  Completion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {Math.round(((results.correctAnswers + results.incorrectAnswers) / results.totalQuestions) * 100)}%
                </div>
                <p className="text-sm text-muted-foreground">
                  {results.unanswered} questions unanswered
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Answer Distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <ChartContainer 
                      config={{
                        correct: { label: "Correct", color: "#22c55e" },
                        incorrect: { label: "Incorrect", color: "#ef4444" },
                        unanswered: { label: "Unanswered", color: "#d4d4d8" },
                      }}
                    >
                      <PieChart width={200} height={200}>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ChartContainer>
                  </CardContent>
                  <ChartLegend>
                    <ChartLegendContent
                      className="flex justify-center"
                      payload={[
                        { value: 'Correct', color: '#22c55e' },
                        { value: 'Incorrect', color: '#ef4444' },
                        { value: 'Unanswered', color: '#d4d4d8' },
                      ]}
                    />
                  </ChartLegend>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Subject Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        correct: { label: "Correct %", color: "#22c55e" },
                        incorrect: { label: "Incorrect %", color: "#ef4444" },
                      }}
                    >
                      <BarChart
                        width={500}
                        height={300}
                        data={barData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <Bar dataKey="correct" stackId="a" fill="#22c55e" />
                        <Bar dataKey="incorrect" stackId="a" fill="#ef4444" />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Skills Analysis</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <ChartContainer
                    config={
                      Object.fromEntries(
                        results.performanceMetrics.map(item => [
                          item.subject.toLowerCase().replace(/\s+/g, '-'),
                          { 
                            label: item.subject, 
                            color: item.score > 75 ? "#22c55e" : item.score > 50 ? "#eab308" : "#ef4444"
                          }
                        ])
                      )
                    }
                  >
                    <RadarChart 
                      width={500} 
                      height={300} 
                      data={radarData}
                    >
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar
                        name="Score"
                        dataKey="score"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                      />
                    </RadarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Strengths</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {results.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Areas for Improvement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {results.weaknesses.map((weakness, index) => (
                        <li key={index} className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 shrink-0" />
                          <span>{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="questions">
              <Card>
                <CardHeader>
                  <CardTitle>Question Review</CardTitle>
                  <CardDescription>
                    Review all questions and answers from your assessment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* This would contain actual questions and answers */}
                    <p className="text-muted-foreground text-center py-10">
                      Question review coming soon...
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="recommendations">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Recommendations</CardTitle>
                  <CardDescription>
                    Personalized suggestions to improve your performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Based on your performance, here are some recommendations to help you improve:
                    </p>
                    <ul className="space-y-3">
                      {results.recommendations.map((recommendation, index) => (
                        <li key={index} className="flex items-start p-3 border rounded-md bg-muted/30">
                          <LineChart className="h-5 w-5 text-interview-blue mr-2 mt-0.5 shrink-0" />
                          <span>{recommendation}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t pt-4 mt-6">
                      <h4 className="font-medium mb-3">Suggested Resources</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Button variant="outline" className="justify-start">
                          <Book className="h-4 w-4 mr-2" />
                          System Design Fundamentals Course
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <Book className="h-4 w-4 mr-2" />
                          Linked List Practice Problems
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <Book className="h-4 w-4 mr-2" />
                          Tree Traversal Algorithms Guide
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <Book className="h-4 w-4 mr-2" />
                          Advanced Database Design Workshop
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
            <Link to={`/assessments`}>
              <Button variant="outline">
                Return to Assessments
              </Button>
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline">
                Retake Assessment
              </Button>
              <Button className="bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90">
                View Similar Assessments
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AssessmentResults;
