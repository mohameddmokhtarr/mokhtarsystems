import { Sparkles } from "lucide-react";
import OrbitalDiagram from "./OrbitalDiagram";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-36 sm:pt-48 pb-28 sm:pb-40 overflow-hidden bg-dot-grid"
    >
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left: copy ── */}
          <div>
            <div className="reveal inline-block">
              <div className="hero-badge">
                <Sparkles size={18} className="hero-badge-icon" />
                AI Systems Implementation
              </div>
            </div>

            <h1 className="reveal mt-8 font-display text-[5rem] sm:text-[6rem] lg:text-[7rem] leading-[0.95] tracking-tight uppercase text-[#1A1512]">
              <span className="block">AI Systems</span>
              <span className="block">
                Built <span className="italic-serif">Inside</span>
              </span>
              <span className="block">
                <span className="bg-[#E8896A] text-white px-3 -mx-1 inline-block border-2 border-[#1A1512] shadow-brutal -rotate-1">Your</span>{" "}
                Business.
              </span>
            </h1>

            <p className="reveal mt-8 max-w-lg text-lg text-[#2A1F18]/70 leading-relaxed">
              I build AI systems that replace manual work — across content, operations, and reporting.
            </p>

            <div className="reveal mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#book"     className="btn-dark">✦ Book a Call</a>
              <a href="#services" className="btn-salmon">✦ How It Works</a>
            </div>
          </div>

          {/* ── Right: orbital diagram ── */}
          <div className="reveal flex items-center justify-center lg:justify-end">
            <OrbitalDiagram light={true} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
