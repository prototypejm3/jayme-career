import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import jaymePhoto from "@/assets/jayme-photo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-6">
            Head of Talent
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
        >
          Data, AI
          <br />
          <span className="text-gradient">& Research</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground text-lg sm:text-xl max-w-lg leading-relaxed mb-10 space-y-4"
        >
          <span className="block">Operator with 10+ years building technical and executive teams across AI, product, and engineering.</span>
          <span className="block">Began recruiting NLP engineers for the Siri team at Apple, then joined True Search as an early member of the Product, Data & Technology practice, placing 50+ executives for companies including Spotify, WW, Wish, and Rue Gilt Groupe.</span>
          <span className="block">Joined Genies as an early employee and led technical recruiting from Series A → C, helping scale the company to ~200 employees and a $1B valuation. Built foundational research, engineering, and product teams in close partnership with leadership.</span>
          <span className="block">Today, I advise early-stage companies on hiring founding technical leaders and building scalable, high-bar talent systems. Deeply excited about how AI and low-code tools are reshaping how teams build — and how talent functions operate.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-5"
        >
          {[
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-border shadow-lg">
            <img src={jaymePhoto} alt="Jayme" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
