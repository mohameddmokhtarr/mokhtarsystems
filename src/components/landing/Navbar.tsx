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
          ? "bg-[#F5F0E8]/90 backdrop-blur-xl border-b-2 border-[#1A1512]"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex h-18 py-3 items-center justify-between">
        <a
          href="https://www.instagram.com/mokhtarsays_/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display font-black text-lg sm:text-xl bg-gradient-to-r from-[#C45A38] via-[#F5B89A] to-[#C45A38] bg-clip-text text-transparent bg-[length:300%_auto] animate-shimmer inline-block px-4 py-2 border-2 border-[#E8896A] rounded-full bg-[#F5F0E8] shadow-[0_0_14px_rgba(232,137,106,0.35)] hover:shadow-[0_0_22px_rgba(232,137,106,0.6)] hover:scale-105 transition-all"
        >
          mokhtarsays_
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-bold uppercase tracking-wider text-[#2A1F18]/70 hover:text-[#E8896A] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#book" className="btn-salmon" style={{ padding: "9px 22px", fontSize: "13px" }}>
            Book a Call
          </a>
        </div>

        <button
          className="md:hidden text-[#2A1F18] border-2 border-[#1A1512] rounded-full p-2 bg-[#F5F0E8]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t-2 border-[#1A1512] bg-[#F5F0E8]/95 backdrop-blur-xl">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-[#2A1F18]/70 hover:text-[#E8896A]"
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
