
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock, Flag, ChevronRight, ChevronLeft } from "lucide-react";

interface AssessmentHelpProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssessmentHelp: React.FC<AssessmentHelpProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Assessment Help</DialogTitle>
          <DialogDescription>
            How to navigate and complete your assessment
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">Navigation</h3>
            <div className="flex items-center space-x-2 text-sm">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4 mr-1" /> Previous
              </Button>
              <span>and</span>
              <Button variant="outline" size="sm">
                Next <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
              <span>buttons navigate between questions.</span>
            </div>
            <p className="text-sm">
              You can also click on question numbers in the navigation panel to jump to specific questions.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Timer</h3>
            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center space-x-1 bg-muted py-1 px-2 rounded-md">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-mono">00:00</span>
              </div>
              <span>shows your remaining time.</span>
            </div>
            <p className="text-sm">
              The assessment will automatically submit when time expires.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Flagging Questions</h3>
            <div className="flex items-center space-x-2 text-sm">
              <Button variant="ghost" size="sm">
                <Flag className="h-4 w-4 mr-1" />
                Flag for review
              </Button>
              <span>helps mark questions you want to review later.</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Completing the Assessment</h3>
            <p className="text-sm">
              Click the "Complete Assessment" button on the last question to submit your answers. You can review and change your answers before submitting.
            </p>
          </div>
        </div>
        
        <DialogClose asChild>
          <Button className="w-full mt-2">Got it</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default AssessmentHelp;
