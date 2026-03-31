# Best in B2B — Landing Page Document

**Best in B2B** is an invite-only editorial series documenting the tech-driven leadership shaping the Dallas–Fort Worth market. This landing page is built to feel like a high-end record, not a marketing pitch.

## 🎬 Core Experience
- **Cinematic Panning:** Production artifacts (Camera, Lights, Slate, Headphones) sweep into the frame from the margins as the user scrolls.
- **Sticky-Stack Format:** A 5-card production sequence that cycles in-place to explain the editorial process.
- **3D Tactile Desk:** The guest criteria are presented as physical "Editorial Folders" that tilt and react in 3D space as the user hovers over them.
- **Editorial Flip:** A fluid transition between a dark "Monitor Room" brief and a high-contrast "Cream Gallery" showcase.

## 🏗️ Technical Architecture
- **Framework:** React + Vite
- **Styling:** Vanilla CSS (Modular & Baseline)
- **Animation:** IntersectionObserver (Reveal effects) + Custom Scroll Progress Logic (Parallax/Panning) + Hook-based 3D Tilt.
- **Performance:** Optimized WebM video tracks for simultaneous multi-video playback.

## 📂 Key Assets
- `/criteria_1.png` - `/criteria_4.png`: 3D mechanical artifacts for the Criteria section (Pass, Map, Monitor, Reel).
- `/camera.png`, `/light.png`, `/slate.png`, `/headphones.png`: Hand-cut broadcast artifacts.
- `/mic.png`: Hero microphone with 3D depth layers.
- `/FILM_STRIP-removebg-preview.png`: Scroll-driven parallax film tracks.

## 📝 Updating Content
- **Copy:** Most editorial copy is managed directly within the `.jsx` components (e.g., `TheFormat.jsx`, `TheSeries.jsx`).
- **Videos:** New output clips should be added to `public/` and registered in `VideoShowcase.jsx`.

## 🚀 Running Locally
1. `npm install`
2. `npm run dev`
