import { useReveal } from "@/hooks/use-reveal";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Services from "@/components/landing/Services";
import Benefits from "@/components/landing/Benefits";
import FAQ from "@/components/landing/FAQ";
import Booking from "@/components/landing/Booking";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Benefits />
        <FAQ />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
