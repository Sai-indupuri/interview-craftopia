
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Code, ClipboardCheck, User, LifeBuoy, Moon, Sun } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

type NavItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { name: "Home", path: "/", icon: Home },
  { name: "Mock Interviews", path: "/mock-interviews", icon: ClipboardCheck },
  { name: "Coding Practice", path: "/coding-practice", icon: Code },
  { name: "Assessments", path: "/assessments", icon: ClipboardCheck },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Support", path: "/support", icon: LifeBuoy },
];

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="sticky top-0 z-50 w-full py-3 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl font-bold gradient-text">Interview Craftopia</h1>
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="mt-8 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link 
                      key={item.name} 
                      to={item.path}
                      className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      <item.icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                  <Link 
                    to="/custom-assessments"
                    className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    <ClipboardCheck size={18} />
                    <span>Custom Assessments</span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
            <Link 
              to="/custom-assessments"
              className="flex items-center gap-1 text-foreground hover:text-primary transition-colors"
            >
              <ClipboardCheck size={16} />
              <span>Custom Assessments</span>
            </Link>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
