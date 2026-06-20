const benefits = [
  {
    metric: "Hours back",
    title: "Time saved across the team",
    desc: "Repetitive content work and slow photoshoot cycles move to AI. Same output, lower cost, less time.",
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
    desc: "You keep the content pipeline, the documentation, and the visual assets. No agency retainer, no lock-in to me or any single tool.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-28 sm:py-40 border-t-2 border-[#1A1512] bg-dot-grid">
      <div className="container">
        <div className="reveal mb-6">
          <span className="tag">Outcomes</span>
        </div>
        <h2 className="reveal font-display text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight max-w-4xl text-balance leading-[0.9] text-[#2A1F18]">
          What <span className="italic font-display">Changes</span>.
        </h2>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`reveal card-light p-8 sm:p-10 ${i % 2 === 1 ? "md:translate-y-6" : ""}`}
            >
              <span className="tag">{b.metric}</span>
              <h3 className="mt-5 font-display text-2xl sm:text-3xl uppercase leading-tight tracking-tight text-[#2A1F18]">
                {b.title}
              </h3>
              <p className="mt-3 text-[#3D2E22] leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 text-center">
          <a href="#book" className="btn-salmon">Book a Call</a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
