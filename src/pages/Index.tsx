import { useReveal } from "@/hooks/use-reveal";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import VideoSection from "@/components/landing/VideoSection";
import Results from "@/components/landing/Results";
import Services from "@/components/landing/Services";
import Founder from "@/components/landing/Founder";
import Testimonials from "@/components/landing/Testimonials";
import Booking from "@/components/landing/Booking";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <Results />
        <Services />
        <Founder />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
