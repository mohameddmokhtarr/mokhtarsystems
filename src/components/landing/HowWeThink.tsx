const insights = [
  {
    title: "Why Most AI Visuals Look The Same",
    body: "Because the prompt came before the idea. Campaign-quality imagery starts with a brand truth, a visual language, and a clear audience. The generation is the last step — not the first.",
  },
  {
    title: "Why We Never Start With The Prompt",
    body: "We start with the brief. What is the brand trying to say? Who are they saying it to? What should the image make someone feel? The prompt is the last 10%. Creative direction is the other 90.",
  },
  {
    title: "The Biggest Mistake Brands Make With AI Visuals",
    body: "Using AI without a visual system. Output generated without a defined look, palette, or posing language produces content that looks different every time — and builds no brand equity.",
  },
  {
    title: "How We Build Content Systems",
    body: "We define the visual standard first: the brand's look, tone, and content format by channel. Then we build a production pipeline that reliably outputs to that standard — at the volume the brand actually needs.",
  },
];

const HowWeThink = () => {
  return (
    <section
      id="how-we-think"
      className="py-28 sm:py-40 border-t border-white/[0.05] bg-[#0A0A0A]"
    >
      <div className="container">
        <div className="reveal mb-5">
          <span className="text-[9px] font-mono tracking-[4px] uppercase text-[#E05A2B]">
            Perspective
          </span>
        </div>
        <h2 className="reveal font-display text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-white">
          How We <span className="italic-serif">Think</span>
        </h2>
        <p className="reveal mt-5 max-w-xl text-[#555] text-sm sm:text-base leading-relaxed mb-16 sm:mb-20">
          Not a blog. A set of principles and provocations about creative thinking, AI, and brand strategy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {insights.map((insight, i) => (
            <div
              key={insight.title}
              className="reveal group border border-white/[0.06] p-7 sm:p-9 hover:border-white/[0.13] hover:bg-white/[0.018] transition-all duration-400 ease-out"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="text-[8.5px] font-mono tracking-[3px] uppercase text-white/30 mb-6">
                0{i + 1}
              </div>
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white/85 leading-[1.1] group-hover:text-white transition-colors duration-300">
                {insight.title}
              </h3>
              <p className="mt-4 text-sm text-white/35 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                {insight.body}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href="/ai-visuals"
            className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wider text-white/50 border-b border-white/20 pb-1 hover:text-white hover:border-white/50 transition-colors"
            style={{ fontWeight: 600 }}
          >
            See the work →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowWeThink;
