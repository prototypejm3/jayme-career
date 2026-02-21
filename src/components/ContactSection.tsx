import { Mail, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => (
  <AnimatedSection className="px-6 py-28 max-w-4xl mx-auto text-center">
    <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
      Contact
    </p>
    <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6">
      If you're building something ambitious, let's talk.
    </h2>
    <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10">
      I partner with founders and operators to design talent systems that scale with the business.
    </p>

    <a
      href="mailto:Jaymel.karr@gmail.com"
      className="inline-flex items-center gap-3 font-display font-semibold text-primary-foreground bg-primary px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-300 group"
    >
      <Mail size={18} />
      Get in touch
      <ArrowUpRight
        size={16}
        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
      />
    </a>
  </AnimatedSection>
);

export default ContactSection;
