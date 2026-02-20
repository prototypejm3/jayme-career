import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "CloudSync",
    description: "Real-time collaboration platform with live cursors and conflict-free editing.",
    tech: ["React", "WebSocket", "Redis"],
  },
  {
    title: "PayFlow",
    description: "Payment analytics dashboard processing $4M+ monthly with real-time fraud detection.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "DesignKit",
    description: "Open-source component library with 50+ accessible components and dark mode support.",
    tech: ["TypeScript", "Storybook", "Tailwind"],
  },
];

const ProjectsSection = () => (
  <AnimatedSection className="px-6 py-28 max-w-4xl mx-auto">
    <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
      Projects
    </p>
    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
      Selected work
    </h2>
    <div className="section-divider mb-14" />

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <motion.a
          key={project.title}
          href="#"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group block rounded-lg border border-border p-6 hover:border-primary/30 hover:bg-card transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-display font-semibold text-lg">{project.title}</h3>
            <ExternalLink
              size={16}
              className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1"
            />
          </div>
          <p className="text-secondary-foreground text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-display px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.a>
      ))}
    </div>
  </AnimatedSection>
);

export default ProjectsSection;
