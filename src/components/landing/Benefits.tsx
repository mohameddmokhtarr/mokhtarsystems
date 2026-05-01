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
    <section id="benefits" className="py-20 sm:py-28 border-t border-border">
      <div className="container">
        <h2 className="reveal text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight max-w-4xl text-balance">
          What Changes<span className="text-primary">.</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="reveal rounded-2xl border border-border bg-card p-8 sm:p-10"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                {b.metric}
              </div>
              <h3 className="mt-4 text-2xl font-bold leading-tight">
                {b.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
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
