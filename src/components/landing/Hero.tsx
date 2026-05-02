import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  { value: "Content", label: "Research, writing, and publishing workflows" },
  { value: "Operations", label: "Internal processes and repetitive tasks" },
  { value: "Reporting", label: "Data collection, summaries, and reviews" },
];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-36 sm:pt-48 pb-28 sm:pb-40 overflow-hidden bg-dot-grid reveal"
    >
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="container relative">
        <div className="reveal inline-block">
          <div className="hero-badge">
            <Sparkles size={18} className="hero-badge-icon" />
            AI Systems Implementation
          </div>
        </div>

        <h1 className="reveal mt-8 font-display text-6xl sm:text-8xl lg:text-[9rem] xl:text-[11rem] leading-[0.85] tracking-tight text-balance uppercase">
          <span className="block">AI Systems</span>
          <span className="block">Built <span className="italic font-display">Inside</span></span>
          <span className="block">
            <span className="bg-[#E8896A] text-white px-3 -mx-1 inline-block border-2 border-[#1A1512] shadow-brutal -rotate-1">Your</span>{" "}
            Business.
          </span>
        </h1>

        <p className="reveal mt-10 max-w-2xl text-lg sm:text-xl text-[#2A1F18]/75 leading-relaxed">
          I help businesses implement AI systems that automate content and
          internal workflows — so your team produces more output with less
          manual work.
        </p>

        <div className="reveal mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#book" className="btn-salmon group">
            Book a Call
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
          <a href="#services" className="btn-outline">How It Works</a>
        </div>

        <div className="reveal mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t-2 border-[#1A1512] pt-10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`card-light p-6 min-w-0 overflow-hidden ${i === 1 ? "sm:translate-y-3" : ""}`}
            >
              <div className="font-display text-lg sm:text-xl md:text-2xl uppercase tracking-tight text-[#2A1F18] whitespace-nowrap">
                {s.value}
              </div>
              <div className="mt-3 text-sm text-[#8A7060] leading-relaxed break-words">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
