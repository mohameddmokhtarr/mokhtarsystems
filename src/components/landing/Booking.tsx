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
    <section id="book" className="py-28 sm:py-40 border-t-2 border-[#1A1512] relative overflow-hidden bg-diag salmon-glow">
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal inline-flex items-center mb-6">
            <span className="tag" style={{ borderColor: 'var(--salmon-light)', color: 'var(--salmon-light)' }}>
              Currently taking on 4 new businesses this quarter
            </span>
          </div>
          <h2 className="reveal font-display text-4xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-balance leading-[0.9] text-[#F5F0E8]">
            Book a Free <span className="bg-[#E8896A] text-white border-2 border-[#F5B89A] px-3 inline-block shadow-brutal -rotate-1">Discovery</span> Call
          </h2>
          <p className="reveal mt-8 text-lg sm:text-xl text-[#F5F0E8]/75">
            A 30-minute call. I look at your content and visual production, identify where AI removes the most manual work and cost, and tell you honestly if there's a fit.
          </p>
        </div>

        <div className="reveal mt-20 max-w-4xl mx-auto">
          <div className="card-dark overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
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
