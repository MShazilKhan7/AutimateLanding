import { AlertTriangle, DollarSign, HeartCrack, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { IconBadge } from "@/components/ui/icon-badge";
import { AnimatedSection } from "@/components/ui/animated-section";

export function ProblemSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The Challenge We're Solving"
          description="Millions of children with autism lack access to essential speech therapy due to cost, availability, and geographical barriers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <AnimatedSection
            delay={0.1}
            className="bg-gradient-to-br from-red-50 to-orange-50 p-6 sm:p-8 rounded-2xl border border-red-100 h-full flex flex-col"
          >
            <IconBadge 
              icon={AlertTriangle} 
              gradient="from-red-400 to-orange-400" 
              size="lg" 
            />
            <div className="mt-5 sm:mt-6 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold text-soft-charcoal mb-3 sm:mb-4">Limited Access</h3>
              <p className="text-gray-600 text-base sm:text-[1.05rem]">
                Very few trained professionals and therapy centers available, creating massive gaps in care.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 sm:p-8 rounded-2xl border border-yellow-100 h-full flex flex-col"
          >
            <IconBadge 
              icon={DollarSign} 
              gradient="from-yellow-400 to-amber-400" 
              size="lg" 
            />
            <div className="mt-5 sm:mt-6 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold text-soft-charcoal mb-3 sm:mb-4">High Costs</h3>
              <p className="text-gray-600 text-base sm:text-[1.05rem]">
                Current therapy solutions are expensive, making them inaccessible to most families in need.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={0.3}
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 rounded-2xl border border-purple-100 h-full flex flex-col"
          >
            <IconBadge 
              icon={HeartCrack} 
              gradient="from-purple-400 to-pink-400" 
              size="lg" 
            />
            <div className="mt-5 sm:mt-6 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold text-soft-charcoal mb-3 sm:mb-4">Growing Need</h3>
              <p className="text-gray-600 text-base sm:text-[1.05rem]">
                Over 350,000 children in Pakistan alone need support, with numbers continuing to rise globally.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection
          delay={0.4}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="mb-6 lg:mb-0">
              <img
                src="/assets/about2.jpg"
                alt="Child with autism using educational technology"
                className="rounded-xl sm:rounded-2xl shadow-lg w-full h-auto max-h-[320px] sm:max-h-[400px] object-cover"
                data-testid="img-autism-technology"
              />
            </div>
            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-soft-charcoal">The Impact of Untreated Autism</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle className="text-sage-green text-lg sm:text-xl mt-1" />
                  <p className="text-gray-700 text-base sm:text-lg">Speech and communication challenges affect learning and socialization</p>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle className="text-sage-green text-lg sm:text-xl mt-1" />
                  <p className="text-gray-700 text-base sm:text-lg">Limited independence and confidence in daily activities</p>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle className="text-sage-green text-lg sm:text-xl mt-1" />
                  <p className="text-gray-700 text-base sm:text-lg">Families struggle without proper support and resources</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
