
import React from 'react';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ResumeUploadProps {
  resume: string;
  jobDescription: string;
  onResumeChange: (value: string) => void;
  onJobDescriptionChange: (value: string) => void;
}

export const ResumeUpload = ({
  resume,
  jobDescription,
  onResumeChange,
  onJobDescriptionChange
}: ResumeUploadProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div>
        <Label htmlFor="resume" className="text-lg font-medium mb-4 block">
          Paste Your Resume
        </Label>
        <Textarea
          id="resume"
          placeholder="Paste your resume text here..."
          value={resume}
          onChange={(e) => onResumeChange(e.target.value)}
          className="h-64"
        />
      </div>
      
      <div>
        <Label htmlFor="job-description" className="text-lg font-medium mb-4 block">
          Paste Job Description
        </Label>
        <Textarea
          id="job-description"
          placeholder="Paste the job description here..."
          value={jobDescription}
          onChange={(e) => onJobDescriptionChange(e.target.value)}
          className="h-64"
        />
      </div>
    </div>
  );
};
