import OrbitalDiagram from "./OrbitalDiagram";

const Manifesto = () => {
  return (
    <section className="py-28 sm:py-40 bg-diag border-t-2 border-[#1A1512]">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="reveal font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#FAF7F2]">
            Building growth{" "}
            <span className="italic-serif">systems</span>{" "}
            beyond the obvious.
          </h2>
          <p className="reveal mt-8 max-w-lg text-lg text-[#FAF7F2]/65 leading-relaxed">
            The old way is disconnected tools and random posting. We wire your content and visuals into one AI-powered system that runs without you.
          </p>
        </div>

        <div className="reveal flex items-center justify-center lg:justify-end">
          <OrbitalDiagram light={false} />
        </div>

      </div>
    </section>
  );
};

export default Manifesto;
