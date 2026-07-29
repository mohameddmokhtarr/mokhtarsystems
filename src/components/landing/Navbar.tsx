import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work",         href: "/work" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact",      href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-[#ECECEC]"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <Link
          to="/"
          className="font-display text-[#0A0A0A] text-xs sm:text-sm tracking-[0.18em] uppercase"
        >
          Mokhtar Studio
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-[#707070] hover:text-[#0A0A0A] transition-colors tracking-widest uppercase font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#0A0A0A] p-1"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="menu-panel md:hidden border-t border-[#ECECEC] bg-white">
          <div className="container py-10 flex flex-col gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl uppercase text-[#0A0A0A] tracking-tight"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-xs font-mono text-[#707070] tracking-widest uppercase"
            >
              mokhtar.edits@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
