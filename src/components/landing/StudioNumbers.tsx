const stats = [
  { value: "100+", label: "AI Visuals" },
  { value: "13",   label: "AI Films" },
  { value: "4",    label: "Brand Campaigns" },
  { value: "12",   label: "Projects" },
];

const StudioNumbers = () => (
  <section className="border-t border-[#ECECEC] py-28 sm:py-40">
    <div className="container">
      <div className="reveal mb-14">
        <span className="text-xs font-mono tracking-widest uppercase text-[#707070]">
          Studio
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#ECECEC]">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="reveal px-0 sm:px-10 first:pl-0 last:pr-0 pb-10 sm:pb-0"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div
              className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#0A0A0A] tracking-tight"
              style={{ letterSpacing: "-0.04em" }}
            >
              {s.value}
            </div>
            <div className="mt-3 text-xs font-mono text-[#707070] uppercase tracking-widest">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StudioNumbers;
