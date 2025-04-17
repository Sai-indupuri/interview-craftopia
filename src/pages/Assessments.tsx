
import React from 'react';
import { AssessmentInterface } from '@/components/assessment/AssessmentInterface';
import type { Question } from '@/components/assessment/QuestionTypes';

const sampleQuestions: Question[] = [
  {
    id: '1',
    type: 'mcq',
    text: 'What is the primary purpose of React.js?',
    options: [
      { id: '1a', text: 'Server-side rendering' },
      { id: '1b', text: 'Building user interfaces' },
      { id: '1c', text: 'Database management' },
      { id: '1d', text: 'Backend development' }
    ]
  },
  {
    id: '2',
    type: 'theory',
    text: 'Explain the concept of state management in React and why it is important.',
  },
  {
    id: '3',
    type: 'mcq',
    text: 'Which hook is used for side effects in React?',
    options: [
      { id: '3a', text: 'useState' },
      { id: '3b', text: 'useEffect' },
      { id: '3c', text: 'useContext' },
      { id: '3d', text: 'useReducer' }
    ]
  }
];

const Assessments = () => {
  const handleAssessmentComplete = (answers: Record<string, string>) => {
    console.log('Assessment completed:', answers);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 gradient-text">
          Technical Assessment
        </h1>
        
        <AssessmentInterface
          questions={sampleQuestions}
          onComplete={handleAssessmentComplete}
        />
      </div>
    </div>
  );
};

export default Assessments;
