import { motion } from "framer-motion";
import { StatCard } from "@/components/ui/stat-card";

export function About() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 sm:pt-24 pb-10 sm:pb-16 bg-gradient-to-br from-blue-50 via-purple-25 to-teal-25 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 w-full"
          >
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-black/80">Empowering</span>
                <br />
                <span className="text-primary">
                  Autism Care
                </span>
                <br />
                <span className="text-black/80">with AI</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                AI-powered speech therapy that helps children with autism develop communication skills through
                personalized, accessible, and affordable care.
              </p>
            </div>

            <div className="flex flex-col xs:flex-row sm:flex-row md:flex-row flex-wrap sm:flex-nowrap items-stretch gap-4 sm:gap-6 md:gap-8 pt-4">
              <StatCard 
                value="350K+" 
                label="Children in Pakistan" 
                color="text-primary" 
                testId="stat-children-pakistan"
              />
              <StatCard 
                value="1 in 100" 
                label="Children with Autism" 
                color="text-primary" 
                testId="stat-autism-prevalence"
              />
              <StatCard 
                value="24/7" 
                label="AI Support" 
                color="text-primary" 
                testId="stat-ai-support"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full mt-10 lg:mt-0"
          >
            <div className="w-full mx-auto lg:mx-0">
              <img
                src="/assets/about.jpg"
                alt="Autistic child in speech therapy session with therapist using visual aids"
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto object-cover"
                data-testid="img-hero-therapy"
              />
              <div className="absolute left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 bottom-2 sm:bottom-4 bg-white/80 rounded-xl px-3 py-2 sm:px-4 sm:py-2 shadow text-sm sm:text-base text-soft-charcoal max-w-xs w-[90%] sm:w-auto">
                We help autistic children thrive in speech therapy, empowering communication for those with ASD.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
