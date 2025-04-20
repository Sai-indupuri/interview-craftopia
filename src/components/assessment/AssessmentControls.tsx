
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

interface AssessmentControlsProps {
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onComplete: () => void;
  hasAnswer: boolean;
}

const AssessmentControls: React.FC<AssessmentControlsProps> = ({
  isFirstQuestion,
  isLastQuestion,
  onPrevious,
  onNext,
  onComplete,
  hasAnswer
}) => {
  return (
    <div className="flex items-center justify-between">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={isFirstQuestion}
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Previous
      </Button>
      
      <div className="flex items-center space-x-2">
        {isLastQuestion ? (
          <Button 
            onClick={onComplete}
            className="bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90"
          >
            <CheckCircle className="mr-1 h-4 w-4" />
            Complete Assessment
          </Button>
        ) : (
          <Button 
            onClick={onNext}
            className={hasAnswer ? "bg-interview-blue hover:bg-interview-blue/90" : ""}
          >
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default AssessmentControls;
