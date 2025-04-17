
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Camera, CameraOff } from "lucide-react";

export const VideoFeed = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const toggleCamera = async () => {
    if (isCameraOn) {
      streamRef.current?.getTracks().forEach(track => track.stop());
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        streamRef.current = stream;
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    }
    setIsCameraOn(!isCameraOn);
  };

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach(track => track.stop());
    };
  }, []);

  return (
    <div className="relative rounded-lg overflow-hidden bg-muted aspect-video">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className={`w-full h-full object-cover ${isCameraOn ? 'opacity-100' : 'opacity-0'}`}
      />
      
      <div className={`absolute inset-0 flex items-center justify-center ${isCameraOn ? 'hidden' : 'block'}`}>
        <p className="text-muted-foreground">Camera is off</p>
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="absolute bottom-4 right-4"
        onClick={toggleCamera}
      >
        {isCameraOn ? <CameraOff className="h-4 w-4" /> : <Camera className="h-4 w-4" />}
      </Button>
    </div>
  );
};
