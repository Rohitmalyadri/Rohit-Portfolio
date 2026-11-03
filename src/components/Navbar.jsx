import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'resume', label: 'Resume' },
  { id: 'coding-handles', label: 'Coding Platforms' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = ({ activeSection, onSectionClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        aria-label="Primary Navigation"
        className={`transition-all duration-500 ease-in-out ${
          isScrolled ? 'pt-4 px-4 sm:px-6' : 'pt-0 px-0'
        }`}
      >
        <div 
          className={`mx-auto transition-all duration-500 ease-in-out ${
            isScrolled
              ? 'container max-w-6xl rounded-full glass-effect shadow-anti-gravity dark:shadow-anti-gravity-dark px-6 lg:px-8'
              : 'container px-4 bg-transparent border-transparent'
          }`}
        >
          <div className="flex items-center justify-between h-16">
            <button
              type="button"
              onClick={() => onSectionClick('hero')}
              className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              aria-label="Rohit Malyadri - Return to top"
            >
              Rohit Malyadri
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded px-1 py-0.5 ${
                    activeSection === item.id
                      ? 'text-primary border-b-2 border-primary font-semibold'
                      : 'text-muted-foreground'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Controls */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Dropdown Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t bg-background/95 backdrop-blur-md rounded-b-2xl mt-1 shadow-lg">
              <div className="py-4 space-y-2 px-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => {
                      onSectionClick(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors hover:text-primary hover:bg-muted/50 rounded-lg ${
                      activeSection === item.id
                        ? 'text-primary bg-muted/60 font-semibold'
                        : 'text-muted-foreground'
                    }`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
