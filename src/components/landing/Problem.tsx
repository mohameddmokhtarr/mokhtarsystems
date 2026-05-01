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
    <section id="problem" className="py-20 sm:py-28 border-t border-border">
      <div className="container">
        <h2 className="reveal text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight max-w-4xl text-balance">
          The Bottleneck<span className="text-primary">.</span>
        </h2>
        <p className="reveal mt-6 max-w-2xl text-lg text-muted-foreground">
          Most businesses don't have an AI problem. They have an
          implementation problem.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div
              key={i}
              className="reveal rounded-2xl border border-border bg-card p-8"
            >
              <div className="text-primary text-sm font-mono font-semibold tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-xl font-bold leading-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
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
