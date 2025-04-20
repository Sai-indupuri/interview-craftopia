
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { BarChart2, Trophy, Clock, Award } from 'lucide-react';
import { 
  ChartContainer, 
  ChartLegend, 
  ChartLegendContent
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ProfileOverview = () => {
  // Mock data for the charts
  const performanceData = [
    { name: 'Tech', score: 85 },
    { name: 'Banking', score: 65 },
    { name: 'Civil Services', score: 72 },
    { name: 'Healthcare', score: 45 },
  ];

  const recentAssessments = [
    { id: 1, title: "Data Structures & Algorithms", score: 85, date: "2023-05-15" },
    { id: 2, title: "Banking Fundamentals", score: 75, date: "2023-05-10" },
    { id: 3, title: "UPSC Prelims Mock", score: 68, date: "2023-05-05" },
  ];

  const achievements = [
    { id: 1, title: "Tech Master", description: "Completed 10 Technology assessments", icon: Award },
    { id: 2, title: "Fast Learner", description: "Improved score by 20% in a month", icon: Clock },
    { id: 3, title: "Perfect Score", description: "Achieved 100% in one assessment", icon: Trophy },
  ];

  // Chart configuration
  const chartConfig = {
    score: {
      label: "Score",
      color: "#9b87f5",
    },
  };

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Assessments</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+4 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Highest Score</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">In Data Structures & Algorithms</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Learning Path Progress</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <Progress value={75} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Domain Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Domain Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-80">
            {/* Wrap the multiple children in a single React element */}
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#9b87f5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <ChartLegend>
              <ChartLegendContent />
            </ChartLegend>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Recent Assessments */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Assessments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAssessments.map((assessment) => (
              <div key={assessment.id} className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{assessment.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {new Date(assessment.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span 
                    className={`text-sm font-medium ${
                      assessment.score >= 80 ? 'text-green-600' : 
                      assessment.score >= 60 ? 'text-amber-600' : 'text-red-600'
                    }`}
                  >
                    {assessment.score}%
                  </span>
                  <Progress 
                    value={assessment.score} 
                    className="w-24 h-2" 
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className="flex flex-col items-center p-4 text-center rounded-lg border bg-muted/50"
              >
                <div className="p-2 rounded-full bg-primary/10 mb-3">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileOverview;
