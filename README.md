# Oath of the Unseen — Hades II Fear Planner

A React app for planning Fear loadouts in Hades II. Toggle vow levels, see your total Fear, review all active negative effects, and share your build via URL.
I started this project to explore Claude coding and hopefully provide a service

## Features

- All 16 vows with their correct levels and fear costs
- Live Fear counter with progress bar and milestone markers (8 / 16 / 32 / 67)
- Active negative effects summary panel
- Shareable URL encoding (e.g. `?v=blood:2,fury:1,desperation:2`)
- URL decoded on load — shared links restore the exact build

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
