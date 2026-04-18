"use client";

import { useEffect, useMemo, useState } from "react";

type Bubble = {
  left: number;
  size: number;
  delay: number;
  duration: number;
  dx: number;
  opacity: number;
};

const round = (n: number, d = 2) => Math.round(n * 10 ** d) / 10 ** d;

export default function BackgroundBubbles({ count = 28 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const bubbles = useMemo<Bubble[]>(() => {
    const seed = (i: number) => {
      const x = Math.sin(i * 9301 + 49297) * 233280;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }).map((_, i) => ({
      left: round(seed(i) * 100),
      size: round(6 + seed(i + 1) * 22),
      delay: round(seed(i + 2) * 12),
      duration: round(10 + seed(i + 3) * 14),
      dx: round((seed(i + 4) - 0.5) * 80),
      opacity: round(0.08 + seed(i + 5) * 0.2, 3),
    }));
  }, [count]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,246,221,0.9), rgba(245,185,66,0.25) 60%, transparent 70%)",
            boxShadow: "inset 0 0 6px rgba(255,255,255,0.4)",
            opacity: b.opacity,
            animation: `drift ${b.duration}s linear ${b.delay}s infinite`,
            ["--dx" as string]: `${b.dx}px`,
          }}
        />
      ))}
    </div>
  );
}
