# Best in B2B — Session Brief
**Date:** 2026-04-01  
**Prepared for:** Antigravity (AI IDE session handoff)  
**Status:** Pre-session — read before touching any component

---

## Direction Change — Read First

The current site has drifted toward a **dark hacker / crime aesthetic** (film strips, "The Crimes" game vibes per client). This is wrong for the audience.

**The new direction is: Forbes Editorial × Entrepreneur Magazine.**

Think Forbes Travel Guide shield, Forbes Awards pages, Entrepreneur Magazine feature layouts. The words are: **elevated, lifestyle-driven, institutional**. Not cinematic crime. Not a studio selling services. An editorial record of consequence.

The color palette (`--blk`, `--cream`, `--lime`) is confirmed and stays. What changes is the *feel* — layouts, imagery, motion language, and visual references.

> **Logo status:** Designer Hossam is delivering the final logo within the week. Do not finalize any section that depends on the logotype. The current wordmark is a placeholder.

---

## Content Source of Truth

All copy for this session comes from **`Best-in-B2B-Website-Content.docx`** (exported 2026-04-01). This supersedes `Website_Content.txt` in `/public/`. Key changes:

- **Pull quote updated** — use: *"The most valuable B2B insights aren't shared on LinkedIn threads. They are shared in the quiet moments between the people actually doing the work."* (Attribution: Series Curator — Leadership Council, DFW). The old quote ("You don't get to choose...") is retired.
- **Footer year** — must read `© 2026`, not `© 2024`.
- **Two new sections now have full copy:** Section 04 (Why This Seat Matters) and Section 06 (Deliverables) — build from the docx.
- **FAQ answer 03** — the line "backed by a coalition of North Texas investment groups..." means *recognized by*, not financially supported. Do not alter the copy but flag it for a future wording pass.

---

## Section-by-Section Tasks

### Nav
- ✅ Keep as-is structurally.
- Make "Submit for Consideration" / "Request Consideration" a **sticky CTA** that persists in the nav header on scroll. Link-style, not a button.

---

### Hero
- ✅ Three-layer depth system (far words → mic → near words) is confirmed. Keep it.
- ✅ Mouse parallax stays.
- **Remove** the intro video entirely, or repurpose it as a **subtle background element** (low opacity, behind all layers). Client is undecided — default to removing it and noting it as a decision point.
- **Increase visibility of the `DALLAS · FORT WORTH · SEASON ONE` label.** It currently exists but reads too faint. Try rendering it in `--lime` (`#D4FF00`). Verify it doesn't bleed into the headline above.

---

### Marquee
- ✅ Keep as-is.

---

### TheSeries — "This Is Not A Podcast"

**Remove:** The diagonal film strip tracks. Client's exact note: *"we are not a cinema."*

**Replace with:** A lifestyle/editorial visual that communicates a premium video podcast — not a movie, not a studio. Options in priority order:
1. Full-width cutout figure(s) of a business person in an office context
2. DFW drone shot establishing location
3. High-end corporate shot (see asset sourcing notes below)

The text animations (left-to-right `opacity` + `translateX` on scroll via IntersectionObserver) are fine — keep the animation system, change only the decorative background layer.

Copy for this section is confirmed in the docx. Three body paragraphs + the updated pull quote above.

---

### MarketContext — "Why Now" (Stats: #1 / 100 / $1.6B)

The current layout exists but the numbers are not readable enough as standalone data points.

- Each stat (`#1`, `100`, `$1.6B`) should read at a glance — large, weighted, immediate.
- The single context line below each number should be one tight sentence, not a paragraph.
- Lime left-border accents are confirmed — keep them.
- No icons needed here. Clarity and typographic weight are the design elements.

---

### TheFormat — "What This Involves" + Deliverables

**Section 05 (What This Involves)** — Keep the three-point structure (Location / Session / Delivery). Redesign as a **horizontal editorial layout** with cutout business figure(s). As the user scrolls, each point reveals. The user should feel they are the person in the spotlight.

- Remove the "Camera! Lights! Action!" broadcast artifact system (Camera, Light, Slate, Headphones cutouts). This reinforces the studio-selling-services read.
- The sticky-stack card cycling mechanic can stay if it serves the horizontal editorial direction — evaluate on execution.

**Section 06 (Deliverables) — NEW — build from docx.**  
Headline: *"Everything delivered. Nothing to manage."*  
This section must feel tangible. The $10,000–$15,000 value figure is a key moment — give it visual weight.

