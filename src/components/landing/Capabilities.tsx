const caps = [
  {
    n: "01",
    title: "Creative Strategy",
    desc: "Finding the right idea before anything gets created.",
  },
  {
    n: "02",
    title: "Creative Direction",
    desc: "Defining how every visual communicates the idea.",
  },
  {
    n: "03",
    title: "AI Visual Production",
    desc: "Campaign-quality imagery built without a traditional studio.",
  },
  {
    n: "04",
    title: "AI Film Production",
    desc: "Brand films and campaign motion — from brief to final cut.",
  },
  {
    n: "05",
    title: "Digital Experiences",
    desc: "Websites and digital products that complete the campaign.",
  },
  {
    n: "06",
    title: "Content Systems",
    desc: "Scalable creative infrastructure for long-term output.",
  },
];

const Capabilities = () => (
  <section id="capabilities" className="border-t border-[#ECECEC] py-28 sm:py-40">
    <div className="container">
      <div className="reveal mb-14">
        <span className="text-xs font-mono tracking-widest uppercase text-[#707070]">
          Capabilities
        </span>
      </div>

      <div>
        {caps.map((c, i) => (
          <div
            key={c.n}
            className="reveal border-b border-[#ECECEC] py-7 sm:py-8 flex items-start gap-8 sm:gap-0"
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            <span className="w-10 shrink-0 text-xs font-mono text-[#707070] mt-0.5">
              {c.n}
            </span>
            <div className="flex-1 sm:grid sm:grid-cols-2 gap-8 sm:gap-24">
              <h3 className="font-display text-base sm:text-lg uppercase text-[#0A0A0A] tracking-tight leading-snug">
                {c.title}
              </h3>
              <p className="mt-2 sm:mt-0 text-sm text-[#707070] leading-relaxed">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Capabilities;
