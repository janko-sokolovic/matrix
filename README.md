# Matrix Code Rain

A Matrix-style digital rain animation built with React 18 + Canvas + Vite.

## Demo

[Live demo](https://janko-sokolovic.github.io/matrix/)

## Features

- Canvas-based RAF loop for smooth, high-performance rendering
- Foreground close-up columns with depth/parallax effect
- Custom Matrix font with leading glyph highlights and random glow
- **Real-time settings panel** — adjust without refreshing:
  - Rain speed
  - Column count (background + foreground)
  - Line length
  - Glow intensity
  - Color theme (green / blue / red)
- Settings persisted to `localStorage` across sessions

## Getting started

```bash
npm install
npm start       # dev server → localhost:3002
npm run build   # production build
npm run deploy  # deploy to GitHub Pages
```
