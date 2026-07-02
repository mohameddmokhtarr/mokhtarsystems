const steps = [
  { n: "01", t: "Brief", d: "Understand the brand's visual gaps and content needs. What needs to ship, at what quality, and for which channels." },
  { n: "02", t: "Direct", d: "Build the creative direction. Campaign concept, visual language, content system architecture — before a single image is generated." },
  { n: "03", t: "Produce", d: "Generate AI visuals, build the content system, and deliver campaign-ready assets at the quality and volume the brand needs." },
  { n: "04", t: "Launch", d: "Everything is yours. Assets, system documentation, and your team trained to run it independently." },
];

const Solution = () => {
  return (
    <section id="solution" className="py-28 sm:py-40 border-t-2 border-[#1A1512] bg-dot-grid">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="reveal lg:sticky lg:top-28">
          <div className="mb-6">
            <span className="tag">The Approach</span>
          </div>
          <h2 className="font-display text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-balance leading-[0.9] text-[#2A1F18]">
            How <span className="text-[#E8896A]">it</span> works.
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-[#3D2E22] leading-relaxed">
            I build AI visual and content systems directly for your brand. Not templates.
            Not generic output. Not a tool handed over without a direction.
          </p>
          <p className="mt-4 text-lg text-[#3D2E22] leading-relaxed">
            Every project starts with creative direction — the brief, the visual language, the content standard. Then I build the system around it. Owned by you when I'm done.
          </p>
        </div>

        <div className="space-y-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`reveal card-light p-6 sm:p-8 flex gap-5 ${
                i % 2 === 1 ? "sm:ml-8" : ""
              }`}
            >
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#E8896A] text-white border-2 border-[#1A1512] flex items-center justify-center font-display text-lg">
                {s.n}
              </div>
              <div>
                <div className="font-display text-2xl uppercase tracking-tight text-[#2A1F18]">{s.t}</div>
                <div className="text-[#3D2E22] mt-2 leading-relaxed">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
