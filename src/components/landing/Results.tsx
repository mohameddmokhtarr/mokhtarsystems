const items = [
  { tag: "Consumer Brand", text: "+340% Instagram reach in 3 weeks" },
  { tag: "Personal Brand", text: "120K views in under 12 hours" },
  { tag: "F&B Brand", text: "180K views on the first viral reel" },
];

const Card = ({ tag, text }: { tag: string; text: string }) => (
  <div className="shrink-0 w-[320px] sm:w-[420px] mx-3 rounded-2xl border border-border bg-card p-8">
    <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
      {tag}
    </div>
    <div className="mt-4 text-2xl sm:text-3xl font-bold leading-tight">
      {text}
    </div>
  </div>
);

const Results = () => {
  const loop = [...items, ...items, ...items];
  return (
    <section id="results" className="py-20 sm:py-28 border-t border-border">
      <div className="container">
        <h2 className="reveal text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-balance max-w-4xl">
          Results First. <span className="text-muted-foreground">Talk Later.</span>
        </h2>
      </div>

      <div className="reveal mt-16 relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2">
          {loop.map((it, i) => (
            <div key={i} className="snap-center">
              <Card {...it} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;