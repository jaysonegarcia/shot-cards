"use client";

import { useEffect, useMemo, useState } from "react";

type Bubble = {
  left: number;
  size: number;
  delay: number;
  duration: number;
};

const round = (n: number, d = 2) => Math.round(n * 10 ** d) / 10 ** d;

export default function CardBubbles({
  count = 14,
  seedOffset = 0,
}: {
  count?: number;
  seedOffset?: number;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const bubbles = useMemo<Bubble[]>(() => {
    const seed = (i: number) => {
      const x = Math.sin((i + seedOffset) * 1549 + 7919) * 99173;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }).map((_, i) => ({
      left: round(4 + seed(i) * 92),
      size: round(4 + seed(i + 1) * 12),
      delay: round(seed(i + 2) * 4),
      duration: round(3.5 + seed(i + 3) * 3.5),
    }));
  }, [count, seedOffset]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="absolute bottom-2 rounded-full"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(255,246,221,0.3) 55%, transparent 70%)",
            boxShadow: "inset 0 0 4px rgba(255,255,255,0.6)",
            animation: `rise ${b.duration}s ease-in ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
