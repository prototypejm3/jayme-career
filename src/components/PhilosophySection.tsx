import AnimatedSection from "./AnimatedSection";

const philosophies = [
  {
    statement: "Recruiting is product.",
    blurb:
      "Every hire is a feature shipped. The best talent teams think like product teams — iterating on process, measuring outcomes, and obsessing over the candidate experience.",
  },
  {
    statement: "Hiring is a systems problem.",
    blurb:
      "Great recruiting isn't about heroic individual efforts. It's about building repeatable, scalable systems that produce consistent results across every role and market.",
  },
  {
    statement: "Narrative drives candidate quality.",
    blurb:
      "The best candidates aren't looking. They're pulled in by a compelling story — about the company, the team, and the impact they'll make. Storytelling is a recruiter's most underrated tool.",
  },
  {
    statement: "Calibration prevents bias.",
    blurb:
      "Without shared scorecards and structured interviews, hiring becomes a gut-feel exercise. Calibration aligns teams and creates fairness at scale.",
  },
  {
    statement: "Speed without rigor creates debt.",
    blurb:
      "Moving fast matters, but cutting corners on process leads to mis-hires that cost 3× more to fix. The goal is velocity with precision.",
  },
];

const PhilosophySection = () => {
  return (
    <AnimatedSection className="px-6 py-28 max-w-4xl mx-auto">
      <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
        Philosophy
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
        My Philosophy on Talent
      </h2>
      <div className="section-divider mb-14" />

      <div className="space-y-8">
        {philosophies.map((item, idx) => (
          <div key={idx} className="group">
            <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1.5">
              {item.statement}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-2xl">
              {item.blurb}
            </p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default PhilosophySection;
