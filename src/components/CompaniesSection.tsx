import { motion } from "framer-motion";

const companies = [
  "Spotify", "Weight Watchers (WW)", "Etsy", "Genies", "Willow",
  "Rue Gilt Groupe", "Hungryroot", "KOHO", "Celonis",
  "Character AI", "Luma AI", "Together AI",
];

const CompaniesSection = () => (
  <section className="py-20 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-display">
          Companies I've Worked With (Agency Side)
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {companies.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-xl border border-border bg-card/50 px-4 py-5"
          >
            <span className="text-foreground/80 font-display text-sm font-semibold tracking-wide">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CompaniesSection;
