import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const references = [
  {
    name: "Matthew Skiba",
    title: "Performance Review Summary ~ Genies",
    tag: "Performance Review",
    quote: "Genies would not be the company it is without Jayme Karr. Not only is Jayme one of the highest performers I've ever worked with, her attitude and what she stands for is what we should look for in everyone we hire. Jayme is always thinking forward and observing what's around her ~ bringing ideas, insights and solutions to the table.",
  },
  {
    name: "Matthew Skiba",
    title: "Performance Review Summary ~ Genies",
    tag: "Performance Review",
    quote: "Played a key role in rebooting the engineering recruiting process. Closed 5 headcount. Took ownership of the R&D hiring pipeline ~ Machine Learning/AI & Technical Artists. Offer Acceptance Rate: 85%. 34% of all candidates that reached onsite identified as female. 85% identified as a member of the global majority.",
  },
  {
    name: "Da Li",
    title: "Director of Engineering, Genies (ex-Chainlink, ex-Facebook)",
    quote:
      "Jayme is an exceptionally professional and efficient recruiter who consistently goes above and beyond to connect top talent with our organization. Her ability to understand our unique needs, source the right candidates, and manage the entire hiring process with precision is truly commendable.",
  },
  {
    name: "Dr. Ke Jing",
    title: "Engineering Lead, Genies",
    quote:
      "It is a testament to Jayme's hiring acumen that all of her hires have been stellar performers. Under Jayme's leadership, the recruiting team collaborated seamlessly with our engineering teams, streamlining pipelines and substantially improving our efficiency in hiring top-tier talent.",
  },
  {
    name: "Ethan He",
    title: "Video Generation @ xAI Grok Imagine (prev Nvidia, Meta)",
    quote:
      "Jayme displayed an admirable dedication to ensuring I was well-informed and supported. Her proactive approach~preemptively reaching out to finance for competitive offers~demonstrated her foresight and genuine care for a smooth hiring experience.",
  },
  {
    name: "Alexander Schwertner",
    title: "Chief Innovation Officer, JobRad Leasing",
    quote:
      "My candidate experience with Jayme was one of the best in my career. She pairs her highly professional attitude with a great level of empathy, engaging with candidates as a sounding board for thoughts or concerns.",
  },
  {
    name: "Laura Mae Brown",
    title: "COO & Head of Product, Santa Barbara Games (ex-Amazon, EA, Riot)",
    quote:
      "Jayme creates relationships on a truly personal level. She was extremely respectful of my time~finding the right matches, not just any matches~and getting me set up for success. I cannot recommend her enough.",
  },
  {
    name: "Luxi (Lucy) Huang, CFA",
    title: "Product, Tech & Operations Executive",
    quote:
      "Jayme stands out because she builds relationships, not transactions. She went beyond her responsibilities to help me build a team, striking a fine balance between a personalized approach and driving urgency.",
  },
  {
    name: "Mehdi El Hajoui",
    title: "Director of Product Management, Meta",
    quote:
      "Jayme is a fantastic technology recruiter. I would trust her with my leadership recruiting needs.",
  },
  {
    name: "Eyal Yanai",
    title: "CEO, Bond",
    quote:
      "Jayme is an outstanding executive recruiter~professional, astute, transparent, empathetic and a great communicator. She was very quick to accurately understand my background and always made me feel she has my best interests at heart.",
  },
  {
    name: "Daniel Eberhard",
    title: "Founder & CEO, KOHO",
    quote:
      "Jayme is fantastic to work with. Capable, sharp, diligent and kind. I'd work with Jayme over and over again!",
  },
  {
    name: "Josh Platt",
    title: "SVP Product, AI & UX, Rue Gilt Groupe",
    quote:
      "She was knowledgeable about her client's needs and thorough in helping me navigate the recruiting process. Always open and transparent~I would highly recommend her for retained search in product and technology.",
  },
  {
    name: "Abe McCallum",
    title: "Head of Consumer Fintech Product, Walmart (ex-Venmo, Zelle)",
    quote:
      "She cares about her clients and the talent, always picks up the phone even in a digital world of cold email. She knows how to deliver feedback in a thoughtful way and hustles for both parties to make the perfect match.",
  },
  {
    name: "Snehal Kundalkar",
    title: "Entrepreneur & Technology Strategist",
    quote:
      "Jayme's work values truly reflected that customer success is her primary focus. She brought insights in compensation and negotiation strategies. She built trust and a relationship that went beyond transactional to real long-term friendship.",
  },
  {
    name: "Vitor Agnello",
    title: "Senior Director of Product, QuintoAndar",
    quote:
      "She demonstrated strong customer focus~always in touch, making sure I knew how things were evolving. Jayme earned my trust very quickly; I was confident she was representing my interests and trying to get the best for me.",
  },
  {
    name: "Janey Wong",
    title: "Product Management, Multi-Industry",
    quote:
      "Every step of the process Jayme has your interests at heart but also respects the needs of her corporate clients. She is a prompt and clear communicator~she clearly makes the effort to make you feel like a priority.",
  },
  {
    name: "Michael Curtes",
    title: "Product @ Google Maps",
    quote:
      "I appreciated her great communication, as well as her advocacy for my interests. I'd gladly work with her again.",
  },
  {
    name: "Brendan McCartin",
    title: "Business Development",
    quote:
      "Our teams developed a great partnership from the get go and never looked back. Their dedication to providing a seamless and successful process was evident. Very creative and detailed approach.",
  },
];

const INITIAL_COUNT = 6;

const ReferencesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? references : references.slice(0, INITIAL_COUNT);

  return (
    <AnimatedSection className="px-6 py-28 max-w-5xl mx-auto">
      <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">
        Testimonials
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
        People Who Vouch For Me
      </h2>
      <div className="section-divider mb-14" />

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {visible.map((ref, i) => (
          <motion.div
            key={ref.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="break-inside-avoid rounded-lg border border-border p-6 hover:border-primary/20 transition-colors duration-300"
          >
            <Quote size={18} className="text-primary/40 mb-3" />
            <p className="text-secondary-foreground text-sm leading-relaxed mb-4 italic">
              "{ref.quote}"
            </p>
            <div>
              <p className="font-display font-semibold text-sm">{ref.name}</p>
              <p className="text-muted-foreground text-xs leading-snug">
                {ref.title}
              </p>
              {ref.tag && (
                <span className="inline-block mt-1.5 text-[10px] font-display px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  {ref.tag}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {references.length > INITIAL_COUNT && (
        <motion.button
          onClick={() => setShowAll(!showAll)}
          className="mt-10 mx-auto flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          whileTap={{ scale: 0.97 }}
        >
          {showAll ? "Show less" : `Show all ${references.length} recommendations`}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
          />
        </motion.button>
      )}
    </AnimatedSection>
  );
};

export default ReferencesSection;
