const painPoints = [
  "You're running on content chaos — no system, no consistency, no pipeline.",
  "Your team is stuck doing the same manual tasks every single week.",
  "You have no clear picture of what's actually moving the needle.",
];

const PainPoints = () => {
  return (
    <section className="py-24 sm:py-36 border-t-2 border-[#1A1512] bg-[#FAF7F2]">
      <div className="container">
        <h2 className="reveal font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#1A1512] max-w-4xl">
          Your ideas are world-class.{" "}
          <span className="italic-serif">Your systems</span>{" "}
          aren't.
        </h2>

        {/*
          Grid layout:
          md (2-col):  [P1][P2] / [P3][CTA]
          lg (3-col):  [P1][P2][CTA↕] / [P3 col-span-2][CTA↕]
        */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Pain point cards */}
          {painPoints.map((text, i) => (
            <div
              key={i}
              className={`reveal card-light p-8 rounded-xl${i === 2 ? " lg:col-span-2" : ""}`}
            >
              <div className="text-2xl font-bold text-[#C45A38]">✗</div>
              <p className="mt-5 font-display text-xl sm:text-2xl uppercase tracking-tight leading-tight text-[#1A1512]">
                {text}
              </p>
            </div>
          ))}

          {/* CTA card — spans 2 rows at lg, placed last in DOM but visually col-3 at lg */}
          <div className="reveal bg-[#C45A38] rounded-xl p-8 text-white flex flex-col justify-between lg:row-start-1 lg:col-start-3 lg:row-span-2">
            <div>
              <div className="text-3xl font-bold opacity-50">→</div>
              <h3 className="mt-5 font-display text-2xl sm:text-3xl uppercase tracking-tight leading-tight">
                Sound familiar? Here's what we build.
              </h3>
            </div>
            <a
              href="#services"
              className="mt-8 self-start inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider border-b-2 border-white/50 pb-1 hover:border-white transition-colors"
            >
              See how it works →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;
