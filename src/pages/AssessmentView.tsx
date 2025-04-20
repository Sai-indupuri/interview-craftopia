
// Import the components and hooks
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AssessmentNav from '@/components/assessment/AssessmentNav';
import AssessmentTimer from '@/components/assessment/AssessmentTimer';
import AssessmentControls from '@/components/assessment/AssessmentControls';
import AssessmentMCQ from '@/components/assessment/AssessmentMCQ';
import AssessmentTheory from '@/components/assessment/AssessmentTheory';
import AssessmentHelp from '@/components/assessment/AssessmentHelp';
import { useToast } from '@/hooks/use-toast';
import { assessmentCategories } from '@/data/assessmentData';

// Types for the questions
interface Option {
  id: string;
  text: string;
}

interface MCQQuestion {
  id: number;
  type: "mcq";
  text: string;
  options: Option[];
  correctAnswer: string;
  explanation: string;
}

interface TheoryQuestion {
  id: number;
  type: "theory";
  text: string;
  wordLimit?: number;
  expectedAnswer?: string;
}

type Question = MCQQuestion | TheoryQuestion;

interface Answer {
  questionId: number;
  selectedOption?: string;
  textAnswer?: string;
  isCorrect?: boolean;
}

const AssessmentView = () => {
  const { categoryId, assessmentTitle } = useParams<{ categoryId: string; assessmentTitle: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // State variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [assessmentCompleted, setAssessmentCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(3600); // 1 hour in seconds
  const [showHelp, setShowHelp] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  
  // Sample questions - in a real app, this would come from an API
  const questions: Question[] = [
    {
      id: 1,
      type: "mcq",
      text: "What is the time complexity of binary search?",
      options: [
        { id: "a", text: "O(n)" },
        { id: "b", text: "O(log n)" },
        { id: "c", text: "O(n log n)" },
        { id: "d", text: "O(n²)" }
      ],
      correctAnswer: "b",
      explanation: "Binary search divides the search interval in half with each comparison, resulting in a logarithmic time complexity O(log n)."
    },
    {
      id: 2,
      type: "mcq",
      text: "Which data structure follows the Last In First Out (LIFO) principle?",
      options: [
        { id: "a", text: "Queue" },
        { id: "b", text: "Stack" },
        { id: "c", text: "Linked List" },
        { id: "d", text: "Binary Tree" }
      ],
      correctAnswer: "b",
      explanation: "A stack follows the LIFO principle, where the last element inserted is the first one to be removed."
    },
    {
      id: 3,
      type: "theory",
      text: "Explain the concept of recursion and provide a simple example.",
      wordLimit: 200,
      expectedAnswer: "Recursion is a programming technique where a function calls itself to solve a problem. It breaks down a problem into smaller instances of the same problem until it reaches a base case. Example: calculating factorial using recursion."
    },
    {
      id: 4,
      type: "mcq",
      text: "Which sorting algorithm has the worst-case time complexity of O(n log n)?",
      options: [
        { id: "a", text: "Bubble Sort" },
        { id: "b", text: "Insertion Sort" },
        { id: "c", text: "Merge Sort" },
        { id: "d", text: "Selection Sort" }
      ],
      correctAnswer: "c",
      explanation: "Merge Sort divides the array into halves, sorts them, and then merges them, maintaining a worst-case time complexity of O(n log n)."
    },
    {
      id: 5,
      type: "theory",
      text: "Describe the differences between a breadth-first search (BFS) and depth-first search (DFS) algorithm.",
      wordLimit: 150,
      expectedAnswer: "BFS explores all neighbors at the present depth before moving to nodes at the next depth level, using a queue data structure. DFS explores as far as possible along each branch before backtracking, using a stack or recursion. BFS is better for finding the shortest path, while DFS may use less memory in some cases."
    }
  ];
  
  // Initialize answers
  useEffect(() => {
    if (questions.length > 0 && answers.length === 0) {
      const initialAnswers = questions.map(q => ({
        questionId: q.id,
        selectedOption: undefined,
        textAnswer: undefined,
        isCorrect: undefined
      }));
      setAnswers(initialAnswers);
    }
  }, [questions]);
  
  // Handle starting the assessment
  const handleStartAssessment = () => {
    setAssessmentStarted(true);
    toast({
      title: "Assessment Started",
      description: "Good luck! You have 60 minutes to complete the assessment."
    });
  };
  
  // Handle submitting the assessment
  const handleSubmitAssessment = () => {
    // Check if all questions are answered
    const unansweredCount = answers.filter(a => 
      (questions.find(q => q.id === a.questionId)?.type === "mcq" && !a.selectedOption) ||
      (questions.find(q => q.id === a.questionId)?.type === "theory" && (!a.textAnswer || a.textAnswer.trim() === ""))
    ).length;
    
    if (unansweredCount > 0) {
      toast({
        title: `${unansweredCount} question${unansweredCount > 1 ? 's' : ''} unanswered`,
        description: "Are you sure you want to submit? You can review your answers before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    // Process the answers and calculate the score
    const processedAnswers = answers.map(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      if (question?.type === "mcq") {
        return {
          ...answer,
          isCorrect: answer.selectedOption === question.correctAnswer
        };
      }
      return answer;
    });
    
    setAnswers(processedAnswers);
    setAssessmentCompleted(true);
    
    // Navigate to results page
    navigate(`/assessment-results/${categoryId}/${assessmentTitle}`);
  };
  
  // Handle MCQ answer selection
  const handleMCQAnswerSelect = (optionId: string) => {
    setAnswers(prev => prev.map(a => 
      a.questionId === currentQuestion?.id ? { ...a, selectedOption: optionId } : a
    ));
  };
  
  // Handle theory answer input
  const handleTheoryAnswerChange = (text: string) => {
    setAnswers(prev => prev.map(a => 
      a.questionId === currentQuestion?.id ? { ...a, textAnswer: text } : a
    ));
  };
  
  // Navigation functions
  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  const goToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index);
    }
  };
  
  // Timer functions
  const handleTimeUp = () => {
    toast({
      title: "Time's Up!",
      description: "Your assessment will be automatically submitted.",
      variant: "destructive"
    });
    handleSubmitAssessment();
  };
  
  // Get current question
  const currentQuestion = questions[currentQuestionIndex];
  
  // Get current answer
  const currentAnswer = answers.find(a => a.questionId === currentQuestion?.id);
  
  // Check if current question has an answer
  const hasAnswer = currentQuestion?.type === "mcq" 
    ? !!currentAnswer?.selectedOption 
    : !!(currentAnswer?.textAnswer && currentAnswer.textAnswer.trim() !== "");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-muted/30">
        {!assessmentStarted ? (
          // Assessment Start Screen
          <div className="container py-10">
            <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-lg border p-8">
              <h1 className="text-3xl font-bold mb-6">
                {assessmentTitle?.split('-').join(' ')}
              </h1>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Assessment Overview</h2>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-32 text-muted-foreground">Questions:</span>
                      <span>{questions.length}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-32 text-muted-foreground">Time Limit:</span>
                      <span>60 minutes</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-32 text-muted-foreground">Category:</span>
                      <span>{categoryId}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-32 text-muted-foreground">Question Types:</span>
                      <span>Multiple Choice, Theory</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Read each question carefully before answering.</li>
                    <li>You can navigate between questions using the navigation panel.</li>
                    <li>Your answers are automatically saved as you proceed.</li>
                    <li>Use the timer to manage your time effectively.</li>
                    <li>Once you submit, you cannot return to the assessment.</li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <button 
                    onClick={handleStartAssessment}
                    className="w-full py-3 bg-gradient-to-r from-interview-blue to-interview-purple text-white rounded-md font-medium hover:opacity-90 transition-opacity"
                  >
                    Start Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Assessment In Progress
          <div className="container py-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left sidebar - Assessment Navigation */}
              <div className="md:w-1/4">
                <div className="bg-card rounded-lg border shadow-sm p-4 sticky top-6">
                  <AssessmentNav 
                    questions={questions}
                    currentIndex={currentQuestionIndex}
                    userAnswers={answers.reduce((acc, answer) => {
                      return { ...acc, [answer.questionId]: answer };
                    }, {})}
                    flaggedQuestions={flaggedQuestions}
                    onSelectQuestion={goToQuestion}
                  />
                  
                  <AssessmentTimer 
                    time={timeRemaining}
                    onComplete={handleTimeUp}
                  />
                  
                  <button
                    onClick={() => setShowHelp(true)}
                    className="mt-4 w-full py-2 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors"
                  >
                    Need Help?
                  </button>
                </div>
              </div>
              
              {/* Main content - Current Question */}
              <div className="md:w-3/4">
                <div className="bg-card rounded-lg border shadow-sm p-6 mb-6">
                  <div className="mb-4 pb-4 border-b">
                    <h2 className="text-sm font-medium text-muted-foreground">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </h2>
                    <h1 className="text-xl font-semibold mt-1">
                      {currentQuestion?.text}
                    </h1>
                  </div>
                  
                  {currentQuestion?.type === "mcq" && (
                    <AssessmentMCQ 
                      question={currentQuestion as MCQQuestion}
                      selectedAnswer={currentAnswer?.selectedOption}
                      onAnswerSelect={handleMCQAnswerSelect}
                    />
                  )}
                  
                  {currentQuestion?.type === "theory" && (
                    <AssessmentTheory 
                      question={currentQuestion as TheoryQuestion}
                      userAnswer={currentAnswer?.textAnswer || ""}
                      onAnswerChange={handleTheoryAnswerChange}
                    />
                  )}
                </div>
                
                <AssessmentControls
                  isFirstQuestion={currentQuestionIndex === 0}
                  isLastQuestion={currentQuestionIndex === questions.length - 1}
                  onPrevious={goToPreviousQuestion}
                  onNext={goToNextQuestion}
                  onComplete={handleSubmitAssessment}
                  hasAnswer={hasAnswer}
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Help Dialog */}
        {showHelp && (
          <AssessmentHelp isOpen={showHelp} onClose={() => setShowHelp(false)} />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default AssessmentView;
