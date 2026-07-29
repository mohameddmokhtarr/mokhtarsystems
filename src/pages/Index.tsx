import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
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
