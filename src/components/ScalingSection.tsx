import AnimatedSection from "./AnimatedSection";

const stages = [
  {
    statement: "0 → 1 founding teams",
    blurb:
      "Identifying the first 10–20 hires that define a company's DNA. These roles require founders-level conviction and candidates who thrive in ambiguity.",
  },
  {
    statement: "10 → 100 scaling phase",
    blurb:
      "Building repeatable hiring processes, standing up interview loops, and creating the infrastructure needed to grow without losing quality or culture.",
  },
  {
    statement: "PE-backed vertical SaaS expansion",
    blurb:
      "Partnering with portfolio leadership to rapidly staff GTM, product, and engineering teams across multiple acquisitions and business units.",
  },
  {
    statement: "Multi-team global recruiting orgs",
    blurb:
      "Designing and leading distributed talent functions that operate across time zones, markets, and hiring cultures — with consistent standards.",
  },
];

const ScalingSection = () => {
  return (
    <AnimatedSection className="px-6 py-28 max-w-4xl mx-auto">
      <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
        Growth Stages
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
        Scaling Teams Across Growth Stages
      </h2>
      <div className="section-divider mb-14" />

      <div className="space-y-8">
        {stages.map((item, idx) => (
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

export default ScalingSection;
