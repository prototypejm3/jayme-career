import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Rocket } from "lucide-react";

const ventures = [
  {
    id: 1,
    name: "LaunchPad Studio",
    role: "Co-Founder & CTO",
    period: "2021 — Present",
    description:
      "Built a no-code platform helping 500+ creators launch their digital products. Grew to $15K MRR in 8 months with a lean team of 3.",
    highlights: ["Product Strategy", "Technical Architecture", "Fundraising"],
  },
  {
    id: 2,
    name: "GreenByte",
    role: "Founder",
    period: "2019 — 2021",
    description:
      "Developed a sustainability tracking app for small businesses. Acquired by a larger climate-tech company after reaching 2,000 active users.",
    highlights: ["MVP Development", "User Research", "Exit Strategy"],
  },
];

const EntrepreneurialSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <AnimatedSection className="px-6 py-28 max-w-4xl mx-auto">
      <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
        Ventures
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
        Entrepreneurial Experience
      </h2>
      <div className="section-divider mb-14" />

      <div className="space-y-4">
        {ventures.map((v) => {
          const isActive = activeId === v.id;
          return (
            <motion.div
              key={v.id}
              onClick={() => setActiveId(isActive ? null : v.id)}
              className={`rounded-lg border cursor-pointer transition-colors duration-300 ${
                isActive ? "border-primary/30 bg-card" : "border-border hover:border-primary/20"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 gap-2">
                <div className="flex items-center gap-3">
                  <Rocket size={18} className="text-primary shrink-0" />
                  <div>
                    <h3 className="font-display font-semibold text-lg">{v.name}</h3>
                    <p className="text-primary text-sm">{v.role}</p>
                  </div>
                </div>
                <span className="text-muted-foreground text-sm font-body shrink-0">
                  {v.period}
                </span>
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-0">
                      <p className="text-secondary-foreground leading-relaxed mb-4">
                        {v.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {v.highlights.map((h) => (
                          <span
                            key={h}
                            className="text-xs font-display px-3 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </AnimatedSection>
  );
};

export default EntrepreneurialSection;
