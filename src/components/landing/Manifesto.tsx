import OrbitalDiagram from "./OrbitalDiagram";

const Manifesto = () => {
  return (
    <section className="py-28 sm:py-40 bg-diag border-t-2 border-[#1A1512]">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="reveal font-display text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#FAF7F2]">
            AI visuals built on{" "}
            <span className="italic-serif">creative</span>{" "}
            direction.
          </h2>
          <p className="reveal mt-8 max-w-lg text-lg text-[#FAF7F2]/65 leading-relaxed">
            Generating AI content without a brief produces output that looks like everyone else's. I start with the idea, the audience, and the visual language — then build the system around it.
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
