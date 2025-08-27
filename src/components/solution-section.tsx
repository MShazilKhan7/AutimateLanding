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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection
            direction="left"
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-soft-charcoal">Transforming Autism Care</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform uses advanced AI to provide personalized speech therapy sessions that adapt to each
                child's unique needs, learning pace, and progress.
              </p>
            </div>

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

          <AnimatedSection
            direction="right"
            delay={0.2}
            className="relative"
          >
            <img
              src="https://pixabay.com/get/g4c5186e678db84a876ed9ae5d66e260369aab4664c5c9c1f95ed26d6f3a8623ed9955bc4436d6b3ecf8ba4ed7c599a3851bf5fce5753a8d8311801f698eee63e_1280.jpg"
              alt="Healthcare technology interface"
              className="rounded-3xl shadow-2xl w-full h-auto"
              data-testid="img-healthcare-tech"
            />

            <AnimatedSection
              delay={0.4}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-sage-green" data-testid="stat-success-rate">92%</div>
                <div className="text-xs text-gray-600">Success Rate</div>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
