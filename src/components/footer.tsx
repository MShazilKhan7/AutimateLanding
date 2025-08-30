import { MessageCircle } from "lucide-react";
import { IconBadge } from "@/components/ui/icon-badge";
import { AnimatedSection } from "@/components/ui/animated-section";

export function Footer() {
  return (
    <footer className="bg-soft-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <AnimatedSection className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">AutiMate</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering children with autism through AI-powered speech therapy and accessible care solutions.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Free Trial</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">API</a></li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Community</a></li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Careers</a></li>
            </ul>
          </AnimatedSection>
        </div>

        <AnimatedSection
          delay={0.4}
          className="border-t border-gray-600 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">© 2025 AutiMate. All rights reserved.</p>
            <p className="text-gray-400 text-sm">Made with ❤️ for autism community</p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
