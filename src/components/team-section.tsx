import { University, MapPin, Lightbulb } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { TeamMemberCard } from "@/components/ui/team-member-card";
import { AnimatedSection } from "@/components/ui/animated-section";

export function TeamSection() {
  const teamMembers = [
    {
      name: "M.Shazil Khan",
      role: "Co-founder",
      color: "from-gentle-blue to-purple-500",
      imageUrl: "/assets/shazil.jpg",
    },
    {
      name: "M.Hamza Bham",
      role: "Co-founder",
      description: "Specializing in machine learning and speech recognition technologies.",
      color: "from-sage-green to-teal-500",
      imageUrl: "/assets/hamza.jpg",
    },
    {
      name: "Faiq Hussain",
      role: "Co-founder",
      description: "Focused on user experience and accessibility in healthcare applications.",
      color: "from-warm-orange to-red-500",
      imageUrl: "/assets/faiq.jpg",
    },
    {
      name: "Umair Lafir",
      role: "Co-founder",
      description: "Dedicated to creating intuitive and inclusive interfaces for children and families.",
      color: "from-soft-pink to-yellow-400",
      imageUrl: "/assets/umair.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-25 to-orange-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Meet Our Team"
          description="Passionate students from NED University dedicated to making autism care accessible to every family."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.role}
              name={member.name}
              role={member.role}
              gradient={member.color}
              delay={index * 0.1}
              testId={`team-member-${index}`}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>

        <AnimatedSection
          delay={0.3}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-soft-charcoal">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're driven by the belief that every child deserves access to quality autism care. Coming from NED
                University, we combine technical expertise with deep empathy to create solutions that truly make a
                difference.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <University className="text-gentle-blue text-xl" />
                  <span className="text-soft-charcoal">NED University of Engineering & Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-soft-pink text-xl" />
                  <span className="text-soft-charcoal">Based in Pakistan, Serving Globally</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lightbulb className="text-warm-orange text-xl" />
                  <span className="text-soft-charcoal">Founded in 2025</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/assets/mission.webp"
                alt="Young team working on healthcare technology"
                className="rounded-2xl shadow-lg w-full h-auto"
                data-testid="img-team-working"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
