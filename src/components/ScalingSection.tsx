import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stages = [
  {
    statement: "0 → 1 founding teams",
    blurb: "Identifying the first 10–20 hires that define a company's DNA. These roles require founders-level conviction and candidates who thrive in ambiguity.",
  },
  {
    statement: "10 → 100 scaling phase",
    blurb: "Building repeatable hiring processes, standing up interview loops, and creating the infrastructure needed to grow without losing quality or culture.",
  },
  {
    statement: "PE-backed vertical SaaS expansion",
    blurb: "Partnering with portfolio leadership to rapidly staff GTM, product, and engineering teams across multiple acquisitions and business units.",
  },
  {
    statement: "Multi-team global recruiting orgs",
    blurb: "Designing and leading distributed talent functions that operate across time zones, markets, and hiring cultures — with consistent standards.",
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
            Growth Stages
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Scaling Teams Across Growth Stages
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
