import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ScalingSection from "@/components/ScalingSection";
import TalentArchitectureSection from "@/components/TalentArchitectureSection";
import CompaniesSection from "@/components/CompaniesSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section id="about">
        <HeroSection />
      </section>

      <section id="expertise">
        <PhilosophySection />
        <ScalingSection />
        <TalentArchitectureSection />
        <SkillsSection />
      </section>

      <section id="companies">
        <CompaniesSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="vouches">
        <ReferencesSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <footer className="py-8 text-center text-muted-foreground text-sm font-body border-t border-border">
        © {new Date().getFullYear()} All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
