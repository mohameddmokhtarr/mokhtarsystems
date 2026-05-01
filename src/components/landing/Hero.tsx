import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "Content", label: "Research, writing, and publishing workflows" },
  { value: "Operations", label: "Internal processes and repetitive tasks" },
  { value: "Reporting", label: "Data collection, summaries, and reviews" },
];

const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="container relative">
        <h1 className="reveal text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] tracking-tight text-balance">
          <span className="block">AI Systems</span>
          <span className="block">Built Inside</span>
          <span className="block text-primary">Your Business.</span>
        </h1>

        <p className="reveal mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          I help businesses implement AI systems that automate content and
          internal workflows — so your team produces more output with less
          manual work.
        </p>

        <div className="reveal mt-10 flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full px-7 h-12 font-semibold group"
          >
            <a href="#book">
              Book a Free Call
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-7 h-12 font-semibold border-border bg-transparent hover:bg-secondary"
          >
            <a href="#services">How It Works</a>
          </Button>
        </div>

        <div className="reveal mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 border-t border-border pt-12">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl font-black tracking-tight">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground max-w-[240px]">
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