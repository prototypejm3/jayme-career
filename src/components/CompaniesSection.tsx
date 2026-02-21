import { motion } from "framer-motion";

const companies = [
  "Spotify",
  "Weight Watchers (WW)",
  "Etsy",
  "Genies",
  "Willow",
  "Rue Gilt Groupe",
  "Hungryroot",
  "KOHO",
  "Celonis",
  "Character AI",
  "Luma AI",
  "Together AI",
];

const CompaniesSection = () => {
  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground text-sm tracking-[0.2em] uppercase mb-12 font-display"
        >
          Companies I've Worked With (Agency Side)
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {companies.map((company, i) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center h-20 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              <span className="text-foreground/80 font-display text-sm font-semibold tracking-wide text-center px-3">
                {company}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
