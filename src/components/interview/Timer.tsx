
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  duration: number;
  onComplete: () => void;
}

export const Timer = ({ duration, onComplete }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center space-x-2 text-lg font-mono">
      <Clock className="h-5 w-5 text-muted-foreground" />
      <span className={timeLeft <= 30 ? "text-red-500" : "text-primary"}>
        {minutes}:{seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
};
