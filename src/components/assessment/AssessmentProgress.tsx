
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface AssessmentProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  timeLeft?: number;
  totalTime?: number;
}

export const AssessmentProgress = ({
  currentQuestion,
  totalQuestions,
  timeLeft,
  totalTime,
}: AssessmentProgressProps) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>Question {currentQuestion} of {totalQuestions}</span>
        {timeLeft && totalTime && (
          <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')} left</span>
        )}
      </div>
      
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Progress value={progress} className="h-2" />
      </motion.div>
    </div>
  );
};
