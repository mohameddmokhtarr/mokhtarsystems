const Philosophy = () => (
  <section className="bg-[#0A0A0A] py-36 sm:py-56">
    <div className="container">
      <div className="max-w-4xl">
        <p
          className="reveal font-display text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight"
        >
          Great visuals don't build brands.
        </p>
        <p
          className="reveal font-display text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight"
          style={{ transitionDelay: "0.1s" }}
        >
          Great thinking does.
        </p>
        <p
          className="reveal font-display text-4xl sm:text-6xl lg:text-7xl text-white/25 leading-[1.05] tracking-tight"
          style={{ transitionDelay: "0.2s" }}
        >
          Visuals simply make people see it.
        </p>

        <p
          className="reveal mt-16 text-xs font-mono text-white/25 tracking-widest uppercase"
          style={{ transitionDelay: "0.35s" }}
        >
          — Mokhtar Studio
        </p>
      </div>
    </div>
  </section>
);

export default Philosophy;
