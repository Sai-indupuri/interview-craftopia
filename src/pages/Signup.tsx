
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const domains = [
  { value: 'technology', label: 'Technology' },
  { value: 'finance', label: 'Finance & Banking' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'government', label: 'Government & UPSC' },
  { value: 'marketing', label: 'Marketing & Sales' },
  { value: 'design', label: 'Design & Creative' },
  { value: 'other', label: 'Other' }
];

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    currentCompany: '',
    currentRole: '',
    aspiringRole: '',
    education: '',
    skills: '',
    domain: '',
    experience: '',
    about: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both password fields match.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Account created",
      description: "Your profile has been successfully created!"
    });
    
    // Redirect to home after successful signup
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Create Your Profile</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Complete your profile to get personalized interview and assessment experiences
          </p>
          
          <Card className="w-full">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Enter your personal details to create your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      id="fullName" 
                      name="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      name="password" 
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input 
                      id="confirmPassword" 
                      name="confirmPassword" 
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <CardTitle className="text-lg mb-4">Professional Information</CardTitle>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="currentCompany">Current Company/Institution</Label>
                      <Input 
                        id="currentCompany" 
                        name="currentCompany" 
                        placeholder="Company name or 'Student'"
                        value={formData.currentCompany}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="currentRole">Current Role/Position</Label>
                      <Input 
                        id="currentRole" 
                        name="currentRole" 
                        placeholder="Software Engineer, Student, etc."
                        value={formData.currentRole}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="aspiringRole">Aspiring Role</Label>
                      <Input 
                        id="aspiringRole" 
                        name="aspiringRole" 
                        placeholder="Role you're preparing for"
                        value={formData.aspiringRole}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="domain">Primary Domain</Label>
                      <Select 
                        name="domain" 
                        value={formData.domain}
                        onValueChange={(value) => handleSelectChange(value, "domain")}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select domain" />
                        </SelectTrigger>
                        <SelectContent>
                          {domains.map((domain) => (
                            <SelectItem key={domain.value} value={domain.value}>
                              {domain.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input 
                        id="experience" 
                        name="experience" 
                        type="text"
                        placeholder="e.g. 2 years, Fresh Graduate"
                        value={formData.experience}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="education">Education</Label>
                      <Input 
                        id="education" 
                        name="education" 
                        placeholder="Highest degree, institution"
                        value={formData.education}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="skills">Key Skills (comma separated)</Label>
                    <Input 
                      id="skills" 
                      name="skills" 
                      placeholder="React, Python, Project Management, etc."
                      value={formData.skills}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="about">About Yourself</Label>
                    <Textarea 
                      id="about" 
                      name="about" 
                      placeholder="Brief description about yourself, career goals, etc."
                      value={formData.about}
                      onChange={handleChange}
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="button" 
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => navigate('/')}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90"
                >
                  Create Profile
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Signup;
