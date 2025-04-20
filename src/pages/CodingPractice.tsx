
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { 
  Code, 
  PlayCircle, 
  RotateCcw, 
  Check, 
  ArrowDown, 
  Filter, 
  Search,
  Clock,
  BarChart2,
  Star,
  ChevronDown
} from "lucide-react";

// Mock data for problems
const mockProblems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    tags: ["Arrays", "Hash Table"],
    solvedCount: 42582,
    category: "Algorithms"
  },
  {
    id: 2,
    title: "Valid Parentheses",
    difficulty: "Easy",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    tags: ["Strings", "Stack"],
    solvedCount: 35128,
    category: "Data Structures"
  },
  {
    id: 3,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    description: "Merge two sorted linked lists and return it as a new sorted list.",
    tags: ["Linked List", "Recursion"],
    solvedCount: 30756,
    category: "Data Structures"
  },
  {
    id: 4,
    title: "Maximum Subarray",
    difficulty: "Medium",
    description: "Find the contiguous subarray which has the largest sum.",
    tags: ["Arrays", "Dynamic Programming", "Divide and Conquer"],
    solvedCount: 28945,
    category: "Algorithms"
  },
  {
    id: 5,
    title: "LRU Cache",
    difficulty: "Medium",
    description: "Design and implement a data structure for Least Recently Used (LRU) cache.",
    tags: ["Design", "Hash Table", "Linked List"],
    solvedCount: 18432,
    category: "System Design"
  },
  {
    id: 6,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    description: "Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.",
    tags: ["Arrays", "Two Pointers", "Dynamic Programming"],
    solvedCount: 12345,
    category: "Algorithms"
  }
];

