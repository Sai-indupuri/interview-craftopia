
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface QuestionDisplayProps {
  question: string;
}

export const QuestionDisplay = ({ question }: QuestionDisplayProps) => {
  return (
    <Card className="bg-muted">
      <CardContent className="p-4">
        <p className="text-lg leading-relaxed">{question}</p>
      </CardContent>
    </Card>
  );
};
