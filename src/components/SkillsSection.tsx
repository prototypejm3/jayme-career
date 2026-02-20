import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "UI / UX Design", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "DevOps / CI/CD", level: 65 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="group">
    <div className="flex items-center justify-between mb-2">
      <span className="font-display text-sm font-medium">{name}</span>
      <span className="text-muted-foreground text-xs font-body">{level}%</span>
    </div>
    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-primary rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  </div>
);

const SkillsSection = () => (
  <AnimatedSection className="px-6 py-28 max-w-4xl mx-auto">
    <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
      Skills
    </p>
    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
      What I work with
    </h2>
    <div className="section-divider mb-14" />

    <div className="grid gap-8 sm:grid-cols-2">
      {skills.map((skill) => (
        <SkillBar key={skill.name} {...skill} />
      ))}
    </div>
  </AnimatedSection>
);

export default SkillsSection;
