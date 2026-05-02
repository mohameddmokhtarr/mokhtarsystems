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
      "I had data everywhere but no clear picture of what was working. Mokhtar built a reporting system that pulls everything together automatically — every Monday I get a clean summary of what moved and what didn't. I finally know where to focus.",
    name: "Nadia Saleh",
    title: "Head of Growth, E-commerce Brand",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 sm:py-28 border-t-2 border-[#1A1512] bg-dot-grid">
      <div className="container">
        <h2 className="reveal font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight max-w-4xl text-[#2A1F18]">
          What the Work <span className="text-[#8A7060]">Changed.</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="reveal card-light p-8 flex flex-col"
            >
              <div className="text-[#E8896A] text-4xl font-display leading-none">"</div>
              <blockquote className="mt-2 text-base sm:text-lg leading-relaxed flex-1 text-[#2A1F18]">
                {q.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-[#2A1F18]/10">
                <div className="font-bold text-[#2A1F18]">{q.name}</div>
                <div className="text-sm text-[#8A7060]">{q.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
