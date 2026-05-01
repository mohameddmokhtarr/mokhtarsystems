const Solution = () => {
  return (
    <section id="solution" className="py-20 sm:py-28 border-t border-border">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="reveal">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-balance">
            The Approach<span className="text-primary">.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I implement AI systems directly inside your business. Not advice.
            Not training. Not another tool to manage.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We start with the workflows that cost your team the most time, map
            them end to end, and replace the manual steps with reliable
            automated ones — owned by you when we're done.
          </p>
        </div>

        <div className="reveal rounded-2xl border border-border bg-card p-8 sm:p-10">
          <div className="space-y-6">
            {[
              { n: "01", t: "Audit", d: "Identify the workflows where AI removes the most manual work." },
              { n: "02", t: "Design", d: "Map the system end to end with clear inputs, outputs, and owners." },
              { n: "03", t: "Implement", d: "Build it inside your stack and connect it to your team's tools." },
              { n: "04", t: "Hand over", d: "Document everything. Train your team. You own the system." },
            ].map((s) => (
              <div key={s.n} className="flex gap-5">
                <div className="text-primary text-sm font-mono font-semibold tracking-widest pt-1">
                  {s.n}
                </div>
                <div>
                  <div className="font-bold">{s.t}</div>
                  <div className="text-muted-foreground mt-1">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
