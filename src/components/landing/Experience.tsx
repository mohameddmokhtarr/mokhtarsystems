const categories = [
  {
    n: "01",
    title: "International Manufacturing",
    desc: "Large-scale manufacturers with cross-border distribution. Commercial content and visual assets built for export markets across multiple regions.",
  },
  {
    n: "02",
    title: "Fashion & Consumer Brands",
    desc: "Fashion labels and consumer brands at e-commerce and retail scale. Campaign imagery, editorial content, and product photography across categories and seasons.",
  },
  {
    n: "03",
    title: "High-Volume Production",
    desc: "Content environments built for output at scale. Multi-format asset production across social, web, and print with consistent quality and brand accuracy throughout.",
  },
  {
    n: "04",
    title: "Commercial Campaign Pace",
    desc: "Fast-turnaround campaign workflows. From brief to delivered content at the pace that commercial production environments demand, without trading quality for speed.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-28 sm:py-40 border-t border-white/[0.05] bg-[#0A0A0A]"
    >
      <div className="container">
        <div className="reveal mb-5">
          <span className="text-[9px] font-mono tracking-[4px] uppercase text-[#E05A2B]">
            Background
          </span>
        </div>
        <h2 className="reveal font-display text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-white">
          Experience
        </h2>
        <p className="reveal mt-5 max-w-xl text-[#555] text-sm sm:text-base leading-relaxed mb-16 sm:mb-20">
          Built across industries and production scales. No client names. A clear record of where the work has been done and what it demanded.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <div
              key={cat.n}
              className="reveal group border border-white/[0.06] p-7 sm:p-9 hover:border-white/[0.13] hover:bg-white/[0.018] transition-all duration-400 ease-out"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="text-[8.5px] font-mono tracking-[3px] uppercase text-white/25 mb-6">
                {cat.n}
              </div>
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white/85 leading-[1.1] group-hover:text-white transition-colors duration-300">
                {cat.title}
              </h3>
              <p className="mt-4 text-sm text-white/35 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
