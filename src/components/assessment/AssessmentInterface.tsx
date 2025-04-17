
import React, { useState } from 'react';
import { MCQQuestion } from './MCQQuestion';
import { TheoryQuestion } from './TheoryQuestion';
import { AssessmentProgress } from './AssessmentProgress';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BookOpen, HelpCircle } from "lucide-react";
import type { Question } from './QuestionTypes';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";

interface AssessmentInterfaceProps {
  questions: Question[];
  onComplete: (answers: Record<string, string>) => void;
}

export const AssessmentInterface = ({ questions, onComplete }: AssessmentInterfaceProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleNext = () => {
    if (!answers[currentQuestion.id]) {
      toast({
        title: "Please answer the question",
        description: "You need to provide an answer before moving to the next question.",
        variant: "destructive",
      });
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <AssessmentProgress
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
        />
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Need Help?</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Take your time to read each question carefully. For multiple choice questions,
                select the best answer. For theory questions, try to be concise and specific
                in your response.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="min-h-[300px]">
        {currentQuestion.type === 'mcq' ? (
          <MCQQuestion
            question={currentQuestion.text}
            options={currentQuestion.options || []}
            selectedOption={answers[currentQuestion.id] || ''}
            onOptionSelect={handleAnswer}
          />
        ) : (
          <TheoryQuestion
            question={currentQuestion.text}
            answer={answers[currentQuestion.id] || ''}
            onAnswerChange={handleAnswer}
          />
        )}
      </div>

      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        
        <Button
          onClick={handleNext}
          className="bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90"
        >
          {currentQuestionIndex === questions.length - 1 ? 'Complete' : 'Next'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
