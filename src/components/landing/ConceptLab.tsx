const concepts = [
  {
    id: "maison-noir",
    title: "Maison Noir",
    category: "Luxury Fashion",
    goal: "Awareness",
    audience: "Luxury fashion buyers",
    idea: "Black as a brand statement, not a neutral",
    execution: "High-contrast studio, signature top-light",
    image: "/ai-visuals/shot-15.jpg",
  },
  {
    id: "blanche",
    title: "Blanche",
    category: "Minimal Clothing",
    goal: "Collection Launch",
    audience: "Minimal fashion market",
    idea: "Reduction as the highest form of styling",
    execution: "White studio with controlled shadow play",
    image: "/ai-visuals/shot-07.png",
  },
  {
    id: "sol",
    title: "Sol",
    category: "Summer Collection",
    goal: "Seasonal Sales",
    audience: "Resort and leisure market",
    idea: "Mediterranean light as the art director",
    execution: "Infinity pool editorial, golden hour",
    image: "/ai-visuals/shot-37.jpg",
  },
  {
    id: "azur",
    title: "Azur",
    category: "Resort Collection",
    goal: "Awareness",
    audience: "Luxury resort buyers",
    idea: "Geography as wardrobe. The Cote d'Azur reference.",
    execution: "Poolside and terrace location campaign",
    image: "/ai-visuals/shot-25.jpg",
  },
  {
    id: "forme",
    title: "Forme",
    category: "Contemporary Clothing",
    goal: "Collection Launch",
    audience: "Contemporary women's fashion",
    idea: "Silhouette before styling. Shape as the statement.",
    execution: "Architectural studio, clean angles",
    image: "/ai-visuals/shot-35.png",
  },
  {
    id: "bloom",
    title: "Bloom",
    category: "Printed Collection",
    goal: "Seasonal Sales",
    audience: "Print and pattern buyers",
    idea: "The print is the entire brand voice",
    execution: "White background, print-dominant framing",
    image: "/ai-visuals/shot-32.png",
  },
];

const goalStyle: Record<string, string> = {
  "Awareness":         "text-white/40 border-white/20",
  "Collection Launch": "text-[#E05A2B]/70 border-[#E05A2B]/30",
  "Seasonal Sales":    "text-emerald-400/60 border-emerald-400/25",
};

const ConceptLab = () => {
  return (
    <section id="campaign-simulation" className="py-28 sm:py-40 border-t border-white/[0.05] bg-[#0A0A0A]">
      <div className="container">
        <div className="reveal mb-5">
          <span className="text-[9px] font-mono tracking-[4px] uppercase text-[#E05A2B]">
            Campaign Direction
          </span>
        </div>
        <h2 className="reveal font-display text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-white">
          Campaign <span className="italic-serif">Simulation</span>
        </h2>
        <p className="reveal mt-5 max-w-xl text-[#555] text-sm sm:text-base leading-relaxed mb-16 sm:mb-20">
          Self-initiated campaigns built to real commercial briefs. Each starts with a goal, an audience, and a creative idea before a single image is produced.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {concepts.map((concept, i) => (
            <div
              key={concept.id}
              className="reveal concept-card group relative overflow-hidden aspect-[3/4]"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <img
                src={concept.image}
                alt={concept.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-all duration-500 group-hover:via-black/75" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                  <span className="text-[8.5px] font-mono tracking-[3.5px] uppercase text-[#E05A2B]">
                    {concept.category}
                  </span>
                  <span className={`text-[8px] font-mono tracking-[2px] uppercase border px-1.5 py-0.5 ${goalStyle[concept.goal] ?? "text-white/40 border-white/20"}`}>
                    {concept.goal}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
                  {concept.title}
                </h3>

                <div className="mt-3 space-y-1.5 opacity-100 sm:opacity-0 sm:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out">
                  {[
                    { label: "Audience", value: concept.audience },
                    { label: "Idea", value: concept.idea },
                    { label: "Execution", value: concept.execution },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex gap-2 text-[10px] leading-relaxed">
                      <span className="text-white/25 font-mono uppercase tracking-widest shrink-0 w-[58px]">
                        {label}
                      </span>
                      <span className="text-white/55">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="reveal mt-16 flex flex-col items-center gap-4 border-t border-white/[0.05] pt-12">
          <p className="text-[#555] text-sm">Want a campaign like this built for your brand?</p>
          <a href="#book" className="btn-salmon">Book a Call</a>
        </div>
      </div>
    </section>
  );
};

export default ConceptLab;
