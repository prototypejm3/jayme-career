import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EntrepreneurialSection from "@/components/EntrepreneurialSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ExperienceSection />
      <EntrepreneurialSection />
      <SkillsSection />
      <ProjectsSection />
      <ReferencesSection />
      <ContactSection />

      <footer className="py-8 text-center text-muted-foreground text-sm font-body border-t border-border">
        © {new Date().getFullYear()} Alex Morgan. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
