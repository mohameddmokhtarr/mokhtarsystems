import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
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
  useScrollToHash();
  const [modal, setModal] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />

        {/* Brand orbit — right below the hero */}
        <section className="border-t border-[#ECECEC] pt-8 pb-12 sm:pt-16 sm:pb-28">
          <div className="container flex flex-col items-center text-center">
            <div className="reveal w-full max-w-[520px]">
              <OrbitalDiagram />
            </div>
            <div className="reveal mt-8" style={{ transitionDelay: "0.1s" }}>
              <h2
                className="font-display uppercase text-[#0A0A0A] leading-[0.92] tracking-tight"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}
              >
                Everything revolves around brand.
              </h2>
              <p className="mt-4 text-sm text-[#707070] leading-relaxed max-w-sm mx-auto">
                Strategy defines it. Direction expresses it. Production proves it. The website carries it.
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
