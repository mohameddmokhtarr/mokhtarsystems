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
    <section id="problem" className="py-28 sm:py-40 border-t-2 border-[#1A1512] bg-dot-grid">
      <div className="container">
        <div className="reveal mb-6">
          <span className="tag">The Problem</span>
        </div>
        <h2 className="reveal font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight max-w-4xl text-balance leading-[0.9] text-[#2A1F18]">
          The <span className="bg-[#E8896A] text-white border-2 border-[#1A1512] px-2 -rotate-1 inline-block shadow-brutal">Bottleneck</span>.
        </h2>
        <p className="reveal mt-10 max-w-3xl font-display text-2xl sm:text-3xl lg:text-4xl uppercase leading-[1.05] tracking-tight text-[#1A1512]">
          Most businesses don't have an AI problem.{" "}
          <span className="lead-highlight">They have an implementation problem.</span>
        </p>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <div
              key={i}
              className={`reveal card-light p-8 ${i === 1 ? "md:translate-y-6" : ""}`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E8896A] text-white border-2 border-[#1A1512] font-display text-lg">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 font-display text-2xl uppercase leading-tight tracking-tight text-[#2A1F18]">
                {p.title}
              </h3>
              <p className="mt-3 text-[#3D2E22] leading-relaxed">
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
