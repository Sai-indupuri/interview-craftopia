
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface ChatInterfaceProps {
  question: string;
}

export const ChatInterface = ({ question }: ChatInterfaceProps) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the answer to a backend
    console.log('Answer submitted:', answer);
    setAnswer('');
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardContent className="flex-1 p-4 flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="bg-muted p-3 rounded-lg">
            <p className="font-medium">Interviewer</p>
            <p className="mt-1 text-muted-foreground">{question}</p>
          </div>
          
          {answer && (
            <div className="bg-primary/10 p-3 rounded-lg ml-auto">
              <p className="font-medium">You</p>
              <p className="mt-1">{answer}</p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <Textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="flex-1"
            rows={3}
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
