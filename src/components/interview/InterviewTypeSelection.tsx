
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BrainCircuit, Code, Users } from "lucide-react";

interface InterviewType {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const interviewTypes: InterviewType[] = [
  {
    id: "technical",
    title: "Technical Interview",
    description: "Technical knowledge and problem-solving questions",
    icon: Code,
    color: "text-interview-blue"
  },
  {
    id: "behavioral",
    title: "Behavioral Interview",
    description: "Questions about past experiences and soft skills",
    icon: Users,
    color: "text-interview-purple"
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Architecture and design discussions for senior roles",
    icon: BrainCircuit,
    color: "text-interview-teal"
  }
];

interface InterviewTypeSelectionProps {
  selectedType: string;
  onTypeSelect: (type: string) => void;
}

export const InterviewTypeSelection = ({ selectedType, onTypeSelect }: InterviewTypeSelectionProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {interviewTypes.map((type) => (
        <Card 
          key={type.id}
          className={`cursor-pointer hover-scale transition-all ${selectedType === type.id ? 'ring-2 ring-primary' : ''}`}
          onClick={() => onTypeSelect(type.id)}
        >
          <CardHeader>
            <div className={`${type.color} mb-2`}>
              <type.icon size={24} />
            </div>
            <CardTitle>{type.title}</CardTitle>
            <CardDescription>{type.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};
