const OrbitalDiagram = () => (
  <svg viewBox="0 0 500 400" className="w-full h-auto max-w-[440px]" aria-hidden="true">
    <defs>
      <path id="orbit-inner" d="M 342 198 a 112,62 0 1,0 -224,0 a 112,62 0 1,0 224,0" transform="rotate(10,230,198)" />
      <path id="orbit-outer" d="M 402 198 a 172,96 0 1,0 -344,0 a 172,96 0 1,0 344,0" transform="rotate(10,230,198)" />
    </defs>

    {/* Outer ellipse */}
    <ellipse cx="230" cy="198" rx="172" ry="96" stroke="#ECECEC" strokeWidth="1" fill="none" transform="rotate(10,230,198)" />
    {/* Inner ellipse */}
    <ellipse cx="230" cy="198" rx="112" ry="62" stroke="#ECECEC" strokeWidth="1.2" fill="none" transform="rotate(10,230,198)" opacity="0.7" />

    {/* Center — Brand */}
    <circle cx="230" cy="198" r="34" fill="#0A0A0A" />
    <circle cx="230" cy="198" r="34" fill="none" stroke="#0A0A0A" strokeWidth="1" opacity="0.3" />
    <text x="230" y="194" textAnchor="middle" fontSize="8.5" fill="white" fontFamily="'Space Mono',monospace" letterSpacing="3" fontWeight="700">BRAND</text>
    <text x="230" y="208" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.35)" fontFamily="'Space Mono',monospace">✦</text>

    {/* Service labels — positioned at the 4 orbital zones */}

    {/* Creative Strategy — top */}
    <text x="230" y="72" textAnchor="middle" fontSize="8.5" fontFamily="'Space Mono',monospace" letterSpacing="2" fill="#0A0A0A" fontWeight="600">CREATIVE STRATEGY</text>

    {/* AI Production — bottom */}
    <text x="230" y="338" textAnchor="middle" fontSize="8.5" fontFamily="'Space Mono',monospace" letterSpacing="2" fill="#0A0A0A" fontWeight="600">AI PRODUCTION</text>

    {/* Creative Direction — right */}
    <text x="422" y="202" textAnchor="start" fontSize="8.5" fontFamily="'Space Mono',monospace" letterSpacing="2" fill="#0A0A0A" fontWeight="600">CREATIVE</text>
    <text x="422" y="216" textAnchor="start" fontSize="8.5" fontFamily="'Space Mono',monospace" letterSpacing="2" fill="#0A0A0A" fontWeight="600">DIRECTION</text>

    {/* Digital Experiences — left */}
    <text x="38" y="202" textAnchor="end" fontSize="8.5" fontFamily="'Space Mono',monospace" letterSpacing="2" fill="#0A0A0A" fontWeight="600">DIGITAL</text>
    <text x="38" y="216" textAnchor="end" fontSize="8.5" fontFamily="'Space Mono',monospace" letterSpacing="2" fill="#0A0A0A" fontWeight="600">EXPERIENCES</text>

    {/* Connector tick marks from labels to orbits */}
    <line x1="230" y1="82" x2="230" y2="102" stroke="#ECECEC" strokeWidth="1" />
    <line x1="230" y1="320" x2="230" y2="295" stroke="#ECECEC" strokeWidth="1" />
    <line x1="406" y1="206" x2="402" y2="200" stroke="#ECECEC" strokeWidth="1" />
    <line x1="52" y1="206" x2="58" y2="200" stroke="#ECECEC" strokeWidth="1" />

    {/* Animated dots on inner orbit */}
    <g>
      <circle r="8" fill="#0A0A0A" opacity="0.06" />
      <circle r="4" fill="#0A0A0A" />
      {/* @ts-ignore */}
      <animateMotion dur="10s" repeatCount="indefinite" rotate="none" begin="0s">
        {/* @ts-ignore */}
        <mpath href="#orbit-inner" />
      </animateMotion>
    </g>
    <g>
      <circle r="8" fill="#0A0A0A" opacity="0.06" />
      <circle r="4" fill="#0A0A0A" />
      {/* @ts-ignore */}
      <animateMotion dur="10s" repeatCount="indefinite" rotate="none" begin="-5s">
        {/* @ts-ignore */}
        <mpath href="#orbit-inner" />
      </animateMotion>
    </g>

    {/* Animated dots on outer orbit */}
    <g>
      <circle r="8" fill="#0A0A0A" opacity="0.06" />
      <circle r="4" fill="#0A0A0A" />
      {/* @ts-ignore */}
      <animateMotion dur="16s" repeatCount="indefinite" rotate="none" begin="0s">
        {/* @ts-ignore */}
        <mpath href="#orbit-outer" />
      </animateMotion>
    </g>
    <g>
      <circle r="8" fill="#0A0A0A" opacity="0.06" />
      <circle r="4" fill="#0A0A0A" />
      {/* @ts-ignore */}
      <animateMotion dur="16s" repeatCount="indefinite" rotate="none" begin="-8s">
        {/* @ts-ignore */}
        <mpath href="#orbit-outer" />
      </animateMotion>
    </g>
  </svg>
);

export default OrbitalDiagram;
