import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ScalingSection from "@/components/ScalingSection";
import TalentArchitectureSection from "@/components/TalentArchitectureSection";
import TalentAsProductSection from "@/components/TalentAsProductSection";
import CompaniesSection from "@/components/CompaniesSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";
import { AnimatePresence, motion } from "framer-motion";

const tabs = [
  { id: "about", label: "Greetings" },
  { id: "expertise", label: "Talent Architecture" },
  { id: "projects", label: "Independent Builds" },
  { id: "experience", label: "Operating History" },
  { id: "vouches", label: "What Others Say" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="overflow-y-auto h-full">
            <HeroSection />
            <ContactSection />
          </div>
        );
      case "expertise":
        return (
          <div className="overflow-y-auto h-full">
            <TalentAsProductSection />
            <PhilosophySection />
            <ScalingSection />
            <TalentArchitectureSection />
            <SkillsSection />
          </div>
        );
      case "projects":
        return <CompaniesSection />;
      case "experience":
        return (
          <div className="overflow-y-auto h-full">
            <ExperienceSection />
          </div>
        );
      case "vouches":
        return (
          <div className="overflow-y-auto h-full">
            <ReferencesSection />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="h-screen flex flex-col bg-background overflow-hidden">
      <Navbar tabs={tabs} activeTab={activeTab} onTabChange={(id) => setActiveTab(id as TabId)} />

      {/* Print-only: render all sections */}
      <div className="hidden print:block print:overflow-visible">
        <HeroSection />
        <TalentAsProductSection />
        <PhilosophySection />
        <ScalingSection />
        <TalentArchitectureSection />
        <SkillsSection />
        <CompaniesSection />
        <ExperienceSection />
        <ReferencesSection />
        <ContactSection />
      </div>

      {/* Screen: tab-based content */}
      <div className="flex-1 overflow-hidden print:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Index;
