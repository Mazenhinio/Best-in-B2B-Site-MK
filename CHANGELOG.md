# Best in B2B — Site Documentation & Changelog

> **Rule:** Every change made to this codebase must be logged at the bottom of the [Changelog](#changelog) section with the **date**, **time (local)**, and a clear **description of the change**. No exceptions.

---

## Project Overview

**Best in B2B** is a landing page for an invite-only video documentary series covering B2B executives in the Dallas–Fort Worth market. The site is designed as an editorial declaration — it does not read like a marketing page. It reads like a record.

### Core Brief

- **Format:** One conversation. Filmed on location. Produced with broadcast rigor.
- **Market:** Dallas–Fort Worth — the #1 North American tech hub, 2025.
- **Audience:** B2B executives and decision-makers in the DFW region.
- **Tone:** Authoritative, cinematic, editorial. Not a podcast. A record.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React (Vite) |
| Styling | Vanilla CSS Modules (per component) |
| Fonts | Bebas Neue, Barlow, DM Mono (Google Fonts) |
| Animation | CSS keyframes + `requestAnimationFrame` scroll loops |
| Assets | PNG (mic, film strip) in `/public` |
| Hosting | TBD |

---

## Project Structure

```
Best-in-B2B-Site-MK/
├── public/
│   ├── mic.png                         # Microphone hero asset
│   ├── FILM_STRIP-removebg-preview.png # Film strip decorative asset
│   ├── Website_Content.txt             # Source of truth for all copy
│   └── Editorial_Declaration.docx      # Brand/tone brief
│
├── src/
│   ├── App.jsx                         # Root layout, section order
│   ├── components/
│   │   ├── Nav.jsx / Nav.css           # Fixed navigation bar
│   │   ├── Hero.jsx / Hero.css         # Full-viewport parallax hero
│   │   ├── Marquee.jsx / Marquee.css   # Scrolling ticker divider
│   │   ├── TheSeries.jsx / TheSeries.css  # "This Is Not A Podcast" section
│   │   ├── MarketContext.jsx / MarketContext.css  # #1 / 100 / $1.6B stats
│   │   ├── TheFormat.jsx / TheFormat.css
│   │   ├── Criteria.jsx / Criteria.css
│   │   ├── WaitlistForm.jsx / WaitlistForm.css
│   │   ├── FAQ.jsx / FAQ.css
│   │   └── FooterCTA.jsx / FooterCTA.css
│   └── assets/
│       └── mic.png
```

---

## Section Guide

### 1. Nav
Fixed top bar. Left: "BEST IN **B2B**" logotype. Right: "SEASON ONE IS UNDERWAY. THE WAITLIST IS OPEN." with a pulsing lime dot.

### 2. Hero
Full-viewport section. Layers:
- **Far layer** (z-index: 2): SHAPING, DALLAS, ARE — appear behind the mic
- **Mic layer** (z-index: 3): Microphone PNG with `mix-blend-mode: screen`
- **Near layer** (z-index: 4): THE, B2B, LEADERS, BEING, DOCUMENTED. — appear in front of mic
- **Depth effect:** Mouse parallax via `requestAnimationFrame` + `mousemove` event
- **Word entrance:** JS `setTimeout` sequence with individual opacity targets
- **REC badge:** Top-right, lime pulsing dot + "REC" text

### 3. Marquee
An infinite scrolling ticker between Hero and TheSeries sections. Acts as a visual divider.

### 4. TheSeries — "This Is Not A Podcast. This Is A Record."
- **Film strip decorative layer:** Two diagonal film strip tracks using the infinite marquee technique (8 copies, flex row, `translateX(-50%)` loop). Tracks scroll in opposite directions.
- **Text animation:** `.roll-item` elements slide in from left to right individually as they scroll into view (IntersectionObserver via `addToRefs` pattern).
- **Copy:** Three body paragraphs + closing blockquote.

### 5. MarketContext — "Why Now"
Three stat pillars: **#1**, **100**, **$1.6B**. Grid layout, lime left-border accents.

### 6. TheFormat
How the show works — format breakdown.

### 7. Criteria
Guest selection standards — the editorial bar.

### 8. WaitlistForm
Lead capture form with intake fields.

### 9. FAQ
Accordion-style Q&A.

### 10. FooterCTA
Final call-to-action with brand mark.

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `--blk` | `#0a0a0a` | Primary background |
| `--cream` | `#f0ede6` | Primary text / hero words |
| `--lime` | `#d4ff00` | Accent / DOCUMENTED. / stats |
| `--c05–c80` | opacity steps | Muted text and borders |

**Fonts:**
- `Bebas Neue` — all display headings, nav, stats
- `Barlow` — body copy, blockquotes
- `DM Mono` — labels, timestamps, mono details

---

## Known Limitations / TODO

- [ ] **Form backend:** WaitlistForm and FooterCTA use `alert()` — needs Formspree, GHL, or custom API integration
- [ ] **Asset optimisation:** Mic and film strip PNGs should be converted to WebP/AVIF for faster loads
- [ ] **Cross-browser audit:** Verify `mix-blend-mode: screen` on mic and `clip-path` in Safari/Firefox
- [ ] **SEO:** Add proper `<meta>` description, OG tags, and structured data

---

## Changelog

> Format: `YYYY-MM-DD | HH:MM (local) | Description`

---

### 2026-03-31

| Time | Change |
|---|---|
| 09:38 | Initial session — read codebase and word documents to orient with project |
| 09:44 | Optimised Hero and TheSeries sections for mobile responsiveness |
| 09:52 | Implemented scroll-triggered spotlight slide-in/out animation in TheSeries |
| 09:55 | Migrated all section copy to match `Website_Content.txt` exactly |
| 10:00 | Made spotlight assets reactive to screen size using `clamp()` |
| 10:05 | Reduced hero text size to reduce visual clutter while preserving depth layers |
| 10:08 | Restored spotlight scale using height-based `clamp()` |
| 10:13 | Moved "ARE" word further right in Hero |
| 10:14 | Reduced "Request Consideration" button size to prevent covering DOCUMENTED. |
| 10:17 | Increased "SEASON ONE IS UNDERWAY" nav text and REC badge to readable size |
| 10:19 | Removed sound wave animation from TheSeries section |
| 10:19 | Fixed spotlight visibility — switched to height: `clamp(400px, 90vh, 1400px)` |
| 10:30 | Swapped spotlight images (left ↔ right was inverted) |
| 10:33 | Replaced spotlights entirely with film strip diagonal tracks (crime scene aesthetic) |
| 10:35 | Fixed film strip image rendering — switched from `<img>` to `background-repeat: repeat-x` on `<div>` tracks |
| 10:37 | Changed TheSeries text animation from top-to-bottom to left-to-right on scroll |
| 10:38 | Fixed text not appearing: switched from `clip-path` + `transition: all` to reliable `opacity` + `translateX` |
| 10:40 | Fixed IntersectionObserver: replaced `querySelectorAll` with React `addToRefs` pattern |
| 10:41 | Removed `clip-path` from animation (was hiding all text on some browsers); switched to `opacity` + `translateX` only |
| 10:43 | Fixed `overflow: hidden` on `.s-series` that was clipping all child roll-item animations |
| 10:44 | Reduced TheSeries section height by tightening all internal padding and margins |
| 10:46 | Widened quote container and reduced blockquote font size to prevent excessive vertical wrapping |
| 10:47 | Added infinite conveyor belt animation to film strips using `background-position` keyframes |
| 10:48 | Reversed film strip animation directions |
| 10:49 | Fixed scroll choppiness — separated rotation and translation across wrapper/inner divs so `translateX` runs on GPU compositor |
| 10:52 | Replaced `background-repeat` approach with infinite marquee (8 × img flex row, `translateX(-50%)`) for perfectly seamless stitched loop |
| 10:53 | Reversed final film strip animation direction |
| 10:58 | Updated Hero word colours: LEADERS/SHAPING/DALLAS → full white; THE/ARE → 50% ghost |
| 11:00 | Fixed hero word opacity bug — JavaScript `el.style.opacity` inline sequence was overriding CSS; corrected values in `seq` array in `Hero.jsx` |
| 11:05 | Added `margin-bottom: 3.5rem` to MarketContext subheadline for spacing above stat pillars |
| 11:06 | Mobile optimisation pass — added comprehensive `900px` and `600px` breakpoints for Hero, TheSeries, and MarketContext |
| 14:15 | Redesigned "What This Involves" section with a cinematic broadcast aesthetic: sticky header, scroll-triggered active states, and viewfinder-style UI elements |
| 14:35 | Reduced top padding and adjusted sticky position of "What This Involves" section for better header visibility |
| 14:40 | Comprehensive mobile optimization: Fixed horizontal scroll by capping Hero word sizes, added global overflow-x security, and enabled footer link wrapping |
| 15:35 | Added "Video Showcase" section featuring 6 simultaneous playing 9:16 vertical videos with a broadcast control-room aesthetic |
| 15:55 | Optimized Video Showcase for performance: Integrated WebM sources (achieving ~90% file size reduction) with MP4 fallbacks for smoother multi-video playback |
| 13:08 | Created this `CHANGELOG.md` file — all future changes must be documented here |
