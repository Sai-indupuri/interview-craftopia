
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Video, MessageSquare, Clock, Calendar as CalendarIcon, Trophy } from 'lucide-react';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const MockInterviews = () => {
  const [selectedTab, setSelectedTab] = useState("upcoming");

  // Mock data for interviews
  const upcomingInterviews = [
    {
      id: 1,
      title: "Frontend Developer Interview",
      domain: "Technology",
      date: "2023-06-20T14:30:00",
      duration: "45 min",
      mode: "video",
      interviewer: "AI Interviewer"
    },
    {
      id: 2,
      title: "UPSC Mock Interview",
      domain: "Civil Services",
      date: "2023-06-25T10:00:00",
      duration: "60 min",
      mode: "video",
      interviewer: "AI Interviewer"
    }
  ];

  const pastInterviews = [
    {
      id: 3,
      title: "Banking Domain Expert",
      domain: "Banking",
      date: "2023-05-15T11:00:00",
      duration: "30 min",
      mode: "chat",
      interviewer: "AI Interviewer",
      score: 82,
      feedback: {
        content: 4.5,
        confidence: 3.8,
        communication: 4.2,
        technicalAccuracy: 4.0
      }
    },
    {
      id: 4,
      title: "Backend Developer Interview",
      domain: "Technology",
      date: "2023-05-02T15:30:00",
      duration: "45 min",
      mode: "video",
      interviewer: "AI Interviewer",
      score: 75,
      feedback: {
        content: 4.0,
        confidence: 3.5,
        communication: 3.8,
        technicalAccuracy: 4.2
      }
    },
    {
      id: 5,
      title: "Healthcare Administration",
      domain: "Healthcare",
      date: "2023-04-18T09:00:00",
      duration: "40 min",
      mode: "chat",
      interviewer: "AI Interviewer",
      score: 88,
      feedback: {
        content: 4.8,
        confidence: 4.2,
        communication: 4.5,
        technicalAccuracy: 4.3
      }
    }
  ];

  // Performance trend data
  const performanceTrend = [
    { date: "Apr 18", score: 88 },
    { date: "May 2", score: 75 },
    { date: "May 15", score: 82 }
  ];

  // Radar chart data for skills
  const skillsData = [
    { subject: 'Technical Knowledge', A: 90, fullMark: 100 },
    { subject: 'Communication', A: 80, fullMark: 100 },
    { subject: 'Problem Solving', A: 85, fullMark: 100 },
    { subject: 'Confidence', A: 75, fullMark: 100 },
    { subject: 'Body Language', A: 70, fullMark: 100 },
    { subject: 'Domain Knowledge', A: 85, fullMark: 100 },
  ];

  // Chart configuration
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
          <CardTitle>Mock Interviews</CardTitle>
          <CardDescription>
            Manage your mock interviews and view performance reports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upcoming" onValueChange={setSelectedTab}>
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Interviews</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            {/* Upcoming Interviews */}
            <TabsContent value="upcoming">
              {upcomingInterviews.length > 0 ? (
                <div className="space-y-4">
                  {upcomingInterviews.map((interview) => (
                    <Card key={interview.id}>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row gap-4 justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium text-lg">{interview.title}</h3>
                              <Badge variant="outline">{interview.domain}</Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <CalendarIcon className="h-4 w-4" />
                                <span>{new Date(interview.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{new Date(interview.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                {interview.mode === 'video' ? (
                                  <Video className="h-4 w-4" />
                                ) : (
                                  <MessageSquare className="h-4 w-4" />
                                )}
                                <span>{interview.mode === 'video' ? 'Video' : 'Chat'}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="sm">Reschedule</Button>
                            <Button variant="destructive" size="sm">Cancel</Button>
                            <Button 
                              className="bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90" 
                              size="sm"
                            >
                              Start Now
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  <div className="mt-4 text-center">
                    <Button className="bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90">
                      Schedule New Interview
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  <Calendar className="mx-auto h-12 w-12 text-muted-foreground mb-3" />
                  <h3 className="text-lg font-medium mb-1">No Upcoming Interviews</h3>
                  <p className="text-muted-foreground mb-6">
                    You currently don't have any interviews scheduled.
                  </p>
                  <Button className="bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90">
                    Schedule an Interview
                  </Button>
                </div>
              )}
            </TabsContent>
            
            {/* Past Interviews */}
            <TabsContent value="past">
              <div className="space-y-6">
                {pastInterviews.map((interview) => (
                  <Card key={interview.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium text-lg">{interview.title}</h3>
                              <Badge variant="outline">{interview.domain}</Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <CalendarIcon className="h-4 w-4" />
                                <span>{new Date(interview.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                {interview.mode === 'video' ? (
                                  <Video className="h-4 w-4" />
                                ) : (
                                  <MessageSquare className="h-4 w-4" />
                                )}
                                <span>{interview.mode === 'video' ? 'Video' : 'Chat'}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              <Trophy className={`h-5 w-5 ${
                                interview.score >= 80 ? 'text-green-500' : 
                                interview.score >= 70 ? 'text-amber-500' : 'text-red-500'
                              } mr-1`} />
                              <span className="font-semibold text-xl">{interview.score}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h4 className="font-medium mb-3">Performance Breakdown</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Content Knowledge</span>
                                <span>{interview.feedback.content}/5</span>
                              </div>
                              <Progress 
                                value={(interview.feedback.content / 5) * 100} 
                                className="h-2"
                              />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Confidence</span>
                                <span>{interview.feedback.confidence}/5</span>
                              </div>
                              <Progress 
                                value={(interview.feedback.confidence / 5) * 100} 
                                className="h-2"
                              />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Communication</span>
                                <span>{interview.feedback.communication}/5</span>
                              </div>
                              <Progress 
                                value={(interview.feedback.communication / 5) * 100} 
                                className="h-2"
                              />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Technical Accuracy</span>
                                <span>{interview.feedback.technicalAccuracy}/5</span>
                              </div>
                              <Progress 
                                value={(interview.feedback.technicalAccuracy / 5) * 100} 
                                className="h-2"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm">
                            View Full Report
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Analytics */}
            <TabsContent value="analytics">
              <div className="space-y-6">
                {/* Performance Over Time */}
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Trend</CardTitle>
                    <CardDescription>
                      Your interview scores over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={performanceTrend}>
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
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
                
                {/* Skills Radar Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Skills Assessment</CardTitle>
                    <CardDescription>
                      Breakdown of your interview skills
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey="subject" />
                          <PolarRadiusAxis angle={30} domain={[0, 100]} />
                          <Radar
                            name="Skills"
                            dataKey="A"
                            stroke="#9b87f5"
                            fill="#9b87f5"
                            fillOpacity={0.6}
                          />
                          <Tooltip />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Interview Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Interview Summary</CardTitle>
                    <CardDescription>
                      Your overall mock interview performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="border rounded-lg p-4 text-center">
                        <h3 className="text-muted-foreground text-sm mb-1">Total Interviews</h3>
                        <p className="text-3xl font-semibold">{pastInterviews.length}</p>
                      </div>
                      <div className="border rounded-lg p-4 text-center">
                        <h3 className="text-muted-foreground text-sm mb-1">Average Score</h3>
                        <p className="text-3xl font-semibold">
                          {Math.round(pastInterviews.reduce((acc, curr) => acc + curr.score, 0) / pastInterviews.length)}%
                        </p>
                      </div>
                      <div className="border rounded-lg p-4 text-center">
                        <h3 className="text-muted-foreground text-sm mb-1">Best Performance</h3>
                        <p className="text-3xl font-semibold text-green-600">
                          {Math.max(...pastInterviews.map(i => i.score))}%
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">AI Feedback Summary</h3>
                      <p className="text-muted-foreground mb-3">
                        Based on your mock interviews, here are some key insights:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="shrink-0 h-5 w-5 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center mt-0.5">✓</div>
                          <p><strong>Strengths:</strong> Strong technical knowledge, excellent communication skills, and good domain expertise.</p>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="shrink-0 h-5 w-5 rounded-full bg-amber-500/20 text-amber-600 flex items-center justify-center mt-0.5">!</div>
                          <p><strong>Areas for Improvement:</strong> Work on confidence and body language during video interviews. Practice more situational questions.</p>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="shrink-0 h-5 w-5 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center mt-0.5">i</div>
                          <p><strong>Recommendation:</strong> Schedule at least 2 more practice interviews focusing on behavioral questions.</p>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default MockInterviews;
