
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Clock, Video, MessageSquare } from "lucide-react";

interface InterviewSettingsProps {
  selectedDuration: string;
  selectedMode: string;
  onDurationChange: (duration: string) => void;
  onModeChange: (mode: string) => void;
}

export const InterviewSettings = ({
  selectedDuration,
  selectedMode,
  onDurationChange,
  onModeChange
}: InterviewSettingsProps) => {
  const durations = [
    { id: "short", label: "15 minutes", value: "15" },
    { id: "medium", label: "30 minutes", value: "30" },
    { id: "long", label: "45 minutes", value: "45" }
  ];

  const modes = [
    { id: "video", label: "Video Interview", icon: Video },
    { id: "chat", label: "Chat Interview", icon: MessageSquare }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Interview Duration</h3>
        <RadioGroup 
          value={selectedDuration} 
          onValueChange={onDurationChange}
          className="flex gap-4"
        >
          {durations.map((duration) => (
            <div key={duration.id} className="flex items-center space-x-2">
              <RadioGroupItem value={duration.value} id={duration.id} />
              <Label htmlFor={duration.id} className="flex items-center cursor-pointer">
                <Clock size={16} className="mr-1" />
                {duration.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Interview Mode</h3>
        <div className="grid grid-cols-2 gap-4">
          {modes.map((mode) => (
            <Card 
              key={mode.id}
              className={`cursor-pointer transition-all ${selectedMode === mode.id ? 'ring-2 ring-primary' : ''}`}
              onClick={() => onModeChange(mode.id)}
            >
              <CardContent className="flex items-center justify-center p-4">
                <mode.icon size={24} className="mr-2" />
                <span>{mode.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
