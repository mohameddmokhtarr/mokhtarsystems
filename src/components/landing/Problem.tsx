const points = [
  {
    title: "Visual production can't keep up",
    desc: "Traditional shoots are slow, expensive, and hard to scale. By the time the imagery is ready, the moment has passed.",
  },
  {
    title: "Content volume doesn't match brand ambition",
    desc: "You know what the brand should look and sound like. What's shipping doesn't reflect it — and it's not for lack of trying.",
  },
  {
    title: "AI visuals are treated as a shortcut, not a system",
    desc: "Brands generating AI content without a creative direction end up with output that looks like everyone else's. The tool is only as good as the brief behind it.",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-28 sm:py-40 border-t-2 border-[#1A1512] bg-dot-grid">
      <div className="container">
        <div className="reveal mb-6">
          <span className="tag">The Problem</span>
        </div>
        <h2 className="reveal font-display text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight max-w-4xl text-balance leading-[0.9] text-[#2A1F18]">
          The <span className="bg-[#E8896A] text-white border-2 border-[#1A1512] px-2 -rotate-1 inline-block shadow-brutal">Bottleneck</span>.
        </h2>
        <p className="reveal mt-10 max-w-3xl font-display text-2xl sm:text-3xl lg:text-4xl uppercase leading-[1.05] tracking-tight text-[#1A1512]">
          Most brands don't have a content problem.{" "}
          <span className="lead-highlight">They have a production system problem.</span>
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

        <div className="reveal mt-14 text-center">
          <a
            href="#solution"
            className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wider text-[#E8896A] border-b border-[#E8896A]/40 pb-1 hover:border-[#E8896A] transition-colors"
            style={{ fontWeight: 600 }}
          >
            See the approach →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Problem;
