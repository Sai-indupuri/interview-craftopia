import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Lock, Globe, Shield, CreditCard, Settings, Moon, Sun, Bell } from 'lucide-react';

const AccountSettings = () => {
  const { toast } = useToast();
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [accountSettings, setAccountSettings] = useState({
    language: 'en',
    theme: 'system',
    privacy: {
      publicProfile: true,
      showScore: false,
      shareProgress: false
    },
    notifications: {
      desktop: true,
      email: true,
      marketing: false
    }
  });
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all password fields.",
        variant: "destructive"
      });
      return;
    }
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords don't match.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would make an API call here
    toast({
      title: "Password Updated",
      description: "Your password has been changed successfully."
    });
    
    // Reset form
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };
  
  const handleLanguageChange = (value: string) => {
    setAccountSettings(prev => ({
      ...prev,
      language: value
    }));
    
    toast({
      title: "Language Updated",
      description: `Language has been changed to ${
        value === 'en' ? 'English' : 
        value === 'es' ? 'Spanish' :
        value === 'fr' ? 'French' :
        value === 'de' ? 'German' : 
        value === 'hi' ? 'Hindi' : 
        'English'
      }.`
    });
  };
  
  const handleThemeChange = (value: string) => {
    setAccountSettings(prev => ({
      ...prev,
      theme: value
    }));
    
    toast({
      title: "Theme Updated",
      description: `Theme has been changed to ${value}.`
    });
  };
  
  const handlePrivacyToggle = (setting: string, checked: boolean) => {
    setAccountSettings(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [setting]: checked
      }
    }));
  };
  
  const handleNotificationToggle = (setting: string, checked: boolean) => {
    setAccountSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [setting]: checked
      }
    }));
  };
  
  const handleDeleteAccount = () => {
    // In a real app, this would show a confirmation dialog
    toast({
      title: "Account Deletion Requested",
      description: "A confirmation email has been sent to your registered email address.",
      variant: "destructive"
    });
  };

  return (
    <div className="space-y-6">
      {/* Password Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Change Password
          </CardTitle>
          <CardDescription>
            Update your account password
          </CardDescription>
        </CardHeader>
        <form onSubmit={handlePasswordSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input
                id="currentPassword"
                name="currentPassword"
                type="password"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Update Password</Button>
          </CardFooter>
        </form>
      </Card>
      
      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Preferences
          </CardTitle>
          <CardDescription>
            Manage your account preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Language */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Globe className="h-4 w-4" />
              <h3 className="font-medium">Language</h3>
            </div>
            <Select 
              value={accountSettings.language} 
              onValueChange={handleLanguageChange}
            >
              <SelectTrigger className="w-full sm:w-[240px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español (Spanish)</SelectItem>
                <SelectItem value="fr">Français (French)</SelectItem>
                <SelectItem value="de">Deutsch (German)</SelectItem>
                <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Separator />
          
          {/* Theme */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sun className="h-4 w-4" />
              <h3 className="font-medium">Theme</h3>
            </div>
            <Select 
              value={accountSettings.theme} 
              onValueChange={handleThemeChange}
            >
              <SelectTrigger className="w-full sm:w-[240px]">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System Default</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Separator />
          
          {/* Privacy Settings */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-4 w-4" />
              <h3 className="font-medium">Privacy Settings</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="publicProfile" className="block mb-1">Public Profile</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow others to see your profile
                  </p>
                </div>
                <Switch 
                  id="publicProfile"
                  checked={accountSettings.privacy.publicProfile}
                  onCheckedChange={(checked) => handlePrivacyToggle('publicProfile', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="showScore" className="block mb-1">Share Scores</Label>
                  <p className="text-sm text-muted-foreground">
                    Show your assessment scores on your profile
                  </p>
                </div>
                <Switch 
                  id="showScore"
                  checked={accountSettings.privacy.showScore}
                  onCheckedChange={(checked) => handlePrivacyToggle('showScore', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="shareProgress" className="block mb-1">Share Progress</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow friends to see your learning progress
                  </p>
                </div>
                <Switch 
                  id="shareProgress"
                  checked={accountSettings.privacy.shareProgress}
                  onCheckedChange={(checked) => handlePrivacyToggle('shareProgress', checked)}
                />
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Notification Settings */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-4 w-4" />
              <h3 className="font-medium">Notification Settings</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="desktopNotifications" className="block mb-1">Desktop Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications on this device
                  </p>
                </div>
                <Switch 
                  id="desktopNotifications"
                  checked={accountSettings.notifications.desktop}
                  onCheckedChange={(checked) => handleNotificationToggle('desktop', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="emailNotifications" className="block mb-1">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
                <Switch 
                  id="emailNotifications"
                  checked={accountSettings.notifications.email}
                  onCheckedChange={(checked) => handleNotificationToggle('email', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="marketingEmails" className="block mb-1">Marketing Emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive promotional emails and offers
                  </p>
                </div>
                <Switch 
                  id="marketingEmails"
                  checked={accountSettings.notifications.marketing}
                  onCheckedChange={(checked) => handleNotificationToggle('marketing', checked)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Subscription Details (Mock) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Subscription
          </CardTitle>
          <CardDescription>
            Manage your subscription plan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-primary/10 rounded-lg p-4 flex flex-col sm:flex-row justify-between gap-4 items-center">
            <div>
              <h3 className="font-medium text-lg">Free Plan</h3>
              <p className="text-sm text-muted-foreground">
                Basic access to assessments and mock interviews
              </p>
            </div>
            <Button 
              className="bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90"
            >
              Upgrade to Pro
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Danger Zone */}
      <Card className="border-destructive/30">
        <CardHeader className="text-destructive">
          <CardTitle>Danger Zone</CardTitle>
          <CardDescription>
            Irreversible actions for your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 border border-destructive/30 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
              <div>
                <h3 className="font-medium">Delete Account</h3>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all data
                </p>
              </div>
              <Button 
                variant="destructive"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountSettings;
