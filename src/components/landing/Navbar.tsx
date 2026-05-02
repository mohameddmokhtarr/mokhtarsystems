import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
          ? "bg-background/85 backdrop-blur-xl border-b-2 border-ink"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex h-18 py-3 items-center justify-between">
        <a
          href="https://www.instagram.com/mokhtarsays_/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-lg sm:text-xl bg-gradient-to-r from-[#feda75] via-[#fa7e1e] via-[#d62976] to-[#962fbf] bg-clip-text text-transparent bg-[length:300%_auto] animate-shimmer hover:scale-105 transition-transform inline-block px-3 py-1.5 border-2 border-ink rounded-full bg-card"
        >
          mokhtarsays_
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-bold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#book">Book a Call</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground border-2 border-ink rounded-full p-2 bg-card"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t-2 border-ink bg-background/95 backdrop-blur-xl">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-foreground/70 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="w-full">
              <a href="#book" onClick={() => setOpen(false)}>
                Book a Call
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;