const TheStudio = () => (
  <section id="studio" className="border-t border-[#ECECEC] py-16 sm:py-44">
    <div className="container">
      <div className="reveal mb-10">
        <span className="text-xs font-mono tracking-widest uppercase text-[#707070]">
          The Studio
        </span>
      </div>

      <div className="max-w-4xl">
        <p
          className="reveal font-display text-3xl sm:text-5xl lg:text-[3.5rem] text-[#0A0A0A] leading-[1.08] tracking-tight"
          style={{ transitionDelay: "0.08s" }}
        >
          We don't start with visuals.
        </p>
        <p
          className="reveal font-display text-3xl sm:text-5xl lg:text-[3.5rem] text-[#0A0A0A] leading-[1.08] tracking-tight"
          style={{ transitionDelay: "0.18s" }}
        >
          We start with ideas.
        </p>
        <p
          className="reveal font-display text-3xl sm:text-5xl lg:text-[3.5rem] text-[#707070] leading-[1.08] tracking-tight"
          style={{ transitionDelay: "0.28s" }}
        >
          Everything else exists to support them.
        </p>
      </div>

      <div
        className="reveal mt-14 sm:mt-20 max-w-xl"
        style={{ transitionDelay: "0.35s" }}
      >
        <p className="text-[#707070] text-sm sm:text-base leading-relaxed">
          We take a single idea and build an entire brand campaign around
          it — strategy, imagery, film, and the website that carries it
          into the world. Creative direction leads. AI production scales it.
        </p>
      </div>
    </div>
  </section>
);

export default TheStudio;
