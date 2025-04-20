
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Search, MessageSquare, Mail, PhoneCall, ClipboardCheck, FileText, HelpCircle, CheckCircle, Settings, Info } from 'lucide-react';

const supportCategories = [
  {
    title: 'General Support',
    icon: <Info className="h-6 w-6 text-blue-500" />,
    description: 'Platform basics, account management, and general questions.'
  },
  {
    title: 'Assessments',
    icon: <ClipboardCheck className="h-6 w-6 text-purple-500" />,
    description: 'Issues related to assessment completion, timing, and scoring.'
  },
  {
    title: 'Mock Interviews',
    icon: <MessageSquare className="h-6 w-6 text-green-500" />,
    description: 'Help with video-based or chat-based interviews and feedback.'
  },
  {
    title: 'Technical Support',
    icon: <Settings className="h-6 w-6 text-orange-500" />,
    description: 'Issues with platform access, bugs, or technical errors.'
  },
  {
    title: 'Account & Profile',
    icon: <HelpCircle className="h-6 w-6 text-red-500" />,
    description: 'Updating personal details, password reset, security issues.'
  },
  {
    title: 'Custom Assessments',
    icon: <FileText className="h-6 w-6 text-teal-500" />,
    description: 'Information about creating tailored assessments for your needs.'
  }
];

const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'To reset your password, click on the "Forgot Password" link on the login page. Enter your email address, and we\'ll send you instructions to reset your password.'
  },
  {
    question: 'How can I track my performance on assessments?',
    answer: 'You can track your assessment performance in your Profile page under the "Assessment Reports" section. There, you\'ll find detailed analytics of your completed assessments.'
  },
  {
    question: 'What should I do if my mock interview video is not loading?',
    answer: 'If your mock interview video is not loading, please check your internet connection and browser permissions for camera and microphone access. You can also try refreshing the page or using a different browser.'
  },
  {
    question: 'How can I customize the difficulty level of my assessments?',
    answer: 'You can customize the difficulty level of your assessments by selecting the desired difficulty option (Easy, Medium, Hard) when choosing an assessment. For custom difficulty levels, please visit our Custom Assessments page.'
  },
  {
    question: 'Can I pause and resume an assessment later?',
    answer: 'Yes, most assessments allow you to pause and resume later. When you pause, your progress is saved, and you can continue from where you left off within 24 hours.'
  },
  {
    question: 'How do I provide feedback on the platform?',
    answer: 'You can provide feedback using the feedback form available on this support page, or by contacting us directly via email, live chat, or phone.'
  }
];

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description: "We'll get back to you as soon as possible.",
    });
    // Reset form
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  // Filter FAQs based on search query
  const filteredFAQs = searchQuery
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-purple-500 to-indigo-500 py-16 text-white">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4 text-center">How Can We Help You?</h1>
            <p className="text-xl text-center mb-8">Find answers to common questions or contact our support team</p>
            <div className="max-w-xl mx-auto relative">
              <Input 
                type="text" 
                placeholder="Search for help topics..." 
                className="pl-10 py-6 text-black"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Search className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
        </section>

        {/* Main Support Categories */}
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Support Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      {category.icon}
                      <CardTitle className="ml-2">{category.title}</CardTitle>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Explore Topics
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <Tabs defaultValue="all" className="max-w-3xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="all">All FAQs</TabsTrigger>
                <TabsTrigger value="assessments">Assessments</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="assessments">
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.filter(faq => faq.question.includes('assessment') || faq.answer.includes('assessment')).map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="technical">
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.filter(faq => faq.question.toLowerCase().includes('video') || faq.question.toLowerCase().includes('loading')).map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-8">
              <p>Didn't find what you're looking for?</p>
              <Button className="mt-4" onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Support
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact-section" className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="flex flex-col items-center justify-center pt-6">
                  <MessageSquare className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                  <p className="text-center text-muted-foreground mb-4">Chat with our support team in real-time</p>
                  <Button>Start Chat</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex flex-col items-center justify-center pt-6">
                  <Mail className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                  <p className="text-center text-muted-foreground mb-4">We'll respond within 24 hours</p>
                  <Button variant="outline">support@interviewcraftopia.com</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex flex-col items-center justify-center pt-6">
                  <PhoneCall className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                  <p className="text-center text-muted-foreground mb-4">Available Mon-Fri, 9AM-5PM EST</p>
                  <Button variant="outline">+1 (555) 123-4567</Button>
                </CardContent>
              </Card>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={contactForm.name} 
                        onChange={handleContactFormChange} 
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={contactForm.email} 
                        onChange={handleContactFormChange} 
                        placeholder="Your email" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={contactForm.subject} 
                      onChange={handleContactFormChange} 
                      placeholder="How can we help?" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={contactForm.message} 
                      onChange={handleContactFormChange} 
                      placeholder="Please describe your issue in detail" 
                      rows={5} 
                      required 
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <Button type="button" variant="outline">Attach Screenshot</Button>
                    <Button type="submit">Submit Inquiry</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Chatbot Section */}
        <div className="fixed bottom-4 right-4 z-10">
          <Button className="rounded-full h-14 w-14 shadow-lg flex items-center justify-center">
            <MessageSquare className="h-6 w-6" />
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
