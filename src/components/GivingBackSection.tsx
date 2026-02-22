import { Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const causes = [
  { name: "Tourette Association of America", href: "https://tourette.org/" },
  { name: "International Dyslexia Association", href: "https://dyslexiaida.org/" },
  { name: "Charity Navigator ~ Find a Cause You Love", href: "https://www.charitynavigator.org" },
];

const GivingBackSection = () => (
  <AnimatedSection className="px-6 py-20 max-w-4xl mx-auto">
    <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-2">
      Community
    </p>
    <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
      <Heart size={24} className="text-primary" />
      Giving Back Matters
    </h2>

    <div className="space-y-4">
      {causes.map((cause) => (
        <a
          key={cause.name}
          href={cause.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-border rounded-lg px-6 py-4 hover:border-primary transition-colors duration-300 group"
        >
          <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
            {cause.name} ↗
          </span>
        </a>
      ))}
    </div>
  </AnimatedSection>
);

export default GivingBackSection;
