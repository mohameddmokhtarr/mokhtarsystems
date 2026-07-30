import { Link } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/use-document-title";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const NotFound = () => {
  useDocumentTitle("Page Not Found");

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0A0A0A]">
      <Navbar />
      <main className="flex-1 flex items-center">
        <div className="container py-32 sm:py-48">
          <span className="text-xs font-mono tracking-widest uppercase text-[#707070]">
            404
          </span>
          <h1
            className="mt-5 font-display uppercase leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 10vw, 8rem)", letterSpacing: "-0.04em" }}
          >
            Page Not<br />Found
          </h1>
          <p className="mt-8 max-w-sm text-sm text-[#707070] leading-relaxed">
            This page doesn't exist. The work is where it should be.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8">
            <Link
              to="/"
              className="hover-line w-fit text-sm text-[#0A0A0A] font-medium"
            >
              Back to Home →
            </Link>
            <Link
              to="/work"
              className="hover-line w-fit text-sm text-[#707070] hover:text-[#0A0A0A] transition-colors"
            >
              Selected Work →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
