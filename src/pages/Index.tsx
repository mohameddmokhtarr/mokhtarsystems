import { useReveal } from "@/hooks/use-reveal";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PainPoints from "@/components/landing/PainPoints";
import LogoMarquee from "@/components/landing/LogoMarquee";
import Manifesto from "@/components/landing/Manifesto";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Services from "@/components/landing/Services";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Booking from "@/components/landing/Booking";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8E4DF]">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <LogoMarquee />
        <Manifesto />
        <Problem />
        <Solution />
        <Services />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
