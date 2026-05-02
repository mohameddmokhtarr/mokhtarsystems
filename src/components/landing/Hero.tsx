import { Sparkles } from "lucide-react";
import OrbitalDiagram from "./OrbitalDiagram";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-28 sm:pt-44 pb-20 sm:pb-36 overflow-hidden bg-[#0A0A0A]"
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 50% at 60% 50%, rgba(224,90,43,0.08) 0%, transparent 65%)"
      }} />
      <div className="container relative">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 items-center">

          {/* ── Left: copy ── */}
          <div className="w-full">
            <div className="reveal inline-block">
              <div className="hero-badge glass" style={{ boxShadow: "0 0 20px rgba(224,90,43,0.2), 0 0 0 1px rgba(255,255,255,0.03) inset" }}>
                <Sparkles size={18} className="hero-badge-icon" />
                AI Systems Implementation
              </div>
            </div>

            <h1 className="reveal mt-6 sm:mt-8 font-display text-[2.75rem] sm:text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] leading-[0.92] tracking-tight uppercase text-white">
              <span className="block">AI Systems</span>
              <span className="block">
                Built <span className="italic-serif">Inside</span>
              </span>
              <span className="block">
                <span className="bg-[#E05A2B] text-white px-2 sm:px-3 -mx-1 inline border-none -rotate-1">Your</span>{" "}
                Business.
              </span>
            </h1>

            <p className="reveal mt-6 sm:mt-8 text-sm sm:text-base text-[#999] leading-relaxed font-sans">
              I build AI systems that replace manual work — across content, operations, and reporting.
            </p>

            <div className="reveal mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#book"     className="btn-salmon text-center">✦ Book a Call</a>
              <a href="#services" className="btn-dark text-center">✦ How It Works</a>
            </div>
          </div>

          {/* ── Right: orbital diagram — hidden on mobile, shown sm+ ── */}
          <div className="hidden sm:flex reveal items-center justify-center lg:justify-end mt-12 lg:mt-0">
            <OrbitalDiagram light={false} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
