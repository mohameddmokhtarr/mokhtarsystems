const quotes = [
  {
    quote:
      "Before this, I was spending 3 hours a day just figuring out what to post. Mokhtar built a full content pipeline: research, captions, scheduling, all automated. I went from 2 posts a week to 14, and my engagement rate actually went up.",
    name: "Yasmine Tarek",
    title: "Founder, Skincare Brand",
  },
  {
    quote:
      "We were spending thousands on product shoots and still waiting two weeks for edited files. Mokhtar delivered a full AI Visuals shoot: 40+ images, consistent lighting, our exact brand palette, all in 48 hours. The quality stopped our audience mid-scroll.",
    name: "Sara El-Din",
    title: "Founder, Modest Fashion Label",
  },
  {
    quote:
      "Our content team was briefing, writing, and posting manually. The whole cycle took five days per piece. Now it takes two hours, and the output is more consistent. The system Mokhtar built understands our brand voice and holds it across every platform.",
    name: "Lina Haddad",
    title: "Marketing Director, Lifestyle Brand",
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
              className="reveal glass glass-highlight p-5 sm:p-7 flex flex-col"
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

        <div className="reveal mt-14 text-center">
          <p className="text-[#666] text-sm mb-6">Ready to see results like these?</p>
          <a href="#book" className="btn-salmon">Start a Project</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