Asset list to render:
- Full Episode — 4K Master File
- Video Clips — LinkedIn-Ready Shorts
- Caption Sets — Structured Copy
- Quote Graphics — High-Impact Visuals
- Guest Card — Branded Announcement
- Feature Asset — Summary Visual

No invoice. Make that land.

---

### Criteria — "Who Is Invited"

**Remove:** The "Tactile Desk" card system with 3D tilt-on-hover and mechanical artifact PNGs (Director's Pass, DFW Map, B2B Monitor, Tape Reel). Client feedback: *"boring"* and off-brand for the Forbes direction.

**Replace with:** An **editorial typographic treatment**. The four criteria as elegantly stacked, large-scale text. Think Vanity Fair feature or D CEO profile page. No borders, no icons, no rounded cards, no tilt effects.

Four criteria copy is confirmed in the docx:
1. Senior Leadership
2. DFW Native or Based
3. B2B Focused
4. Something Worth Saying

---

### Section 04 — "Why This Seat Matters" — NEW — build from docx

Six numbered points. This section is missing from the current build entirely. Build it clean — the Forbes editorial layout direction applies here. These are the reasons a senior executive should care. Treat them as editorial statements, not feature bullets.

---

### WaitlistForm
- ✅ Keep structure.
- Form fields confirmed: Name, Title, Company, Business Email, City.
- Backend integration (Formspree / GHL) is still a TODO — `alert()` placeholder is acceptable for now.
- Button text: "Submit for Consideration"

---

### FAQ
- ✅ Keep accordion structure.
- Update all copy to match docx (Section 09).
- Apply Forbes-style elegant treatment — clean, no heavy UI chrome.

---

### FooterCTA
- Headline: *"Twelve leaders. One season. One city."*
- Footer line: `© 2026 Best in B2B Leadership Series`  ← **must be 2026**
- Season 2 waitlist email input + submit arrow stays.

---

## Asset Sourcing Notes

Current stock footage is not matching the brand. Priority sources for replacement:

1. **Sweet Fish Media** (`sweetfishmedia.com`) — look at their production setup shots for compositional reference. Do not use their branded assets.
2. **Envato** — search `corporate office podcast` or `executive interview`. Download → WhatsApp compress → crop 9:16 → convert MP4 → WebM. Known workflow.
3. **AI generation** — Gemini (preferred, no IP issues) or Kling 3 (IP-locked by IP address — requires fresh account per session, use with caution).

Avoid: anything showing cheap headphones, audio-only podcast setups, or generic talking-head backgrounds. Prefer: executive in motion, office environment, DFW skyline/drone, cinematographic shallow depth of field.

---

## What Is Confirmed and Should Not Change

| Element | Status |
|---|---|
| Color palette (`--blk`, `--cream`, `--lime`) | ✅ Confirmed |
| Typography (Bebas Neue / Barlow / DM Mono) | ✅ Confirmed |
| Hero three-layer depth system | ✅ Confirmed |
| Mouse parallax | ✅ Confirmed |
| `mix-blend-mode: screen` on mic PNG | ✅ Confirmed |
| Marquee divider | ✅ Confirmed |
| Section order (Hero → Marquee → Series → Stats → Format → Deliverables → Criteria → Form → FAQ → Footer) | ✅ Confirmed |
| Easing: `cubic-bezier(.16,1,.3,1)` | ✅ Confirmed |
| Chartreuse used once per section, on the single most important element only | ✅ Confirmed |

---

## What Is Being Removed

| Element | Reason |
|---|---|
| Film strip diagonal tracks | "We are not a cinema" |
| Sound wave animation | Already removed 2026-03-31 |
| "Tactile Desk" 3D folder cards | Wrong aesthetic — too gamified |
| Camera / Light / Slate / Headphones broadcast cutouts | Reinforces "studio selling services" read |
| Intro video (standalone) | Repurpose as hero bg or remove |
| Old pull quote ("You don't get to choose...") | Replaced — see Content section above |

---

## Known TODOs (Carry Forward)

- [ ] Form backend — Formspree, GHL webhook, or custom API
- [ ] Asset optimisation — mic PNG → WebP/AVIF
- [ ] Cross-browser audit — `mix-blend-mode: screen` + `clip-path` on Safari/Firefox
- [ ] SEO — `<meta>` description, OG tags, structured data
- [ ] Logo swap — awaiting Hossam delivery (ETA: this week)
- [ ] FAQ answer 03 wording — "backed by" → "recognized by" (client approval needed)
