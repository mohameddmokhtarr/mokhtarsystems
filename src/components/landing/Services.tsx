const services = [
  {
    n: "01",
    title: "AI Content Systems",
    desc: "Automated workflows for research, writing, editing, and publishing — built around how your business already operates.",
    bullets: [
      "Research and brief generation",
      "Drafting and editing pipelines",
      "Review and approval workflow",
      "Scheduled publishing and reporting",
    ],
    examples:
      "Examples: Automated research and brief generation for reports, drafting and editing pipelines for content teams, review and approval workflows that reduce back-and-forth, scheduled publishing to social media and blog with auto-formatting.",
  },
  {
    n: "02",
    title: "AI Workflow Automation",
    desc: "Internal processes that currently rely on manual effort — moved into reliable systems your team can run on.",
    bullets: [
      "Process audit and mapping",
      "Tool and data integration",
      "Internal AI assistants",
      "Documentation and handover",
    ],
    examples:
      "Examples: Automated data entry from emails/forms into your CRM, daily report generation from multiple data sources, meeting note processing and action item extraction, invoice processing and approval routing, customer support ticket categorization and first-response automation.",
  },
];

const Services = () => {
  return (
    <section id="services" className="pt-28 sm:pt-40 pb-28 sm:pb-40 border-t-2 border-ink bg-secondary">
      <div className="container">
        <div className="reveal inline-block rounded-full border-2 border-ink bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-brutal mb-6">
          What I Do
        </div>
        <h2 className="reveal font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9]">
          <span className="bg-primary text-primary-foreground border-2 border-ink px-3 inline-block shadow-brutal -rotate-1">Services</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((s, i) => (
            <div
              key={s.n}
              className={`reveal group rounded-2xl border-2 border-ink bg-card p-8 sm:p-10 shadow-brutal hover:shadow-brutal-lg hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all ${
                i === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-foreground border-2 border-ink font-display text-lg">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-3xl sm:text-4xl uppercase leading-[0.95] tracking-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                {s.desc}
              </p>
              <ul className="mt-6 space-y-2.5 text-foreground/80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary border border-ink shrink-0" />
                    <span className="font-medium">{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-6 border-t-2 border-dashed border-ink/30 text-sm text-foreground/70 leading-relaxed">
                {s.examples}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;