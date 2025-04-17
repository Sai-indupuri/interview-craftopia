
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { MCQOption } from './QuestionTypes';

interface MCQQuestionProps {
  question: string;
  options: MCQOption[];
  selectedOption: string;
  onOptionSelect: (optionId: string) => void;
}

export const MCQQuestion = ({
  question,
  options,
  selectedOption,
  onOptionSelect,
}: MCQQuestionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-foreground">{question}</h3>
        
        <RadioGroup
          value={selectedOption}
          onValueChange={onOptionSelect}
          className="space-y-3"
        >
          {options.map((option) => (
            <div
              key={option.id}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <RadioGroupItem value={option.id} id={option.id} />
              <Label
                htmlFor={option.id}
                className="flex-grow cursor-pointer text-foreground"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </Card>
    </motion.div>
  );
};
