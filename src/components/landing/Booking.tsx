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
    <section id="book" className="py-20 sm:py-32 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal inline-flex items-center rounded-full bg-[#FF6B00] px-4 py-1.5 text-xs font-semibold text-white tracking-wide mb-6">
            Currently taking on 4 new businesses this quarter
          </div>
          <h2 className="reveal text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-balance">
            Let's see if it fits<span className="text-primary">.</span>
          </h2>
          <p className="reveal mt-6 text-lg text-muted-foreground">
            A 30-minute call. We look at your workflows, identify where AI removes the most manual work, and tell you honestly if there's a fit.
          </p>
        </div>

        <div className="reveal mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
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