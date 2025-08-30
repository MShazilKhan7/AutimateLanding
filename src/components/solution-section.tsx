import { Bot, Clock, Heart, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { AnimatedSection } from "@/components/ui/animated-section";

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-teal-50 via-blue-25 to-purple-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our AI-Powered Solution"
          description="AutiMate bridges the care gap with accessible, personalized speech therapy powered by artificial intelligence."
        />

        <div className="flex justify-center mb-16">
          <AnimatedSection
            direction="up"
            className="w-full max-w-3xl space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <FeatureCard
                icon={Bot}
                title="AI-Powered"
                description="Intelligent algorithms that learn and adapt to each child's progress"
                iconGradient="from-soft-teal to-gentle-blue"
                delay={0.1}
              />

              <FeatureCard
                icon={Clock}
                title="24/7 Access"
                description="Available anytime, anywhere with internet connection"
                iconGradient="from-sage-green to-soft-teal"
                delay={0.2}
              />

              <FeatureCard
                icon={Heart}
                title="Affordable"
                description="Fraction of traditional therapy costs"
                iconGradient="from-warm-lavender to-soft-pink"
                delay={0.3}
              />

              <FeatureCard
                icon={Users}
                title="Family Support"
                description="Tools and resources for parents and caregivers"
                iconGradient="from-warm-orange to-yellow-400"
                delay={0.4}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
