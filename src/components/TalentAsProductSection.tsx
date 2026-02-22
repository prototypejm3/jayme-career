import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const TalentAsProductSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection className="px-6 py-12 max-w-4xl mx-auto">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left group"
      >
        <div>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-1">
            Operating System
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Talent as Product
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

            {/* Intro */}
            <div className="mb-12">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                A High-Bar Operating System
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base max-w-2xl">
                <p>
                  In venture-backed companies and AI labs, Talent is not a support function.
                  <br />
                  It is the <span className="text-foreground font-semibold">primary multiplier of roadmap velocity</span>.
                </p>
                <p>
                  Headcount is not the goal.
                  <br />
                  <span className="text-foreground font-semibold">Durable talent density</span> is.
                </p>
              </div>
            </div>

            {/* 1. Roadmap Before Reqs */}
            <div className="mb-12">
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                Roadmap Before Reqs
              </h3>
              <p className="text-primary font-display text-sm font-semibold mb-3">
                Every role must unlock a priority.
              </p>
              <ul className="space-y-1.5 text-muted-foreground text-sm sm:text-base max-w-2xl list-disc list-inside mb-4">
                <li>What P0 milestone does this hire accelerate?</li>
                <li>What breaks if we do not hire this role?</li>
                <li>How does this role compound product, research, or revenue velocity?</li>
              </ul>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
                If it is not tied directly to the roadmap, it is not a priority.
              </p>
              <p className="text-foreground font-semibold text-sm sm:text-base mt-2">
                Hiring without roadmap clarity creates motion without momentum.
              </p>
            </div>

            {/* 2. Talent Is Capital Allocation */}
            <div className="mb-12">
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                Talent Is Capital Allocation
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mb-6">
                Compensation is not a reward system. It is <span className="text-foreground font-semibold">capital strategy</span>.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="border border-border/50 rounded-lg p-5">
                  <h4 className="font-display font-bold text-foreground mb-2">Domain-Defining Roles</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm list-disc list-inside mb-3">
                    <li>Deep expertise</li>
                    <li>Infra or research leverage</li>
                    <li>Leadership hires that shift trajectory</li>
                  </ul>
                  <p className="text-primary text-sm font-semibold">→ Break bands when necessary. Protect the bar.</p>
                </div>
                <div className="border border-border/50 rounded-lg p-5">
                  <h4 className="font-display font-bold text-foreground mb-2">Entry-Level & Early-Career Roles</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm list-disc list-inside mb-3">
                    <li>High-slope, coachable talent</li>
                    <li>Structured growth paths</li>
                    <li>Long-term upside</li>
                  </ul>
                  <p className="text-primary text-sm font-semibold">→ Invest early. Preserve capital for critical hires.</p>
                </div>
              </div>

              <div className="space-y-2 text-muted-foreground text-sm sm:text-base max-w-2xl">
                <p>We flex for domain-defining hires. We do not inflate for comfort.</p>
                <p className="text-foreground font-semibold">Overpaying the wrong hire compounds faster than under-hiring.</p>
              </div>
            </div>

            {/* 3. Alignment Before Sourcing */}
            <div className="mb-12">
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                Alignment Before Sourcing
              </h3>
              <p className="text-foreground font-semibold text-sm sm:text-base mb-3">
                Misalignment is the costliest hiring mistake.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base mb-2">Before opening a role:</p>
              <ul className="space-y-1.5 text-muted-foreground text-sm sm:text-base max-w-2xl list-disc list-inside mb-4">
                <li>What are we scoring against?</li>
                <li>What does "exceeds expectations at 12 months" look like?</li>
                <li>What team gap are we solving ~ skill, ownership, domain, or velocity?</li>
              </ul>
              <p className="text-muted-foreground text-sm sm:text-base mb-1">Hiring requires conviction.</p>
              <p className="text-foreground font-semibold text-sm sm:text-base mb-4">
                If it is not a clear yes from the Hiring Manager, it is a no.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base mb-4">Compromise compounds. So does excellence.</p>

              <p className="text-primary font-display text-sm font-semibold mb-3">When alignment is tight:</p>
              <ul className="space-y-1.5 text-muted-foreground text-sm sm:text-base max-w-2xl list-disc list-inside mb-3">
                <li>~25% recruiter screen pass rate (protecting signal)</li>
                <li>80~90% HM pass-through</li>
                <li>5 high-signal interview stages</li>
                <li>14~20 day senior IC time-to-close</li>
                <li>85% offer acceptance for priority hires</li>
              </ul>
              <p className="text-foreground font-semibold text-sm sm:text-base">
                Signal stays clean. Speed stays high.
              </p>
            </div>

            {/* 4. AI & Research Require Domain Rigor */}
            <div className="mb-12">
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                AI & Research Require Domain Rigor
              </h3>
              <p className="text-foreground font-semibold text-sm sm:text-base mb-3">
                AI hiring cannot be templated.
              </p>
              <ul className="space-y-1.5 text-muted-foreground text-sm sm:text-base max-w-2xl list-disc list-inside mb-3">
                <li>Technical assessments are role-specific</li>
                <li>Interviewers each assess a defined virtue (first-principles thinking, ownership, research depth, collaboration)</li>
                <li>Hiring mix aligned to roadmap: pre-training, post-training, infra, applied ML</li>
                <li>Conference and research ecosystems embedded into sourcing strategy</li>
              </ul>
              <p className="text-foreground font-semibold text-sm sm:text-base">
                Bar is contextual. Measurement must reflect the domain.
              </p>
            </div>

            {/* 5. Quality Is Measured Post-Hire */}
            <div className="mb-12">
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                Quality Is Measured Post-Hire
              </h3>
              <p className="text-foreground font-semibold text-sm sm:text-base mb-3">
                The offer is not the finish line.
              </p>
              <ul className="space-y-1.5 text-muted-foreground text-sm sm:text-base max-w-2xl list-disc list-inside mb-3">
                <li>85~90% 12~24 month retention across senior ICs</li>
                <li>Regrettable attrition tracked among top performers</li>
                <li>First performance cycle outcomes tied back to hiring criteria</li>
                <li>30/60/90 day feedback loops built into the system</li>
              </ul>
              <p className="text-muted-foreground text-sm sm:text-base mb-1">If strong hires leave early, the issue is upstream.</p>
              <p className="text-foreground font-semibold text-sm sm:text-base">
                Retention is the ultimate quality-of-hire metric.
              </p>
            </div>

            {/* 6. Hiring Is Shared Ownership */}
            <div className="mb-12">
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                Hiring Is Shared Ownership
              </h3>
              <p className="text-foreground font-semibold text-sm sm:text-base mb-3">
                Talent does not "own" hiring alone.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base mb-2">Hiring Managers are accountable for:</p>
              <ul className="space-y-1.5 text-muted-foreground text-sm sm:text-base max-w-2xl list-disc list-inside mb-3">
                <li>Clear scope definition</li>
                <li>Interview preparedness</li>
                <li>Timely decision-making</li>
                <li>Onboarding success</li>
              </ul>
              <p className="text-foreground font-semibold text-sm sm:text-base">
                Talent enables. Leaders own outcomes.
              </p>
            </div>

            {/* 7. Diversity Is Engineered Early */}
            <div className="mb-12">
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                Diversity Is Engineered Early
              </h3>
              <p className="text-foreground font-semibold text-sm sm:text-base mb-3">
                Diversity compounds. So does homogeneity.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base mb-2">Early hiring shapes:</p>
              <ul className="space-y-1.5 text-muted-foreground text-sm sm:text-base max-w-2xl list-disc list-inside mb-3">
                <li>Decision-making quality</li>
                <li>Intellectual diversity</li>
                <li>Risk tolerance</li>
                <li>Cultural baseline</li>
              </ul>
              <p className="text-muted-foreground text-sm sm:text-base mb-1">It is exponentially harder to retrofit later.</p>
              <p className="text-foreground font-semibold text-sm sm:text-base">
                Intentionality must start at 0 → 1.
              </p>
            </div>

            {/* 8. Talent Shapes Brand */}
            <div className="mb-12">
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                Talent Shapes Brand
              </h3>
              <p className="text-foreground font-semibold text-sm sm:text-base mb-3">
                Talent Acquisition is the first lens through which the market experiences a company.
              </p>
              <ul className="space-y-1.5 text-muted-foreground text-sm sm:text-base max-w-2xl list-disc list-inside mb-3">
                <li>Career site clarity</li>
                <li>Transparent expectations</li>
                <li>High-signal interview experience</li>
                <li>Alumni outcomes</li>
              </ul>
              <p className="text-foreground font-semibold text-sm sm:text-base">
                The hiring experience becomes the reputation.
              </p>
            </div>

            {/* Closing */}
            <div className="mt-16 pt-8 border-t border-border/50">
              <p className="text-muted-foreground text-sm sm:text-base text-center mb-2">
                A company's trajectory is set by its first 50 hires.
              </p>
              <p className="font-display text-xl sm:text-2xl font-bold text-primary text-center">
                After that, you are scaling a pattern ~ good or bad.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
};

export default TalentAsProductSection;
