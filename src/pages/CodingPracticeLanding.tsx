
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Search, Code, Clock, BarChart4, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CodingPracticeLanding = () => {
  const popularProblems = [
    { id: 1, title: "Two Sum", difficulty: "Easy", category: "Arrays", completion: 78 },
    { id: 2, title: "Merge Sort Implementation", difficulty: "Medium", category: "Algorithms", completion: 62 },
    { id: 3, title: "Binary Tree Traversal", difficulty: "Medium", category: "Trees", completion: 45 },
    { id: 4, title: "LRU Cache", difficulty: "Hard", category: "Data Structures", completion: 31 },
  ];

  const difficultyColor = {
    Easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    Hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-interview-blue to-interview-purple py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Practice Coding Like a Pro
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Master programming challenges with our comprehensive platform. 
                Solve problems, get AI feedback, and track your progress to become 
                job-ready for technical interviews.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/coding-practice">
                  <Button size="lg" className="bg-white text-interview-purple hover:bg-white/90">
                    Start Coding Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Browse Problem Set
                </Button>
              </div>
            </div>
          </div>
          
          {/* Floating code snippet decoration */}
          <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-1/3 overflow-hidden">
            <div className="glass-card p-6 rounded-lg text-sm font-mono opacity-90">
              <pre className="text-white/90">
{`function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null;
}`}
              </pre>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Core Features</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Problem Solving</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access hundreds of curated problems across various categories and difficulty levels.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 2 */}
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BarChart4 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">AI Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive instant AI-driven feedback on your code with optimization suggestions.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 3 */}
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Test Cases</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Run your solutions against pre-defined test cases or create your own custom tests.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 4 */}
              <Card className="hover-scale">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Leaderboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Compare your performance with others and climb the ranks as you solve more problems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Problem Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  <span className="gradient-text">Explore Problem Categories</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Start with the category that interests you most
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 relative w-full md:w-64">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                <input 
                  type="text" 
                  placeholder="Search problems..." 
                  className="w-full pl-10 py-2 pr-4 rounded-md border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-8 w-full max-w-md mx-auto grid grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="arrays">Arrays</TabsTrigger>
                <TabsTrigger value="strings">Strings</TabsTrigger>
                <TabsTrigger value="dp">Dynamic Programming</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {popularProblems.map(problem => (
                    <Card key={problem.id} className="overflow-hidden hover:shadow-md transition-shadow border">
                      <CardContent className="p-0">
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="font-semibold text-xl">
                              {problem.title}
                            </h3>
                            <Badge className={difficultyColor[problem.difficulty]}>
                              {problem.difficulty}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Category: {problem.category}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Award className="h-4 w-4 mr-1" />
                              <span>{problem.completion}% completion rate</span>
                            </div>
                            <Button variant="secondary" size="sm">Solve</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="arrays" className="mt-0">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Browse array-specific problems</p>
                </div>
              </TabsContent>
              
              <TabsContent value="strings" className="mt-0">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Browse string manipulation problems</p>
                </div>
              </TabsContent>
              
              <TabsContent value="dp" className="mt-0">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Browse dynamic programming challenges</p>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 text-center">
              <Link to="/coding-practice">
                <Button size="lg" className="bg-gradient-to-r from-interview-blue to-interview-purple text-white">
                  View All Problems
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* User Dashboard Preview */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              <span className="gradient-text">Track Your Progress</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Monitor your coding journey with our comprehensive dashboard. Visualize your 
              improvements and get personalized recommendations for your next challenge.
            </p>
            
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-4xl mx-auto overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Problems Solved</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">48</div>
                    <div className="text-xs text-green-600 dark:text-green-400 flex items-center">
                      <span>↑ 12 this week</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Success Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">71%</div>
                    <div className="text-xs text-green-600 dark:text-green-400 flex items-center">
                      <span>↑ 5% last month</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Current Streak</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">6 days</div>
                    <div className="text-xs text-muted-foreground">Best: 14 days</div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-3">Recommended Problems</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                    <div className="flex items-center">
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 mr-2">Medium</Badge>
                      <span>Longest Substring Without Repeating Characters</span>
                    </div>
                    <Button size="sm" variant="ghost">Solve</Button>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white dark:bg-gray-800 rounded">
                    <div className="flex items-center">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 mr-2">Easy</Badge>
                      <span>Valid Parentheses</span>
                    </div>
                    <Button size="sm" variant="ghost">Solve</Button>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Based on your skills, we recommend focusing on:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline">Dynamic Programming</Badge>
                  <Badge variant="outline">Binary Search</Badge>
                  <Badge variant="outline">Graph Algorithms</Badge>
                </div>
              </div>
              
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-interview-blue to-interview-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Improve Your Coding Skills?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Join thousands of developers who are practicing problems, 
              receiving AI feedback, and preparing for technical interviews.
            </p>
            <Link to="/coding-practice">
              <Button size="lg" className="bg-white text-interview-purple hover:bg-white/90">
                Start Coding Practice
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CodingPracticeLanding;
