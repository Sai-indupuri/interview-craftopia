import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Timer } from "./Timer";
import { QuestionDisplay } from "./QuestionDisplay";
import { VideoFeed } from "./VideoFeed";
import { ChatInterface } from "./ChatInterface";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, Menu, X, Info, Settings } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

interface InterviewRoomProps {
  mode: "video" | "chat";
  questions: string[];
  onComplete: () => void;
}

const InterviewRoom = ({ mode, questions, onComplete }: InterviewRoomProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTimerComplete, setIsTimerComplete] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setIsTimerComplete(false);
      
      toast({
        title: "Next Question",
        description: `Moving to question ${currentQuestionIndex + 2} of ${questions.length}`,
      });
    } else {
      toast({
        title: "Interview Complete",
        description: "Great job! Your interview session is now complete.",
      });
      onComplete();
    }
  };

  // Show a welcome message when the interview starts
  useEffect(() => {
    toast({
      title: "Interview Started",
      description: `You have ${questions.length} questions to answer. Good luck!`,
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 min-h-screen bg-background">
      <div className={`w-full md:w-2/3 space-y-4 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'md:w-2/3' : 'md:w-[85%]'}`}>
        <div className="flex items-center justify-between bg-card p-4 rounded-lg shadow-sm border border-border/50">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          
          <h1 className="text-xl font-semibold">
            {mode === "video" ? "Video Interview" : "Chat Interview"} Session
          </h1>
          
          <div className="flex items-center space-x-2">
            
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Interview Settings</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Dark Mode</span>
                    <input type="checkbox" className="toggle" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Notifications</span>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sound Effects</span>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" size="sm" onClick={onComplete}>
              <X className="h-4 w-4 mr-1" /> Exit
            </Button>
          </div>
        </div>
        
        {mode === "video" ? (
          <VideoFeed />
        ) : (
          <ChatInterface question={questions[currentQuestionIndex]} />
        )}
      </div>

      <div className={`w-full ${isSidebarOpen ? 'md:w-1/3' : 'md:w-[15%]'} space-y-4 transition-all duration-300 ease-in-out relative`}>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="absolute -left-3 top-1/2 transform -translate-y-1/2 hidden md:flex bg-card rounded-full shadow-md border border-border z-10"
        >
          <ChevronLeft className={`h-5 w-5 transition-transform ${!isSidebarOpen ? 'rotate-180' : ''}`} />
        </Button>
        
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
          <Card className={`p-4 shadow-md border-primary/10 overflow-hidden ${!isSidebarOpen ? 'md:p-2' : ''}`}>
            <div className={`flex justify-between items-center mb-4 ${!isSidebarOpen ? 'md:flex-col md:items-center' : ''}`}>
              <h2 className={`text-lg font-semibold whitespace-nowrap ${!isSidebarOpen ? 'md:text-xs md:mt-2 md:mb-4 md:rotate-90' : ''}`}>
                {!isSidebarOpen && window.innerWidth >= 768 ? `Q${currentQuestionIndex + 1}/${questions.length}` : `Question ${currentQuestionIndex + 1}/${questions.length}`}
              </h2>
              <Timer duration={180} onComplete={() => setIsTimerComplete(true)} />
            </div>
            
            <div className={`${!isSidebarOpen ? 'md:hidden' : ''}`}>
              <QuestionDisplay question={questions[currentQuestionIndex]} />
              
              <div className="mt-4 flex justify-end items-center">
                <Button
                  className="bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90 transition-all"
                  onClick={handleNextQuestion}
                >
                  Next Question
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Progress</span>
                  <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full mt-2">
                  <div 
                    className="h-2 bg-gradient-to-r from-interview-blue to-interview-purple rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InterviewRoom;
