import { useEffect, useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

const links = [
  { label: "Problem", href: "/#problem" },
  { label: "Approach", href: "/#solution" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Campaigns", href: "/#campaign-simulation" },
  { label: "Contact", href: "/#book" },
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
      <nav className="container relative flex h-16 py-3 items-center justify-between">
        <a
          href="https://www.instagram.com/mmohamedmokhtarr/"
          target="_blank"
          rel="noopener noreferrer"
          className="ig-handle"
          aria-label="Instagram @mmohamedmokhtarr"
        >
          <Instagram size={14} strokeWidth={2} />
          <span className="ig-dot" />
          <span className="hidden sm:inline">mmohamedmokhtarr</span>
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
            href="/#book"
            className="btn-salmon"
            style={{ padding: "10px 20px", fontSize: "12px" }}
          >
            Book a Call
          </a>
        </div>

        <a
          href="/#book"
          className="md:hidden absolute left-1/2 -translate-x-1/2 text-[10px] font-sans font-bold uppercase tracking-[2px] text-white bg-[#E05A2B] px-5 py-2 rounded-full hover:bg-[#c94a1e] transition-colors whitespace-nowrap"
        >
          Book a Call
        </a>

        <button
          className="md:hidden text-white border border-white/20 p-2 rounded-md"
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
              href="/#book"
              onClick={() => setOpen(false)}
              className="btn-salmon text-center menu-animate"
              style={{
                animationDelay: `${0.08 + links.length * 0.07}s`,
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "3px",
                boxShadow: "0 0 32px rgba(224,90,43,0.45), 0 8px 28px rgba(0,0,0,0.5)",
              }}
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
