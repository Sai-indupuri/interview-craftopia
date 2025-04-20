
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Flag } from "lucide-react";

interface AssessmentNavProps {
  questions: Array<{ id: number; type: string }>;
  currentIndex: number;
  userAnswers: Record<number, any>;
  flaggedQuestions: number[];
  onSelectQuestion: (index: number) => void;
}

const AssessmentNav: React.FC<AssessmentNavProps> = ({
  questions,
  currentIndex,
  userAnswers,
  flaggedQuestions,
  onSelectQuestion
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="font-medium mb-4">Question Navigator</h3>
      
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {/* Question type buttons */}
          <div>
            <h4 className="text-sm font-medium mb-2">Filter by type</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer">
                All ({questions.length})
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                MCQ ({questions.filter(q => q.type === 'mcq').length})
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                Theory ({questions.filter(q => q.type === 'theory').length})
              </Badge>
              <Badge variant="outline" className="cursor-pointer flex items-center">
                <Flag className="h-3 w-3 mr-1" />
                Flagged ({flaggedQuestions.length})
              </Badge>
            </div>
          </div>
          
          {/* Question buttons */}
          <div>
            <h4 className="text-sm font-medium mb-2">Questions</h4>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((question, index) => {
                const isAnswered = userAnswers[question.id] !== undefined;
                const isFlagged = flaggedQuestions.includes(question.id);
                const isCurrent = index === currentIndex;
                
                return (
                  <Button
                    key={question.id}
                    variant={isCurrent ? "default" : "outline"}
                    size="sm"
                    className={`h-8 w-8 p-0 ${
                      isAnswered && !isCurrent ? "border-green-500" : ""
                    } ${isFlagged ? "border-yellow-500" : ""}`}
                    onClick={() => onSelectQuestion(index)}
                  >
                    {index + 1}
                  </Button>
                );
              })}
            </div>
          </div>
          
          {/* Question status */}
          <div className="pt-2 border-t">
            <h4 className="text-sm font-medium mb-2">Status</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2" />
                <span>Answered: {Object.keys(userAnswers).length}</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2" />
                <span>Flagged: {flaggedQuestions.length}</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-gray-300 mr-2" />
                <span>
                  Unanswered: {questions.length - Object.keys(userAnswers).length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default AssessmentNav;
