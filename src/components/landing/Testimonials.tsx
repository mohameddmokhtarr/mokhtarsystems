const quotes = [
  {
    quote:
      "Within a month, our reach exploded. The system feels less like marketing and more like compounding interest.",
    name: "Sara K.",
    title: "Founder, Consumer Brand",
  },
  {
    quote:
      "First viral reel in week two. We stopped guessing and started shipping content that worked.",
    name: "Noor A.",
    title: "Marketing Lead, F&B",
  },
  {
    quote:
      "We were posting consistently but getting nothing. Within 3 weeks the system gave us clarity on what to post and why. Engagement tripled.",
    name: "Layla M.",
    title: "Brand Manager, Fashion Brand",
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
