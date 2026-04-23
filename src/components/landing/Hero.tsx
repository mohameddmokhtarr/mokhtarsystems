import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "180K", label: "Organic views on a single reel" },
  { value: "+340%", label: "Instagram reach growth" },
  { value: "5×", label: "Reel views month-over-month" },
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
          <span className="block">Your Brand.</span>
          <span className="block">Real Content.</span>
          <span className="block text-primary">Real Growth.</span>
        </h1>

        <p className="reveal mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          We build AI-powered content systems that earn attention, kill
          guesswork, and turn your brand into the one competitors are watching.
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
            <a href="#results">See Our Work</a>
          </Button>
        </div>

        <div className="reveal mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 border-t border-border pt-12">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl sm:text-5xl font-black tracking-tight">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground max-w-[200px]">
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