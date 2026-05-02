import { Button } from "@/components/ui/button";
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
      className="relative pt-36 sm:pt-48 pb-28 sm:pb-40 overflow-hidden bg-grid"
    >
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="container relative">
        <div className="reveal inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-brutal">
          <Sparkles size={14} className="text-primary" />
          AI Systems Implementation
        </div>

        <h1 className="reveal mt-8 font-display text-6xl sm:text-8xl lg:text-[9rem] xl:text-[11rem] leading-[0.85] tracking-tight text-balance uppercase">
          <span className="block">AI Systems</span>
          <span className="block">Built <span className="italic font-display" style={{ fontFamily: "Space Grotesk", fontWeight: 700 }}>Inside</span></span>
          <span className="block">
            <span className="bg-primary text-primary-foreground px-3 -mx-1 inline-block border-2 border-ink shadow-brutal -rotate-1">Your</span>{" "}
            Business.
          </span>
        </h1>

        <p className="reveal mt-10 max-w-2xl text-lg sm:text-xl text-foreground/75 leading-relaxed">
          I help businesses implement AI systems that automate content and
          internal workflows — so your team produces more output with less
          manual work.
        </p>

        <div className="reveal mt-10 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="group">
            <a href="#book">
              Book a Call
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#services">How It Works</a>
          </Button>
        </div>

        <div className="reveal mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t-2 border-ink pt-10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`rounded-2xl border-2 border-ink bg-card p-6 shadow-brutal ${
                i === 1 ? "sm:translate-y-3" : ""
              }`}
            >
              <div className="font-display text-2xl sm:text-3xl uppercase tracking-tight">
                {s.value}
              </div>
              <div className="mt-3 text-sm text-foreground/70 leading-relaxed">
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