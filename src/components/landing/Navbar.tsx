import { useEffect, useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

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
          className="ig-handle"
          aria-label="Instagram @mokhtarsays_"
        >
          <Instagram size={14} strokeWidth={2} />
          <span className="ig-dot" />
          <span>mokhtarsays_</span>
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
        <div className="menu-panel md:hidden border-t border-white/[0.08] bg-[rgba(10,10,10,0.98)] backdrop-blur-xl">
          <div className="container py-7 flex flex-col gap-5">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="menu-link font-display text-2xl uppercase tracking-tight text-white/85 hover:text-white"
                style={{ animationDelay: `${0.08 + i * 0.07}s` }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="btn-salmon text-center menu-link"
              style={{ animationDelay: `${0.08 + links.length * 0.07}s` }}
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
