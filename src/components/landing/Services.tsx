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
    <section id="services" className="pt-20 sm:pt-28 pb-8 sm:pb-12 border-t border-border">
      <div className="container">
        <h2 className="reveal text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight">
          Services<span className="text-primary">.</span>
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
              <p className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground leading-relaxed">
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