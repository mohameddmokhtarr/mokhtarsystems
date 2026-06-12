const items = [
  { tag: "Consumer Brand", text: "+180% Instagram growth in 4 weeks" },
  { tag: "Personal Brand", text: "65K organic views in under 24 hours" },
  { tag: "F&B Brand", text: "90K views on the first viral reel" },
  { tag: "AI Visuals", text: "40+ campaign images delivered in 48 hours — no shoot" },
];

const Card = ({ tag, text }: { tag: string; text: string }) => (
  <div className="shrink-0 w-[320px] sm:w-[420px] mx-3 card-light p-8">
    <div className="tag">{tag}</div>
    <div className="mt-4 text-2xl sm:text-3xl font-display uppercase leading-tight text-[#2A1F18]">
      {text}
    </div>
  </div>
);

const Results = () => {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <section id="results" className="py-20 sm:py-28 border-t-2 border-[#1A1512] bg-dot-grid">
      <div className="container">
        <h2 className="reveal font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-balance max-w-4xl text-[#2A1F18]">
          Results First. <span className="text-[#3D2E22]">Talk Later.</span>
        </h2>
      </div>

      <div className="reveal mt-16 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#F5F0E8] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#F5F0E8] to-transparent pointer-events-none" />
        <div className="flex marquee w-max">
          {loop.map((it, i) => (
            <Card key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
