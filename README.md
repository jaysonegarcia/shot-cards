# Shot Cards — Beer Night (Filipino Edition)

A Filipino-style drinking game built with Next.js. Tap the beer-themed card to reveal your challenge, tap again to draw the next random card. 50+ cards of pure inuman chaos.

> Please drink responsibly. 18+ only.

## Features

- 50+ shot cards in Filipino
- Beer-themed card design with foam, bubbles, and bottle-cap backs
- Smooth 3D flip animation and ambient background bubbles
- Random draw with no back-to-back repeats
- Shuffle and draw counter
- Fully static export — no backend required

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- TypeScript
- Tailwind CSS
- [Framer Motion](https://www.framer.com/motion/) for animations

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Play

1. The card starts face-down with the hint "Click the card to flip".
2. Tap the card — it flips and reveals your challenge.
3. Tap again — a new random card is drawn.
4. Hit **Shuffle** in the top-right to reset the draw counter.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          # home page
│   └── globals.css       # theme + animations
├── components/
│   ├── CardGame.tsx      # flip logic + card faces
│   ├── CardBubbles.tsx   # rising bubbles inside the card
│   ├── BackgroundBubbles.tsx # ambient drifting bubbles
│   └── BeerMark.tsx      # SVG beer mug emblem
└── data/
    └── cards.ts          # all card content
```

## Credits

Card content adapted from a Filipino shot-card deck (Beer Night edition).

Built by Jayson Garcia.
