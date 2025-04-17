
import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle } from 'lucide-react';

interface TimerProps {
  duration: number;
  onComplete: () => void;
}

export const Timer = ({ duration, onComplete }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  // Calculate percentage for the progress ring
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / duration) * circumference;
  
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

  // Reset timer when duration changes
  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  // Determine the color based on time left
  const getColor = () => {
    if (timeLeft <= 30) return "text-red-500 stroke-red-500";
    if (timeLeft <= 60) return "text-yellow-500 stroke-yellow-500";
    return "text-interview-blue stroke-interview-blue";
  };

  return (
    <div className="relative inline-flex items-center space-x-2 p-2 rounded-full">
      <svg width="40" height="40" viewBox="0 0 44 44" className={`${getColor()} transform -rotate-90`}>
        <circle 
          cx="22" cy="22" r={radius}
          fill="transparent" 
          strokeWidth="3" 
          strokeDasharray={circumference} 
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-linear"
        />
      </svg>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {timeLeft <= 30 ? (
          <AlertCircle className={`h-5 w-5 ${getColor()} animate-pulse`} />
        ) : (
          <Clock className={`h-5 w-5 ${getColor()}`} />
        )}
      </div>
      
      <div className="text-lg font-mono font-semibold">
        <span className={`${getColor()}`}>
          {minutes}:{seconds.toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};
