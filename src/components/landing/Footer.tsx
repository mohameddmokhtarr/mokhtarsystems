import { Instagram } from "lucide-react";

const Footer = () => {
  const instagramUrl = "https://www.instagram.com/mokhtarsays_/";
  return (
    <footer className="border-t-2 border-[#1A1512] py-10 bg-dot-grid">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-6 text-sm">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="ig-handle ig-handle-light"
          >
            <Instagram size={14} strokeWidth={2} />
            <span className="ig-dot" />
            <span>mokhtarsays_</span>
          </a>
          <div className="hidden md:block text-center font-bold uppercase tracking-widest text-xs text-[#8A7060]">
            AI Content Systems & Visuals.
          </div>
          <div className="flex justify-end items-center">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Instagram"
              className="inline-flex items-center justify-center w-10 h-10 border-[1.5px] border-[#1A1512]/25 text-[#1A1512] rounded-full hover:border-[#1A1512] hover:bg-[#1A1512]/5 transition-colors"
            >
              <Instagram size={16} strokeWidth={2} />
            </a>
          </div>
        </div>
        <div className="md:hidden mt-6 text-center font-bold uppercase tracking-widest text-xs text-[#8A7060]">
          AI Content Systems & Visuals.
        </div>
        <div className="mt-8 pt-6 border-t-2 border-dashed border-[#2A1F18]/20 text-xs text-[#8A7060] text-center">
          © {new Date().getFullYear()} @mokhtarsays_. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
