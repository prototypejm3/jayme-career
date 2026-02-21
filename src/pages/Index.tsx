import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import CompaniesSection from "@/components/CompaniesSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PhilosophySection />
      <CompaniesSection />
      <ExperienceSection />
      <SkillsSection />
      <ReferencesSection />
      <ContactSection />

      <footer className="py-8 text-center text-muted-foreground text-sm font-body border-t border-border">
        © {new Date().getFullYear()} All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
