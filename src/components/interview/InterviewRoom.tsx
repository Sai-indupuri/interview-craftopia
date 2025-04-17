
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Timer } from "./Timer";
import { QuestionDisplay } from "./QuestionDisplay";
import { VideoFeed } from "./VideoFeed";
import { ChatInterface } from "./ChatInterface";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface InterviewRoomProps {
  mode: "video" | "chat";
  questions: string[];
  onComplete: () => void;
}

const InterviewRoom = ({ mode, questions, onComplete }: InterviewRoomProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTimerComplete, setIsTimerComplete] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setIsTimerComplete(false);
    } else {
      onComplete();
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 min-h-screen bg-background">
      <div className="w-full md:w-2/3 space-y-4">
        {mode === "video" ? (
          <VideoFeed />
        ) : (
          <ChatInterface question={questions[currentQuestionIndex]} />
        )}
      </div>

      <div className="w-full md:w-1/3 space-y-4">
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Question {currentQuestionIndex + 1}/{questions.length}</h2>
            <Timer duration={180} onComplete={() => setIsTimerComplete(true)} />
          </div>
          <QuestionDisplay question={questions[currentQuestionIndex]} />
          <Button
            className="w-full mt-4"
            onClick={handleNextQuestion}
            disabled={!isTimerComplete}
          >
            Next Question
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default InterviewRoom;
