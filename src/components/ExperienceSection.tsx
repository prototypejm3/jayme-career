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
    reviews: [
      {
        reviewer: "Matthew Skiba",
        role: "Manager",
        rating: 4,
        text: "As I previously shared, Genies would not be the company it is without Jayme Karr. From the moment Jayme arrived at Genies last year her impact was felt. Not only is Jayme one of the highest performers I've ever worked with, her attitude and what she stands for is what we should look for in everyone we hire.\n\nJayme believes in Genies, its mission, and our virtues at her core. Jayme knows that her success leads to the success of others and Genies; which to me demonstrates everyone one of our virtues: 20% - always looking to solve problem, strategic thinker, bring/offer solutions; BSE - Whether it be sourcing and mapping the international unity market or willing to engage them knowing the possible challenges, Jayme has opened the door to great talent that others undervalue; PNP - Jayme is always thinking forward and observing what's around her. What she learns from conversations or from her network, Jayme is always bringing ideas, insights and solutions to the table. Her work ethic and commitment to our brand also fulfills anyone one of our virtues. When I think of Jayme I don't question that she embodies our values but that she is also trustworthy, honest, humble, caring, thoughtful, determined, resilient, and respectful.",
      },
      {
        reviewer: "Matthew Skiba",
        role: "Manager",
        rating: 3,
        text: "Jayme has lived up to our performance expectations over the last 6 months. I will continue to say that Genies would not be the company it is without Jayme Karr, but I have seen a slight plateau overall this last quarter. Again, I acknowledge that we faced seasonal headwinds and a foreign market phenomenon with a looming recession this last quarter, but Jayme only managed to close 2 candidates in Q3 after closing 5 in Q2. With this said Jayme did go above and beyond in other functional responsibilities. She successfully advanced the engineering recruiting process and interview training for all new engineers, and supported her team during the vacation absences. Helping to close 2 key hires during my vacation.",
      },
      {
        reviewer: "Matthew Skiba",
        role: "Manager",
        rating: 4,
        text: "Over the last 6 months, Jayme accomplished the following:\n\n• Played a key role in rebooting the engineering recruiting process to ensure greater alignment, better candidate experience, and reduced timelines to hire (February 2023 to Present)\n• Closed 5 headcount: Sr. Mobile QA Engineer, Sr TPM, Software Engineer (E4), Cloud Infrastructure Engineer (E4), and Product Design\n• Took ownership of the R&D hiring pipeline - Machine Learning/AI & Technical Artists (February 2023 to present)\n• Offer Acceptance Rate: 85% (5 out of 6 - solo offer decline was a role we eventually deprecated; Product Analyst)\n• 34% of all candidates that reached onsite or panel interview process identified as female\n• 85% of all candidates that reached onsite or panel interview process identified as a member of the global majority",
      },
    ],
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

                      {exp.reviews.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-border">
                          <p className="text-primary font-display text-xs tracking-[0.2em] uppercase mb-4">
                            Performance Review Notes
                          </p>
                          <div className="space-y-5">
                            {exp.reviews.map((review, idx) => (
                              <div key={idx} className="rounded-lg border border-border bg-background p-5">
                                <div className="flex flex-col sm:flex-row gap-4">
                                  {/* Left: reviewer info & rating */}
                                  <div className="sm:w-48 shrink-0">
                                    <div className="flex items-center gap-2 mb-3">
                                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-display font-bold text-primary">
                                        {review.reviewer.split(" ").map(n => n[0]).join("")}
                                      </div>
                                      <div>
                                        <p className="font-display text-sm font-semibold leading-tight">{review.reviewer}</p>
                                        <span className="text-[10px] font-display px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{review.role}</span>
                                      </div>
                                    </div>
                                    <div className="mb-1">
                                      <span className="text-primary font-display text-[10px] tracking-[0.15em] uppercase">Rating</span>
                                      <span className="text-muted-foreground text-xs ml-2">{review.rating}/5</span>
                                    </div>
                                    <div className="flex gap-1 mb-2">
                                      {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="flex items-center gap-0.5">
                                          <div className={`w-2 h-2 rounded-full ${i <= review.rating ? "bg-primary" : "bg-muted"}`} />
                                          {i < 5 && <div className={`w-3 h-0.5 ${i < review.rating ? "bg-primary" : "bg-muted"}`} />}
                                        </div>
                                      ))}
                                    </div>
                                    <div className="pl-2 border-l-2 border-primary/30">
                                      <span className="font-display text-sm font-bold text-primary">{review.rating}</span>
                                      <p className="text-xs text-foreground font-display leading-tight">{scaleLabels[review.rating]}</p>
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
