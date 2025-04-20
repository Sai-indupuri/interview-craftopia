
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import ProfileOverview from '@/components/profile/ProfileOverview';
import PersonalInfo from '@/components/profile/PersonalInfo';
import LearningPreferences from '@/components/profile/LearningPreferences';
import AssessmentReports from '@/components/profile/AssessmentReports';
import MockInterviews from '@/components/profile/MockInterviews';
import AccountSettings from '@/components/profile/AccountSettings';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return <ProfileOverview />;
      case 'personal-info':
        return <PersonalInfo />;
      case 'learning-preferences':
        return <LearningPreferences />;
      case 'assessment-reports':
        return <AssessmentReports />;
      case 'mock-interviews':
        return <MockInterviews />;
      case 'account-settings':
        return <AccountSettings />;
      default:
        return <ProfileOverview />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">My Profile</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Manage your profile information and track your progress
          </p>
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/4">
              <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="lg:w-3/4">
              {renderActiveTab()}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
