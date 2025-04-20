
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, ChevronRight } from "lucide-react";
import { LucideIcon } from 'lucide-react';

interface AssessmentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  time: string;
  questions: number;
  color: string;
  category: string;
}

const AssessmentCard: React.FC<AssessmentCardProps> = ({
  title,
  description,
  icon: Icon,
  time,
  questions,
  color,
  category,
}) => {
  const createAssessmentUrl = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <Card className="hover-scale">
      <CardHeader>
        <div className={`inline-flex items-center justify-center p-2 rounded-lg ${color} mb-4`}>
          <Icon size={24} />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-muted-foreground">
            <Clock size={16} className="mr-1" />
            <span>{time} min</span>
          </div>
          <div className="text-muted-foreground">
            {questions} questions
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link 
          to={`/assessment/${category}/${createAssessmentUrl(title)}`} 
          className="w-full"
        >
          <Button className="w-full group">
            Start Assessment
            <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AssessmentCard;
