interface Props {
  light?: boolean;
}

const OrbitalDiagram = ({ light = true }: Props) => {
  const stroke   = light ? "#C45A38" : "#FAF7F2";
  const label    = light ? "#1A1512" : "#FAF7F2";
  const dot      = light ? "#C45A38" : "#FAF7F2";
  const starText = light ? "#FAF7F2" : "#1A1512";

  return (
    <svg viewBox="0 0 460 400" className="w-full h-auto max-w-[420px]" aria-hidden="true">
      <defs>
        {/* Orbit paths — each is the corresponding ellipse as an arc path with the 12° rotation baked in via transform */}
        <path id="orbit-inner"  d="M 298 198 a 68,38 0 1,0 -136,0 a 68,38 0 1,0 136,0"    transform="rotate(12,230,198)" />
        <path id="orbit-middle" d="M 358 198 a 128,73 0 1,0 -256,0 a 128,73 0 1,0 256,0"   transform="rotate(12,230,198)" />
        <path id="orbit-outer"  d="M 418 198 a 188,108 0 1,0 -376,0 a 188,108 0 1,0 376,0" transform="rotate(12,230,198)" />
      </defs>

      {/* Three concentric ellipses, tilted 12° */}
      <ellipse cx="230" cy="198" rx="68"  ry="38"  stroke={stroke} strokeWidth="1.2" fill="none" transform="rotate(12,230,198)" opacity="0.8"  />
      <ellipse cx="230" cy="198" rx="128" ry="73"  stroke={stroke} strokeWidth="1"   fill="none" transform="rotate(12,230,198)" opacity="0.45" />
      <ellipse cx="230" cy="198" rx="188" ry="108" stroke={stroke} strokeWidth="0.8" fill="none" transform="rotate(12,230,198)" opacity="0.28" />

      {/* Centre star — glass lens + glow rings */}
      <circle cx="230" cy="198" r="28" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <circle cx="230" cy="198" r="16" fill={dot} opacity="0.12" />
      <circle cx="230" cy="198" r="7"  fill={dot} />
      <text x="230" y="202" textAnchor="middle" fontSize="9" fill={starText} fontWeight="700">✦</text>

      {/* Static orbit labels */}
      <text x="302" y="228" fontSize="10" fontFamily="'Space Mono',monospace" fontWeight="700" letterSpacing="1.5" fill={label}>CONTENT</text>
      <text x="106" y="153" fontSize="10" fontFamily="'Space Mono',monospace" fontWeight="700" letterSpacing="1.5" fill={label} textAnchor="end">VISUALS</text>
      <text x="280" y="100" fontSize="10" fontFamily="'Space Mono',monospace" fontWeight="700" letterSpacing="1.5" fill={label}>AUTOMATION</text>

      {/* CONTENT — inner orbit, 8s. begin=0s → starts at rotated right-side ≈(296,212), near label */}
      <g>
        <circle r="9" fill={dot} opacity="0.12" />
        <circle r="5" fill={dot} />
        {/* @ts-ignore */}
        <animateMotion dur="8s" repeatCount="indefinite" rotate="none" begin="0s">
          {/* @ts-ignore */}
          <mpath href="#orbit-inner" />
        </animateMotion>
      </g>

      {/* VISUALS — middle orbit, 12s. begin=-6.7s → starts at ≈(118,149), near label */}
      <g>
        <circle r="9" fill={dot} opacity="0.12" />
        <circle r="5" fill={dot} />
        {/* @ts-ignore */}
        <animateMotion dur="12s" repeatCount="indefinite" rotate="none" begin="-6.7s">
          {/* @ts-ignore */}
          <mpath href="#orbit-middle" />
        </animateMotion>
      </g>

      {/* AUTOMATION — outer orbit, 16s. begin=-12.2s → starts at ≈(268,96), near label */}
      <g>
        <circle r="9" fill={dot} opacity="0.12" />
        <circle r="5" fill={dot} />
        {/* @ts-ignore */}
        <animateMotion dur="16s" repeatCount="indefinite" rotate="none" begin="-12.2s">
          {/* @ts-ignore */}
          <mpath href="#orbit-outer" />
        </animateMotion>
      </g>
    </svg>
  );
};

export default OrbitalDiagram;
