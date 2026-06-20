const painPoints = [
  "You're running on content chaos. No system, no consistency, no pipeline.",
  "Your team is stuck doing the same manual tasks every single week.",
  "You're spending thousands on photoshoots and waiting weeks for edited files.",
];

const PainPoints = () => {
  return (
    <section className="py-10 sm:py-14 bg-[#0A0A0A]">
      <div className="container">
        <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-[0.9] text-white max-w-4xl">
          Your ideas are world-class.{" "}
          <span className="italic-serif">Your systems</span>{" "}
          aren't.
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {painPoints.map((text, i) => (
            <div
              key={i}
              className={`reveal glass glass-highlight p-5${i === 2 ? " sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
            >
              <div className="glass-salmon w-7 h-7 flex items-center justify-center">
                <span className="text-sm font-bold text-[#E05A2B]">✗</span>
              </div>
              <p className="mt-3 font-display text-xl uppercase tracking-tight leading-tight text-white">
                {text}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div className="reveal glass-salmon glass-highlight p-5 text-white flex flex-col justify-between sm:col-span-2 lg:col-span-2">
            <div>
              <div className="text-3xl font-bold opacity-40">→</div>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl uppercase tracking-tight leading-tight">
                Sound familiar? Here's what I build.
              </h3>
            </div>
            <a
              href="#services"
              className="mt-8 self-start inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wider border-b border-white/50 pb-1 hover:border-white transition-colors"
              style={{ fontWeight: 600 }}
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
