import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stages = [
  {
    statement: "0 → 1 Founding Teams",
    blurb: "Identifying and closing the first 10–20 hires who define product velocity, technical direction, and cultural DNA. These roles require founder-level conviction and candidates who thrive in ambiguity.",
  },
  {
    statement: "10 → 100 Scaling Phase",
    blurb: "Building repeatable hiring infrastructure — structured interview loops, calibrated scorecards, executive alignment, and recruiting analytics — to scale without diluting quality or bar.",
  },
  {
    statement: "Pre-IPO & Public Company Leadership",
    blurb: "Partnering on VP, SVP, and C-level searches across AI, Data, Engineering, and Product. Experienced in navigating board dynamics, compensation structuring, executive referencing, and stakeholder alignment in high-visibility environments.",
  },
  {
    statement: "PE-Backed Vertical SaaS Expansion",
    blurb: "Supporting portfolio companies through aggressive growth and acquisition cycles — staffing GTM, Product, and Engineering across business units while maintaining consistent talent standards.",
  },
  {
    statement: "Multi-Team, Global Recruiting Orgs",
    blurb: "Designing and leading distributed talent functions operating across time zones and markets, with unified bar-raising processes and executive partnership embedded at the core.",
  },
];

const ScalingSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection className="px-6 py-12 max-w-4xl mx-auto">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left group"
      >
        <div>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-1">
            Operating Range
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Operating Range
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
              {stages.map((item, idx) => (
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
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
};

export default ScalingSection;
