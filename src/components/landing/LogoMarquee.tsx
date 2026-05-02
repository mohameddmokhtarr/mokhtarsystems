const pills = [
  "✦ AI Systems",
  "✦ Content Pipelines",
  "✦ Ops Automation",
  "✦ Weekly Reporting",
  "✦ Growth Infrastructure",
  "✦ Cairo-Based",
  "✦ mokhtarsays_",
];

const LogoMarquee = () => {
  return (
    <div className="border-t-2 border-b-2 border-[#1A1512] py-5 overflow-hidden bg-[#FAF7F2]">
      <div
        className="flex gap-5 w-max"
        style={{ animation: "marquee 35s linear infinite" }}
      >
        {[...pills, ...pills].map((p, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-5 py-2.5 border-2 border-[#1A1512] rounded-full text-[11px] font-bold uppercase text-[#1A1512]"
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
