const pills = [
  "✦ AI Systems",
  "✦ Content Pipelines",
  "✦ AI Visuals",
  "✦ Content Automation",
  "✦ Growth Infrastructure",
  "✦ Cairo-Based",
  "✦ mokhtarsays_",
];

const LogoMarquee = () => {
  return (
    <div className="py-5 overflow-hidden bg-[#0F0F0F] border-t border-b border-white/[0.07]">
      <div
        className="flex gap-4 w-max"
        style={{ animation: "marquee 35s linear infinite" }}
      >
        {[...pills, ...pills].map((p, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-5 py-2.5 border border-white/15 text-[11px] font-bold uppercase text-white"
            style={{ fontFamily: "'Space Mono', monospace", letterSpacing: "2px" }}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
