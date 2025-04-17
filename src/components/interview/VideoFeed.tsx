import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Camera, CameraOff, Mic, MicOff, Settings, Maximize2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const VideoFeed = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const toggleCamera = async () => {
    if (isCameraOn) {
      streamRef.current?.getTracks().forEach(track => {
        if (track.kind === 'video') {
          track.stop();
        }
      });
      
      if (videoRef.current) {
        const stream = videoRef.current.srcObject as MediaStream | null;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach(track => {
            if (track.kind === 'video') {
              track.stop();
            }
          });
        }
      }
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: isMicOn });
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
  
  const toggleMicrophone = async () => {
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach(track => {
        track.enabled = !isMicOn;
      });
    } else if (!isMicOn) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;
      } catch (error) {
        console.error("Error accessing microphone:", error);
      }
    }
    setIsMicOn(!isMicOn);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      streamRef.current?.getTracks().forEach(track => track.stop());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative rounded-lg overflow-hidden bg-muted aspect-video shadow-xl border border-border transition-all duration-300"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className={`w-full h-full object-cover ${isCameraOn ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      />
      
      <div className={`absolute inset-0 flex items-center justify-center ${isCameraOn ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <div className="text-center space-y-2">
          <CameraOff className="h-16 w-16 mx-auto text-muted-foreground opacity-50" />
          <p className="text-muted-foreground text-lg">Camera is off</p>
          <p className="text-sm text-muted-foreground/60">Click the camera button below to turn it on</p>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2 transition-opacity duration-300 opacity-70 hover:opacity-100">
        <Button
          variant="secondary"
          size="icon"
          className={`rounded-full ${isCameraOn ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted/80 backdrop-blur-sm'}`}
          onClick={toggleCamera}
        >
          {isCameraOn ? <CameraOff className="h-4 w-4" /> : <Camera className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};
