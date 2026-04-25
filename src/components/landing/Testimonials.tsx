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
    <section className="py-20 sm:py-28 border-t border-border">
      <div className="container">
        <h2 className="reveal text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight max-w-4xl">
          What the Work <span className="text-muted-foreground">Changed.</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="reveal rounded-2xl border border-border bg-card p-8 flex flex-col"
            >
              <div className="text-primary text-4xl font-black leading-none">"</div>
              <blockquote className="mt-2 text-base sm:text-lg leading-relaxed flex-1">
                {q.quote}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-semibold">{q.name}</div>
                <div className="text-sm text-muted-foreground">{q.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;