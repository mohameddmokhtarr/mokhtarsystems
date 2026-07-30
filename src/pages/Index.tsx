import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import OrbitalDiagram from "@/components/landing/OrbitalDiagram";
import FeaturedCampaigns from "@/components/landing/FeaturedCampaigns";
import TheStudio from "@/components/landing/TheStudio";
import Capabilities from "@/components/landing/Capabilities";
import Process from "@/components/landing/Process";
import StudioNumbers from "@/components/landing/StudioNumbers";
import Philosophy from "@/components/landing/Philosophy";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import ProjectModal from "@/components/ProjectModal";
import type { Project } from "@/data/projects";

const Index = () => {
  useReveal();
  const [modal, setModal] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />

        {/* Brand orbit — right below the hero */}
        <section className="border-t border-[#ECECEC] py-12 sm:py-32">
          <div className="container flex flex-col items-center text-center">
            <div className="reveal w-full max-w-[480px]">
              <OrbitalDiagram />
              {/* Mobile service labels — shown only when SVG labels are hidden */}
              <div className="sm:hidden mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
                {["Creative Strategy","Creative Direction","AI Production","Websites Built"].map((s) => (
                  <span key={s} className="text-[9px] font-mono tracking-[2px] uppercase text-[#707070] text-center">{s}</span>
                ))}
              </div>
            </div>
            <div className="reveal mt-8" style={{ transitionDelay: "0.1s" }}>
              <h2
                className="font-display uppercase text-[#0A0A0A] leading-[0.92] tracking-tight"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
              >
                Everything revolves around brand.
              </h2>
              <p className="mt-4 text-sm text-[#707070] leading-relaxed max-w-sm mx-auto">
                Creative strategy, direction, AI production, websites. Each discipline built to serve the brand at the center.
              </p>
            </div>
          </div>
        </section>

        <FeaturedCampaigns onOpen={setModal} />
        <TheStudio />
        <Capabilities />
        <Process />
        <StudioNumbers />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={modal} onClose={() => setModal(null)} />
    </div>
  );
};

export default Index;
