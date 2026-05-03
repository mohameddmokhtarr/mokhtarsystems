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
            className="ig-gradient font-display uppercase tracking-tight text-lg font-black"
          >
            @mokhtarsays_
          </a>
          <div className="hidden md:block text-center font-bold uppercase tracking-widest text-xs text-[#8A7060]">
            AI Systems Implementation.
          </div>
          <div className="flex justify-end items-center gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Instagram"
              className="ig-icon-wrap"
            >
              <Instagram size={18} strokeWidth={2.4} />
            </a>
          </div>
        </div>
        <div className="md:hidden mt-6 text-center font-bold uppercase tracking-widest text-xs text-[#8A7060]">
          AI Systems Implementation.
        </div>
        <div className="mt-8 pt-6 border-t-2 border-dashed border-[#2A1F18]/20 text-xs text-[#8A7060] text-center">
          © {new Date().getFullYear()} @mokhtarsays_. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
