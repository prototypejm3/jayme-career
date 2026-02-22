const companies = [
  {
    title: "Cardaom",
    subtitle: "Activated liquid spice blends",
    link: "https://www.instagram.com/spicecardaom/?hl=en",
    sections: [
      { heading: "Concept", content: "Functional, activated spice blends designed for modern kitchens." },
      { heading: "What I Built", items: ["Brand strategy", "Product positioning", "Ingredient philosophy", "Early customer testing"] },
    ],
    skills: "Brand architecture · GTM narrative · Consumer positioning",
  },
  {
    title: "Alias",
    subtitle: "Anonymous publishing platform grounded in cognitive therapy",
    sections: [
      { heading: "Concept", content: "A platform for anonymous expression structured through guided prompts and cognitive frameworks." },
      { heading: "What I Built", items: ["Product concept", "UX flow design", "Prompt architecture", "Narrative systems"] },
      { heading: "Explores", items: ["Identity & narrative psychology", "Structured reflection", "Ego-minimized community"] },
    ],
    skills: "Product thinking · Behavioral design · UX systems",
  },
  {
    title: "Supplemind",
    subtitle: "Personal supplement tracker",
    sections: [
      { heading: "Concept", content: "A personal supplement tracker built in 2019 for friends and family." },
    ],
    skills: "Product design · Personal tooling",
  },
  {
    title: "Luminary Logic",
    subtitle: "Talent Architecture for Early-Stage Companies",
    sections: [
      { heading: "Focus", content: "Talent strategy + executive hiring for AI-native startups." },
      { heading: "Worked With", content: "Edge Runner · Besty AI · TC Central, Genies · Early-stage stealth AI & vertical SaaS startups" },
      { heading: "What I Built", items: ["Hiring roadmaps", "Structured evaluation frameworks", "Leadership search execution", "Founder-level partnership"] },
    ],
    skills: "Org design · Executive evaluation · Founder partnership",
  },
];

const CompaniesSection = () => (
  <div className="py-24 px-6 bg-background overflow-y-auto h-full">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3 text-foreground">
          Side Projects
        </h2>
        <p className="text-muted-foreground text-base font-body">
          Things I've built on evenings and weekends.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {companies.map((company) => (
          <div
            key={company.title}
            className="bg-background p-8 flex flex-col"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-1">
              {company.link ? (
                <a href={company.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {company.title} ↗
                </a>
              ) : (
                company.title
              )}
            </h3>
            <p className="text-muted-foreground text-xs tracking-wide uppercase font-display mb-6">
              {company.subtitle}
            </p>

            <div className="space-y-5 flex-1">
              {company.sections.map((section) => (
                <div key={section.heading}>
                  <h4 className="font-display text-sm font-semibold text-foreground mb-1.5">
                    {section.heading}
                  </h4>
                  {section.content && (
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      {section.content}
                    </p>
                  )}
                  {section.items && (
                    <ul className="text-muted-foreground text-sm font-body leading-relaxed space-y-0.5">
                      {section.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <p className="text-muted-foreground/70 text-xs font-body mt-8 pt-4 border-t border-border">
              <span className="font-semibold">Operator Skills:</span>{" "}
              {company.skills}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-muted-foreground text-sm font-body mt-16 max-w-2xl mx-auto italic">
        Across every project ~ talent, product, or brand ~ I focus on systems, clarity, and narrative.
      </p>
    </div>
  </div>
);

export default CompaniesSection;
