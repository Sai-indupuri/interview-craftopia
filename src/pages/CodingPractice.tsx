
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Code, PlayCircle, RotateCcw, Check, ArrowDown } from "lucide-react";

const CodingPractice = () => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Write your code here\n\nfunction solve(input) {\n  // Your solution\n  return input;\n}\n\nconsole.log(solve([1, 2, 3]));");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput("Running code...");
    
    // Simulate code execution after a delay
    setTimeout(() => {
      setOutput("Output:\n[1, 2, 3]\n\nExecution completed successfully.");
      setIsRunning(false);
    }, 1500);
  };

  const handleResetCode = () => {
    setCode("// Write your code here\n\nfunction solve(input) {\n  // Your solution\n  return input;\n}\n\nconsole.log(solve([1, 2, 3]));");
    setOutput("");
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
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Two Sum</CardTitle>
                <CardDescription>Easy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
                </p>
                
                <div className="bg-muted p-3 rounded-md mb-4">
                  <p className="text-sm font-mono">
                    <strong>Example:</strong><br />
                    Input: nums = [2,7,11,15], target = 9<br />
                    Output: [0,1]<br />
                    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2 py-1 bg-interview-blue/10 text-interview-blue text-xs rounded-full">
                    Arrays
                  </span>
                  <span className="px-2 py-1 bg-interview-purple/10 text-interview-purple text-xs rounded-full">
                    Hash Table
                  </span>
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CodingPractice;
