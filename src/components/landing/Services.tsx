import { Link } from "react-router-dom";

const services = [
  {
    n: "01",
    title: "AI Content Systems",
    desc: "A structured content production pipeline built around your brand's voice, channels, and output requirements — not generic templates.",
    bullets: [
      "Brand voice and content brief",
      "Production pipeline by channel",
      "Review and approval structure",
      "Consistent output at volume",
    ],
    examples:
      "Examples: Content systems for fashion and lifestyle brands, editorial pipelines for agencies, campaign brief-to-asset workflows for product launches.",
  },
  {
    n: "02",
    title: "AI Visuals",
    desc: "Campaign-quality AI-generated imagery: fashion, product, and editorial. Full creative direction, then production. No model booking. No location. No waiting weeks.",
    bullets: [
      "Studio & e-commerce product shots",
      "Editorial and campaign imagery",
      "Multiple angles and variations",
      "Delivered ready to publish",
    ],
    href: "/ai-visuals",
  },
];

const Services = () => {
  return (
    <section id="services" className="pt-28 sm:pt-40 pb-28 sm:pb-40 border-t-2 border-[#1A1512] bg-dot-grid">
      <div className="container">
        <div className="reveal mb-6">
          <span className="tag">What I Do</span>
        </div>
        <h2 className="reveal font-display text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] text-[#2A1F18]">
          <span className="bg-[#E8896A] text-white border-2 border-[#1A1512] px-3 inline-block shadow-brutal -rotate-1">Services</span>
        </h2>

        <div className="mt-20 grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((s, i) => (
            <div
              key={s.n}
              className={`reveal card-light p-8 sm:p-10 ${i === 1 ? "md:translate-y-8" : ""}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F5B89A] text-[#2A1F18] border-2 border-[#1A1512] font-display text-lg">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-3xl sm:text-4xl uppercase leading-[0.95] tracking-tight text-[#2A1F18]">
                {s.title}
              </h3>
              <p className="mt-4 text-[#3D2E22] leading-relaxed">
                {s.desc}
              </p>
              <ul className="mt-6 space-y-2.5 text-[#2A1F18]">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#E8896A] shrink-0" />
                    <span className="font-bold">{b}</span>
                  </li>
                ))}
              </ul>
              {s.href && (
                <Link
                  to={s.href}
                  className="mt-8 inline-flex items-center gap-2 bg-[#E8896A] text-white border-2 border-[#1A1512] px-5 py-3 font-display text-sm uppercase tracking-wide shadow-brutal hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg transition-all"
                >
                  Explore AI Visuals →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
