
import React from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface TheoryQuestionProps {
  question: string;
  answer: string;
  onAnswerChange: (answer: string) => void;
}

export const TheoryQuestion = ({
  question,
  answer,
  onAnswerChange,
}: TheoryQuestionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-foreground">{question}</h3>
        
        <Textarea
          value={answer}
          onChange={(e) => onAnswerChange(e.target.value)}
          placeholder="Type your answer here..."
          className="min-h-[150px] resize-y"
        />
      </Card>
    </motion.div>
  );
};
