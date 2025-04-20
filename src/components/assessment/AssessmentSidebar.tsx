
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { assessmentCategories } from '@/data/assessmentData';

interface AssessmentSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  yearFilter: string;
  onYearFilterChange: (year: string) => void;
}

const AssessmentSidebar: React.FC<AssessmentSidebarProps> = ({
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  yearFilter,
  onYearFilterChange,
}) => {
  return (
    <div className="md:w-1/4">
      <div className="sticky top-4 space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Categories</h3>
          <Tabs 
            value={selectedCategory} 
            onValueChange={onCategoryChange}
            orientation="vertical" 
            className="w-full"
          >
            <TabsList className="flex flex-col h-auto w-full bg-transparent space-y-1">
              {assessmentCategories.map(category => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="w-full justify-start text-left px-3 py-2 data-[state=active]:bg-primary/10"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        {selectedCategory === "civil-services" && (
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Previous Year Papers</h3>
            <Select value={yearFilter} onValueChange={onYearFilterChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {Array.from({ length: 10 }, (_, i) => (
                  <SelectItem key={2024 - i} value={`${2024 - i}`}>
                    {2024 - i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Search</h3>
          <Input 
            placeholder="Search assessments..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        <Card className="bg-gradient-to-r from-interview-blue/20 to-interview-purple/20">
          <CardHeader>
            <CardTitle className="text-lg">Need Custom Assessments?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              We can create tailored assessments for your specific domain or organization.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Contact Us
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AssessmentSidebar;
