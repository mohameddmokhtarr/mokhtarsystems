import { useReveal } from "@/hooks/use-reveal";
import { Sparkles } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Booking from "@/components/landing/Booking";

const studioShots = [
  "/ai-visuals/shot-02.png",
  "/ai-visuals/shot-03.png",
  "/ai-visuals/shot-04.png",
  "/ai-visuals/shot-05.png",
];

const editorialShots = [
  "/ai-visuals/shot-06.png",
  "/ai-visuals/shot-07.png",
  "/ai-visuals/shot-08.png",
  "/ai-visuals/shot-09.png",
  "/ai-visuals/shot-10.png",
];

const editorialVideos = [
  "/ai-visuals/video-01.mp4",
  "/ai-visuals/video-02.mp4",
];

const portfolioShots = [
  "/ai-visuals/shot-11.jpg",
  "/ai-visuals/shot-12.jpg",
  "/ai-visuals/shot-13.jpg",
  "/ai-visuals/shot-14.jpg",
  "/ai-visuals/shot-15.jpg",
  "/ai-visuals/shot-16.jpg",
  "/ai-visuals/shot-17.jpg",
  "/ai-visuals/shot-18.jpg",
  "/ai-visuals/shot-19.jpg",
  "/ai-visuals/shot-20.jpg",
  "/ai-visuals/shot-21.jpg",
  "/ai-visuals/shot-22.jpg",
  "/ai-visuals/shot-23.jpg",
  "/ai-visuals/shot-24.jpg",
  "/ai-visuals/shot-25.jpg",
  "/ai-visuals/shot-26.jpg",
  "/ai-visuals/shot-27.jpg",
  "/ai-visuals/shot-28.jpg",
  "/ai-visuals/shot-29.jpg",
  "/ai-visuals/shot-30.jpg",
  "/ai-visuals/shot-31.jpg",
];

const portfolioVideos = [
  "/ai-visuals/video-03.mp4",
  "/ai-visuals/video-04.mp4",
  "/ai-visuals/video-05.mp4",
];

const AiVisuals = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8E4DF]">
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section
          id="top"
          className="relative min-h-[80vh] flex items-end overflow-hidden bg-[#0A0A0A]"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/ai-visuals/shot-01.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.25) 100%)",
            }}
          />
          <div className="container relative pt-40 pb-20">
            <div className="reveal inline-block">
              <div
                className="hero-badge glass"
                style={{ boxShadow: "0 0 20px rgba(224,90,43,0.2), 0 0 0 1px rgba(255,255,255,0.03) inset" }}
              >
                <Sparkles size={18} className="hero-badge-icon" />
                AI Visuals
              </div>
            </div>
            <h1 className="reveal mt-6 font-display text-[3rem] sm:text-[5rem] lg:text-[7rem] leading-[0.9] tracking-tight uppercase text-white">
              AI <span className="italic-serif">Visuals</span>
            </h1>
            <p className="reveal mt-6 max-w-2xl text-base sm:text-lg text-[#cfcac4] leading-relaxed font-sans">
              Photorealistic AI-generated photography for fashion and product brands — no shoots, no logistics, no waiting.
            </p>
            <div className="reveal mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="/#book" className="btn-salmon text-center">✦ Book a Call</a>
            </div>
          </div>
        </section>

        {/* ── Studio & E-commerce ── */}
        <section className="py-28 sm:py-36 border-t-2 border-[#1A1512] bg-dot-grid">
          <div className="container">
            <div className="reveal mb-6">
              <span className="tag">Studio & E-commerce</span>
            </div>
            <h2 className="reveal font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.9] text-[#2A1F18]">
              Clean, <span className="italic-serif">consistent</span> product shots.
            </h2>
            <p className="reveal mt-6 max-w-2xl text-[#3D2E22] leading-relaxed">
              White-background studio and e-commerce imagery generated on demand — perfectly lit, on-model, and ready for your storefront.
            </p>
            <div className="reveal mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
              {studioShots.map((src) => (
                <div
                  key={src}
                  className="card-light overflow-hidden p-0 aspect-[3/4]"
                >
                  <img
                    src={src}
                    alt="AI-generated studio product shot"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Editorial & Campaign ── */}
        <section className="py-28 sm:py-36 border-t-2 border-[#1A1512] bg-dot-grid">
          <div className="container">
            <div className="reveal mb-6">
              <span className="tag">Editorial & Campaign</span>
            </div>
            <h2 className="reveal font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.9] text-[#2A1F18]">
              Campaigns with <span className="italic-serif">atmosphere</span>.
            </h2>
            <p className="reveal mt-6 max-w-2xl text-[#3D2E22] leading-relaxed">
              Lifestyle and editorial imagery shot on location — without the location. Build a full campaign world in days, not months.
            </p>
            <div className="reveal mt-14 grid grid-cols-2 lg:grid-cols-3 gap-5">
              {editorialShots.map((src) => (
                <div
                  key={src}
                  className="card-light overflow-hidden p-0 aspect-[3/4]"
                >
                  <img
                    src={src}
                    alt="AI-generated editorial campaign shot"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {editorialVideos.map((src) => (
                <div
                  key={src}
                  className="card-light overflow-hidden p-0 aspect-[3/4]"
                >
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Full Portfolio ── */}
        <section className="py-28 sm:py-36 border-t-2 border-[#1A1512] bg-dot-grid">
          <div className="container">
            <div className="reveal mb-6">
              <span className="tag">Full Portfolio</span>
            </div>
            <h2 className="reveal font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.9] text-[#2A1F18]">
              More <span className="italic-serif">work</span>.
            </h2>
            <p className="reveal mt-6 max-w-2xl text-[#3D2E22] leading-relaxed">
              A broader look at what's possible — fashion, product, editorial, and motion.
            </p>
            <div className="reveal mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {portfolioShots.map((src) => (
                <div key={src} className="card-light overflow-hidden p-0 aspect-[3/4]">
                  <img
                    src={src}
                    alt="AI-generated visual"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="reveal mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {portfolioVideos.map((src) => (
                <div key={src} className="card-light overflow-hidden p-0 aspect-[9/16] sm:aspect-[3/4]">
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default AiVisuals;