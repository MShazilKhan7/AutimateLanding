import { Mic, TrendingUp, Gamepad2, UserCheck, Smartphone, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { AnimatedSection } from "@/components/ui/animated-section";

export function FeaturesSection() {
  const features = [
    {
      icon: Mic,
      title: "Interactive Speech Practice",
      description: "Voice recognition technology provides real-time feedback on pronunciation and speech patterns.",
      color: "from-gentle-blue to-indigo-500",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Detailed analytics and reports to monitor improvement and adjust therapy plans accordingly.",
      color: "from-sage-green to-emerald-500",
    },
    {
      icon: Gamepad2,
      title: "Gamified Learning",
      description: "Engaging games and activities that make therapy fun and motivating for children.",
      color: "from-warm-lavender to-violet-500",
    },
    {
      icon: UserCheck,
      title: "Social Skills Training",
      description: "Virtual scenarios to practice social interactions and communication in safe environments.",
      color: "from-soft-pink to-rose-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Accessibility",
      description: "Cross-platform support ensuring therapy access on tablets, phones, and computers.",
      color: "from-warm-orange to-amber-500",
    },
    {
      icon: GraduationCap,
      title: "Parent Resources",
      description: "Educational materials and guidance to help families support their child's development.",
      color: "from-soft-teal to-cyan-500",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Platform Features"
          description="Comprehensive tools designed specifically for children with autism and their families."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconGradient={feature.color}
              delay={index * 0.1}
              testId={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl"
            />
          ))}
        </div>

        <AnimatedSection
          delay={0.6}
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-soft-charcoal">Designed for Success</h3>
              <p className="text-lg text-gray-600">
                Every feature is carefully crafted based on research and feedback from autism specialists, ensuring
                maximum effectiveness and engagement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-white text-soft-charcoal shadow-sm">
                  Evidence-Based
                </Badge>
                <Badge variant="secondary" className="bg-white text-soft-charcoal shadow-sm">
                  Child-Friendly
                </Badge>
                <Badge variant="secondary" className="bg-white text-soft-charcoal shadow-sm">
                  Parent-Approved
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                alt="Family supporting child with autism"
                className="rounded-xl shadow-lg w-full h-32 object-cover"
                data-testid="img-family-support"
              />
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                alt="Children with autism in learning session"
                className="rounded-xl shadow-lg w-full h-32 object-cover"
                data-testid="img-children-learning"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
