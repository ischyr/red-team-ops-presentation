# RedTeamCenter — Marketing Site

> The public-facing landing page for **RedTeamCenter** — the all-in-one platform built for modern red team operators.

---

## What This Is

This repo is the **marketing / presentation website** for the RedTeamCenter platform. It showcases the platform's capabilities, features, and operator stories — built entirely in React with no external UI libraries.

The actual RedTeamCenter application (engagement management, C2 infrastructure, device code phishing, CVE feed, etc.) lives in a separate repo.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | React 19 (Create React App) |
| Styling | Plain CSS — custom properties, CSS Grid, Flexbox |
| Fonts | Inter via Google Fonts |
| Animations | CSS keyframes + `requestAnimationFrame` |
| Icons | Hand-crafted inline SVGs (no icon lib) |
| Images | `public/` — drop your own screenshots in |

No Tailwind. No component library. No build config to fight with.

---

## Sections

```
Navbar
  └── Platform dropdown · Pricing · Partners · About · Register to Newsletter

Hero
  └── Dark red gradient · Browser-frame dashboard screenshot · Floating stat cards · Wave divider

TrustedBy
  └── Logo trust strip

Benchmark
  └── 4 stat cards · Tabbed screenshot viewer (Cheatsheet / CVE Feed / Email Leaks)

Features
  └── 3-tab showcase (Device Code Phishing / C2 Infrastructure / Engagement Tracking)
      Each tab: copy panel + full screenshot with layered shadow

Testimonials
  └── Dark section matching Hero · 4 operator quotes · Wave dividers top + bottom

WhyChooseUs
  └── 8-feature grid — full platform capability overview

CTASection
  └── Red gradient · Email capture form

Footer
  └── Link columns · Social links · Legal
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start
```

Opens at `http://localhost:3000`.

---

## Adding Screenshots

The site uses real screenshots from the RedTeamCenter platform. Drop them in `public/` with these exact filenames:

| File | Used in |
|---|---|
| `dashboard.png` | Hero section — main browser mockup |
| `screenshot-cheatsheet.png` | Benchmark → Cheatsheet tab |
| `screenshot-cve.png` | Benchmark → CVE Feed tab |
| `screenshot-email-leaks.png` | Benchmark → Email Leaks tab |
| `screenshot-device-code.png` | Features → Device Code Phishing tab |
| `screenshot-c2.png` | Features → C2 Infrastructure tab |
| `screenshot-engagement.png` | Features → Engagement Tracking tab |

---

## Project Structure

```
src/
├── App.js                        # Root — assembles all sections
├── index.css                     # Global CSS variables + base styles
└── components/
    ├── Navbar/                   # Sticky nav · Platform dropdown · CTA button
    ├── Hero/                     # Full-bleed dark hero · screenshot · floating cards
    ├── TrustedBy/                # Logo trust strip
    ├── Benchmark/                # Stats + tabbed screenshot mockup
    ├── Features/                 # 3-tab feature showcase with real screenshots
    ├── Testimonials/             # Dark section · 4 operator quotes · wave dividers
    ├── WhyChooseUs/              # 8-card platform feature grid
    ├── CTASection/               # Email capture CTA
    └── Footer/                   # Links · social · legal
```

---

## Design System

All design tokens live in `src/index.css` as CSS custom properties:

```css
--primary:       #dc2626   /* Red */
--primary-dark:  #b91c1c
--primary-light: #ef4444
--dark:          #0f172a
--white:         #ffffff
--gray-200:      #e2e8f0
--gray-500:      #64748b
--radius:        8px
--radius-lg:     12px
--radius-xl:     16px
--shadow-xl:     0 20px 60px rgba(0,0,0,0.12)
--transition:    all 0.2s ease
```

The `Inter` font is loaded via Google Fonts in `public/index.html`.

---

## Key Design Decisions

- **No emoji** — all icons are inline SVGs with contextual accent colors
- **Wave dividers** — SVG path curves used at Hero bottom and Testimonials top/bottom to blend sections
- **Real screenshots** — every feature tab and benchmark panel uses actual platform screenshots rather than CSS mockups
- **Fade transitions** — tab switches in Benchmark and Features use a 200ms `translateY` + opacity animation for smoothness
- **Dark hero / light body** — the site alternates between `#0a0a0a → #1a0505` dark sections (Hero, Testimonials) and `#f8fafc` light sections (Benchmark, Features, WhyChooseUs)

---

## Related

- **RedTeamCenter App** — the actual platform (engagement management, C2, phishing, CVE feed, and much more)

---

*Built with React. Designed for operators.*
