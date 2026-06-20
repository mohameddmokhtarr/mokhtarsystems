const concepts = [
  {
    id: "maison-noir",
    title: "Maison Noir",
    category: "Luxury Fashion",
    tagline: "The absence of color is not the absence of statement.",
    image: "/ai-visuals/shot-15.jpg",
  },
  {
    id: "blanche",
    title: "Blanche",
    category: "Minimal Clothing",
    tagline: "Everything reduced. Nothing removed.",
    image: "/ai-visuals/shot-07.png",
  },
  {
    id: "sol",
    title: "Sol",
    category: "Summer Collection",
    tagline: "Dressed for light. Made for movement.",
    image: "/ai-visuals/shot-37.jpg",
  },
  {
    id: "azur",
    title: "Azur",
    category: "Resort Collection",
    tagline: "Where the water ends and the wardrobe begins.",
    image: "/ai-visuals/shot-25.jpg",
  },
  {
    id: "forme",
    title: "Forme",
    category: "Contemporary Clothing",
    tagline: "Shape is the first language.",
    image: "/ai-visuals/shot-35.png",
  },
  {
    id: "bloom",
    title: "Bloom",
    category: "Printed Collection",
    tagline: "Bold enough to be the whole mood.",
    image: "/ai-visuals/shot-32.png",
  },
];

const ConceptLab = () => {
  return (
    <section id="concept-lab" className="py-28 sm:py-40 border-t border-white/[0.05] bg-[#0A0A0A]">
      <div className="container">
        <div className="reveal mb-5">
          <span className="text-[9px] font-mono tracking-[4px] uppercase text-[#E05A2B]">
            Self-Initiated
          </span>
        </div>
        <h2 className="reveal font-display text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-white">
          Concept <span className="italic-serif">Lab</span>
        </h2>
        <p className="reveal mt-5 max-w-xl text-[#555] text-sm sm:text-base leading-relaxed mb-16 sm:mb-20">
          Fictional campaigns built to explore creative territory. Every concept is treated as a real commercial brief.
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
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/0 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/35" />

              {/* content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <div className="text-[8.5px] font-mono tracking-[3.5px] uppercase text-[#E05A2B] mb-2">
                  {concept.category}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
                  {concept.title}
                </h3>
                <p className="mt-2.5 text-xs text-white/45 leading-relaxed opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out">
                  {concept.tagline}
                </p>
              </div>

              {/* corner accent */}
              <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptLab;
