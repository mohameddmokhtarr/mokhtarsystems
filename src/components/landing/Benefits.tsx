const benefits = [
  {
    metric: "Hours back",
    title: "Time saved across the team",
    desc: "Repetitive work — research, drafting, formatting, reporting — moves from people to systems.",
  },
  {
    metric: "More output",
    title: "Higher volume without more headcount",
    desc: "Your team ships more, more consistently, without burning out or growing the payroll.",
  },
  {
    metric: "Less drift",
    title: "Consistent quality and process",
    desc: "Workflows run the same way every time. Standards are encoded into the system, not in someone's head.",
  },
  {
    metric: "Owned by you",
    title: "Internal capability, not a dependency",
    desc: "You keep the system, the documentation, and the access. No lock-in to me or any single tool.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-28 sm:py-40 border-t-2 border-ink">
      <div className="container">
        <div className="reveal inline-block rounded-full border-2 border-ink bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-brutal mb-6">
          Outcomes
        </div>
        <h2 className="reveal font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight max-w-4xl text-balance leading-[0.9]">
          What <span className="italic" style={{ fontFamily: "Space Grotesk", fontWeight: 700 }}>Changes</span>.
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`reveal rounded-2xl border-2 border-ink bg-card p-8 sm:p-10 shadow-brutal hover:shadow-brutal-lg hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all ${
                i % 2 === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <div className="inline-block rounded-full border-2 border-ink bg-primary text-primary-foreground px-3 py-1 text-xs uppercase tracking-widest font-bold">
                {b.metric}
              </div>
              <h3 className="mt-5 font-display text-2xl sm:text-3xl uppercase leading-tight tracking-tight">
                {b.title}
              </h3>
              <p className="mt-3 text-foreground/75 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
