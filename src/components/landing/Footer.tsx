const Footer = () => (
  <footer className="bg-[#0A0A0A] border-t border-white/[0.07] py-10">
    <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <div>
        <span className="font-display text-white text-xs tracking-[0.18em] uppercase">
          Mokhtar Studio
        </span>
        <p className="mt-1 text-[11px] font-mono text-white/30 tracking-wider">
          Mohamed Mokhtar
        </p>
      </div>
      <p className="text-[11px] font-mono text-white/25 tracking-wider">
        © {new Date().getFullYear()} Mokhtar Studio
      </p>
    </div>
  </footer>
);

export default Footer;
