# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[1.0.0]: https://github.com/jaysonegarcia/shot-cards/releases/tag/v1.0.0
