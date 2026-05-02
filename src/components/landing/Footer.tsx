import { Instagram } from "lucide-react";

const Footer = () => {
  const instagramUrl = "https://www.instagram.com/mokhtarsays_/";
  return (
    <footer className="border-t-2 border-ink py-10 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-6 text-sm">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="font-display uppercase tracking-tight text-base hover:text-primary transition-colors"
          >
            @mokhtarsays_
          </a>
          <div className="hidden md:block text-center font-bold uppercase tracking-widest text-xs text-foreground/70">
            AI Systems Implementation.
          </div>
          <div className="flex justify-end">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-xs border-2 border-ink rounded-full px-3 py-1.5 bg-card shadow-brutal hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal-lg transition-all"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="md:hidden mt-6 text-center font-bold uppercase tracking-widest text-xs text-foreground/70">
          AI Systems Implementation.
        </div>
        <div className="mt-8 pt-6 border-t-2 border-dashed border-ink/30 text-xs text-foreground/60 text-center">
          © {new Date().getFullYear()} @mokhtarsays_. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;