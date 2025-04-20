
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

const PersonalInfo = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    dateOfBirth: '1990-01-01',
    country: 'United States',
    city: 'New York',
    occupation: 'Software Developer',
    industry: 'Technology',
    experience: '5+ years',
    profilePicture: 'https://github.com/shadcn.png'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully."
    });
  };
  
  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you would upload the file to a server
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({
        ...prev,
        profilePicture: imageUrl
      }));
    }
  };

  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your personal details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Profile Picture */}
            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={formData.profilePicture} />
                <AvatarFallback>
                  {formData.firstName[0]}{formData.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2 flex-1">
                <h3 className="font-medium">Profile Picture</h3>
                <p className="text-sm text-muted-foreground">
                  Upload a new profile picture. Recommended size is 200x200px.
                </p>
                <div className="mt-2">
                  <Label htmlFor="picture" className="sr-only">
                    Choose profile picture
                  </Label>
                  <Input
                    id="picture"
                    type="file"
                    accept="image/*"
                    onChange={handlePictureChange}
                  />
                </div>
              </div>
            </div>
            
            <Separator />
            
            {/* Basic Information */}
            <div>
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <User className="h-4 w-4" />
                Basic Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
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
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input
                    id="dob"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            
            <Separator />
            
            {/* Location Information */}
            <div>
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select 
                    value={formData.country} 
                    onValueChange={(value) => handleSelectChange("country", value)}
                  >
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="United States">United States</SelectItem>
                      <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="India">India</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            
            <Separator />
            
            {/* Professional Information */}
            <div>
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Professional Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select 
                    value={formData.industry} 
                    onValueChange={(value) => handleSelectChange("industry", value)}
                  >
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Finance">Finance & Banking</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Education">Education</SelectItem>
                      <SelectItem value="Government">Government</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience</Label>
                  <Select 
                    value={formData.experience} 
                    onValueChange={(value) => handleSelectChange("experience", value)}
                  >
                    <SelectTrigger id="experience">
                      <SelectValue placeholder="Years of experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1 years">0-1 years</SelectItem>
                      <SelectItem value="1-3 years">1-3 years</SelectItem>
                      <SelectItem value="3-5 years">3-5 years</SelectItem>
                      <SelectItem value="5+ years">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-end space-x-2">
            <Button variant="outline" type="button">Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default PersonalInfo;
