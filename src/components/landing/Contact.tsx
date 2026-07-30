const Contact = () => (
  <section id="contact" className="border-t border-[#ECECEC] py-16 sm:py-44">
    <div className="container">
      <div className="reveal mb-14">
        <span className="text-xs font-mono tracking-widest uppercase text-[#707070]">
          Contact
        </span>
      </div>

      <div className="reveal" style={{ transitionDelay: "0.1s" }}>
        <h2
          className="font-display uppercase text-[#0A0A0A] leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(2rem, 9vw, 10rem)", letterSpacing: "-0.04em" }}
        >
          Let's Build<br />
          Something<br />
          Worth<br />
          Remembering.
        </h2>
      </div>

      <div
        className="reveal mt-14 sm:mt-20 flex flex-col gap-4"
        style={{ transitionDelay: "0.2s" }}
      >
        <a
          href="https://www.instagram.com/mmohamedmokhtarr/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-line w-fit text-sm text-[#707070] hover:text-[#0A0A0A] transition-colors"
        >
          @mmohamedmokhtarr ↗
        </a>
        <a
          href="https://calendly.com/meetingwithmokhtar/discoverycallwithmokhtar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-line w-fit text-sm text-[#707070] hover:text-[#0A0A0A] transition-colors"
        >
          Book a Call ↗
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
