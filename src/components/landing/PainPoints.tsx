const painPoints = [
  "You're running on content chaos — no system, no consistency, no pipeline.",
  "Your team is stuck doing the same manual tasks every single week.",
  "You have no clear picture of what's actually moving the needle.",
];

const PainPoints = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0A]">
      <div className="container">
        <h2 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.9] text-white max-w-4xl">
          Your ideas are world-class.{" "}
          <span className="italic-serif">Your systems</span>{" "}
          aren't.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {painPoints.map((text, i) => (
            <div
              key={i}
              className={`reveal p-6 bg-[#141414] border border-white/[0.08]${i === 2 ? " lg:col-span-2" : ""}`}
            >
              <div className="text-2xl font-bold text-[#E05A2B]">✗</div>
              <p className="mt-4 font-display text-xl uppercase tracking-tight leading-tight text-white">
                {text}
              </p>
            </div>
          ))}

          {/* CTA card — col-3, row-span-2 at lg */}
          <div className="reveal p-6 bg-[#E05A2B] text-white flex flex-col justify-between lg:row-start-1 lg:col-start-3 lg:row-span-2">
            <div>
              <div className="text-3xl font-bold opacity-40">→</div>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl uppercase tracking-tight leading-tight">
                Sound familiar? Here's what we build.
              </h3>
            </div>
            <a
              href="#services"
              className="mt-8 self-start inline-flex items-center gap-2 font-sans font-600 text-sm uppercase tracking-wider border-b border-white/50 pb-1 hover:border-white transition-colors"
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
