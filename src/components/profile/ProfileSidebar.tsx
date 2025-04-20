
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, Settings, BookOpen, Video, BarChart2, 
  PieChart, FileText, Bell
} from 'lucide-react';

interface ProfileSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ activeTab, setActiveTab }) => {
  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: PieChart },
    { id: 'personal-info', label: 'Personal Information', icon: User },
    { id: 'learning-preferences', label: 'Learning Preferences', icon: BookOpen },
    { id: 'assessment-reports', label: 'Assessment Reports', icon: FileText },
    { id: 'mock-interviews', label: 'Mock Interviews', icon: Video },
    { id: 'account-settings', label: 'Account Settings', icon: Settings },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <div className="bg-card rounded-lg border shadow-sm p-4">
      <div className="flex flex-col items-center mb-6 pt-2">
        <Avatar className="h-20 w-20 mb-3">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h3 className="font-medium text-lg">John Doe</h3>
        <p className="text-muted-foreground text-sm">Software Developer</p>
      </div>

      <nav>
        <ul className="space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <button
                className={`flex items-center w-full px-3 py-2 rounded-md text-sm transition-colors ${
                  activeTab === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProfileSidebar;
