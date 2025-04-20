
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { ChevronLeft, ChevronRight, Clock, HelpCircle, Flag } from "lucide-react";
import AssessmentMCQ from '@/components/assessment/AssessmentMCQ';
import AssessmentTheory from '@/components/assessment/AssessmentTheory';
import AssessmentControls from '@/components/assessment/AssessmentControls';
import AssessmentTimer from '@/components/assessment/AssessmentTimer';
import AssessmentNav from '@/components/assessment/AssessmentNav';
import AssessmentHelp from '@/components/assessment/AssessmentHelp';
import { assessmentCategories } from '@/data/assessmentData'; 

const AssessmentView = () => {
  const { categoryId, assessmentTitle } = useParams();
  const navigate = useNavigate();
  
  // Find the selected assessment data
  const category = assessmentCategories.find(cat => cat.id === categoryId);
  const assessment = category?.assessments.find(
    a => a.title.toLowerCase().replace(/\s+/g, '-') === assessmentTitle
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAssessmentComplete, setIsAssessmentComplete] = useState(false);
  
  // Mock questions data structure
  const [questions] = useState([
    {
      id: 1,
      type: 'mcq',
      text: 'Which data structure would be most efficient for implementing a priority queue?',
      options: [
        { id: 'a', text: 'Array' },
        { id: 'b', text: 'Linked List' },
        { id: 'c', text: 'Heap' },
        { id: 'd', text: 'Hash Table' }
      ],
      correctAnswer: 'c',
      explanation: 'A Heap data structure provides O(log n) time complexity for insertion and deletion operations while maintaining the priority order, making it the most efficient implementation for priority queues.'
    },
    {
      id: 2,
      type: 'theory',
      text: 'Explain the difference between synchronous and asynchronous programming with an example.',
      expectedAnswer: 'Synchronous programming executes code sequentially, blocking further execution until the current operation completes. Asynchronous programming allows operations to run in the background while the program continues execution. Example: Reading a file synchronously would block the program until the file is completely read, while asynchronous file reading would continue program execution and handle the file data when it\'s available.',
      wordLimit: 200
    },
    {
      id: 3,
      type: 'mcq',
      text: 'What is the time complexity of the quicksort algorithm in the average case?',
      options: [
        { id: 'a', text: 'O(n)' },
        { id: 'b', text: 'O(n log n)' },
        { id: 'c', text: 'O(n²)' },
        { id: 'd', text: 'O(log n)' }
      ],
      correctAnswer: 'b',
      explanation: 'Quicksort has an average case time complexity of O(n log n), making it one of the most efficient sorting algorithms in practice.'
    },
    {
      id: 4,
      type: 'mcq',
      text: 'Which SQL clause is used to filter the results of a GROUP BY?',
      options: [
        { id: 'a', text: 'WHERE' },
        { id: 'b', text: 'HAVING' },
        { id: 'c', text: 'FILTER' },
        { id: 'd', text: 'ON' }
      ],
      correctAnswer: 'b',
      explanation: 'The HAVING clause is used to filter the results of GROUP BY operations, while the WHERE clause filters rows before grouping.'
    },
    {
      id: 5,
      type: 'theory',
      text: 'Describe how load balancing works in distributed systems and mention two common algorithms used.',
      expectedAnswer: 'Load balancing distributes incoming network traffic across multiple servers to ensure no single server is overwhelmed. This improves responsiveness and availability. Common algorithms include Round Robin (distributes requests sequentially) and Least Connection (sends requests to servers with fewest active connections).',
      wordLimit: 150
    },
  ]);

  // Set the initial timer when the component mounts
  useEffect(() => {
    if (assessment) {
      // Convert minutes to seconds
      const timeInSeconds = parseInt(assessment.time) * 60;
      setTimeRemaining(timeInSeconds);
    }
  }, [assessment]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleCompleteAssessment();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerChange = (answer: any) => {
    setUserAnswers({
      ...userAnswers,
      [questions[currentQuestionIndex].id]: answer
    });
  };

  const handleToggleFlag = () => {
    const questionId = questions[currentQuestionIndex].id;
    
    if (flaggedQuestions.includes(questionId)) {
      setFlaggedQuestions(flaggedQuestions.filter(id => id !== questionId));
      toast({
        title: "Question unflagged",
        description: "You've removed the flag from this question."
      });
    } else {
      setFlaggedQuestions([...flaggedQuestions, questionId]);
      toast({
        title: "Question flagged",
        description: "You can review flagged questions later."
      });
    }
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleCompleteAssessment = () => {
    setIsAssessmentComplete(true);
    navigate(`/assessment-results/${categoryId}/${assessmentTitle}`);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isFlagged = flaggedQuestions.includes(currentQuestion.id);
  const hasAnswer = userAnswers[currentQuestion.id] !== undefined;

  if (!assessment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Assessment not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                {assessment.title}
              </h1>
              <p className="text-muted-foreground">
                {category?.label} Assessment • {questions.length} questions
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <AssessmentTimer 
                timeInSeconds={timeRemaining} 
                isPaused={isPaused}
                onTimeUpdate={setTimeRemaining}
                onComplete={handleCompleteAssessment}
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsHelpOpen(true)}
              >
                <HelpCircle className="h-4 w-4 mr-1" />
                Help
              </Button>
            </div>
          </div>
          
          <div className="mb-4">
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between mt-1 text-sm text-muted-foreground">
              <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
              <span>{Math.round(progressPercentage)}% complete</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left sidebar for question navigation */}
            <div className="hidden md:block">
              <AssessmentNav 
                questions={questions}
                currentIndex={currentQuestionIndex}
                userAnswers={userAnswers}
                flaggedQuestions={flaggedQuestions}
                onSelectQuestion={handleJumpToQuestion}
              />
            </div>
            
            {/* Main content area */}
            <div className="md:col-span-3 space-y-6">
              <div className="bg-card border rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">Question {currentQuestionIndex + 1}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleToggleFlag}
                    className={isFlagged ? "text-yellow-500" : ""}
                  >
                    <Flag className={`h-4 w-4 mr-1 ${isFlagged ? "fill-yellow-500" : ""}`} />
                    {isFlagged ? "Flagged" : "Flag for review"}
                  </Button>
                </div>
                
                {currentQuestion.type === "mcq" && (
                  <AssessmentMCQ 
                    question={currentQuestion} 
                    selectedAnswer={userAnswers[currentQuestion.id]}
                    onAnswerSelect={handleAnswerChange}
                  />
                )}
                
                {currentQuestion.type === "theory" && (
                  <AssessmentTheory 
                    question={currentQuestion}
                    userAnswer={userAnswers[currentQuestion.id] || ""}
                    onAnswerChange={handleAnswerChange}
                  />
                )}
              </div>
              
              <AssessmentControls
                isFirstQuestion={currentQuestionIndex === 0}
                isLastQuestion={currentQuestionIndex === questions.length - 1}
                onPrevious={handlePrevQuestion}
                onNext={handleNextQuestion}
                onComplete={handleCompleteAssessment}
                hasAnswer={hasAnswer}
              />
            </div>
          </div>
        </div>
      </main>
      
      <AssessmentHelp 
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
      
      <Footer />
    </div>
  );
};

export default AssessmentView;
