# Lumen — Landing Page

An Apple-inspired, dark-theme product landing page built with Vite + React + TypeScript + Tailwind CSS + Framer Motion.

## Stack

- **Vite** (React + TS template, hand-scaffolded)
- **Tailwind CSS** for styling (`tailwind.config.js`, dark theme: `#000000` background, `#1d1d1f` card surfaces)
- **Framer Motion** for entrance/hover/parallax animations

## Getting started

```bash
npm install
npm run dev
```

Dev server runs on port `5173` by default (see `vite.config.ts` — respects `PORT` env var).

## Structure

```
src/
  App.tsx                    Page assembly / section order
  index.css                  Tailwind layers + custom keyframes (orb float/breathe/ring-spin)
  components/
    Navbar.tsx                Fixed top nav — LUMEN wordmark, Product/Design/Technology/Support, Buy
    Hero.tsx                  "Light, reimagined." headline, CTAs, animated multi-ring orb (pointer parallax)
    ProductLineup.tsx          #products — Lumen Mini / One / Pro cards, pricing, Buy CTAs
    BentoGrid.tsx              #features — 4-card tech/feature grid ("Technology" in nav)
    Carousel.tsx               #design — "The story behind it," 4 chapters, snap-scroll, custom SVG art per chapter
    Footer.tsx                 #get — Menu + Legal columns, copyright
```

Section anchors used by the nav/footer: `#top` (hero), `#products`, `#features`, `#design`, `#get` (footer).

## Design origin

Nav, bento grid, and carousel patterns were sourced from the 21st.dev component catalog (Mini Navbar / Aceternity Bento Grid / Aceternity Carousel) as visual references, then hand-built in this stack. The hero content and orb design match the "Lumen" take generated via 21st.dev's AI hero generator (project `de89409d-f920-4067-a11f-80e0996644c0`, take 1) — the other 3 takes (Aether, Orbit, alt Aether) are still available there if a different direction is wanted later.

## Known placeholders / open items

- All product renders (hero orb, product lineup icons, carousel chapter art) are abstract SVG gradients — swap for real product photography/renders when available.
- No routing — single scrolling page.
- No backend/checkout — all "Buy"/"Order now" links scroll to the footer.
- The original repo directory (an unrelated PHP multi-tenant app, "IntakeEngine") was found fully deleted from disk before this project started; that issue was set aside at the user's direction and is unresolved.

## Verifying changes

`.claude/launch.json` is configured to run `npm run dev` for the Browser-pane preview tool.
