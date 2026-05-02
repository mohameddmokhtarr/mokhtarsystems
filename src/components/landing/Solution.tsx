const steps = [
  { n: "01", t: "Audit", d: "Identify the workflows where AI removes the most manual work." },
  { n: "02", t: "Design", d: "Map the system end to end with clear inputs, outputs, and owners." },
  { n: "03", t: "Implement", d: "Build it inside your stack and connect it to your team's tools." },
  { n: "04", t: "Hand over", d: "Document everything. Train your team. You own the system." },
];

const Solution = () => {
  return (
    <section id="solution" className="py-28 sm:py-40 border-t-2 border-ink">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="reveal lg:sticky lg:top-28">
          <div className="inline-block rounded-full border-2 border-ink bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-brutal mb-6">
            The Approach
          </div>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-balance leading-[0.9]">
            How <span className="text-primary">it</span> works.
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-foreground/75 leading-relaxed">
            I implement AI systems directly inside your business. Not advice.
            Not training. Not another tool to manage.
          </p>
          <p className="mt-4 text-lg text-foreground/75 leading-relaxed">
            We start with the workflows that cost your team the most time, map
            them end to end, and replace the manual steps with reliable
            automated ones — owned by you when we're done.
          </p>
        </div>

        <div className="space-y-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`reveal rounded-2xl border-2 border-ink bg-card p-6 sm:p-8 shadow-brutal flex gap-5 ${
                i % 2 === 1 ? "sm:ml-8" : ""
              }`}
            >
              <div className="shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground border-2 border-ink flex items-center justify-center font-display text-lg">
                {s.n}
              </div>
              <div>
                <div className="font-display text-2xl uppercase tracking-tight">{s.t}</div>
                <div className="text-foreground/75 mt-2 leading-relaxed">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
