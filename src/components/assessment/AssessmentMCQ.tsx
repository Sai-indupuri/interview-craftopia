
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface MCQOption {
  id: string;
  text: string;
}

interface MCQQuestion {
  id: number;
  type: 'mcq';
  text: string;
  options: MCQOption[];
  correctAnswer: string;
  explanation: string;
}

interface AssessmentMCQProps {
  question: MCQQuestion;
  selectedAnswer?: string;
  onAnswerSelect: (answer: string) => void;
}

const AssessmentMCQ: React.FC<AssessmentMCQProps> = ({ 
  question, 
  selectedAnswer, 
  onAnswerSelect 
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{question.text}</h3>
      
      <RadioGroup
        value={selectedAnswer}
        onValueChange={onAnswerSelect}
        className="space-y-3"
      >
        {question.options.map((option) => (
          <div
            key={option.id}
            className={`flex items-center space-x-2 rounded-lg border p-4 transition-all hover:bg-accent/50 ${
              selectedAnswer === option.id ? "border-primary bg-accent/30" : ""
            }`}
          >
            <RadioGroupItem
              value={option.id}
              id={`option-${question.id}-${option.id}`}
              className="mt-0"
            />
            <Label
              htmlFor={`option-${question.id}-${option.id}`}
              className="w-full cursor-pointer font-normal"
            >
              {option.text}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default AssessmentMCQ;
