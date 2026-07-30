const Hero = () => (
  <section className="min-h-screen flex flex-col pt-16">
    {/* Main content — grows to fill available height */}
    <div className="container flex-1 flex flex-col justify-center py-20 sm:py-28">
      {/* Studio name */}
      <div className="reveal">
        <h1
          className="font-display uppercase text-[#0A0A0A] leading-[0.88]"
          style={{ fontSize: "clamp(4.5rem, 14vw, 17rem)", letterSpacing: "-0.04em" }}
        >
          Mokhtar<br />Studio
        </h1>
      </div>

      {/* Separator */}
      <div className="reveal mt-10 sm:mt-14 h-px bg-[#ECECEC]" style={{ transitionDelay: "0.1s" }} />

      {/* Bottom row */}
      <div
        className="reveal mt-8 sm:mt-10 grid sm:grid-cols-2 gap-8 sm:gap-16"
        style={{ transitionDelay: "0.2s" }}
      >
        <p className="text-sm sm:text-base text-[#707070] leading-loose">
          Creative Strategy.<br />
          Creative Direction.<br />
          AI Production.<br />
          Websites Built.
        </p>

        <p className="text-sm sm:text-base text-[#0A0A0A] leading-relaxed">
          Ideas become campaigns.<br />
          Campaigns become<br />
          websites.
        </p>
      </div>
    </div>

    {/* Scroll indicator — pinned to bottom */}
    <div className="reveal container pb-10 sm:pb-14" style={{ transitionDelay: "0.35s" }}>
      <a
        href="#campaigns"
        className="inline-flex items-center gap-3 text-xs text-[#707070] tracking-widest uppercase hover:text-[#0A0A0A] transition-colors"
      >
        <span className="text-base leading-none">↓</span>
        <span>Selected Campaigns</span>
      </a>
    </div>
  </section>
);

export default Hero;
