
import React from 'react';
import AssessmentCard from './AssessmentCard';

interface Assessment {
  title: string;
  description: string;
  icon: any;
  time: string;
  questions: number;
  color: string;
}

interface AssessmentGridProps {
  assessments: Assessment[];
  selectedCategory: string;
}

const AssessmentGrid: React.FC<AssessmentGridProps> = ({ assessments, selectedCategory }) => {
  if (assessments.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-medium mb-2">No assessments found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search criteria or explore other categories.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {assessments.map((assessment, index) => (
        <AssessmentCard
          key={index}
          {...assessment}
          category={selectedCategory}
        />
      ))}
    </div>
  );
};

export default AssessmentGrid;
