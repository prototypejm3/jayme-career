import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const references = [
  {
    name: "Sarah Chen",
    title: "VP of Engineering, TechCorp",
    quote:
      "Alex is one of the most driven engineers I've worked with. They consistently deliver high-quality work and elevate everyone around them.",
  },
  {
    name: "Marcus Johnson",
    title: "CEO, StartupXYZ",
    quote:
      "From day one, Alex brought both technical depth and product thinking. They were instrumental in shaping our engineering culture.",
  },
  {
    name: "Priya Patel",
    title: "Design Director, DesignStudio",
    quote:
      "Rare to find an engineer who truly understands design intent. Alex bridges that gap effortlessly and always pushes for the best user experience.",
  },
];

const ReferencesSection = () => (
  <AnimatedSection className="px-6 py-28 max-w-4xl mx-auto">
    <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
      Testimonials
    </p>
    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
      References
    </h2>
    <div className="section-divider mb-14" />

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {references.map((ref, i) => (
        <motion.div
          key={ref.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-lg border border-border p-6 hover:border-primary/20 transition-colors duration-300"
        >
          <Quote size={20} className="text-primary/40 mb-4" />
          <p className="text-secondary-foreground text-sm leading-relaxed mb-5 italic">
            "{ref.quote}"
          </p>
          <div>
            <p className="font-display font-semibold text-sm">{ref.name}</p>
            <p className="text-muted-foreground text-xs">{ref.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </AnimatedSection>
);

export default ReferencesSection;
