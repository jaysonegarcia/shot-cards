"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cards, type ShotCard } from "@/data/cards";
import CardBubbles from "./CardBubbles";
import BeerMark from "./BeerMark";

function pickRandom(exclude?: number): ShotCard {
  const pool = exclude == null ? cards : cards.filter((c) => c.id !== exclude);
  return pool[Math.floor(Math.random() * pool.length)];
}

export default function CardGame() {
  const [current, setCurrent] = useState<ShotCard | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [drawnCount, setDrawnCount] = useState(0);
  const [wobbleKey, setWobbleKey] = useState(0);
  const swapTimer = useRef<number | null>(null);

  useEffect(() => {
    setCurrent(pickRandom());
  }, []);

  useEffect(() => {
    return () => {
      if (swapTimer.current) window.clearTimeout(swapTimer.current);
    };
  }, []);

  const handleClick = useCallback(() => {
    if (!current) return;
    setWobbleKey((k) => k + 1);
    if (!flipped) {
      setFlipped(true);
      setDrawnCount((n) => n + 1);
    } else {
      setFlipped(false);
      if (swapTimer.current) window.clearTimeout(swapTimer.current);
      swapTimer.current = window.setTimeout(() => {
        setCurrent((prev) => pickRandom(prev?.id));
      }, 380);
    }
  }, [current, flipped]);

  const handleReset = () => {
    if (swapTimer.current) window.clearTimeout(swapTimer.current);
    setFlipped(false);
    setDrawnCount(0);
    swapTimer.current = window.setTimeout(() => {
      setCurrent((prev) => pickRandom(prev?.id));
    }, 380);
  };

  return (
    <div className="relative z-10 flex w-full max-w-xl flex-col items-center gap-6">
      {/* Counter & reset */}
      <div className="flex w-full items-center justify-between px-2 text-[11px] uppercase tracking-[0.3em] text-amber-200/70">
        <span>
          Drawn{" "}
          <span className="font-semibold text-amber-100">{drawnCount}</span>
          <span className="opacity-50"> / {cards.length}</span>
        </span>
        <button
          onClick={handleReset}
          className="rounded-full border border-amber-300/30 bg-black/30 px-3 py-1 text-[10px] font-semibold tracking-[0.25em] text-amber-200 transition hover:border-amber-300/70 hover:bg-amber-900/40 hover:text-amber-50 active:scale-95"
        >
          Shuffle
        </button>
      </div>

      {/* Card */}
      <div className="perspective-1400 w-full flex justify-center">
        <motion.button
          type="button"
          onClick={handleClick}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
          whileHover={{ y: -6, scale: 1.015 }}
          whileTap={{ scale: 0.97 }}
          className="preserve-3d relative h-[460px] w-[320px] cursor-pointer select-none rounded-[28px] outline-none sm:h-[520px] sm:w-[360px]"
          aria-label={flipped ? "Tap to draw next card" : "Tap to reveal card"}
        >
          {/* ---- BACK (default, shown first) ---- */}
          <div
            className="backface-hidden card-glow absolute inset-0 overflow-hidden rounded-[28px] border border-amber-400/40"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, #f5b942 0%, #b8791f 35%, #5a2d00 75%, #2a1300 100%)",
            }}
          >
            {/* bottle-cap ridges */}
            <div
              className="absolute inset-2 rounded-[22px]"
              style={{
                background:
                  "repeating-conic-gradient(from 0deg, rgba(255,246,221,0.12) 0deg 6deg, transparent 6deg 12deg)",
                maskImage:
                  "radial-gradient(circle, transparent 58%, black 60%, black 68%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(circle, transparent 58%, black 60%, black 68%, transparent 70%)",
              }}
            />

            {/* inner panel */}
            <div
              className="absolute inset-5 rounded-[20px] border border-amber-200/20"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 20%, rgba(255,246,221,0.18) 0%, transparent 55%), linear-gradient(180deg, #5a2d00 0%, #2a1300 100%)",
                boxShadow:
                  "inset 0 2px 10px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,246,221,0.05)",
              }}
            />

            <CardBubbles count={10} seedOffset={current?.id ?? 0} />

            {/* center emblem */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <div className="relative mb-2">
                <div
                  className="absolute inset-0 rounded-full blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(245,185,66,0.55), transparent 65%)",
                  }}
                />
                <BeerMark className="relative h-28 w-28 drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)]" />
              </div>
              <div className="shimmer text-[11px] font-bold uppercase tracking-[0.5em] text-amber-200/90">
                Beer Night
              </div>
              <div
                className="mt-1 bg-gradient-to-b from-amber-100 to-amber-400 bg-clip-text text-4xl font-black tracking-wider text-transparent sm:text-5xl"
                style={{ fontFamily: "var(--font-geist-sans)", textShadow: "0 2px 0 rgba(0,0,0,0.2)" }}
              >
                SHOT CARDS
              </div>
              <div className="mt-6 h-px w-40 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
              <div className="mt-5 hint-blink text-xs font-semibold uppercase tracking-[0.35em] text-amber-100/80">
                Click the card to flip
              </div>
            </div>

            {/* corner stamps */}
            <div className="absolute left-4 top-4 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-100/60">
              Est. Inuman
            </div>
            <div className="absolute right-4 top-4 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-100/60">
              50+ cards
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-100/50">
              Drink Responsibly
            </div>
          </div>

          {/* ---- FRONT (revealed) ---- */}
          <div
            className="backface-hidden rotate-y-180 absolute inset-0 overflow-hidden rounded-[28px] border border-amber-300/50"
            style={{
              background:
                "linear-gradient(180deg, #fff7dd 0%, #fff7dd 22%, #f9d37a 22%, #e09a1c 55%, #8a4c0a 100%)",
              boxShadow:
                "0 30px 60px -10px rgba(0,0,0,0.7), inset 0 2px 0 rgba(255,255,255,0.5)",
            }}
          >
            {/* foam texture */}
            <div className="absolute left-0 right-0 top-0 h-[22%] overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 20% 60%, #fff 0 14px, transparent 16px), radial-gradient(circle at 45% 50%, #fff 0 18px, transparent 20px), radial-gradient(circle at 70% 70%, #fff 0 12px, transparent 14px), radial-gradient(circle at 88% 45%, #fff 0 16px, transparent 18px), #fff7dd",
                }}
              />
              {/* foam scalloped bottom */}
              <svg
                className="foam-wave absolute bottom-[-1px] left-[-4%] h-6 w-[108%]"
                viewBox="0 0 400 40"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,20 Q20,40 40,22 T80,22 T120,22 T160,22 T200,22 T240,22 T280,22 T320,22 T360,22 T400,22 L400,40 L0,40 Z"
                  fill="#fff7dd"
                />
              </svg>
            </div>

            {/* glass highlight */}
            <div
              className="pointer-events-none absolute left-3 top-[22%] h-[60%] w-5 rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.15))",
                filter: "blur(1px)",
              }}
            />
            <div
              className="pointer-events-none absolute right-4 top-[30%] h-[45%] w-2 rounded-full bg-white/25"
              style={{ filter: "blur(0.5px)" }}
            />

            {/* rising bubbles in the beer */}
            <div className="absolute left-0 right-0 top-[22%] bottom-0">
              <CardBubbles count={16} seedOffset={(current?.id ?? 0) + 101} />
            </div>

            {/* card number badge */}
            <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-amber-900/70 bg-amber-50 text-[11px] font-black text-amber-900 shadow-md">
                #{current?.id ?? "?"}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-900/70">
                Shot Card
              </span>
            </div>

            {/* content */}
            <motion.div
              key={wobbleKey + ":" + current?.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-7 pt-14 pb-10 text-center"
            >
              <div
                className="mb-4 text-lg font-black leading-tight text-amber-950 drop-shadow-[0_1px_0_rgba(255,255,255,0.5)] sm:text-xl"
                style={{ textShadow: "0 1px 0 rgba(255,246,221,0.6)" }}
              >
                {current?.title}
              </div>
              <div className="mb-5 h-px w-16 bg-amber-950/40" />
              <div className="text-[15px] font-medium leading-relaxed text-amber-50 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] sm:text-base">
                {current?.text}
              </div>
            </motion.div>

            {/* footer hint */}
            <div className="absolute bottom-3 left-0 right-0 text-center text-[10px] font-bold uppercase tracking-[0.35em] text-amber-50/90">
              <span className="hint-blink inline-block">
                Tap for next card →
              </span>
            </div>
          </div>
        </motion.button>
      </div>

      {/* secondary hint */}
      <div className="text-center text-xs text-amber-100/60">
        {flipped ? "Read it. Tap the card to draw another." : "Tap the card to reveal your challenge."}
      </div>
    </div>
  );
}
