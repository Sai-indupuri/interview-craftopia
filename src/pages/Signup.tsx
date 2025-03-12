
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

// Sample domains for selection
const domains = [
  { value: "software-engineering", label: "Software Engineering" },
  { value: "data-science", label: "Data Science" },
  { value: "upsc", label: "UPSC (Civil Services)" },
  { value: "banking", label: "Banking" },
  { value: "management", label: "Management" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "legal", label: "Legal" },
  { value: "marketing", label: "Marketing" },
  { value: "finance", label: "Finance" },
  { value: "other", label: "Other" }
];

// Sample experience levels
const experienceLevels = [
  { value: "student", label: "Student" },
  { value: "fresher", label: "Fresher (0-1 years)" },
  { value: "junior", label: "Junior (1-3 years)" },
  { value: "mid", label: "Mid-level (3-5 years)" },
  { value: "senior", label: "Senior (5-10 years)" },
  { value: "expert", label: "Expert (10+ years)" }
];

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    education: {
      school: '',
      college: '',
      degree: '',
      yearOfCompletion: ''
    },
    profession: {
      currentCompany: '',
      currentRole: '',
      experienceLevel: '',
      yearsOfExperience: ''
    },
    aspirations: {
      targetDomain: '',
      targetRoles: '',
      preferredLocations: '',
      careerGoals: ''
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle nested objects
    if (name.includes(".")) {
      const [category, field] = name.split(".");
      setFormData(prev => ({
        ...prev,
        [category]: {
          ...prev[category as keyof typeof prev],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (value: string, category: string, field: string) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log("Submitting form data:", formData);
    
    // Show success message and redirect
    toast.success("Account created successfully! Welcome to Interview Craftopia!");
    
    // In a real app, you'd wait for the API response before redirecting
    setTimeout(() => {
      navigate('/assessments'); // Redirect to assessments page
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="gradient-text">Create Your Profile</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Personalize your interview and assessment experience
        </p>
        
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Fill in your details to create a personalized interview preparation experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com" 
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
              </div>
              
              {/* Education */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Education</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="school">School</Label>
                    <Input 
                      id="school" 
                      name="education.school" 
                      value={formData.education.school}
                      onChange={handleChange}
                      placeholder="Delhi Public School" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="college">College/University</Label>
                    <Input 
                      id="college" 
                      name="education.college" 
                      value={formData.education.college}
                      onChange={handleChange}
                      placeholder="Indian Institute of Technology" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="degree">Highest Degree</Label>
                    <Input 
                      id="degree" 
                      name="education.degree" 
                      value={formData.education.degree}
                      onChange={handleChange}
                      placeholder="B.Tech in Computer Science" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearOfCompletion">Year of Completion</Label>
                    <Input 
                      id="yearOfCompletion" 
                      name="education.yearOfCompletion" 
                      value={formData.education.yearOfCompletion}
                      onChange={handleChange}
                      placeholder="2023" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Professional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Professional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentCompany">Current Company (if applicable)</Label>
                    <Input 
                      id="currentCompany" 
                      name="profession.currentCompany" 
                      value={formData.profession.currentCompany}
                      onChange={handleChange}
                      placeholder="Google" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentRole">Current Role (if applicable)</Label>
                    <Input 
                      id="currentRole" 
                      name="profession.currentRole" 
                      value={formData.profession.currentRole}
                      onChange={handleChange}
                      placeholder="Software Engineer" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experienceLevel">Experience Level</Label>
                    <Select onValueChange={(value) => handleSelectChange(value, "profession", "experienceLevel")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map(level => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                    <Input 
                      id="yearsOfExperience" 
                      name="profession.yearsOfExperience" 
                      value={formData.profession.yearsOfExperience}
                      onChange={handleChange}
                      placeholder="3" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Career Aspirations */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Career Aspirations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="targetDomain">Target Domain</Label>
                    <Select onValueChange={(value) => handleSelectChange(value, "aspirations", "targetDomain")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your target domain" />
                      </SelectTrigger>
                      <SelectContent>
                        {domains.map(domain => (
                          <SelectItem key={domain.value} value={domain.value}>
                            {domain.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="targetRoles">Target Roles</Label>
                    <Input 
                      id="targetRoles" 
                      name="aspirations.targetRoles" 
                      value={formData.aspirations.targetRoles}
                      onChange={handleChange}
                      placeholder="Senior Software Engineer, Tech Lead" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredLocations">Preferred Locations</Label>
                    <Input 
                      id="preferredLocations" 
                      name="aspirations.preferredLocations" 
                      value={formData.aspirations.preferredLocations}
                      onChange={handleChange}
                      placeholder="Bangalore, Delhi, Remote" 
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="careerGoals">Career Goals</Label>
                    <Textarea 
                      id="careerGoals" 
                      name="aspirations.careerGoals" 
                      value={formData.aspirations.careerGoals}
                      onChange={handleChange}
                      placeholder="Describe your short and long-term career goals..." 
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-interview-blue to-interview-purple hover:opacity-90"
              >
                Create Account
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default Signup;
