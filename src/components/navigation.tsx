import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { IconBadge } from "@/components/ui/icon-badge";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <IconBadge 
              icon={MessageCircle} 
              gradient="from-soft-teal to-gentle-blue" 
              size="md"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-soft-teal to-gentle-blue bg-clip-text text-transparent">
              AutiMate
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-soft-charcoal hover:text-gentle-blue transition-colors duration-200"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="text-soft-charcoal hover:text-gentle-blue transition-colors duration-200"
              data-testid="nav-solution"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-soft-charcoal hover:text-gentle-blue transition-colors duration-200"
              data-testid="nav-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-soft-charcoal hover:text-gentle-blue transition-colors duration-200"
              data-testid="nav-contact"
            >
              Contact
            </button>
            <GradientButton
              onClick={() => scrollToSection("contact")}
              variant="primary"
              size="md"
              testId="button-get-started"
              className="rounded-full px-6 py-2"
            >
              Get Started
            </GradientButton>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-soft-charcoal hover:text-gentle-blue"
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-soft-charcoal hover:text-gentle-blue transition-colors duration-200 text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("solution")}
                className="text-soft-charcoal hover:text-gentle-blue transition-colors duration-200 text-left"
                data-testid="mobile-nav-solution"
              >
                Solution
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-soft-charcoal hover:text-gentle-blue transition-colors duration-200 text-left"
                data-testid="mobile-nav-features"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-soft-charcoal hover:text-gentle-blue transition-colors duration-200 text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <GradientButton
                onClick={() => scrollToSection("contact")}
                variant="primary"
                size="md"
                testId="mobile-button-get-started"
                className="w-full"
              >
                Get Started
              </GradientButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
