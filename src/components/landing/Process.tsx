const steps = [
  { n: "01", title: "Strategy",    desc: "Define the single idea everything will support." },
  { n: "02", title: "Direction",   desc: "Establish the visual and creative language." },
  { n: "03", title: "Production",  desc: "Build the imagery, film, and campaign assets." },
  { n: "04", title: "Experience",  desc: "Design the digital environment." },
  { n: "05", title: "Launch",      desc: "Deploy the complete campaign." },
];

const Process = () => (
  <section className="border-t border-[#ECECEC] py-28 sm:py-40">
    <div className="container">
      <div className="reveal mb-14">
        <span className="text-xs font-mono tracking-widest uppercase text-[#707070]">
          Process
        </span>
      </div>

      <div className="max-w-2xl">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="reveal flex items-start gap-8 py-7 sm:py-8 border-b border-[#ECECEC] last:border-0"
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <span className="w-10 shrink-0 text-xs font-mono text-[#707070] mt-1">
              {s.n}
            </span>
            <div>
              <h3 className="font-display text-xl sm:text-2xl uppercase text-[#0A0A0A] tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-[#707070] leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
