
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Clock, Pause, Play } from "lucide-react";

interface AssessmentTimerProps {
  timeInSeconds: number;
  isPaused: boolean;
  onTimeUpdate: (remainingTime: number) => void;
  onComplete: () => void;
}

const AssessmentTimer: React.FC<AssessmentTimerProps> = ({
  timeInSeconds,
  isPaused,
  onTimeUpdate,
  onComplete
}) => {
  const [paused, setPaused] = useState(isPaused);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (!paused && timeInSeconds > 0) {
      interval = setInterval(() => {
        onTimeUpdate(timeInSeconds - 1);
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timeInSeconds, paused, onTimeUpdate]);
  
  useEffect(() => {
    if (timeInSeconds === 0) {
      onComplete();
    }
  }, [timeInSeconds, onComplete]);

  const togglePause = () => {
    setPaused(!paused);
  };

  // Format seconds into HH:MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return [
      hours > 0 ? String(hours).padStart(2, '0') : null,
      String(minutes).padStart(2, '0'),
      String(secs).padStart(2, '0')
    ]
    .filter(Boolean)
    .join(':');
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1 bg-muted py-1 px-2 rounded-md">
        <Clock className="h-4 w-4 text-muted-foreground" />
        <span className={`font-mono ${timeInSeconds < 60 ? 'text-destructive' : ''}`}>
          {formatTime(timeInSeconds)}
        </span>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon"
        onClick={togglePause}
        className="h-8 w-8"
      >
        {paused ? (
          <Play className="h-4 w-4" />
        ) : (
          <Pause className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export default AssessmentTimer;
