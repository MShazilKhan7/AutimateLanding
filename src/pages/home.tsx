import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { SolutionSection } from "@/components/solution-section";
import { FeaturesSection } from "@/components/features-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <HeroSection />
        <About />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
