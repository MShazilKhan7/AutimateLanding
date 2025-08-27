import { Play, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { StatCard } from "@/components/ui/stat-card";
import { IconBadge } from "@/components/ui/icon-badge";
import { AnimatedSection } from "@/components/ui/animated-section";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-25 to-teal-25 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-soft-charcoal">Empowering</span>
                <br />
                <span className="bg-gradient-to-r from-soft-teal to-gentle-blue bg-clip-text text-transparent">
                  Autism Care
                </span>
                <br />
                <span className="text-soft-charcoal">with AI</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                AI-powered speech therapy that helps children with autism develop communication skills through
                personalized, accessible, and affordable care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <GradientButton
                onClick={scrollToContact}
                variant="primary"
                size="lg"
                testId="button-start-trial"
              >
                Start Free Trial
              </GradientButton>
              <GradientButton
                variant="secondary"
                size="lg"
                testId="button-watch-demo"
                className="flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </GradientButton>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <StatCard 
                value="350K+" 
                label="Children in Pakistan" 
                color="text-soft-teal" 
                testId="stat-children-pakistan"
              />
              <StatCard 
                value="1 in 100" 
                label="Children with Autism" 
                color="text-gentle-blue" 
                testId="stat-autism-prevalence"
              />
              <StatCard 
                value="24/7" 
                label="AI Support" 
                color="text-sage-green" 
                testId="stat-ai-support"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Children in speech therapy session"
              className="rounded-3xl shadow-2xl w-full h-auto"
              data-testid="img-hero-therapy"
            />

            <AnimatedSection
              delay={0.4}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <IconBadge 
                  icon={Brain} 
                  gradient="from-sage-green to-soft-teal" 
                  size="md"
                />
                <div>
                  <div className="font-semibold text-soft-charcoal">AI-Powered</div>
                  <div className="text-sm text-gray-600">Personalized Learning</div>
                </div>
              </div>
            </AnimatedSection>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
