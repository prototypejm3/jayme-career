import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hotel } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ventures = [
  {
    id: 1,
    name: "Destination by Hyatt",
    role: "Head of Operations & Corporate Event Manager",
    period: "Mar 2016 — Dec 2016",
    location: "Greater San Diego Area",
    description:
      "Responsible for payroll and scheduling for 75+ employees. Maintained relationships with vendors and entertainment agencies. Oversaw operations and helped grow revenues to the budget of 'Opening Day Party' $1MM+. Saw a 30% increase in all outlet satisfaction scores tracked via social media. Rated amongst the Top Resorts in the world by Condé Nast.",
    highlights: ["Revenue Growth", "Vendor Relations", "Condé Nast Rated"],
  },
  {
    id: 2,
    name: "The Ritz-Carlton Hotel Company",
    role: "Learning Coach & Operations Supervisor",
    period: "Apr 2013 — Mar 2016",
    location: "5 Star 5 Diamond · Dove Mountain",
    description:
      "As the youngest person elected for this position: Assisted in Strategic Planning for 2014–2016. Raised Gallup Scores from #12 in the company to #2. Reduced Beverage Cost from 23.5% to 17.9% & labor from 13% to 9.5%. Key contributor for training employees to meet Forbes Five Star and AAA Five Diamond Standards. Received 90%+ employee engagement within 3 departments for 2 consecutive years. Five Star Employee of the Quarter multiple times.",
    highlights: ["Forbes 5-Star", "AAA 5-Diamond", "Gallup #2"],
  },
  {
    id: 3,
    name: "OpenTable",
    role: "Intern",
    period: "2015",
    location: "",
    description: "Various HR related tasks.",
    highlights: ["HR Operations"],
  },
];

const EntrepreneurialSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <AnimatedSection className="px-6 py-28 max-w-4xl mx-auto">
      <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
        Foundations
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
        Hospitality & Operations
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
                  <Hotel size={18} className="text-primary shrink-0" />
                  <div>
                    <h3 className="font-display font-semibold text-lg">{v.name}</h3>
                    <p className="text-primary text-sm">{v.role}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-muted-foreground text-sm font-body block">
                    {v.period}
                  </span>
                  {v.location && (
                    <span className="text-muted-foreground/60 text-xs font-body">
                      {v.location}
                    </span>
                  )}
                </div>
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
