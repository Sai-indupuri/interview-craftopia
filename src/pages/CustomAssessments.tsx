
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Calendar, Check, ClipboardCheck, FileText, MessageSquare } from 'lucide-react';

const formSchema = z.object({
  organizationName: z.string().min(2, {
    message: "Organization name must be at least 2 characters.",
  }),
  domain: z.string({
    required_error: "Please select a domain for your assessment.",
  }),
  features: z.array(z.string()).optional(),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  deliveryDate: z.string().min(1, {
    message: "Please select a preferred delivery date.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(5, {
    message: "Please enter a valid phone number.",
  }),
});

const testimonials = [
  {
    quote: "The custom assessments helped us identify the right candidates with specific skills our organization needed. The tailored questions were exactly what we were looking for.",
    author: "Sarah Johnson",
    role: "HR Director, TechGlobe Inc."
  },
  {
    quote: "Interview Craftopia's custom assessments streamlined our hiring process by 40%. The quality of candidates improved dramatically as we could filter based on specific domain knowledge.",
    author: "Michael Chen",
    role: "Talent Acquisition Lead, FinServe Partners"
  },
  {
    quote: "The ability to tailor assessments to match our unique requirements was game-changing. We could evaluate candidates on exactly the skills that matter for our organization.",
    author: "Priya Sharma",
    role: "CEO, HealthTech Solutions"
  }
];

const clients = [
  "TechGlobe Inc.",
  "FinServe Partners",
  "HealthTech Solutions",
  "Global Education Alliance",
  "Legal Network Associates",
  "Civil Service Commission"
];

const CustomAssessments = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationName: "",
      description: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Request Submitted",
      description: "We'll contact you soon to discuss your custom assessment needs.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-violet-500 py-20 text-white">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Create Tailored Assessments for Your Organization</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              We design customized assessments for your team, organization, or domain. Get started today with a personalized solution.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-gray-100"
              onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request a Custom Assessment
            </Button>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-indigo-100 dark:bg-indigo-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Customizable Content</h3>
                  <p className="text-muted-foreground">Tailored to your industry, role, or organization's specific needs.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ClipboardCheck className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Any Domain</h3>
                  <p className="text-muted-foreground">Technology, Civil Services, Banking, Healthcare, and more.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                  <p className="text-muted-foreground">Receive detailed feedback on assessment performance with AI insights.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="bg-teal-100 dark:bg-teal-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-teal-600 dark:text-teal-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Options</h3>
                  <p className="text-muted-foreground">Customize timing, difficulty, and format for your team's needs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
                
                {/* Steps */}
                <div className="space-y-12 md:space-y-24">
                  {/* Step 1 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:text-right">
                      <h3 className="text-2xl font-bold mb-2">Fill Out the Request Form</h3>
                      <p className="text-muted-foreground">Tell us about your organization and specific assessment needs.</p>
                    </div>
                    <div className="md:w-10 md:h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center relative z-10">
                      <span className="font-bold">1</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                    <div className="md:w-10 md:h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center relative z-10">
                      <span className="font-bold">2</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0 md:text-left">
                      <h3 className="text-2xl font-bold mb-2">Consultation with Our Team</h3>
                      <p className="text-muted-foreground">We'll schedule a call to discuss your requirements in detail.</p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:text-right">
                      <h3 className="text-2xl font-bold mb-2">Assessment Creation</h3>
                      <p className="text-muted-foreground">Our experts develop tailored assessments based on your needs.</p>
                    </div>
                    <div className="md:w-10 md:h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center relative z-10">
                      <span className="font-bold">3</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                    <div className="md:w-10 md:h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center relative z-10">
                      <span className="font-bold">4</span>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0 md:text-left">
                      <h3 className="text-2xl font-bold mb-2">Implement & Start Using</h3>
                      <p className="text-muted-foreground">Begin using your custom assessments for your team or candidates.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Request Form Section */}
        <section id="request-form" className="py-16 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">Request Your Custom Assessment</h2>
              <p className="text-center text-muted-foreground mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

              <Card>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="organizationName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Organization Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your organization name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="domain"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Assessment Domain</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select domain" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="technology">Technology & IT</SelectItem>
                                  <SelectItem value="finance">Finance & Banking</SelectItem>
                                  <SelectItem value="healthcare">Healthcare</SelectItem>
                                  <SelectItem value="education">Education</SelectItem>
                                  <SelectItem value="government">Government & Civil Services</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Requirements Description</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe your specific assessment requirements" 
                                className="min-h-[120px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Include details about skills to assess, question types, difficulty level, etc.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="deliveryDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Delivery Timeline</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1week">Within 1 week</SelectItem>
                                  <SelectItem value="2weeks">Within 2 weeks</SelectItem>
                                  <SelectItem value="1month">Within 1 month</SelectItem>
                                  <SelectItem value="flexible">Flexible</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Your email address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Your contact number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-end">
                        <Button type="submit" size="lg">
                          Submit Request
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardContent className="pt-8">
                    <div className="absolute -top-4 -left-4 text-gray-200 dark:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M11.3,6.2H9.6c-0.7,0-1.3,0.6-1.3,1.3v1.3H9c1.5,0,2.6,1.2,2.6,2.6v0.9c0,1.5-1.2,2.6-2.6,2.6H6.9c-1.5,0-2.6-1.2-2.6-2.6 v-3.9c0-1.4,0.6-2.8,1.6-3.8c1-1,2.4-1.6,3.8-1.6h1.6V6.2z M20,6.2h-1.6c-0.7,0-1.3,0.6-1.3,1.3v1.3h0.6c1.5,0,2.6,1.2,2.6,2.6v0.9 c0,1.5-1.2,2.6-2.6,2.6h-2.1c-1.5,0-2.6-1.2-2.6-2.6v-3.9c0-1.4,0.6-2.8,1.6-3.8c1-1,2.4-1.6,3.8-1.6H20V6.2z" />
                      </svg>
                    </div>
                    <p className="mb-6 italic text-gray-700 dark:text-gray-300">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-indigo-600 rounded-full text-white flex items-center justify-center">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Client Logos */}
            <div className="mt-16">
              <h3 className="text-center text-xl mb-8">Trusted by Organizations Worldwide</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {clients.map((client, index) => (
                  <div key={index} className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800">
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Transform your assessment process with custom-tailored solutions designed specifically for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-indigo-600 hover:bg-gray-100"
                onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request a Custom Assessment
              </Button>
              <Link to="/support">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-indigo-700">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomAssessments;
