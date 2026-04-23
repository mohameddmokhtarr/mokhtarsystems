import founderImg from "@/assets/founder.jpg";

const Founder = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-border">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-card">
            <img
              src={founderImg}
              alt="Mokhtar — content strategist and founder"
              loading="lazy"
              width={800}
              height={1024}
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 blur-3xl rounded-full -z-10" />
        </div>

        <div className="reveal">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            The Builder.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            This system was built by Mokhtar — a content strategist obsessed
            with one thing: brands that actually grow. We don't sell posts. We
            build leverage.
          </p>
          <p className="mt-8 text-xl sm:text-2xl font-bold italic leading-snug border-l-2 border-primary pl-6">
            Most agencies sell hours. We build systems. That's the difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;