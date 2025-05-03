
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';

const PrivacyPolicy = () => {
  const lastUpdated = "May 1, 2025";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>
          
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4">
              At Interview Craftopia ("we," "our," or "us"), we respect your privacy and are committed to protecting it 
              through our compliance with this policy. This policy describes the types of information we may collect from you 
              or that you may provide when you visit our website and our practices for collecting, using, maintaining, 
              protecting, and disclosing that information.
            </p>
            <p className="text-muted-foreground">
              Please read this policy carefully to understand our policies and practices regarding your information and how 
              we will treat it. If you do not agree with our policies and practices, your choice is not to use our website. 
              By accessing or using our website, you agree to this privacy policy.
            </p>
          </Card>
          
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Personal information (such as name, email address, and other identifiers) that you voluntarily provide when registering on our website, using our services, or communicating with us.</li>
              <li>Information about your internet connection, the equipment you use to access our website, and usage details.</li>
              <li>Information collected through cookies, web beacons, and other tracking technologies.</li>
              <li>User-generated content you provide when participating in our mock interviews, coding practice, or assessments.</li>
            </ul>
            <p className="text-muted-foreground">
              We collect this information directly from you when you provide it to us, automatically as you navigate through the site, 
              and from third parties, such as our business partners and other third parties that provide us with services.
            </p>
          </Card>
          
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>To present our website and its contents to you and provide you with the services you request.</li>
              <li>To fulfill any other purpose for which you provide it, such as processing your payments or providing customer support.</li>
              <li>To provide you with notices about your account, including expiration and renewal notices.</li>
              <li>To improve our website and services, including personalizing your user experience.</li>
              <li>To send you promotional communications about our own services and features.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>In any other way we may describe when you provide the information.</li>
            </ul>
          </Card>
          
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We may disclose aggregated information about our users and information that does not identify any individual 
              without restriction. We may disclose personal information that we collect or you provide:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>To our subsidiaries and affiliates.</li>
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>To fulfill the purpose for which you provide it.</li>
              <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
              <li>To enforce or apply our terms of use and other agreements.</li>
              <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Interview Craftopia, our customers, or others.</li>
            </ul>
          </Card>
          
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We have implemented measures designed to secure your personal information from accidental loss and from 
              unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure 
              servers behind firewalls.
            </p>
            <p className="text-muted-foreground">
              The safety and security of your information also depends on you. Where we have given you (or where you have chosen) 
              a password for access to certain parts of our website, you are responsible for keeping this password confidential. 
              We ask you not to share your password with anyone.
            </p>
          </Card>
          
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Access, correct, or delete your personal information.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing of your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Opt-out of marketing communications.</li>
            </ul>
            <p className="text-muted-foreground">
              You can review and change your personal information by logging into the website and visiting your account profile page. 
              You may also contact us directly to request access to, correct, or delete any personal information that you have provided to us.
            </p>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions or concerns about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="text-muted-foreground">
              <p>Email: privacy@interviewcraftopia.com</p>
              <p>Address: 123 Interview Street, Tech District, San Francisco, CA 94105</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
