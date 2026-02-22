import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skills = [
  { name: "Executive & Technical Recruiting", level: 5 },
  { name: "AI/ML Talent Strategy", level: 5 },
  { name: "Team Building & Scaling", level: 5 },
  { name: "Stakeholder Management", level: 4 },
  { name: "Coaching & Training", level: 4 },
  { name: "Operations & Process Design", level: 4 },
];

const scaleLabels = [
  { value: 1, label: "Needs strong improvement" },
  { value: 2, label: "Needs development" },
  { value: 3, label: "Meets expectations" },
  { value: 4, label: "Exceeds expectations" },
  { value: 5, label: "Sets a new standard" },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="group">
    <div className="flex items-center justify-between mb-2">
      <span className="font-display text-sm font-medium">{name}</span>
      <span className="text-primary text-xs font-display font-semibold">{level}/5</span>
    </div>
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className={`h-2 flex-1 rounded-full ${
            i <= level ? "bg-primary" : "bg-secondary"
          }`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />
      ))}
    </div>
  </div>
);

const SkillsSection = () => (
  <AnimatedSection className="px-6 py-28 max-w-4xl mx-auto">
    <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
      Skills
    </p>
    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
      Core competencies
    </h2>
    <p className="text-muted-foreground text-sm font-body mb-2">
      Ranked by former colleagues on a 1~5 scale
    </p>
    <div className="section-divider mb-10" />

    {/* Scale legend */}
    <div className="flex flex-wrap gap-x-6 gap-y-1 mb-10 text-xs text-muted-foreground font-body">
      {scaleLabels.map((s) => (
        <span key={s.value}>
          <span className="font-semibold text-foreground">{s.value}</span> ~ {s.label}
        </span>
      ))}
    </div>

    <div className="grid gap-8 sm:grid-cols-2">
      {skills.map((skill) => (
        <SkillBar key={skill.name} {...skill} />
      ))}
    </div>
  </AnimatedSection>
);

export default SkillsSection;
