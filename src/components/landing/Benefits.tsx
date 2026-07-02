const benefits = [
  {
    metric: "Campaign quality",
    title: "Imagery without booking a shoot",
    desc: "Full campaign-quality AI visuals — no model booking, no location, no photographer. Delivered ready to publish.",
  },
  {
    metric: "Consistent output",
    title: "A visual identity that doesn't drift",
    desc: "Creative direction encoded into the system means every asset looks like the same brand, across every channel, every time.",
  },
  {
    metric: "Built to scale",
    title: "Content volume that matches your ambition",
    desc: "A content system that produces at the pace the brand actually needs — not at the pace a traditional production schedule allows.",
  },
  {
    metric: "Yours to keep",
    title: "Assets and systems delivered to you",
    desc: "Everything I build belongs to the brand. Visual assets, content pipelines, creative documentation. No retainer. No dependency.",
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
