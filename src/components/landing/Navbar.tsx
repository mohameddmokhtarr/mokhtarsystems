import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Approach", href: "#solution" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#book" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10,10,10,0.7)] backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 py-3 items-center justify-between">
        <a
          href="https://www.instagram.com/mokhtarsays_/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/[0.04] backdrop-blur-md hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover:text-white transition-colors">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
          <span className="font-mono text-[11px] tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">mokhtarsays_</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-xs font-600 uppercase tracking-wider text-white/55 hover:text-white transition-colors"
              style={{ fontWeight: 600 }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#book"
            className="btn-salmon"
            style={{ padding: "10px 20px", fontSize: "12px" }}
          >
            Book a Call
          </a>
        </div>

        <button
          className="md:hidden text-white border border-white/20 p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/[0.08] bg-[rgba(10,10,10,0.98)] backdrop-blur-md">
          <div className="container py-5 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-xs font-600 uppercase tracking-wider text-white/55 hover:text-white"
                style={{ fontWeight: 600 }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="btn-salmon text-center"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
