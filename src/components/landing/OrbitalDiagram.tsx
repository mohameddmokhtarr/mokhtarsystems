const labels = [
  { text: "CREATIVE STRATEGY",  pw: 126, begin: "0s"   },
  { text: "CREATIVE DIRECTION", pw: 128, begin: "-6s"  },
  { text: "AI PRODUCTION",      pw: 90,  begin: "-12s" },
  { text: "WEBSITES BUILT",     pw: 96,  begin: "-18s" },
];

const OrbitalDiagram = () => (
  <svg
    viewBox="0 0 500 370"
    className="w-full h-auto"
    aria-hidden="true"
    style={{ overflow: "visible" }}
  >
    <defs>
      {/* Outer orbit — labels travel along this */}
      <path
        id="orbit-outer"
        d="M 425 185 a 175,92 0 1,0 -350,0 a 175,92 0 1,0 350,0"
      />
      {/* Inner orbit — dots travel along this */}
      <path
        id="orbit-inner"
        d="M 360 185 a 110,60 0 1,0 -220,0 a 110,60 0 1,0 220,0"
      />
    </defs>

    {/* Outer ellipse ring */}
    <ellipse
      cx="250" cy="185" rx="175" ry="92"
      stroke="#ECECEC" strokeWidth="1" fill="none"
    />
    {/* Inner ellipse ring */}
    <ellipse
      cx="250" cy="185" rx="110" ry="60"
      stroke="#ECECEC" strokeWidth="1.2" fill="none" opacity="0.7"
    />

    {/* Center — THE BRAND */}
    <circle cx="250" cy="185" r="42" fill="#0A0A0A" />
    <text
      x="250" y="180"
      textAnchor="middle" fontSize="6.5" fill="rgba(255,255,255,0.55)"
      fontFamily="'Space Mono',monospace" letterSpacing="3"
    >
      THE
    </text>
    <text
      x="250" y="195"
      textAnchor="middle" fontSize="9.5" fill="white" fontWeight="700"
      fontFamily="'Space Mono',monospace" letterSpacing="2.5"
    >
      BRAND
    </text>

    {/* Animated dots on inner orbit */}
    <g>
      <circle r="6" fill="#0A0A0A" opacity="0.07" />
      <circle r="3.5" fill="#0A0A0A" />
      {/* @ts-ignore */}
      <animateMotion dur="10s" repeatCount="indefinite" rotate="none" begin="0s">
        {/* @ts-ignore */}
        <mpath href="#orbit-inner" />
      </animateMotion>
    </g>
    <g>
      <circle r="6" fill="#0A0A0A" opacity="0.07" />
      <circle r="3.5" fill="#0A0A0A" />
      {/* @ts-ignore */}
      <animateMotion dur="10s" repeatCount="indefinite" rotate="none" begin="-5s">
        {/* @ts-ignore */}
        <mpath href="#orbit-inner" />
      </animateMotion>
    </g>

    {/* Revolving service label chips on outer orbit */}
    {labels.map(({ text, pw, begin }) => (
      <g key={text}>
        <rect
          x={-pw / 2} y="-10"
          width={pw} height="19"
          rx="9.5"
          fill="white"
          stroke="#D8D8D8"
          strokeWidth="1"
        />
        <text
          x="0" y="4.5"
          textAnchor="middle"
          fontSize="7.5"
          fontFamily="'Space Mono',monospace"
          letterSpacing="1.5"
          fill="#0A0A0A"
          fontWeight="600"
        >
          {text}
        </text>
        {/* @ts-ignore */}
        <animateMotion dur="24s" repeatCount="indefinite" rotate="none" begin={begin}>
          {/* @ts-ignore */}
          <mpath href="#orbit-outer" />
        </animateMotion>
      </g>
    ))}
  </svg>
);

export default OrbitalDiagram;
