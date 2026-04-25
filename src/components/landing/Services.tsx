const services = [
  {
    n: "01",
    title: "Competitor & Trend Research",
    desc: "Full niche analysis, weekly trend reports, and content gaps your competitors are missing.",
    bullets: [
      "Weekly trend report",
      "Top 10 competitor content audit",
      "Content gap analysis",
      "Format recommendations",
    ],
  },
  {
    n: "02",
    title: "AI Content System",
    desc: "Hook writing, captions, content calendar, and monthly performance breakdowns. Built around your brand goals.",
    bullets: [
      "30 hooks per month",
      "Full caption library",
      "Content calendar",
      "Monthly performance breakdown",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="pt-20 sm:pt-28 pb-8 sm:pb-12 border-t border-border">
      <div className="container">
        <h2 className="reveal text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight">
          What We Do.
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((s) => (
            <div
              key={s.n}
              className="reveal group rounded-2xl border border-border bg-card p-8 sm:p-10 hover:border-primary/50 transition-colors"
            >
              <div className="text-primary text-sm font-mono font-semibold tracking-widest">
                {s.n}
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold leading-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
              <ul className="mt-6 space-y-2 text-muted-foreground">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;