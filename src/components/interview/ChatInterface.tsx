
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mic, Lightbulb, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatInterfaceProps {
  question: string;
}

interface Message {
  id: string;
  sender: 'interviewer' | 'user';
  content: string;
  timestamp: Date;
}

export const ChatInterface = ({ question }: ChatInterfaceProps) => {
  const [answer, setAnswer] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [hint, setHint] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Add the question to messages when it changes
  useEffect(() => {
    if (question && !messages.some(m => m.content === question)) {
      setMessages(prevMessages => [
        ...prevMessages,
        {
          id: Date.now().toString(),
          sender: 'interviewer',
          content: question,
          timestamp: new Date()
        }
      ]);
    }
  }, [question, messages]);
  
  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!answer.trim()) return;
    
    // Add user message
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: answer,
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setAnswer('');
    
    // Simulate processing (in a real app, this would analyze the answer)
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  
  const handleMicClick = () => {
    // Toggle recording state (in a real app, this would start/stop speech recognition)
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      // Simulate speech-to-text (in a real app, this would be actual speech recognition)
      setTimeout(() => {
        setAnswer(prev => prev + "I believe my experience with similar projects makes me well-suited for this role. ");
        setIsRecording(false);
      }, 3000);
    }
  };
  
  const getHint = () => {
    // In a real app, this would generate a contextual hint based on the current question
    setHint("Consider including specific examples from your past experience to support your answer.");
    
    // Hide hint after 5 seconds
    setTimeout(() => {
      setHint(null);
    }, 5000);
  };

  return (
    <Card className="h-[600px] flex flex-col shadow-lg border-primary/20">
      <CardContent className="flex-1 p-4 flex flex-col">
        <div className="flex-1 space-y-4 overflow-y-auto pr-1 scrollbar-thin">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-3 rounded-lg ${
                  msg.sender === 'interviewer' 
                    ? 'bg-muted' 
                    : 'bg-primary/10 ml-auto max-w-[80%]'
                }`}
              >
                <p className="font-medium">{msg.sender === 'interviewer' ? 'Interviewer' : 'You'}</p>
                <p className="mt-1 text-sm md:text-base">{msg.content}</p>
                <p className="text-xs text-muted-foreground mt-1 text-right">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </motion.div>
            ))}
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-muted p-3 rounded-lg"
              >
                <p className="font-medium">Interviewer</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <p>Typing...</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {hint && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800 flex items-start space-x-2"
            >
              <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800 dark:text-yellow-200">Hint</p>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">{hint}</p>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
          <div className="relative">
            <Textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className={`flex-1 resize-none pr-10 ${isRecording ? 'border-red-500 shadow-sm shadow-red-200' : ''}`}
              rows={3}
            />
            
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className={`absolute bottom-2 right-2 rounded-full ${isRecording ? 'text-red-500 animate-pulse' : ''}`}
              onClick={handleMicClick}
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={getHint}
            >
              <Lightbulb className="h-3 w-3 mr-1" />
              Get Hint
            </Button>
            
            <Button type="submit" className="bg-gradient-to-r from-interview-blue to-interview-purple">
              <Send className="h-4 w-4 mr-2" />
              Send Answer
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
