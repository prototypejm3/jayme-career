import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Github, GraduationCap } from "lucide-react";
import jaymePhoto from "@/assets/jayme-photo.png";

const HeroSection = () => {
  return (
    <div className="relative h-full flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-2">Jayme Karr</h1>
            <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-1">
              Director ~ Riviera Partners
            </p>
            <p className="text-muted-foreground font-body text-sm mb-6">NYC / SF</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted-foreground text-sm sm:text-base max-w-lg leading-relaxed mb-10 space-y-3 font-body"
          >
            <p><strong>Talent Leader | AI, Data & Technical Executive Hiring</strong></p>

            <p>
              10+ years building technical and executive teams across AI, product, engineering, and GTM.
              Hired thousands of engineers and placed 50+ senior executives.
            </p>

            <p><strong>Career Snapshot:</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>Operations leader at The Ritz-Carlton Hotel Company, leading teams of 100+.</li>
              <li>Transitioned into technical recruiting at Apple, hiring NLP engineers for the Siri team.</li>
              <li>Early member of the Executive Search Technology Practice at True Search.</li>
              <li>Joined Genies through Series A → C, scaling to ~200 employees and ~$1B valuation.</li>
              <li>Founding member of the AI Practice at Riviera Partners, partnering with venture-backed and public companies on Data, AI, Research, and technical hires.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-5"
          >
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/jaymelyn/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/prototypejm3/prototypejm3", label: "GitHub" },
              { icon: GraduationCap, href: "https://adplist.org/mentors/jayme-karr", label: "ADPList" },
              { icon: Mail, href: "mailto:Jaymel.karr@gmail.com", label: "Email" },
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
    </div>
  );
};

export default HeroSection;