const CodingPractice = () => {
  const [activeTab, setActiveTab] = useState("problems");
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Write your code here\n\nfunction solve(input) {\n  // Your solution\n  return input;\n}\n\nconsole.log(solve([1, 2, 3]));");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [selectedProblemId, setSelectedProblemId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Selected problem details
  const selectedProblem = selectedProblemId 
    ? mockProblems.find(p => p.id === selectedProblemId) 
    : mockProblems[0];

  // Filter problems based on filters
  const filteredProblems = mockProblems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDifficulty = difficultyFilter === "all" || problem.difficulty.toLowerCase() === difficultyFilter.toLowerCase();
    
    const matchesCategory = categoryFilter === "all" || problem.category.toLowerCase() === categoryFilter.toLowerCase();
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  // Sort problems
  const sortedProblems = [...filteredProblems].sort((a, b) => {
    if (sortBy === "popularity") {
      return b.solvedCount - a.solvedCount;
    }
    // Default to newest (by ID for mock data)
    return b.id - a.id;
  });

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput("Running code...");
    
    // Simulate code execution after a delay
    setTimeout(() => {
      if (selectedProblem?.title === "Two Sum") {
        setOutput("Output:\n[0, 1]\n\nTest Cases:\n✅ Test Case 1: Passed\n✅ Test Case 2: Passed\n\nExecution Time: 12ms\nMemory Usage: 42.3MB\n\nAll test cases passed successfully!");
      } else {
        setOutput("Output:\n[1, 2, 3]\n\nTest Cases:\n✅ Test Case 1: Passed\n✅ Test Case 2: Passed\n\nExecution Time: 8ms\nMemory Usage: 36.5MB\n\nAll test cases passed successfully!");
      }
      setIsRunning(false);
    }, 1500);
  };

  const handleResetCode = () => {
    setCode("// Write your code here\n\nfunction solve(input) {\n  // Your solution\n  return input;\n}\n\nconsole.log(solve([1, 2, 3]));");
    setOutput("");
  };

  const handleProblemSelect = (id: number) => {
    setSelectedProblemId(id);
    setActiveTab("editor");
    
    // Set appropriate starter code based on selected problem
    if (id === 1) {
      setCode("// Two Sum Problem\n\nfunction twoSum(nums, target) {\n  // Your solution here\n  return [0, 0]; // Replace this with your solution\n}\n\nconsole.log(twoSum([2, 7, 11, 15], 9));");
    } else {
      setCode("// Write your code here\n\nfunction solve(input) {\n  // Your solution for " + mockProblems.find(p => p.id === id)?.title + "\n  return input;\n}\n\nconsole.log(solve([1, 2, 3]));");
    }
    
    setOutput("");
  };

  // Difficulty badge color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-500/10 text-green-600';
      case 'medium': return 'bg-yellow-500/10 text-yellow-600';
      case 'hard': return 'bg-red-500/10 text-red-600';
      default: return 'bg-blue-500/10 text-blue-600';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Coding Practice</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Solve technical challenges and prepare for coding interviews
          </p>
          
          <div className="mb-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="problems">Problem List</TabsTrigger>
                <TabsTrigger value="editor">Code Editor</TabsTrigger>
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                <TabsTrigger value="progress">My Progress</TabsTrigger>
              </TabsList>
              
              {/* Problems List Tab */}
              <TabsContent value="problems" className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  {/* Search Bar */}
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search problems..." 
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  {/* Filter Dropdowns */}
                  <div className="flex flex-wrap gap-2">
                    <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                      <SelectTrigger className="w-[130px]">
                        <Filter className="mr-2 h-4 w-4" />
                        <span>Difficulty</span>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                      <SelectTrigger className="w-[130px]">
                        <Filter className="mr-2 h-4 w-4" />
                        <span>Category</span>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="algorithms">Algorithms</SelectItem>
                        <SelectItem value="data structures">Data Structures</SelectItem>
                        <SelectItem value="system design">System Design</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[130px]">
                        <ChevronDown className="mr-2 h-4 w-4" />
                        <span>Sort By</span>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="popularity">Most Popular</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sortedProblems.map((problem) => (
                    <Card key={problem.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg hover:text-interview-blue cursor-pointer" onClick={() => handleProblemSelect(problem.id)}>
                            {problem.title}
                          </CardTitle>
                          <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                        </div>
                        <CardDescription className="line-clamp-2">
                          {problem.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {problem.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-interview-blue/10 text-interview-blue text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="h-4 w-4 mr-1" />
                          <span>{problem.solvedCount.toLocaleString()} users solved</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          onClick={() => handleProblemSelect(problem.id)}
                        >
                          Solve Problem
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink isActive href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </TabsContent>
              
              {/* Code Editor Tab */}
              <TabsContent value="editor" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="md:col-span-1">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>{selectedProblem?.title || "Problem"}</CardTitle>
                        <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(selectedProblem?.difficulty || 'Easy')}`}>
                          {selectedProblem?.difficulty || "Easy"}
                        </span>
                      </div>
                      <CardDescription>{selectedProblem?.category || "Algorithms"}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {selectedProblem?.description || "Problem description will appear here."}
                      </p>
                      
                      <div className="bg-muted p-3 rounded-md mb-4">
                        <p className="text-sm font-mono">
                          <strong>Example:</strong><br />
                          Input: nums = [2,7,11,15], target = 9<br />
                          Output: [0,1]<br />
                          Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                        </p>
                      </div>
                      
                      <div className="bg-muted p-3 rounded-md mb-4">
                        <p className="text-sm font-mono">
                          <strong>Constraints:</strong><br />
                          • 2 ≤ nums.length ≤ 10^4<br />
                          • -10^9 ≤ nums[i] ≤ 10^9<br />
                          • -10^9 ≤ target ≤ 10^9<br />
                          • Only one valid answer exists.
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {selectedProblem?.tags?.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-interview-blue/10 text-interview-blue text-xs rounded-full">
                            {tag}
                          </span>
                        )) || (
                          <span className="px-2 py-1 bg-interview-blue/10 text-interview-blue text-xs rounded-full">
                            Arrays
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="md:col-span-2 flex flex-col">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div className="flex items-center">
                        <Code className="mr-2 text-interview-blue" />
                        <CardTitle>Code Editor</CardTitle>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Select value={language} onValueChange={setLanguage}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="javascript">JavaScript</SelectItem>
                            <SelectItem value="python">Python</SelectItem>
                            <SelectItem value="java">Java</SelectItem>
                            <SelectItem value="cpp">C++</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full h-64 p-4 font-mono text-sm bg-gray-900 text-gray-100 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      
                      <div className="flex justify-between mt-4 mb-2">
                        <div className="flex items-center">
                          <ArrowDown className="mr-2 text-muted-foreground" />
                          <span className="font-medium">Output</span>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={handleResetCode}
                          >
                            <RotateCcw size={16} className="mr-1" /> Reset
                          </Button>
                          
                          <Button 
                            size="sm"
                            onClick={handleRunCode}
                            disabled={isRunning}
                            className="bg-interview-blue hover:bg-interview-blue/90"
                          >
                            {isRunning ? (
                              <>
                                <div className="animate-spin mr-1 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                                Running
                              </>
                            ) : (
                              <>
                                <PlayCircle size={16} className="mr-1" /> Run Code
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-md h-32 font-mono text-sm overflow-y-auto">
                        {output || "// Output will appear here"}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex justify-end">
                      <Button className="bg-interview-teal hover:bg-interview-teal/90">
                        <Check size={16} className="mr-1" /> Submit Solution
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Leaderboard Tab */}
              <TabsContent value="leaderboard">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Performers</CardTitle>
                    <CardDescription>See who's leading in solving coding challenges</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { rank: 1, name: "Alex Johnson", solved: 243, streak: 28 },
                        { rank: 2, name: "Maria Garcia", solved: 215, streak: 14 },
                        { rank: 3, name: "James Wilson", solved: 198, streak: 21 },
                        { rank: 4, name: "Sophie Chen", solved: 187, streak: 19 },
                        { rank: 5, name: "David Kim", solved: 176, streak: 12 }
                      ].map((user) => (
                        <div key={user.rank} className="flex items-center justify-between p-2 border-b last:border-0">
                          <div className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${
                              user.rank === 1 ? "bg-yellow-500" : 
                              user.rank === 2 ? "bg-gray-400" : 
                              user.rank === 3 ? "bg-amber-700" : "bg-gray-200 text-gray-700"
                            }`}>
                              {user.rank}
                            </div>
                            <span className="font-medium">{user.name}</span>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="flex items-center text-sm">
                              <Check className="h-4 w-4 mr-1 text-green-500" />
                              <span>{user.solved} solved</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Clock className="h-4 w-4 mr-1 text-orange-500" />
                              <span>{user.streak} day streak</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Progress Tab */}
              <TabsContent value="progress">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart2 className="mr-2 h-5 w-5 text-interview-purple" />
                        Problem Solving Progress
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Easy (24/50)</span>
                            <span>48%</span>
                          </div>
                          <Progress value={48} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Medium (12/75)</span>
                            <span>16%</span>
                          </div>
                          <Progress value={16} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Hard (5/40)</span>
                            <span>12%</span>
                          </div>
                          <Progress value={12} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Category Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Arrays & Strings</span>
                            <span>18/25</span>
                          </div>
                          <Progress value={72} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Dynamic Programming</span>
                            <span>7/20</span>
                          </div>
                          <Progress value={35} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Trees & Graphs</span>
                            <span>9/15</span>
                          </div>
                          <Progress value={60} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>System Design</span>
                            <span>4/10</span>
                          </div>
                          <Progress value={40} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Recent Activities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { problem: "Valid Parentheses", date: "2 hours ago", status: "Solved", difficulty: "Easy" },
                          { problem: "Merge Sorted Arrays", date: "Yesterday", status: "Solved", difficulty: "Easy" },
                          { problem: "LRU Cache", date: "3 days ago", status: "Attempted", difficulty: "Medium" },
                          { problem: "Binary Tree Level Order Traversal", date: "5 days ago", status: "Solved", difficulty: "Medium" }
                        ].map((activity, index) => (
                          <div key={index} className="flex items-center justify-between p-2 border-b last:border-0">
                            <div>
                              <div className="font-medium">{activity.problem}</div>
                              <div className="text-sm text-muted-foreground">{activity.date}</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                activity.status === "Solved" 
                                  ? "bg-green-500/10 text-green-600" 
                                  : "bg-yellow-500/10 text-yellow-600"
                              }`}>
                                {activity.status}
                              </span>
                              <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(activity.difficulty)}`}>
                                {activity.difficulty}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CodingPractice;
