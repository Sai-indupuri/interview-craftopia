
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Code, ClipboardCheck, User, LifeBuoy, Moon, Sun, Briefcase, LogOut } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user, signOut, accountType } = useAuth();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Combined navigation items for all users
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Mock Interviews", path: "/mock-interviews", icon: ClipboardCheck },
    { name: "Coding Practice", path: "/coding-practice", icon: Code },
    { name: "Assessments", path: "/assessments", icon: ClipboardCheck },
    { name: "Profile", path: "/profile", icon: User },
    { name: "Company Dashboard", path: "/company-dashboard", icon: Briefcase },
    { name: "Custom Assessments", path: "/custom-assessments", icon: ClipboardCheck },
    { name: "Support", path: "/support", icon: LifeBuoy },
  ];

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
                  
                  {user ? (
                    <button
                      onClick={() => signOut()}
                      className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors mt-4"
                    >
                      <LogOut size={18} />
                      <span>Sign Out</span>
                    </button>
                  ) : (
                    <Link 
                      to="/auth"
                      className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors mt-4"
                    >
                      <User size={18} />
                      <span>Sign In / Sign Up</span>
                    </Link>
                  )}
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
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            {user ? (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => signOut()}
                className="flex items-center gap-1"
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </Button>
            ) : (
              <Link to="/auth">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <User size={16} />
                  <span>Sign In / Sign Up</span>
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
