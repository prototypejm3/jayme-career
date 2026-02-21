import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const capabilities = [
  {
    statement: "Executive search & leadership hiring",
    blurb: "Sourcing, assessing, and closing VP+ and C-level talent for high-growth companies — from first conversation to signed offer.",
  },
  {
    statement: "IC team buildouts and leveling",
    blurb: "Structuring engineering, product, and design ladders from junior to staff/principal, ensuring clear expectations and career progression.",
  },
  {
    statement: "Recruiting org design",
    blurb: "Designing team structures, defining capacity models, and setting ratios that let recruiting scale predictably with headcount demand.",
  },
  {
    statement: "Process build: interview loops, scorecards, calibration",
    blurb: "Creating structured, repeatable interview processes that reduce bias, improve signal, and give hiring managers confidence in every decision.",
  },
  {
    statement: "Employer brand & narrative positioning",
    blurb: "Crafting the story that makes top candidates say yes — from job descriptions to pitch decks to how your team shows up in market.",
  },
  {
    statement: "Agency/vendor management",
    blurb: "Selecting, onboarding, and managing external recruiting partners to maximize ROI and maintain quality standards.",
  },
  {
    statement: "Forecasting & workforce planning",
    blurb: "Translating business goals into hiring plans with timelines, budgets, and pipeline targets that leadership can track and trust.",
  },
  {
    statement: "Data-driven hiring metrics",
    blurb: "Building dashboards and reporting frameworks around time-to-fill, pipeline conversion, source quality, and offer acceptance rates.",
  },
];

const TalentArchitectureSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection className="px-6 py-12 max-w-4xl mx-auto">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left group"
      >
        <div>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-1">
            Capabilities
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Talent Architecture
          </h2>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="section-divider mt-4 mb-10" />
            <div className="space-y-8">
              {capabilities.map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1.5">
                    {item.statement}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-2xl">
                    {item.blurb}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-border/50">
              <p className="font-display text-xl sm:text-2xl font-bold text-primary text-center">
                Head of Talent = systems + strategy + execution.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
};

export default TalentArchitectureSection;
