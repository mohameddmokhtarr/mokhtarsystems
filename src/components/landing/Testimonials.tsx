const quotes = [
  {
    quote:
      "Before this, I was spending 3 hours a day just figuring out what to post. Mokhtar built a full content pipeline — research, captions, scheduling — all automated. I went from 2 posts a week to 14, and my engagement rate actually went up.",
    name: "Yasmine Tarek",
    title: "Founder, Skincare Brand",
  },
  {
    quote:
      "My team was drowning in repeated tasks — onboarding, follow-ups, status updates. Mokhtar mapped every process and automated the ones eating our time. We recovered 11 hours a week within the first month.",
    name: "Karim Mansour",
    title: "CEO, Digital Services Agency",
  },
  {
    quote:
      "I had content scattered everywhere with no consistency. Mokhtar built a content system that runs automatically — every week the right posts go out, on-brand and on-time. I finally know it's handled.",
    name: "Nadia Saleh",
    title: "Head of Growth, E-commerce Brand",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0A]">
      <div className="container">
        <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight max-w-4xl text-white">
          What the Work <span className="text-[#888580]">Changed.</span>
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="reveal glass glass-highlight p-6 flex flex-col"
            >
              <div className="text-[#E05A2B] text-4xl font-display leading-none">"</div>
              <blockquote className="mt-2 text-sm sm:text-base leading-relaxed flex-1 text-white/80 font-sans">
                {q.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/[0.07]">
                <div className="font-sans font-bold text-white" style={{ fontWeight: 700 }}>{q.name}</div>
                <div className="text-sm text-[#666] font-sans">{q.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
