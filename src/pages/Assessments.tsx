
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AssessmentSidebar from '@/components/assessment/AssessmentSidebar';
import AssessmentGrid from '@/components/assessment/AssessmentGrid';
import { assessmentCategories } from '@/data/assessmentData';

const Assessments = () => {
  const [selectedCategory, setSelectedCategory] = useState("tech");
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("all");

  // Filter assessments based on search term and year
  const filteredAssessments = assessmentCategories
    .find(category => category.id === selectedCategory)?.assessments
    .filter(assessment => 
      assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assessment.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Domain-Specific Assessments</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Test your knowledge across various domains with our specialized assessments
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <AssessmentSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              yearFilter={yearFilter}
              onYearFilterChange={setYearFilter}
            />
            
            <div className="md:w-3/4">
              <AssessmentGrid 
                assessments={filteredAssessments}
                selectedCategory={selectedCategory}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Assessments;
