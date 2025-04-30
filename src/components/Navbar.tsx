
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, 
  Code, 
  ClipboardCheck, 
  User, 
  Moon, 
  Sun, 
  Briefcase, 
  Search,
  LogOut,
  ChevronDown
} from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, signOut, accountType } = useAuth();

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  return (
    <nav 
      className={cn(
        "sticky top-0 z-50 w-full py-3 transition-all duration-300",
        "backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b",
        isScrolled ? "shadow-sm" : "border-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-xl font-bold gradient-text">Interview Craftopia</h1>
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            
            {/* Mobile search button */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Search size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 p-3" align="end">
                <form onSubmit={handleSearch} className="flex gap-2">
                  <Input 
                    placeholder="Search resources..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="sm">Search</Button>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu size={18} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="mt-8 flex flex-col gap-4">
                  {/* Mock Interviews */}
                  <div className="flex flex-col">
                    <Link 
                      to="/mock-interviews"
                      className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      <ClipboardCheck size={18} />
                      <span>Mock Interviews</span>
                    </Link>
                    <Link 
                      to="/mock-interviews/technical"
                      className="flex items-center gap-2 px-4 py-2 pl-10 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      <span>Technical Interviews</span>
                    </Link>
                    <Link 
                      to="/mock-interviews/behavioral"
                      className="flex items-center gap-2 px-4 py-2 pl-10 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      <span>Behavioral Interviews</span>
                    </Link>
                  </div>
                  
                  {/* Coding Practice */}
                  <Link 
                    to="/coding-practice"
                    className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    <Code size={18} />
                    <span>Coding Practice</span>
                  </Link>
                  
                  {/* Assessments */}
                  <div className="flex flex-col">
                    <Link 
                      to="/assessments"
                      className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      <ClipboardCheck size={18} />
                      <span>Assessments</span>
                    </Link>
                    <Link 
                      to="/custom-assessments"
                      className="flex items-center gap-2 px-4 py-2 pl-10 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      <span>Custom Assessments</span>
                    </Link>
                  </div>
                  
                  {/* Company Section */}
                  <div className="flex flex-col">
                    <Link 
                      to="/company-dashboard"
                      className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      <Briefcase size={18} />
                      <span>For Companies</span>
                    </Link>
                    <Link 
                      to="/company-dashboard"
                      className="flex items-center gap-2 px-4 py-2 pl-10 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      <span>Company Dashboard</span>
                    </Link>
                    <Link 
                      to="/custom-assessments"
                      className="flex items-center gap-2 px-4 py-2 pl-10 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      <span>Custom Assessments</span>
                    </Link>
                  </div>
                  
                  {/* Profile */}
                  <Link 
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    <User size={18} />
                    <span>Profile</span>
                  </Link>
                  
                  {/* Auth actions */}
                  <div className="mt-4 pt-4 border-t border-border">
                    {user ? (
                      <Button
                        onClick={() => signOut()}
                        className="w-full flex items-center justify-center gap-2"
                        variant="outline"
                      >
                        <LogOut size={18} />
                        <span>Sign Out</span>
                      </Button>
                    ) : (
                      <Link to="/auth">
                        <Button 
                          className="w-full"
                          variant="outline"
                        >
                          Sign In
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <NavigationMenu>
              <NavigationMenuList>
                {/* Mock Interviews */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Mock Interviews</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-2">
                      <Link to="/mock-interviews" className="block p-2 hover:bg-accent rounded-md">
                        All Mock Interviews
                      </Link>
                      <Link to="/mock-interviews/technical" className="block p-2 hover:bg-accent rounded-md">
                        Technical Interviews
                      </Link>
                      <Link to="/mock-interviews/behavioral" className="block p-2 hover:bg-accent rounded-md">
                        Behavioral Interviews
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* Coding Practice */}
                <NavigationMenuItem>
                  <Link to="/coding-practice">
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Coding Practice
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                {/* Assessments */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Assessments</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-2">
                      <Link to="/assessments" className="block p-2 hover:bg-accent rounded-md">
                        All Assessments
                      </Link>
                      <Link to="/custom-assessments" className="block p-2 hover:bg-accent rounded-md">
                        Custom Assessments
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* For Companies */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>For Companies</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[220px] p-2">
                      <Link to="/company-dashboard" className="block p-2 hover:bg-accent rounded-md">
                        Company Dashboard
                      </Link>
                      <Link to="/custom-assessments" className="block p-2 hover:bg-accent rounded-md">
                        Custom Assessments
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center relative">
              <Input
                placeholder="Search resources..."
                className="w-60 pr-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={16} className="absolute right-3 text-muted-foreground" />
            </form>
            
            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* Dark mode toggle */}
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
              
              {/* Profile/Auth actions */}
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <User size={18} />
                      <span className="hidden md:inline">My Account</span>
                      <ChevronDown size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link to="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={accountType === 'company' ? '/company-dashboard' : '/profile'}>
                        {accountType === 'company' ? 'Company Dashboard' : 'Dashboard'}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()}>
                      <LogOut className="mr-2" size={16} />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/auth">
                  <Button variant="outline" size="sm">Sign In</Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
