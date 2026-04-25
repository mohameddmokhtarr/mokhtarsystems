import { useReveal } from "@/hooks/use-reveal";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Results from "@/components/landing/Results";
import Services from "@/components/landing/Services";
import Founder from "@/components/landing/Founder";
import Testimonials from "@/components/landing/Testimonials";
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
        <Results />
        <Services />
        <Founder />
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
