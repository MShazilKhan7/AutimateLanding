import { AlertTriangle, DollarSign, HeartCrack, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { IconBadge } from "@/components/ui/icon-badge";
import { AnimatedSection } from "@/components/ui/animated-section";

export function ProblemSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The Challenge We're Solving"
          description="Millions of children with autism lack access to essential speech therapy due to cost, availability, and geographical barriers."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimatedSection
            delay={0.1}
            className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100"
          >
            <IconBadge 
              icon={AlertTriangle} 
              gradient="from-red-400 to-orange-400" 
              size="lg" 
            />
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-soft-charcoal mb-4">Limited Access</h3>
              <p className="text-gray-600">
                Very few trained professionals and therapy centers available, creating massive gaps in care.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl border border-yellow-100"
          >
            <IconBadge 
              icon={DollarSign} 
              gradient="from-yellow-400 to-amber-400" 
              size="lg" 
            />
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-soft-charcoal mb-4">High Costs</h3>
              <p className="text-gray-600">
                Current therapy solutions are expensive, making them inaccessible to most families in need.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={0.3}
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100"
          >
            <IconBadge 
              icon={HeartCrack} 
              gradient="from-purple-400 to-pink-400" 
              size="lg" 
            />
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-soft-charcoal mb-4">Growing Need</h3>
              <p className="text-gray-600">
                Over 350,000 children in Pakistan alone need support, with numbers continuing to rise globally.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection
          delay={0.4}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                alt="Child with autism using educational technology"
                className="rounded-2xl shadow-lg w-full h-auto"
                data-testid="img-autism-technology"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-soft-charcoal">The Impact of Untreated Autism</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-sage-green text-xl mt-1" />
                  <p className="text-gray-700">Speech and communication challenges affect learning and socialization</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-sage-green text-xl mt-1" />
                  <p className="text-gray-700">Limited independence and confidence in daily activities</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-sage-green text-xl mt-1" />
                  <p className="text-gray-700">Families struggle without proper support and resources</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
