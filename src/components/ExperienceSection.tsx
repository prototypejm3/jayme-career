import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface ReviewNote {
  reviewer: string;
  role: string;
  rating: number;
  text: string;
}

const scaleLabels: Record<number, string> = {
  1: "Needs strong improvement",
  2: "Needs development",
  3: "Meets expectations",
  4: "Exceeds expectations",
  5: "Sets a new standard",
};

const experiences = [
  {
    id: 1,
    role: "Director",
    company: "Riviera Partners",
    period: "Aug 2025 — Present",
    location: "New York City Metropolitan Area",
    description: "All things Data, AI & Research. Sometimes ~ Eng & Product.",
    previousRole: {
      title: "Growth Lead – AI Practice",
      period: "Jan 2025 — Aug 2025",
      location: "New York, US · Hybrid",
      description: "Search Excellence, Sales Efficiency and Market Awareness.",
    },
    tech: ["AI/ML Recruiting", "Data & Research", "Executive Search"],
    highlights: ["Etsy", "Banyan", "Celonis"],
    stakeholders: ["Kyle Langworthy (Manager)", "Matt Skiba", "Bobby Gormsen", "Alix Woodriff", "Corinne Murberry", "Will Potter"],
    reviews: [] as ReviewNote[],
  },
  {
    id: 2,
    role: "Talent Acquisition Consultant",
    company: "Wellfound",
    period: "Oct 2023 — Feb 2025",
    location: "Part-time",
    description:
      "Worked side-by-side with the CEO, CTO, and Head of Ops to shape how the company approached recruiting and to build stronger hiring habits. Tested and gave feedback on their AI sourcing tools, helping the team make them easier and more effective to use. Spent time directly with the Customer Success team, coaching them 1:1 and helping them level up their recruiting skills.",
    tech: ["AI Sourcing Tools", "Coaching", "Strategy"],
    stakeholders: ["Amit Matani", "Ves Todorov"],
    reviews: [] as ReviewNote[],
  },
  {
    id: 3,
    role: "Director of Recruiting",
    company: "Quantum",
    period: "Jan 2024 — Jan 2025",
    location: "New York City Metropolitan Area",
    description:
      "Founding Eng, Staff, Principal & Executive AI/ML Talent. Clients include: Character AI, Luma AI, Together AI, Scale AI, Orby, Tavus, Hume, Foundry, Hebbia, Chroma, Rippling, ClickUp, Verkada, Applied Intuition, dYdX, Yuga Labs, Magic Eden, Aptos, Moonpay, Gemini, and more.",
    tech: ["AI/ML Talent", "Executive Recruiting", "Crypto/Web3"],
    highlights: ["Character AI", "Cable", "Gable", "Cartesia"],
    stakeholders: ["Mike Rooney (Manager)", "Alix Woodriff", "Josh Kohler", "Seth Funahashi", "Nelly Murodova"],
    reviews: [] as ReviewNote[],
  },
  {
    id: 4,
    role: "Tech Recruiting & Operations",
    company: "Genies",
    period: "Jun 2021 — Feb 2024",
    location: "LA, SF",
    description:
      "Employee #24 — scaled the company to ~150 employees. Built and led recruitment strategy for hires from Amazon, Snap, Meta/Oculus, Google, Pinterest, Unity, Salesforce, Microsoft, TikTok, Scale AI, AAA Studios. Led all tech recruiting for Marketplace & Dev-Kit teams. Led R&D recruiting for AI/ML, Game Engine, Unity, Gameplay, and Graphics roles. Helped scale through $250M funding rounds led by Silver Lake, BOND, NEA, and Bob Iger, reaching a $1B valuation.",
    tech: ["Full-Stack", "AI/ML", "Game Engine", "Blockchain"],
    stakeholders: ["Matt Skiba", "Jake Adams", "Claire Hart", "George Pang", "Justin Huang", "James Bancroft"],
    reviews: [] as ReviewNote[],
  },
  {
    id: 5,
    role: "Principal – Executive Recruiter",
    company: "True",
    period: "Sep 2018 — Aug 2021",
    location: "New York, Europe",
    description:
      "Promoted to Principal 2020. Placed 55 leaders across public and VC-backed organizations. Notable clients: Weight Watchers, FanDuel, Spotify, Wish, Etsy, Genies, Blizzard, Amex, Moda Operandi, Tamara Mellon, Goop, Rent the Runway, Daily Harvest, KOHO, Betterment → Sequoia, NEA, A16Z, Lightspeed, Accel. Part of the DEI committee & ambassador for AboveBoard.",
    tech: ["Executive Search", "DEI", "VC-Backed"],
    highlights: ["Spotify", "Weight Watchers", "KOHO", "Wish", "Genies", "FanDuel"],
    stakeholders: ["Thor Bucy", "Jemma Colleta", "John Pomeraz", "Kalli Frampton"],
    reviews: [] as ReviewNote[],
  },
  {
    id: 6,
    role: "Senior Account Manager (Apple Siri)",
    company: "Advantis Global",
    period: "Dec 2016 — Sep 2018",
    location: "San Francisco Bay Area",
    description:
      "Supported AI/ML and iOS hiring across junior to manager levels for Apple's Siri team. As Director of Recruiting for Frontier Tech, established all KPIs & SOPs, created a recruitment training guide from scratch. Launched a new program with 12 direct reports, increasing company metrics by 60%. President's Club x2. Notable clients: Apple, Cisco, Tesla, Adobe, Facebook, Dropbox, Mercedes Benz, Sephora.",
    tech: ["AI/ML", "iOS", "President's Club x2"],
    highlights: ["Apple", "Cisco", "Adobe", "Facebook", "Dropbox", "Mercedes Benz"],
    stakeholders: ["Dan Pollock", "Alexandra Hawayek (CEO)", "Jenna Llama (Tech Talent)"],
    reviews: [] as ReviewNote[],
  },
  {
    id: 8,
    role: "Head of Operations & Corporate Event Manager",
    company: "Destination by Hyatt",
    period: "Mar 2016 — Dec 2016",
    location: "Greater San Diego Area",
    description:
      "Responsible for payroll and scheduling for 75+ employees. Maintained relationships with vendors and entertainment agencies. Oversaw operations and helped grow revenues to the budget of 'Opening Day Party' $1MM+. Saw a 30% increase in all outlet satisfaction scores tracked via social media. Rated amongst the Top Resorts in the world by Condé Nast.",
    tech: ["Revenue Growth", "Vendor Relations", "Condé Nast Rated"],
    stakeholders: ["Kurtis Hurt (Director)"],
    reviews: [] as ReviewNote[],
  },
  {
    id: 9,
    role: "Learning Coach & Operations Supervisor",
    company: "The Ritz-Carlton Hotel Company",
    period: "Apr 2013 — Mar 2016",
    location: "5 Star 5 Diamond · Dove Mountain",
    description:
      "As the youngest person elected for this position: Assisted in Strategic Planning for 2014–2016. Raised Gallup Scores from #12 in the company to #2. Reduced Beverage Cost from 23.5% to 17.9% & labor from 13% to 9.5%. Key contributor for training employees to meet Forbes Five Star and AAA Five Diamond Standards. Received 90%+ employee engagement within 3 departments for 2 consecutive years. Five Star Employee of the Quarter multiple times.",
    tech: ["Forbes 5-Star", "AAA 5-Diamond", "Gallup #2"],
    stakeholders: ["Liam Doyle (EVP)", "Kurtis Hurt (Director)", "Dan Missal (Director)"],
    reviews: [] as ReviewNote[],
  },
];

const ExperienceSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <AnimatedSection className="px-6 py-28 max-w-4xl mx-auto">
      <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
        Talent Acquisition Experience
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
        Where I've worked
      </h2>
      <div className="section-divider mb-14" />

      <div className="space-y-4">
        {experiences.map((exp) => {
          const isActive = activeId === exp.id;
          return (
            <motion.div
              key={exp.id}
              onClick={() => setActiveId(isActive ? null : exp.id)}
              className={`rounded-lg border cursor-pointer transition-colors duration-300 ${
                isActive ? "border-primary/30 bg-card" : "border-border hover:border-primary/20"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 gap-2">
                <div>
                   <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
                  <p className="text-primary text-sm">{exp.company}</p>
                  {exp.highlights && exp.highlights.length > 0 && (
                    <p className="text-muted-foreground text-xs font-body mt-0.5">
                      {exp.highlights.join(" · ")}
                    </p>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <span className="text-muted-foreground text-sm font-body block">
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span className="text-muted-foreground/60 text-xs font-body">
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-0">
                      <p className="text-secondary-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      {exp.previousRole && (
                        <div className="mb-4 pl-4 border-l-2 border-primary/20">
                          <p className="font-display text-sm font-medium">{exp.previousRole.title}</p>
                          <p className="text-muted-foreground text-xs mb-1">{exp.previousRole.period} · {exp.previousRole.location}</p>
                          <p className="text-secondary-foreground text-sm">{exp.previousRole.description}</p>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-display px-3 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {exp.stakeholders.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <p className="text-primary font-display text-[10px] tracking-[0.2em] uppercase mb-2">
                            Close Stakeholders
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.stakeholders.map((name) => (
                              <span key={name} className="text-xs font-body text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                                {name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {exp.reviews.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-border">
                          <p className="text-primary font-display text-xs tracking-[0.2em] uppercase mb-4">
                            Performance Review Notes
                          </p>
                          <div className="space-y-5">
                            {exp.reviews.map((review, idx) => (
                              <div key={idx} className="rounded-lg border border-border bg-background p-5">
                                <div className="flex flex-col sm:flex-row gap-4">
                                  {/* Left: reviewer info */}
                                  <div className="sm:w-40 shrink-0">
                                    <div className="flex items-center gap-2">
                                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-display font-bold text-primary">
                                        {review.reviewer.split(" ").map(n => n[0]).join("")}
                                      </div>
                                      <div>
                                        <p className="font-display text-sm font-semibold leading-tight">{review.reviewer}</p>
                                        <span className="text-[10px] font-display px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{review.role}</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Right: review text */}
                                  <p className="text-secondary-foreground text-sm leading-relaxed whitespace-pre-line flex-1">
                                    {review.text}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
