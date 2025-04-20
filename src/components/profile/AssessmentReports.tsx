
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { BarChart2, PieChart, LineChart, Clock, Award } from 'lucide-react';
import { 
  ChartContainer, 
  ChartLegend, 
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { BarChart, Bar, LineChart as RLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RPieChart, Pie, Cell, Legend } from 'recharts';

const AssessmentReports = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Sample data for charts and tables
  const assessments = [
    { 
      id: 1, 
      title: "Data Structures & Algorithms", 
      category: "tech", 
      score: 85, 
      date: "2023-05-15",
      timeSpent: "45 min",
      questionTypes: {
        mcq: { correct: 12, total: 15 },
        theory: { correct: 3, total: 5 }
      }
    },
    { 
      id: 2, 
      title: "Banking Fundamentals", 
      category: "banking", 
      score: 75, 
      date: "2023-05-10",
      timeSpent: "30 min",
      questionTypes: {
        mcq: { correct: 8, total: 12 },
        theory: { correct: 2, total: 3 }
      }
    },
    { 
      id: 3, 
      title: "UPSC Prelims Mock", 
      category: "civil-services", 
      score: 68, 
      date: "2023-05-05",
      timeSpent: "60 min",
      questionTypes: {
        mcq: { correct: 15, total: 25 },
        theory: { correct: 0, total: 0 }
      }
    },
    { 
      id: 4, 
      title: "Medical Terminology", 
      category: "healthcare", 
      score: 92, 
      date: "2023-05-01",
      timeSpent: "40 min",
      questionTypes: {
        mcq: { correct: 18, total: 20 },
        theory: { correct: 3, total: 3 }
      }
    },
    { 
      id: 5, 
      title: "Web Development Basics", 
      category: "tech", 
      score: 78, 
      date: "2023-04-25",
      timeSpent: "35 min",
      questionTypes: {
        mcq: { correct: 10, total: 15 },
        theory: { correct: 2, total: 2 }
      }
    }
  ];
  
  // Filter assessments by category
  const filteredAssessments = activeCategory === "all" 
    ? assessments 
    : assessments.filter(item => item.category === activeCategory);
  
  // Data for the score trend chart
  const trendData = [
    { date: "Apr 25", score: 78 },
    { date: "May 1", score: 92 },
    { date: "May 5", score: 68 },
    { date: "May 10", score: 75 },
    { date: "May 15", score: 85 }
  ];
  
  // Data for category performance chart
  const categoryData = [
    { name: "Technology", score: 82 },
    { name: "Banking", score: 75 },
    { name: "Civil Services", score: 68 },
    { name: "Healthcare", score: 92 }
  ];
  
  // Data for question type breakdown
  const questionTypeData = [
    { name: "MCQ", value: 83 },
    { name: "Theory", value: 71 },
    { name: "Coding", value: 65 }
  ];
  
  const COLORS = ["#9b87f5", "#22c55e", "#f97316"];
  
  // Chart configurations
  const chartConfig = {
    score: {
      label: "Score",
      color: "#9b87f5",
    },
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Assessment Reports</CardTitle>
          <CardDescription>
            View your performance across different assessments
          </CardDescription>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button 
              variant={activeCategory === "all" ? "default" : "outline"} 
              size="sm" 
              onClick={() => setActiveCategory("all")}
            >
              All
            </Button>
            <Button 
              variant={activeCategory === "tech" ? "default" : "outline"} 
              size="sm" 
              onClick={() => setActiveCategory("tech")}
            >
              Technology
            </Button>
            <Button 
              variant={activeCategory === "banking" ? "default" : "outline"} 
              size="sm" 
              onClick={() => setActiveCategory("banking")}
            >
              Banking
            </Button>
            <Button 
              variant={activeCategory === "civil-services" ? "default" : "outline"} 
              size="sm" 
              onClick={() => setActiveCategory("civil-services")}
            >
              Civil Services
            </Button>
            <Button 
              variant={activeCategory === "healthcare" ? "default" : "outline"} 
              size="sm" 
              onClick={() => setActiveCategory("healthcare")}
            >
              Healthcare
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="py-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="py-0">
                <div className="text-2xl font-bold">{
                  Math.round(
                    filteredAssessments.reduce((acc, curr) => acc + curr.score, 0) / 
                    filteredAssessments.length
                  )}%
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="py-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium">Assessments Taken</CardTitle>
                  <BarChart2 className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="py-0">
                <div className="text-2xl font-bold">{filteredAssessments.length}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="py-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium">Avg. Time Spent</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="py-0">
                <div className="text-2xl font-bold">42 min</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Performance Charts */}
          <Tabs defaultValue="trend">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="trend" className="flex items-center gap-1">
                <LineChart className="h-4 w-4" />
                <span>Score Trend</span>
              </TabsTrigger>
              <TabsTrigger value="category" className="flex items-center gap-1">
                <BarChart2 className="h-4 w-4" />
                <span>Categories</span>
              </TabsTrigger>
              <TabsTrigger value="breakdown" className="flex items-center gap-1">
                <PieChart className="h-4 w-4" />
                <span>Question Types</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="trend" className="pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Score Trend</CardTitle>
                  <CardDescription>
                    Your assessment performance over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RLineChart data={trendData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="date" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="score" 
                          stroke="#9b87f5" 
                          activeDot={{ r: 8 }}
                          strokeWidth={2}
                        />
                      </RLineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="category" className="pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Category Performance</CardTitle>
                  <CardDescription>
                    Your performance across different categories
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={categoryData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Bar dataKey="score" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="breakdown" className="pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Question Type Breakdown</CardTitle>
                  <CardDescription>
                    Your performance by question type
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RPieChart>
                        <Pie
                          data={questionTypeData}
                          innerRadius={70}
                          outerRadius={110}
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {questionTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Legend />
                        <Tooltip />
                      </RPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Assessment List */}
          <div>
            <h3 className="text-lg font-medium mb-4">Assessment History</h3>
            <div className="space-y-4">
              {filteredAssessments.map((assessment) => (
                <Card key={assessment.id}>
                  <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between">
                      <div>
                        <h4 className="font-medium">{assessment.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {new Date(assessment.date).toLocaleDateString()} • {assessment.timeSpent}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 sm:text-right">
                        <span className={`text-xl font-medium ${
                          assessment.score >= 80 ? 'text-green-600' : 
                          assessment.score >= 60 ? 'text-amber-600' : 'text-red-600'
                        }`}>
                          {assessment.score}%
                        </span>
                      </div>
                    </div>
                    
                    <Separator className="my-3" />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {assessment.questionTypes.mcq.total > 0 && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>MCQ Questions</span>
                            <span>{assessment.questionTypes.mcq.correct}/{assessment.questionTypes.mcq.total}</span>
                          </div>
                          <Progress 
                            value={(assessment.questionTypes.mcq.correct / assessment.questionTypes.mcq.total) * 100} 
                            className="h-2" 
                          />
                        </div>
                      )}
                      
                      {assessment.questionTypes.theory.total > 0 && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Theory Questions</span>
                            <span>{assessment.questionTypes.theory.correct}/{assessment.questionTypes.theory.total}</span>
                          </div>
                          <Progress 
                            value={(assessment.questionTypes.theory.correct / assessment.questionTypes.theory.total) * 100} 
                            className="h-2" 
                          />
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4">
                      <Button variant="outline" size="sm">
                        View Detailed Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssessmentReports;
