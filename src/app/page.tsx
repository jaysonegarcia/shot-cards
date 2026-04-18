import BackgroundBubbles from "@/components/BackgroundBubbles";
import CardGame from "@/components/CardGame";

export default function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-10">
      <BackgroundBubbles count={30} />

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(245,185,66,0.12), transparent 60%)",
        }}
      />

      {/* Heading */}
      <div className="pointer-events-none absolute left-0 right-0 top-8 z-10 text-center sm:top-10">
        <div className="text-[10px] font-bold uppercase tracking-[0.6em] text-amber-200/60">
          Filipino Edition
        </div>
        <h1 className="mt-1 bg-gradient-to-b from-amber-100 via-amber-300 to-amber-600 bg-clip-text text-3xl font-black tracking-wide text-transparent sm:text-4xl">
          SHOT CARDS
        </h1>
      </div>

      <CardGame />

      <div className="pointer-events-none absolute bottom-4 left-0 right-0 flex flex-col items-center gap-1 text-center text-[10px] uppercase tracking-[0.35em] text-amber-200/40">
        <span>Please drink responsibly · 18+</span>
        <span className="text-amber-200/60">Built by Jayson Garcia</span>
      </div>
    </main>
  );
}
