interface Props {
  light?: boolean;
}

const OrbitalDiagram = ({ light = true }: Props) => {
  const stroke    = light ? "#C45A38" : "#FAF7F2";
  const label     = light ? "#1A1512" : "#FAF7F2";
  const dot       = light ? "#C45A38" : "#FAF7F2";
  const starText  = light ? "#FAF7F2" : "#1A1512";

  return (
    <svg
      viewBox="0 0 460 400"
      className="w-full h-auto max-w-[420px]"
      aria-hidden="true"
    >
      {/* Three concentric ellipses, tilted 12° */}
      <ellipse cx="230" cy="198" rx="68"  ry="38"  stroke={stroke} strokeWidth="1.2" fill="none" transform="rotate(12,230,198)" opacity="0.8"  />
      <ellipse cx="230" cy="198" rx="128" ry="73"  stroke={stroke} strokeWidth="1"   fill="none" transform="rotate(12,230,198)" opacity="0.45" />
      <ellipse cx="230" cy="198" rx="188" ry="108" stroke={stroke} strokeWidth="0.8" fill="none" transform="rotate(12,230,198)" opacity="0.28" />

      {/* Centre star — glass lens + glow rings */}
      <circle cx="230" cy="198" r="28" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <circle cx="230" cy="198" r="16" fill={dot} opacity="0.12" />
      <circle cx="230" cy="198" r="7"  fill={dot} />
      <text x="230" y="202" textAnchor="middle" fontSize="9" fill={starText} fontWeight="700">✦</text>

      {/* Content — inner orbit right side (t ≈ 20°, rotated 12°) */}
      <circle cx="290" cy="224" r="5" fill={dot} className="orbital-dot" />
      <text x="302" y="228" fontSize="10" fontFamily="'Space Mono',monospace" fontWeight="700" letterSpacing="1.5" fill={label}>CONTENT</text>

      {/* Operations — middle orbit left side (t ≈ 200°, rotated 12°) */}
      <circle cx="118" cy="149" r="5" fill={dot} className="orbital-dot" style={{ animationDelay: "1s" }} />
      <text x="106" y="153" fontSize="10" fontFamily="'Space Mono',monospace" fontWeight="700" letterSpacing="1.5" fill={label} textAnchor="end">OPERATIONS</text>

      {/* Reporting — outer orbit top (t ≈ 275°, rotated 12°) */}
      <circle cx="268" cy="96"  r="5" fill={dot} className="orbital-dot" style={{ animationDelay: "2s" }} />
      <text x="280" y="100" fontSize="10" fontFamily="'Space Mono',monospace" fontWeight="700" letterSpacing="1.5" fill={label}>REPORTING</text>
    </svg>
  );
};

export default OrbitalDiagram;
