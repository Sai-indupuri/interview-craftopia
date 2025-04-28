
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCompanyProfile, useUpdateCompanyProfile, useUploadCompanyLogo } from '@/hooks/use-company-profile';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Briefcase, Upload } from 'lucide-react';

const CompanyProfile = () => {
  const { data: profile, isLoading } = useCompanyProfile();
  const updateProfile = useUpdateCompanyProfile();
  const uploadLogo = useUploadCompanyLogo();
  
  const [formData, setFormData] = useState({
    companyName: profile?.companyName || '',
    industry: profile?.industry || '',
    size: profile?.size || '',
    location: profile?.location || '',
    about: profile?.about || '',
    website: profile?.website || '',
    contactEmail: profile?.contactEmail || '',
    contactPhone: profile?.contactPhone || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadLogo.mutate(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile.mutate(formData);
  };

  const industries = [
    "Technology", "Finance", "Healthcare", "Education", 
    "Manufacturing", "Retail", "Consulting", "Energy",
    "Transportation", "Telecommunications", "Media", "Other"
  ];
  
  const companySizes = [
    "1-10", "11-50", "51-200", "201-500",
    "501-1000", "1001-5000", "5001-10000", "10000+"
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p>Loading company profile...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-10">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Company Profile</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Manage your company information and preferences
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Company Logo</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <Avatar className="w-32 h-32 mb-4">
                    <AvatarImage src={profile?.logo} alt={profile?.companyName || "Company"} />
                    <AvatarFallback className="text-4xl">
                      <Briefcase className="w-12 h-12" />
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="w-full">
                    <Label htmlFor="logo-upload" className="cursor-pointer">
                      <div className="flex items-center justify-center gap-2 border rounded-md p-2 hover:bg-muted transition-colors">
                        <Upload size={16} />
                        <span>Upload Logo</span>
                      </div>
                      <input 
                        id="logo-upload" 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleLogoUpload}
                      />
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Company Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Select 
                          value={formData.industry} 
                          onValueChange={(value) => handleSelectChange('industry', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map(industry => (
                              <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="size">Company Size</Label>
                        <Select 
                          value={formData.size} 
                          onValueChange={(value) => handleSelectChange('size', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            {companySizes.map(size => (
                              <SelectItem key={size} value={size}>{size} employees</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contactEmail">Contact Email</Label>
                        <Input
                          id="contactEmail"
                          name="contactEmail"
                          type="email"
                          value={formData.contactEmail}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contactPhone">Contact Phone</Label>
                        <Input
                          id="contactPhone"
                          name="contactPhone"
                          value={formData.contactPhone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="about">About Company</Label>
                      <Textarea
                        id="about"
                        name="about"
                        rows={5}
                        value={formData.about}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit" className="bg-gradient-to-r from-interview-blue to-interview-purple">
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanyProfile;
