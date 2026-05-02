import { useReveal } from "@/hooks/use-reveal";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
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
    <div className="min-h-screen bg-[#F5F0E8] text-[#2A1F18]">
      <Navbar />
      <main>
        <Hero />
        <div className="divider-line" />
        <Problem />
        <div className="divider-line" />
        <Solution />
        <div className="divider-line" />
        <Services />
        <div className="divider-line" />
        <Benefits />
        <div className="divider-line" />
        <Testimonials />
        <div className="divider-line" />
        <FAQ />
        <div className="divider-line" />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
