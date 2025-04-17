
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

interface QuestionDisplayProps {
  question: string;
}

export const QuestionDisplay = ({ question }: QuestionDisplayProps) => {
  const [key, setKey] = useState(0); // Used to trigger animation on question change
  
  useEffect(() => {
    // Reset animation key when question changes
    setKey(prevKey => prevKey + 1);
  }, [question]);

  return (
    <Card className="bg-muted/80 backdrop-blur-sm shadow-lg border-primary/10">
      <CardContent className="p-4">
        <AnimatePresence mode="wait">
          <motion.p 
            key={key}
            className="text-lg leading-relaxed font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {question}
          </motion.p>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};
