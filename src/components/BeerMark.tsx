export default function BeerMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="bm-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbd17b" />
          <stop offset="1" stopColor="#8a4c0a" />
        </linearGradient>
        <linearGradient id="bm-foam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#fff0c8" />
        </linearGradient>
      </defs>

      {/* Handle */}
      <path
        d="M112 54 h14 a18 18 0 0 1 18 18 v20 a18 18 0 0 1 -18 18 h-14 v-10 h10 a10 10 0 0 0 10 -10 v-16 a10 10 0 0 0 -10 -10 h-10 z"
        fill="none"
        stroke="#2b1500"
        strokeWidth="4"
      />
      {/* Mug body */}
      <rect
        x="28"
        y="46"
        width="92"
        height="84"
        rx="8"
        fill="url(#bm-body)"
        stroke="#2b1500"
        strokeWidth="4"
      />
      {/* Foam */}
      <path
        d="M24 50 c6 -14 22 -14 30 -4 c6 -12 26 -14 34 -2 c6 -14 26 -14 32 -2 c6 -10 20 -8 22 2 v14 h-120 z"
        fill="url(#bm-foam)"
        stroke="#2b1500"
        strokeWidth="4"
      />
      {/* Liquid shine */}
      <rect x="40" y="64" width="8" height="50" rx="3" fill="#ffe6a8" opacity="0.7" />
      {/* Bubbles inside mug */}
      <circle cx="72" cy="92" r="4" fill="#fff0c8" opacity="0.7" />
      <circle cx="90" cy="110" r="3" fill="#fff0c8" opacity="0.7" />
      <circle cx="104" cy="84" r="3" fill="#fff0c8" opacity="0.7" />
    </svg>
  );
}
