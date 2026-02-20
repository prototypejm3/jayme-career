import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "TechCorp",
    period: "2022 — Present",
    description:
      "Led the redesign of the core platform serving 2M+ users. Built a component library from scratch, improved performance by 40%, and mentored a team of 4 engineers.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 — 2022",
    description:
      "Shipped 12 features end-to-end as the third engineering hire. Built real-time dashboards, payment integrations, and an internal admin tool used daily by the ops team.",
    tech: ["Node.js", "React", "PostgreSQL", "AWS"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "DesignStudio",
    period: "2019 — 2020",
    description:
      "Translated pixel-perfect designs into responsive web apps for agency clients. Focused on animation, accessibility, and cross-browser compatibility.",
    tech: ["JavaScript", "Vue.js", "SCSS", "GSAP"],
  },
];

const ExperienceSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <AnimatedSection className="px-6 py-28 max-w-4xl mx-auto">
      <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
        Experience
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
        Where I've worked
      </h2>
      <div className="section-divider mb-14" />

      <div className="space-y-4">
        {experiences.map((exp) => {
          const isActive = activeId === exp.id;
          return (
            <motion.div
              key={exp.id}
              onClick={() => setActiveId(isActive ? null : exp.id)}
              className={`rounded-lg border cursor-pointer transition-colors duration-300 ${
                isActive ? "border-primary/30 bg-card" : "border-border hover:border-primary/20"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 gap-2">
                <div>
                  <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
                  <p className="text-primary text-sm">{exp.company}</p>
                </div>
                <span className="text-muted-foreground text-sm font-body shrink-0">
                  {exp.period}
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
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-display px-3 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {t}
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

export default ExperienceSection;
