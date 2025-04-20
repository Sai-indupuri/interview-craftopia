
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Clock, Book, Bell } from 'lucide-react';

const LearningPreferences = () => {
  const { toast } = useToast();
  
  const [assessmentPrefs, setAssessmentPrefs] = useState({
    enableTimer: true,
    timerDuration: 60, // seconds
    difficulty: "medium",
    questionTypes: {
      mcq: true,
      theory: true,
      coding: false,
    },
    showHints: true
  });
  
  const [studyPrefs, setStudyPrefs] = useState({
    mode: "active",
    preferredTime: "evening",
    dailyGoal: 2, // hours
    weeklyTarget: 4 // assessments
  });
  
  const [notifications, setNotifications] = useState({
    emailReminders: true,
    assessmentAlerts: true,
    progressSummary: true,
    studyReminders: false
  });
  
  const handleTimerToggle = (checked: boolean) => {
    setAssessmentPrefs(prev => ({
      ...prev,
      enableTimer: checked
    }));
  };
  
  const handleDifficultyChange = (value: string) => {
    setAssessmentPrefs(prev => ({
      ...prev,
      difficulty: value
    }));
  };
  
  const handleQuestionTypeToggle = (type: string, checked: boolean) => {
    setAssessmentPrefs(prev => ({
      ...prev,
      questionTypes: {
        ...prev.questionTypes,
        [type]: checked
      }
    }));
  };
  
  const handleStudyModeChange = (value: string) => {
    setStudyPrefs(prev => ({
      ...prev,
      mode: value
    }));
  };
  
  const handleNotificationToggle = (type: string, checked: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [type]: checked
    }));
  };
  
  const handleSave = () => {
    toast({
      title: "Preferences Saved",
      description: "Your learning preferences have been updated."
    });
  };

  return (
    <div className="space-y-6">
      {/* Assessment Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Assessment Preferences
          </CardTitle>
          <CardDescription>
            Customize how your assessments function and appear
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Timer Settings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Enable Timer</h3>
                <p className="text-sm text-muted-foreground">
                  Set time limits for each question
                </p>
              </div>
              <Switch 
                checked={assessmentPrefs.enableTimer} 
                onCheckedChange={handleTimerToggle} 
              />
            </div>
            
            {assessmentPrefs.enableTimer && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="timer-duration">Timer Duration (seconds)</Label>
                  <span className="text-muted-foreground">{assessmentPrefs.timerDuration}s</span>
                </div>
                <Slider
                  id="timer-duration"
                  min={10}
                  max={300}
                  step={5}
                  value={[assessmentPrefs.timerDuration]}
                  onValueChange={(values) => {
                    setAssessmentPrefs(prev => ({
                      ...prev,
                      timerDuration: values[0]
                    }));
                  }}
                />
              </div>
            )}
          </div>
          
          <Separator />
          
          {/* Difficulty Level */}
          <div className="space-y-4">
            <h3 className="font-medium">Difficulty Level</h3>
            <RadioGroup 
              value={assessmentPrefs.difficulty} 
              onValueChange={handleDifficultyChange}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="easy" id="difficulty-easy" />
                <Label htmlFor="difficulty-easy">Easy</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="difficulty-medium" />
                <Label htmlFor="difficulty-medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hard" id="difficulty-hard" />
                <Label htmlFor="difficulty-hard">Hard</Label>
              </div>
            </RadioGroup>
          </div>
          
          <Separator />
          
          {/* Question Types */}
          <div className="space-y-4">
            <h3 className="font-medium">Question Types</h3>
            <p className="text-sm text-muted-foreground">Select the types of questions you prefer</p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="mcq" 
                  checked={assessmentPrefs.questionTypes.mcq} 
                  onCheckedChange={(checked) => 
                    handleQuestionTypeToggle("mcq", checked as boolean)
                  } 
                />
                <Label htmlFor="mcq">Multiple Choice Questions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="theory" 
                  checked={assessmentPrefs.questionTypes.theory} 
                  onCheckedChange={(checked) => 
                    handleQuestionTypeToggle("theory", checked as boolean)
                  }
                />
                <Label htmlFor="theory">Theoretical Questions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="coding" 
                  checked={assessmentPrefs.questionTypes.coding} 
                  onCheckedChange={(checked) => 
                    handleQuestionTypeToggle("coding", checked as boolean)
                  }
                />
                <Label htmlFor="coding">Coding Questions</Label>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Additional Options */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Show Hints</h3>
              <p className="text-sm text-muted-foreground">
                Display helpful hints for difficult questions
              </p>
            </div>
            <Switch 
              checked={assessmentPrefs.showHints} 
              onCheckedChange={(checked) => {
                setAssessmentPrefs(prev => ({
                  ...prev,
                  showHints: checked
                }));
              }} 
            />
          </div>
        </CardContent>
      </Card>
      
      {/* Study Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            Study Preferences
          </CardTitle>
          <CardDescription>
            Set your preferred study habits and goals
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Study Mode */}
          <div className="space-y-4">
            <h3 className="font-medium">Study Mode</h3>
            <RadioGroup 
              value={studyPrefs.mode} 
              onValueChange={handleStudyModeChange}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="active" id="mode-active" />
                <Label htmlFor="mode-active">Active Learning (Quizzes, Assessments)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="passive" id="mode-passive" />
                <Label htmlFor="mode-passive">Passive Learning (Videos, Reading)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mixed" id="mode-mixed" />
                <Label htmlFor="mode-mixed">Mixed (Combination of both)</Label>
              </div>
            </RadioGroup>
          </div>
          
          <Separator />
          
          {/* Preferred Time */}
          <div className="space-y-4">
            <h3 className="font-medium">Preferred Study Time</h3>
            <RadioGroup 
              value={studyPrefs.preferredTime} 
              onValueChange={(value) => {
                setStudyPrefs(prev => ({
                  ...prev,
                  preferredTime: value
                }));
              }}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="morning" id="time-morning" />
                <Label htmlFor="time-morning">Morning (6 AM - 12 PM)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="afternoon" id="time-afternoon" />
                <Label htmlFor="time-afternoon">Afternoon (12 PM - 5 PM)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="evening" id="time-evening" />
                <Label htmlFor="time-evening">Evening (5 PM - 10 PM)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="night" id="time-night" />
                <Label htmlFor="time-night">Night (10 PM - 6 AM)</Label>
              </div>
            </RadioGroup>
          </div>
          
          <Separator />
          
          {/* Study Goals */}
          <div className="space-y-4">
            <h3 className="font-medium">Daily Goal (Hours)</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Study hours per day</span>
                <span className="text-muted-foreground">{studyPrefs.dailyGoal} hours</span>
              </div>
              <Slider
                min={0.5}
                max={8}
                step={0.5}
                value={[studyPrefs.dailyGoal]}
                onValueChange={(values) => {
                  setStudyPrefs(prev => ({
                    ...prev,
                    dailyGoal: values[0]
                  }));
                }}
              />
            </div>
            
            <h3 className="font-medium mt-4">Weekly Assessment Target</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Assessments per week</span>
                <span className="text-muted-foreground">{studyPrefs.weeklyTarget}</span>
              </div>
              <Slider
                min={1}
                max={10}
                step={1}
                value={[studyPrefs.weeklyTarget]}
                onValueChange={(values) => {
                  setStudyPrefs(prev => ({
                    ...prev,
                    weeklyTarget: values[0]
                  }));
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Preferences
          </CardTitle>
          <CardDescription>
            Manage your notification settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Email Reminders</h3>
              <p className="text-sm text-muted-foreground">
                Receive reminders about upcoming assessments
              </p>
            </div>
            <Switch 
              checked={notifications.emailReminders} 
              onCheckedChange={(checked) => 
                handleNotificationToggle("emailReminders", checked)
              } 
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Assessment Alerts</h3>
              <p className="text-sm text-muted-foreground">
                Get notified about new assessments in your domains
              </p>
            </div>
            <Switch 
              checked={notifications.assessmentAlerts} 
              onCheckedChange={(checked) => 
                handleNotificationToggle("assessmentAlerts", checked)
              } 
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Weekly Progress Summary</h3>
              <p className="text-sm text-muted-foreground">
                Receive weekly reports about your progress
              </p>
            </div>
            <Switch 
              checked={notifications.progressSummary} 
              onCheckedChange={(checked) => 
                handleNotificationToggle("progressSummary", checked)
              } 
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Daily Study Reminders</h3>
              <p className="text-sm text-muted-foreground">
                Get daily reminders to study based on your schedule
              </p>
            </div>
            <Switch 
              checked={notifications.studyReminders} 
              onCheckedChange={(checked) => 
                handleNotificationToggle("studyReminders", checked)
              } 
            />
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button 
          onClick={handleSave}
          size="lg"
          className="bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90"
        >
          Save All Preferences
        </Button>
      </div>
    </div>
  );
};

export default LearningPreferences;
