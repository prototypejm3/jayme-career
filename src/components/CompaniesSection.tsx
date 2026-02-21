import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Company = {
  name: string;
  stakeholders: string[];
};

const companies: Company[] = [
  { name: "Spotify", stakeholders: [] },
  { name: "Weight Watchers (WW)", stakeholders: [] },
  { name: "Etsy", stakeholders: [] },
  { name: "Genies", stakeholders: [] },
  { name: "Willow", stakeholders: [] },
  { name: "Rue Gilt Groupe", stakeholders: [] },
  { name: "Hungryroot", stakeholders: [] },
  { name: "KOHO", stakeholders: [] },
  { name: "Celonis", stakeholders: [] },
  { name: "Character AI", stakeholders: [] },
  { name: "Luma AI", stakeholders: [] },
  { name: "Together AI", stakeholders: [] },
];

const CompaniesSection = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (name: string) => {
    setExpanded(prev => (prev === name ? null : name));
  };

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-display">
            Companies I've Worked With (Agency Side)
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            Click a company to see close stakeholders
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {companies.map((company, i) => {
            const isOpen = expanded === company.name;
            const hasStakeholders = company.stakeholders.length > 0;

            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button
                  onClick={() => hasStakeholders && toggle(company.name)}
                  className={`w-full rounded-xl border transition-all duration-300 text-left ${
                    isOpen
                      ? "border-primary/40 bg-card shadow-sm"
                      : "border-border bg-card/50 hover:border-primary/30 hover:bg-card"
                  } ${!hasStakeholders ? "cursor-default" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between px-4 py-5">
                    <span className="text-foreground/80 font-display text-sm font-semibold tracking-wide">
                      {company.name}
                    </span>
                    {hasStakeholders && (
                      <ChevronDown
                        size={14}
                        className={`text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  <AnimatePresence>
                    {isOpen && hasStakeholders && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-1 border-t border-border/50">
                          <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest mb-2 font-display">
                            Close Stakeholders
                          </p>
                          <ul className="space-y-1">
                            {company.stakeholders.map((name) => (
                              <li
                                key={name}
                                className="text-xs text-muted-foreground leading-relaxed"
                              >
                                {name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
