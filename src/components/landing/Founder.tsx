import founderImg from "@/assets/founder.jpg";

const Founder = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-t-2 border-[#1A1512] bg-dot-grid">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#1A1512] card-light">
            <img
              src={founderImg}
              alt="Mokhtar — builder and founder"
              loading="lazy"
              width={800}
              height={1024}
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#E8896A]/20 blur-3xl rounded-full -z-10" />
        </div>

        <div className="reveal">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#2A1F18]">
            The Builder.
          </h2>
          <p className="mt-6 text-lg text-[#3D2E22] leading-relaxed">
            I'm Mokhtar — a builder obsessed with one thing: brands that actually grow. I build AI content systems that replace manual content work, and AI-generated visuals that replace expensive, slow photoshoots. I don't sell posts or hours. I build the infrastructure that runs without you.
          </p>
          <p className="mt-8 text-xl sm:text-2xl font-bold italic leading-snug border-l-4 border-[#E8896A] pl-6 text-[#2A1F18]">
            Most agencies sell hours. I build systems. That's the difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
