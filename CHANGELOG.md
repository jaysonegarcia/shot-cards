# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2026-04-18

### Changed

- Smoother card flip animation:
  - Duration `0.75s → 0.85s` with easeOutQuint curve (`[0.22, 1, 0.36, 1]`) for a softer settle.
  - Added `transformPerspective: 1400` and `will-change: transform` on the card for a stable GPU layer.
  - Opacity crossfade between faces now eases (`cubic-bezier(0.4, 0, 0.2, 1)`) and is timed to the flip midpoint instead of cutting linearly.

### Fixed

- Animation jank on iOS caused by pulsing `box-shadow` on the back face. Replaced with a static drop-shadow plus a cheap `opacity`-only glow overlay behind the card, eliminating per-frame shadow repaints.

## [1.0.1] - 2026-04-18

### Fixed

- Card flip on iOS Safari (iPhone) no longer briefly ghosts the back face (beer mug, "Beer Night", "SHOT CARDS", stamps) after flipping. Each face now has its own 3D layer (`rotateY() translateZ(0)` with `-webkit-` prefixes and `will-change: transform`), plus an opacity fade tied to the flip state so the back face is hidden mid-rotation.

## [1.0.0] - 2026-04-18

### Added

- Initial release of **Shot Cards — Beer Night (Filipino Edition)**.
- 51 Filipino shot-card challenges sourced from the original PDF deck.
- Random card draw with no back-to-back repeats.
- Draw counter and **Shuffle** reset button.
- Beer-themed card design:
  - Back: bottle-cap styling with glowing amber border, ridges, and a central beer-mug emblem.
  - Front: beer-glass cross-section with foam top, amber body, and number badge.
- 3D flip animation with `rotateY` transitions powered by Framer Motion.
- Ambient animations: background drifting bubbles, card-interior rising bubbles, pulsing glow, shimmering "Beer Night" text, foam wave, and blinking tap hints.
- Custom, hand-drawn SVG beer-mug favicon.
- Responsive layout for mobile and desktop.
- Static export configuration (`output: "export"`) with `basePath: /shot-cards` for GitHub Pages.
- GitHub Actions workflow `Deploy to Production` supporting both manual dispatch and `v*` release-tag pushes.
- `README.md` with setup, gameplay, project structure, and deployment notes.
- Credit: Built by Jayson Garcia.

[1.0.2]: https://github.com/jaysonegarcia/shot-cards/releases/tag/v1.0.2
[1.0.1]: https://github.com/jaysonegarcia/shot-cards/releases/tag/v1.0.1
[1.0.0]: https://github.com/jaysonegarcia/shot-cards/releases/tag/v1.0.0
