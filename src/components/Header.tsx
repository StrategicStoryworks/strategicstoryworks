import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">Strategic Storyworks</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-foreground hover:text-primary transition-colors">
              Why Us
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.location.href = 'mailto:hello@strategicstory.works'}
            >
              Let's Talk
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <a
              href="/services"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#why-us"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              variant="hero" 
              size="sm" 
              className="w-full"
              onClick={() => window.location.href = 'mailto:hello@strategicstory.works'}
            >
              Let's Talk
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;