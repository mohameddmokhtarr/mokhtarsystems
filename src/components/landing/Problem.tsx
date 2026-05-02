const points = [
  {
    title: "Manual work eats your team's time",
    desc: "Content, reporting, and internal processes are still done by hand — slowly, inconsistently, and at high cost.",
  },
  {
    title: "Output doesn't match the headcount",
    desc: "You've added people but the volume and quality of what gets shipped hasn't moved in proportion.",
  },
  {
    title: "AI tools sit unused",
    desc: "Subscriptions are paid, but nothing is actually integrated into how the business operates day to day.",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-20 sm:py-28 border-t-2 border-ink bg-secondary">
      <div className="container">
        <div className="reveal inline-block rounded-full border-2 border-ink bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-brutal mb-6">
          The Problem
        </div>
        <h2 className="reveal font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight max-w-4xl text-balance leading-[0.9]">
          The <span className="bg-accent border-2 border-ink px-2 -rotate-1 inline-block shadow-brutal">Bottleneck</span>.
        </h2>
        <p className="reveal mt-8 max-w-2xl text-lg sm:text-xl text-foreground/75 leading-relaxed">
          Most businesses don't have an AI problem. They have an
          implementation problem.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div
              key={i}
              className={`reveal rounded-2xl border-2 border-ink bg-card p-8 shadow-brutal hover:shadow-brutal-lg hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground border-2 border-ink font-display text-lg">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 font-display text-2xl uppercase leading-tight tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-foreground/75 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
