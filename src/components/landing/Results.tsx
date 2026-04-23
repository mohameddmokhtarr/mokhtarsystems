const items = [
  { tag: "Consumer Brand", text: "+340% Instagram reach in 3 weeks" },
  { tag: "Personal Brand", text: "120K views in under 12 hours" },
  { tag: "F&B Brand", text: "180K views on the first viral reel" },
];

const Card = ({ tag, text }: { tag: string; text: string }) => (
  <div className="w-[320px] sm:w-[420px] rounded-2xl border border-border bg-card p-8">
    <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
      {tag}
    </div>
    <div className="mt-4 text-2xl sm:text-3xl font-bold leading-tight">
      {text}
    </div>
  </div>
);

const Results = () => {
  return (
    <section id="results" className="py-20 sm:py-28 border-t border-border">
      <div className="container">
        <h2 className="reveal text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-balance max-w-4xl">
          Results First. <span className="text-muted-foreground">Talk Later.</span>
        </h2>

        <div className="reveal mt-16 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing">
          <div className="flex w-max gap-6 pb-2 pr-6 sm:pr-0">
            {items.map((it) => (
              <div key={it.tag} className="snap-center">
                <Card {...it} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;