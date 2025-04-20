
import React, { useState, useEffect } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface TheoryQuestion {
  id: number;
  type: 'theory';
  text: string;
  expectedAnswer: string;
  wordLimit: number;
}

interface AssessmentTheoryProps {
  question: TheoryQuestion;
  userAnswer: string;
  onAnswerChange: (answer: string) => void;
}

const AssessmentTheory: React.FC<AssessmentTheoryProps> = ({
  question,
  userAnswer,
  onAnswerChange,
}) => {
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (userAnswer) {
      const words = userAnswer.trim().split(/\s+/).filter(word => word.length > 0);
      setWordCount(words.length);
    } else {
      setWordCount(0);
    }
  }, [userAnswer]);

  const isOverLimit = wordCount > question.wordLimit;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{question.text}</h3>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Write your answer below
          </span>
          <Badge variant={isOverLimit ? "destructive" : "outline"}>
            {wordCount}/{question.wordLimit} words
          </Badge>
        </div>
        
        <Textarea
          placeholder="Your answer here..."
          value={userAnswer}
          onChange={(e) => onAnswerChange(e.target.value)}
          className="min-h-[200px]"
        />
        
        {isOverLimit && (
          <p className="text-sm text-destructive">
            Your answer exceeds the word limit.
          </p>
        )}
      </div>
    </div>
  );
};

export default AssessmentTheory;
