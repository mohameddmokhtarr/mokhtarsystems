import { useEffect } from "react";

const Booking = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book" className="py-28 sm:py-40 border-t-2 border-ink relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal inline-flex items-center rounded-full border-2 border-ink bg-primary text-primary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-brutal mb-6">
            Currently taking on 4 new businesses this quarter
          </div>
          <h2 className="reveal font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-balance leading-[0.9]">
            Let's see if it <span className="bg-accent border-2 border-ink px-3 inline-block shadow-brutal -rotate-1">fits</span>.
          </h2>
          <p className="reveal mt-8 text-lg sm:text-xl text-foreground/75">
            A 30-minute call. We look at your workflows, identify where AI removes the most manual work, and tell you honestly if there's a fit.
          </p>
        </div>

        <div className="reveal mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl border-2 border-ink bg-card overflow-hidden shadow-brutal-lg">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/meetingwithmokhtar/discoverycallwithmokhtar"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;