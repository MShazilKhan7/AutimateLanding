import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "solution", label: "Solution" },
  { id: "features", label: "Features" },
  { id: "contact", label: "Contact" },
];

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
    <nav className="bg-white w-full z-50 border-b shadow-sm border-primary/10 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary select-none">
              AutiMate
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 rounded-md text-black/60 font-medium hover:bg-primary hover:text-white transition-colors duration-200"
                data-testid={`nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <GradientButton
              onClick={() => scrollToSection("contact")}
              variant="primary"
              size="md"
              testId="button-get-started"
              className="rounded-full px-6 py-2 ml-2"
            >
              Get Started
            </GradientButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary hover:bg-primary/10"
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-primary/10 py-4 shadow">
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full px-4 py-3 rounded-md text-primary font-medium text-left hover:bg-primary hover:text-white transition-colors duration-200"
                  data-testid={`mobile-nav-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
              <GradientButton
                onClick={() => scrollToSection("contact")}
                variant="primary"
                size="md"
                testId="mobile-button-get-started"
                className="w-full mt-2"
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
