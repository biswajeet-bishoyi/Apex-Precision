# PRD.md
## Max Verstappen — The Apex Precision Experience
### Product Requirements Document v1.0

---

**Document Status**: Final  
**Last Updated**: 2025  
**Document Owner**: Creative Director  
**Engineering Lead**: Senior Frontend Engineer  
**Stakeholders**: Design, Engineering, Content, QA

---

## TABLE OF CONTENTS

1. Executive Summary
2. Vision Statement
3. Problem Statement
4. Goals & Objectives
5. Success Metrics
6. User Personas
7. User Stories
8. Functional Requirements
9. Non-Functional Requirements
10. Information Architecture
11. Design System Reference
12. Motion Design Specification
13. Page-by-Page Breakdown
14. Component Library Specification
15. Navigation System
16. Loading Experience
17. Accessibility Specification
18. SEO Strategy
19. Performance Budget
20. Edge Cases & Error States
21. Analytics & Instrumentation
22. Technical Architecture
23. Future Roadmap
24. Technical Risks & Mitigations
25. Milestones & Timeline
26. Acceptance Criteria

---

## 1. EXECUTIVE SUMMARY

The Max Verstappen Apex Precision Experience is a premium interactive web portfolio that redefines what a digital sports biography can be. This is not a traditional website. It is an interactive cinematic experience — a Formula One documentary that runs inside a browser.

The user does not "browse pages." They travel through the anatomy of the Red Bull RB19 — the car Max Verstappen drove to the 2023 Formula One World Championship. As they scroll, the camera journeys through each component of the car, and each component reveals a chapter in Verstappen's career.

The experience is built to the technical and aesthetic standards of Apple product launches, Igloo Inc interactive documentaries, and Netflix's Drive to Survive.

**Audience**: Formula One fans, design enthusiasts, motorsport engineers, recruiters, and casual visitors.

**Deliverable**: A single-page, scroll-driven, Three.js-powered Next.js application with cinematic animations, real-time telemetry-style data visualizations, and a complete biography of Max Verstappen's Formula One career.

---

## 2. VISION STATEMENT

> "To create the most immersive Formula One experience ever built for the browser — a place where engineering precision, cinematic storytelling, and data visualization converge around the greatest driver of his generation."

The experience should make visitors feel three things:

1. **Speed** — The scroll feels like acceleration. Motion has momentum. Everything moves with purpose and velocity.

2. **Precision** — Every element is intentional. The design language is borrowed from aerodynamic engineering. The UI reads like a cockpit HUD. The data feels like live telemetry.

3. **Awe** — When the experience ends, visitors should feel they have watched a documentary, not browsed a website.

---

## 3. PROBLEM STATEMENT

### The Current Landscape

Existing Formula One digital experiences fall into three categories:

1. **Official team websites**: Commercially driven, cluttered with sponsors, optimized for casual fans, shallow in storytelling depth.

2. **Wikipedia / biography sites**: Data-rich but visually dead. No personality, no motion, no narrative arc.

3. **Fan-made portfolios**: Passion-driven but technically limited. Static pages with embedded YouTube videos. No interactive storytelling.

### The Gap

There is no premium, interactive, cinematic digital experience for the world's most decorated active Formula One driver.

Formula One itself is one of the most visually spectacular sports on Earth. The engineering precision, the speed, the data density, the human drama — none of this is captured in any existing digital experience for Verstappen.

### The Opportunity

We build the experience that should exist: one that treats Max Verstappen's career with the same premium design language that Apple applies to its hardware, the same cinematic craft that Netflix's Drive to Survive applies to motorsport storytelling, and the same engineering precision that Red Bull Racing applies to aerodynamics.

---

## 4. GOALS & OBJECTIVES

### Primary Goals

| Goal | Description |
|------|-------------|
| G1 | Create an immersive scroll-driven journey through the RB19 car |
| G2 | Tell Verstappen's complete career story through interactive storytelling |
| G3 | Display statistics, records, and achievements as data art |
| G4 | Demonstrate the highest level of web animation and Three.js capability |
| G5 | Be shareable — the experience should generate social sharing organically |

### Secondary Goals

| Goal | Description |
|------|-------------|
| G6 | Maintain 60fps on mid-range hardware |
| G7 | Be fully accessible (WCAG 2.1 AA) |
| G8 | Load the first screen in under 2.5 seconds |
| G9 | Work on mobile with a gracefully degraded experience |
| G10 | Score 90+ on Lighthouse Performance |

---

## 5. SUCCESS METRICS

### Engagement Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Average session duration | > 3 minutes | Analytics |
| Scroll completion rate | > 60% reach Legacy section | Scroll depth tracking |
| Social share rate | > 8% of visitors share | Share button events |
| Bounce rate | < 25% | Analytics |
| Return visit rate | > 15% | Analytics |

### Technical Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| LCP | < 2.5s | Core Web Vitals |
| INP | < 100ms | Core Web Vitals |
| CLS | < 0.1 | Core Web Vitals |
| FPS during scroll | 60fps (desktop) / 30fps (mobile) | Chrome DevTools |
| Lighthouse Performance | > 90 | Lighthouse CI |
| Accessibility | > 95 | axe-core |
| Bundle size (initial) | < 80KB gzipped | Bundle analyzer |

---

## 6. USER PERSONAS

### Persona 1: The Devoted Fan

**Name**: Lucas, 26  
**Location**: Netherlands  
**Device**: MacBook Pro, iPhone 14  
**Occupation**: Software engineer  
**F1 knowledge**: Deep. Watches every race, follows every session.  
**Motivation**: Wants an experience that matches his passion for Verstappen. Currently no premium digital experience exists.  
**Pain Point**: Existing sites are boring, slow, or buried in sponsor clutter.  
**What he wants**: To feel the speed and drama of Verstappen's career through the screen.

### Persona 2: The Design Engineer

**Name**: Isabelle, 31  
**Location**: London  
**Device**: iMac, iPad Pro  
**Occupation**: UX Designer at a tech company  
**F1 knowledge**: Casual. Watches Drive to Survive.  
**Motivation**: Discovers the site via design newsletters (Awwwards, Brutalist Websites). She's drawn to motion design and Three.js experiences.  
**Pain Point**: Most F1 sites feel like sports apps, not design experiences.  
**What she wants**: Scroll effects, 3D animation, and premium visual craft.

### Persona 3: The Recruiter

**Name**: James, 40  
**Location**: Singapore  
**Device**: Windows laptop  
**Occupation**: Talent acquisition at a creative agency  
**F1 knowledge**: None.  
**Motivation**: Was sent the link by a candidate as a portfolio reference.  
**Pain Point**: Needs to evaluate the technical skill level quickly.  
**What he wants**: To be immediately impressed. To understand the depth of the technical and creative work.

### Persona 4: The Engineer

**Name**: Sofia, 28  
**Location**: Maranello  
**Device**: MacBook Air  
**Occupation**: Aerodynamics engineer (aspirational — she's a motorsport graduate)  
**F1 knowledge**: Deep. Engineering-focused.  
**Motivation**: Loves the technical side of F1. Intrigued by how data is visualized.  
**Pain Point**: F1 data is always shown in dry, functional interfaces.  
**What she wants**: To see F1 data treated as art. Telemetry as visual poetry.

---

## 7. USER STORIES

### Discovery & Entry

- **US-01**: As a first-time visitor, I see an immediate visual impression that communicates this is a premium experience, before I have scrolled at all.
- **US-02**: As a user on a slow connection, I see a branded loading screen that keeps me engaged while the experience loads.
- **US-03**: As a user who finds the site via a direct link to a specific section, the experience begins from the hero and automatically scrolls to the relevant section.

### Scroll Experience

- **US-04**: As a user who scrolls down, I feel like I am travelling through a Formula One car, with each scroll revealing a new part of the vehicle.
- **US-05**: As a user, each section of content appears naturally as part of the camera journey, not as a separate page.
- **US-06**: As a user, I can navigate to specific sections using the dot-navigation in the sidebar without losing the continuity of the experience.
- **US-07**: As a user on a mobile device, I experience a touch-optimized version of the scroll journey.

### Content Discovery

- **US-08**: As a fan, I can explore Verstappen's full career timeline from karting to Formula One.
- **US-09**: As a data enthusiast, I can see Verstappen's statistics displayed as animated, visually compelling data art.
- **US-10**: As a visitor, I can view all four World Championship years and the key achievements of each season.
- **US-11**: As a visitor, I can see the evolution of Verstappen's helmet designs across his career.
- **US-12**: As a visitor, I can read key quotes from Verstappen in a visually compelling format.
- **US-13**: As a visitor, I can view a gallery of iconic race moments.

### Interaction

- **US-14**: As a user, I can hover over interactive data elements to see additional information.
- **US-15**: As a user, I can follow Verstappen's team history and car evolution through an interactive timeline.
- **US-16**: As a user with `prefers-reduced-motion` enabled, I experience all content without motion discomfort — animations are either disabled or significantly simplified.

### Accessibility

- **US-17**: As a keyboard user, I can navigate through all content using Tab and arrow keys.
- **US-18**: As a screen reader user, all content is announced in a logical, meaningful sequence.

---

## 8. FUNCTIONAL REQUIREMENTS

### FR-001: Scroll-Driven 3D Experience
The website must feature a Three.js scene containing a 3D model of the Red Bull RB19. As the user scrolls, the camera must move through predefined keyframes around the car. Each keyframe must correspond to a content section.

**Acceptance**: Camera position changes smoothly as a function of scroll progress. There are no abrupt position jumps.

### FR-002: Loading Screen
The website must display a branded loading screen while assets (3D models, HDR, textures) are loading. The loading screen must show:
- The Max Verstappen Apex Precision wordmark
- A progress indicator (progress value derived from actual asset loading state)
- A loading animation (Lottie or CSS-animated)

**Acceptance**: Loading screen disappears only when the Three.js scene and critical assets are ready to render.

### FR-003: Hero Section
The hero section must:
- Present the RB19 in darkness, with only headlights and DRS glow visible
- Animate the car emerging from darkness as the user first arrives
- Display Max Verstappen's name in Bebas Neue at hero scale
- Display his number (#1), nationality (Dutch), and four championship years as HUD elements
- Include a "Scroll to Begin" prompt that animates on a loop

**Acceptance**: Hero entrance animation completes without any stutter. Text elements fade in with stagger animation.

### FR-004: Front Wing Section
As the camera approaches the front wing:
- The front wing must be illuminated with a focused spotlight
- Front wing must have an animated separation/reveal motion (wings deploy outward slightly, revealing carbon fiber underside)
- Statistics related to Verstappen's early career appear as telemetry overlays

**Acceptance**: Front wing animation synced to scroll. Statistics animate in on scroll entry.

### FR-005: Career Timeline Section
The career timeline must:
- Display chronological career entries: Karting, Formula 3, Toro Rosso (STR), Red Bull Racing
- Each entry shows: year range, team name, car model, key achievement
- Timeline entries animate in as scroll progresses (SECTOR archetype — staggered)
- The car 3D model shows the corresponding car from that era (or a texture/livery swap)

**Acceptance**: Timeline renders correctly for all screen sizes. Each entry animates on scroll.

### FR-006: Statistics Section
The statistics section must display the following metrics as animated counters:
- 70+ Race Wins
- 120+ Podiums
- 3300+ Championship Points
- 48+ Pole Positions
- 4 World Championships

Each metric must:
- Animate as a counter from 0 to its target value
- Use `snap: 1` for integer values
- Display a label in Inter font with telemetry styling
- Be grouped in a responsive data grid

**Acceptance**: All counters complete their animation within 2.0s of becoming visible.

### FR-007: Championships Section
The championships section must:
- Display each of the four championship years (2021, 2022, 2023, 2024)
- Each year displays as a Championship Badge with year, team, car number
- Championship badges animate in with a gold glow effect
- A brief summary of each championship season is displayed

**Acceptance**: Four badges visible. Gold glow animation plays on entry.

### FR-008: Records Section
The records section must display:
- Youngest F1 driver to start a race
- Youngest F1 race winner
- Youngest race leader
- Most race wins in a single season (record year/value)
- Most consecutive wins (record value)

Records are presented in telemetry panel style with animated counter reveals.

### FR-009: Helmet Evolution
The helmet section must:
- Display 3D models or high-quality renders of helmet variants
- Include: Lion helmet, Orange helmet, Red Bull helmet, Special editions
- Allow users to scroll through helmet variants
- Each helmet rotates slowly (5 rpm) on a virtual display stand

**Acceptance**: Helmet carousel is interactive. Smooth transitions between helmets.

### FR-010: Quotes Section
The quotes section must:
- Display iconic Verstappen quotes
- "Just drive flat out."
- "Winning is everything."
- Quotes are displayed in Montserrat 300 italic at large scale
- Quote text animates in character by character (SplitText + GSAP)
- A gold horizontal rule appears beneath each quote as a DrawSVG animation

**Acceptance**: Quote animation plays on first entry. No replay on subsequent passes (unless the user scrolls back up past the trigger).

### FR-011: Gallery Section
The gallery must:
- Display a collection of race moment images
- Images are arranged in a masonry or magazine-style grid
- Grid reveals via a staggered fade/scale animation
- Each image has a hover state showing race name, year, circuit

**Acceptance**: Gallery images are optimized WebP. Hover states work on desktop. Tap interaction on mobile.

### FR-012: Legacy Section
The final section must:
- Show the fully assembled RB19 from a beauty angle (wide shot)
- Display a full-car reveal animation (if this section was previously partially visible, the car assembles from components)
- Show a final summary of Verstappen's legacy: "4× World Champion"
- Include social sharing buttons
- Include a final quote or closing statement

**Acceptance**: Legacy section feels like the final frame of a documentary. The RB19 is fully visible.

### FR-013: Navigation
The website must include:
- A fixed side-navigation with dots representing each major section
- Active dot is highlighted in Championship Gold
- Hovering a dot shows the section name label
- Clicking a dot smoothly scrolls to that section (using GSAP ScrollTo)
- A hamburger menu on mobile that expands to show section list

**Acceptance**: Navigation works on all screen sizes. Active section updates correctly on scroll.

### FR-014: Cursor Follower (Desktop Only)
On desktop, a custom cursor follower must:
- Replace the default cursor
- Have a circular "sight" design in the style of a car's heads-up display
- Scale up slightly on interactive elements (links, buttons, 3D hover zones)
- Trail the actual cursor with a slight lag (spring physics)

**Acceptance**: Cursor follower is visible and responsive. Does not interfere with keyboard navigation (it is `pointer-events: none`).

### FR-015: Sound (Optional — Deferred to Phase 2)
Ambient F1 engine sounds may be added in a future phase. For Phase 1, there is no audio. No autoplay audio under any circumstances.

---

## 9. NON-FUNCTIONAL REQUIREMENTS

### NFR-001: Performance
- First Contentful Paint < 1.8s on broadband
- Time to Interactive < 3.5s on broadband
- 60fps during scroll on desktop (Chrome, 2021+ hardware)
- 30fps on mobile (iPhone 13+, mid-range Android)

### NFR-002: Browser Support
- Chrome 90+ (primary)
- Safari 15+ (secondary — WebGL 2.0 required)
- Firefox 90+ (secondary)
- Edge 90+ (tertiary)
- IE: Not supported. Show a friendly upgrade message.

### NFR-003: Accessibility
- WCAG 2.1 Level AA
- Screen reader compatible (VoiceOver, NVDA, JAWS)
- Keyboard navigable
- `prefers-reduced-motion` respected
- `prefers-color-scheme` note: Experience is dark-only. We do not provide a light mode. This is a design decision. The experience is inherently dark — like a racing garage.

### NFR-004: SEO
- Server-side rendered meta tags (Next.js App Router)
- Open Graph image
- Twitter Card
- Structured data (JSON-LD) for the Person entity (Max Verstappen)
- Descriptive `alt` text on all images

### NFR-005: Security
- No user data collection beyond analytics
- CSP headers configured
- No inline scripts

### NFR-006: Maintainability
- All content data in `constants/verstappenData.ts`. No hardcoded strings in components.
- All design tokens in CSS custom properties. No hardcoded values.
- TypeScript strict mode throughout.

---

## 10. INFORMATION ARCHITECTURE

### Content Hierarchy

```
The Apex Precision Experience
│
├── Hero
│   ├── Car Reveal (RB19 from darkness)
│   ├── Name + Number + Nationality
│   └── Championship Years (HUD overlay)
│
├── Front Wing → Career Introduction
│   ├── Driver Bio Snapshot
│   └── Career Path Overview
│
├── Suspension → Career Timeline
│   ├── Karting (2005-2014)
│   ├── Formula 3 (2014-2015)
│   ├── Toro Rosso STR10 (2015)
│   └── Red Bull Racing (2016-present)
│
├── Cockpit → Driver Profile
│   ├── Full Name, Birthdate, Nationality
│   ├── Residence, Height
│   └── Driving Style Attributes
│
├── Halo → Championships
│   ├── 2021 World Championship
│   ├── 2022 World Championship
│   ├── 2023 World Championship
│   └── 2024 World Championship
│
├── Statistics
│   ├── Race Wins (70+)
│   ├── Podiums (120+)
│   ├── Points (3300+)
│   ├── Pole Positions (48+)
│   └── Sprint Wins
│
├── Engine → Records
│   ├── Youngest F1 Driver
│   ├── Youngest F1 Winner
│   ├── Most Wins in a Season
│   └── Most Consecutive Wins
│
├── Rear Wing → Cars
│   ├── STR10
│   ├── RB12
│   ├── RB16B
│   ├── RB18
│   └── RB19
│
├── Exhaust → Quotes
│   ├── "Just drive flat out."
│   └── "Winning is everything."
│
├── Helmet Evolution
│   ├── Lion Design
│   ├── Orange Design
│   ├── Red Bull Design
│   └── Special Editions
│
├── Gallery
│   └── Iconic Race Moments
│
├── Team History & Rivals
│   ├── Toro Rosso Era
│   ├── Red Bull Ascent
│   └── Key Rivals (Hamilton, Leclerc, Pérez)
│
└── Legacy
    ├── Career Summary
    ├── Full RB19 Assembly
    └── Final Quote + Social Sharing
```

---

## 11. DESIGN SYSTEM REFERENCE

*(Refer to CLAUDE.md for complete token definitions. This section summarizes the design decisions and their rationale.)*

### Why This Visual Language?

**Carbon Black (`#111111`) as background**
Formula One cars are photographed in studios with near-black backgrounds to maximize contrast against the livery. The dark background also allows Three.js lighting to be precise and motivated — every light source has a reason.

**Racing Blue (`#0600EF`) as primary**
This is the exact Pantone equivalent used on Red Bull Racing's championship-era livery highlights. It connects the UI language directly to the car.

**Championship Gold (`#FFD700`) for achievements**
Gold is universally the color of the highest achievement. In Formula One, the championship trophy is gold-colored. This color is used sparingly — only for world championship content — to preserve its meaning.

**Bebas Neue for display type**
Bebas Neue is narrow, tall, and aggressive — it mirrors the profile of a Formula One car (long, low). It has no lowercase, which mirrors the ALL-CAPS nature of team branding and circuit signage in Formula One. At large sizes, it creates the visual impact of a racing number on a car door.

**Inter for data/interface type**
Inter was designed for screen legibility at small sizes and in data-dense interfaces. It is the natural choice for telemetry-style readouts, labels, and navigation items.

**HUD-inspired component style**
Every panel, card, and overlay is designed to look like it belongs in a Formula One cockpit display — not in a consumer app. Borders are 1px. Backgrounds are translucent. Labels use uppercase letter-spacing. Data values are prominent.

---

## 12. MOTION DESIGN SPECIFICATION

### 12.1 The Master Scroll Journey

The entire scroll journey maps to a single continuous variable: `scrollProgress` (0.0 → 1.0).

```
0.00 → 0.06   Hero: Car emergence from darkness
0.06 → 0.08   Transition: Camera moves toward front wing
0.08 → 0.18   Front Wing: Career overview appears
0.18 → 0.20   Transition: Camera slides along body to suspension
0.20 → 0.30   Suspension: Career timeline
0.30 → 0.32   Transition: Camera rises to cockpit level
0.32 → 0.42   Cockpit: Driver profile
0.42 → 0.44   Transition: Camera focuses on halo
0.44 → 0.52   Halo: Championships
0.52 → 0.54   Transition: Camera pans back, statistics appear
0.54 → 0.62   Statistics: Data visualization
0.62 → 0.64   Transition: Camera moves to engine cover
0.64 → 0.72   Engine: Records
0.72 → 0.74   Transition: Camera moves toward rear
0.74 → 0.82   Rear Wing: Cars & Helmets
0.82 → 0.84   Transition: Camera focuses on exhaust
0.84 → 0.88   Exhaust: Quotes
0.88 → 0.92   Gallery: Race moments
0.92 → 1.00   Legacy: Full car assembly + closing
```

### 12.2 Camera Keyframes

Camera positions are defined in a right-handed coordinate system with the car centered at origin. Y is up.

```ts
export const CAMERA_KEYFRAMES: CameraKeyframe[] = [
  // Hero — bird's-eye approaching nose
  { progress: 0.00, position: [0, 3.0, 6.0], target: [0, 0.5, 0], fov: 45 },
  { progress: 0.05, position: [0, 1.5, 3.5], target: [0, 0.3, 0], fov: 40 },

  // Front Wing — low camera, front-left angle
  { progress: 0.08, position: [-1.5, 0.4, 2.0], target: [-0.5, 0.1, 0.5], fov: 35 },
  { progress: 0.18, position: [-2.0, 0.6, 1.5], target: [-0.5, 0.2, 0], fov: 35 },

  // Suspension — side profile, left side
  { progress: 0.20, position: [-3.0, 0.8, 0.5], target: [0, 0.5, 0], fov: 40 },
  { progress: 0.30, position: [-3.5, 1.0, 0], target: [0, 0.6, 0], fov: 38 },

  // Cockpit — eye-level, slightly right
  { progress: 0.32, position: [0.8, 1.2, 1.0], target: [0, 0.9, 0], fov: 50 },
  { progress: 0.42, position: [0.5, 1.1, 0.5], target: [0, 0.9, -0.2], fov: 45 },

  // Halo — tight shot of halo
  { progress: 0.44, position: [0, 1.8, 0.8], target: [0, 1.2, 0], fov: 35 },
  { progress: 0.52, position: [0, 2.0, 1.2], target: [0, 1.0, 0], fov: 40 },

  // Statistics — pull back, wide view
  { progress: 0.54, position: [2.5, 2.0, 3.0], target: [0, 0.5, 0], fov: 55 },
  { progress: 0.62, position: [3.0, 1.5, 2.0], target: [0, 0.5, 0], fov: 50 },

  // Engine — rear quarter, engine cover level
  { progress: 0.64, position: [1.5, 1.5, -1.0], target: [0, 0.8, -0.5], fov: 45 },
  { progress: 0.72, position: [2.0, 1.2, -1.5], target: [0, 0.8, -1.0], fov: 42 },

  // Rear Wing — behind car, looking at rear wing
  { progress: 0.74, position: [0, 1.5, -3.0], target: [0, 1.2, 0], fov: 40 },
  { progress: 0.82, position: [0, 2.0, -3.5], target: [0, 1.0, 0], fov: 45 },

  // Exhaust — low, rear corner, exhaust glowing
  { progress: 0.84, position: [1.0, 0.5, -2.5], target: [0.5, 0.3, -1.5], fov: 30 },
  { progress: 0.88, position: [1.5, 0.8, -2.0], target: [0, 0.4, -1.2], fov: 35 },

  // Legacy — wide, side view, full car
  { progress: 0.92, position: [5.0, 2.0, 0], target: [0, 0.5, 0], fov: 50 },
  { progress: 1.00, position: [4.5, 1.5, 1.0], target: [0, 0.5, 0], fov: 48 },
]
```

### 12.3 Lighting Choreography

Lighting changes are also scroll-driven:

| Progress | Scene | Primary Light | Accent Light |
|----------|-------|--------------|-------------|
| 0.00–0.06 | Darkness | None | DRS glow only (blue) |
| 0.06–0.18 | Front wing reveal | Spot from above-front (white, 0.8) | Left side rim (blue, 0.3) |
| 0.18–0.42 | Cockpit approach | Studio 3-point | Gold fill from below-right |
| 0.42–0.52 | Championships | Top spotlight (gold, intense) | Blue ambient |
| 0.52–0.72 | Data/Engine | Cold studio light | Telemetry screen glow |
| 0.72–0.88 | Exhaust | Red-orange exhaust glow | Blue rim |
| 0.88–1.00 | Legacy | Full beauty lighting | Championship gold fill |

### 12.4 Particle System Specification

**Carbon Fiber Particles** (Section transitions)
- Count: 200 per transition
- Size: 1–3px
- Color: `rgba(255,255,255,0.4)` to `rgba(255,255,255,0.0)`
- Velocity: Follows camera movement direction, slight outward spread
- Lifetime: 1.2s
- Emission: Burst on section exit

**Exhaust Particles** (Section 12, atmospheric)
- Count: 500
- Size: 2–8px
- Color: `rgba(255,130,50,0.6)` → `rgba(255,255,255,0.0)`
- Velocity: Backward along car axis, slight upward drift
- Lifetime: 2.0s looping
- Emission: Continuous while in viewport

**Background Dust** (Atmospheric, all sections)
- Count: 800
- Size: 1px
- Color: `rgba(255,255,255,0.08)`
- Velocity: Very slow, random directions
- Lifetime: Infinite

### 12.5 Per-Section Animation Specification

#### HERO SECTION

| Element | Animation | Duration | Easing | Trigger |
|---------|-----------|----------|--------|---------|
| RB19 Emergence | Directional light intensity 0→1 | 2.0s | Expo Out | On load complete |
| Hero Title "MAX" | SplitText chars, translateY 100%→0 | 0.8s, stagger 0.025s | Apex | 0.5s after load |
| Hero Title "VERSTAPPEN" | SplitText chars, translateY 100%→0 | 0.8s, stagger 0.02s | Apex | 0.7s after load |
| Championship Years HUD | FadeIn + translateX(-8px→0), stagger each year | 0.4s each, 0.3s stagger | DRS | 1.2s after load |
| Car Number #1 | Scale 1.2→1 + fadeIn | 0.6s | Sector | 0.9s after load |
| Scroll Prompt | Infinite oscillation translateY 0→8px→0 | 2.0s loop | Sine In Out | 2.0s after load |
| DRS LED glow | Pulse animation (opacity 0.6→1→0.6) | 1.5s loop | Sine In Out | Immediate |

#### FRONT WING SECTION (Career Intro)

| Element | Animation | Duration | Easing | Trigger |
|---------|-----------|----------|--------|---------|
| Front Wing Separation | Wings translate outward X ±2cm | 1.5s | Expo Out | Progress 0.08 |
| Section Label "FRONT WING" | DrawSVG underline reveal | 0.6s | Apex | Progress 0.09 |
| Career Stats Telemetry | Panel slides from left (translateX -40px→0) | 0.5s | Apex | Progress 0.10 |
| Bio text | Fade + translateY 16px→0, line by line | 0.4s, stagger 0.08s | Apex | Progress 0.11 |
| Blueprint Grid Lines | DrawSVG line reveal, top to bottom | 1.2s | Linear | Progress 0.08 |

#### CAREER TIMELINE SECTION

| Element | Animation | Duration | Easing | Trigger |
|---------|-----------|----------|--------|---------|
| Timeline vertical line | DrawSVG grow from top | 1.5s | Expo Out | Progress 0.22 |
| Timeline node 1 (Karting) | Scale 0→1 + glow pulse | 0.4s | DRS | Progress 0.22 |
| Karting content | FadeIn + translateX -24px→0 | 0.5s | Apex | Progress 0.22 |
| Timeline node 2 (F3) | Scale 0→1 + glow pulse | 0.4s | DRS | Progress 0.25 |
| F3 content | FadeIn + translateX -24px→0 | 0.5s | Apex | Progress 0.25 |
| Timeline node 3 (Toro Rosso) | Scale 0→1 + glow pulse | 0.4s | DRS | Progress 0.27 |
| STR content | FadeIn + translateX -24px→0 | 0.5s | Apex | Progress 0.27 |
| Timeline node 4 (Red Bull) | Scale 0→1 + GOLD glow | 0.4s | DRS | Progress 0.29 |
| RBR content | FadeIn + translateX -24px→0 | 0.5s | Apex | Progress 0.29 |

#### DRIVER PROFILE SECTION (Cockpit)

| Element | Animation | Duration | Easing | Trigger |
|---------|-----------|----------|--------|---------|
| Section Header | SplitText char reveal | 0.6s | Apex | Progress 0.33 |
| Driver info grid items | SECTOR stagger, translateY 20px→0 | 0.5s, 0.08s stagger | Apex | Progress 0.34 |
| Driving style bars | Width 0%→value% | 1.0s, stagger 0.1s | Expo Out | Progress 0.36 |
| HUD overlay frame | DrawSVG corner brackets | 0.8s | Linear | Progress 0.33 |

#### CHAMPIONSHIPS SECTION (Halo)

| Element | Animation | Duration | Easing | Trigger |
|---------|-----------|----------|--------|---------|
| Section Header | SplitText chars | 0.6s | Apex | Progress 0.45 |
| Championship badge 2021 | Scale 0→1 + gold glow | 0.6s | DRS | Progress 0.45 |
| Championship badge 2022 | Scale 0→1 + gold glow | 0.6s | DRS | Progress 0.47 + delay 0.3s |
| Championship badge 2023 | Scale 0→1 + gold glow | 0.6s | DRS | Progress 0.47 + delay 0.6s |
| Championship badge 2024 | Scale 0→1 + gold glow | 0.6s | DRS | Progress 0.47 + delay 0.9s |
| Gold particle burst | 200 particles emit from badge | 1.2s | N/A | On each badge reveal |

#### STATISTICS SECTION

| Element | Animation | Duration | Easing | Trigger |
|---------|-----------|----------|--------|---------|
| Grid container | FadeIn | 0.4s | DRS | Progress 0.55 |
| Wins counter (70+) | Count 0→70 | 2.0s | Expo Out | Progress 0.55 |
| Podiums counter (120+) | Count 0→120 | 2.0s | Expo Out | Progress 0.55 + 0.1s delay |
| Points counter (3300+) | Count 0→3300 | 2.0s | Expo Out | Progress 0.55 + 0.2s delay |
| Poles counter (48+) | Count 0→48 | 2.0s | Expo Out | Progress 0.55 + 0.3s delay |
| Data labels | SECTOR stagger | 0.3s, 0.05s stagger | Apex | Progress 0.55 |
| Telemetry line graphs | DrawSVG path reveal | 1.5s | Linear | Progress 0.57 |

#### RECORDS SECTION (Engine)

| Element | Animation | Duration | Easing | Trigger |
|---------|-----------|----------|--------|---------|
| Engine cover reveal (3D) | Engine cover rotates/opens | 1.5s scrub | N/A | Progress 0.64 |
| Record items | SECTOR stagger, translateY 24px→0 | 0.5s, 0.1s stagger | Apex | Progress 0.65 |
| Record highlight bars | Width 0→100% | 0.8s, stagger 0.12s | Expo Out | Progress 0.66 |

#### QUOTES SECTION (Exhaust)

| Element | Animation | Duration | Easing | Trigger |
|---------|-----------|----------|--------|---------|
| Quote 1 text | SplitText char reveal | 1.0s, 0.015s stagger | Apex | Progress 0.85 |
| Quote 1 underline | DrawSVG gold line | 0.6s | Linear | After text complete |
| Quote 2 text | SplitText char reveal | 1.0s, 0.015s stagger | Apex | Progress 0.86 |
| Quote 2 underline | DrawSVG gold line | 0.6s | Linear | After text complete |
| Exhaust glow intensifies | Point light intensity increases | Scrub | N/A | Progress 0.84–0.88 |

#### GALLERY SECTION

| Element | Animation | Duration | Easing | Trigger |
|---------|-----------|----------|--------|---------|
| Gallery grid container | FadeIn | 0.5s | Apex | Progress 0.89 |
| Image items | Scale 0.9→1 + FadeIn, stagger | 0.6s, 0.08s stagger | DRS | Progress 0.89 |
| Hover state caption | TranslateY 100%→0 | 0.3s | Apex | On hover |

#### LEGACY SECTION

| Element | Animation | Duration | Easing | Trigger |
|---------|-----------|----------|--------|---------|
| Full car reveal (3D) | Beauty lighting crossfade | 2.0s | Championship | Progress 0.92 |
| "4× WORLD CHAMPION" | SplitText, dramatic slow reveal | 1.5s, 0.04s stagger | Apex | Progress 0.94 |
| Career summary text | FadeIn block by block | 0.5s per block | Apex | Progress 0.95 |
| Social share buttons | Scale 0→1, stagger | 0.3s, 0.1s stagger | DRS | Progress 0.97 |

---

## 13. PAGE-BY-PAGE BREAKDOWN

### 13.1 HERO SECTION

**Purpose**: First impression. Creates the emotional tone for the entire experience.

**Three.js Scene State**:
- Camera: High, overhead, looking down at car nose
- Car: 90% in darkness. Only DRS wing LEDs (blue, glowing) and headlight areas visible.
- Lighting: 1× directional light (intensity 0, will animate to 0.3), point lights at LED positions
- Atmosphere: Subtle background dust particles

**HTML Layer**:
```
HeroSection
├── HeroBackground (full-screen, z-0)
├── HeroContent (centered, z-10)
│   ├── NumberBadge ("#1")
│   ├── HeroTitle ("MAX VERSTAPPEN")
│   ├── HeroSubtitle ("The Apex Precision Experience")
│   ├── ChampionshipYearsHUD (2021 | 2022 | 2023 | 2024)
│   └── ScrollPrompt ("Scroll to Begin" + animated arrow)
└── HeroHUD (top-right, telemetry style)
    ├── DataLabel ("NATIONALITY" / "DUTCH")
    ├── DataLabel ("HEIGHT" / "1.81M")
    └── DataLabel ("TEAM" / "ORACLE RED BULL RACING")
```

**Accessibility**: `h1` contains "MAX VERSTAPPEN". The decorative elements are `aria-hidden`. The HUD information is also in the following semantic content sections.

**Edge Cases**:
- If WebGL fails: Static photo of RB19 in dark studio replaces Three.js canvas. Hero content remains.
- If fonts fail to load: System fallback (Arial Narrow) is acceptable for Bebas Neue.

---

### 13.2 FRONT WING SECTION

**Purpose**: Career introduction. Uses the front wing's aerodynamic precision as a metaphor for the surgical early career of Verstappen.

**Three.js Scene State**:
- Camera: Low, front-left angle, looking at front wing
- Car: Front wing illuminated with focused spot. Rest of car visible but darker.
- Animation: Front wing elements (two planes) translate outward ±2 units on scroll entry, revealing the carbon fiber understructure

**Content**:
```
FrontWingSection
├── SectionLabel ("FRONT WING / CAREER OVERVIEW")
├── BlueprintGrid (SVG technical illustration overlay)
├── CareerIntroText
│   └── "Born September 30, 1997, in Hasselt, Belgium..."
│       "Racing runs in the blood — son of former F1 driver Jos Verstappen..."
└── TelemetryPanel (top-right overlay)
    ├── DataLabel ("CAR" / "RB19")
    ├── DataLabel ("SEASON" / "2023")
    ├── DataLabel ("WINS" / "19")
    └── DataLabel ("POINTS" / "575")
```

---

### 13.3 CAREER TIMELINE SECTION

**Purpose**: Chronological narrative of Verstappen's rise. Each node on the timeline corresponds to a career phase.

**Three.js Scene State**:
- Camera: Side profile, left side of car, suspension visible
- Car: Side-lit from left. Suspension components subtly illuminated.

**Timeline Nodes**:

| Node | Era | Years | Detail |
|------|-----|-------|--------|
| 1 | Karting | 2005–2014 | Junior karting → European and world karting titles |
| 2 | Formula 3 | 2014–2015 | Van Amersfoort Racing, won F3 debut, promoted to F1 at 17 |
| 3 | Toro Rosso / STR10 | 2015 | Youngest F1 starter (17 years, 166 days) |
| 4 | Red Bull Racing | 2016– | First Red Bull race: Spain 2016, won immediately |

**Content Structure**:
```
TimelineSection
├── SectionLabel ("CAREER TIMELINE")
├── TimelineTrack (vertical line SVG)
│   ├── TimelineNode (karting)
│   │   ├── NodeDot (circle, color: --color-text-secondary)
│   │   ├── NodeYear ("2005–2014")
│   │   ├── NodeTeam ("Karting")
│   │   └── NodeDetail (description text)
│   ├── TimelineNode (F3)
│   │   ├── NodeDot
│   │   ├── NodeYear ("2014–2015")
│   │   ├── NodeTeam ("Formula 3 / Van Amersfoort Racing")
│   │   └── NodeDetail
│   ├── TimelineNode (STR / Toro Rosso)
│   │   ├── NodeDot (Speed Red)
│   │   ├── NodeYear ("2015")
│   │   ├── NodeTeam ("Scuderia Toro Rosso")
│   │   └── NodeDetail ("Youngest ever Formula One driver at debut")
│   └── TimelineNode (Red Bull)
│       ├── NodeDot (Championship Gold)
│       ├── NodeYear ("2016–Present")
│       ├── NodeTeam ("Oracle Red Bull Racing")
│       └── NodeDetail ("4× World Champion")
└── CarImage (right: era-appropriate car silhouette)
```

---

### 13.4 DRIVER PROFILE SECTION

**Purpose**: Who is Max Verstappen as a human being and as a driver?

**Three.js Scene State**:
- Camera: Eye-level, cockpit angle. The steering wheel is in partial view. The halo frames the upper screen.

**Content**:
```
DriverProfileSection
├── SectionLabel ("DRIVER PROFILE / COCKPIT")
├── HUDFrame (SVG corner bracket overlay)
├── ProfileGrid
│   ├── ProfileItem ("FULL NAME" / "Max Emilian Verstappen")
│   ├── ProfileItem ("NICKNAME" / "Mad Max")
│   ├── ProfileItem ("BORN" / "30 September 1997")
│   ├── ProfileItem ("NATIONALITY" / "Dutch / Belgian")
│   ├── ProfileItem ("RESIDENCE" / "Monaco")
│   ├── ProfileItem ("HEIGHT" / "1.81m")
│   ├── ProfileItem ("TEAM" / "Oracle Red Bull Racing")
│   └── ProfileItem ("CAR NUMBER" / "#1")
└── DrivingStyleSection
    ├── StyleBar ("LATE BRAKING" / 95%)
    ├── StyleBar ("TYRE MANAGEMENT" / 88%)
    ├── StyleBar ("WET WEATHER" / 97%)
    ├── StyleBar ("AGGRESSIVENESS" / 94%)
    └── StyleBar ("QUALIFYING PACE" / 96%)
```

**DrivingStyleBar Component**:
Each bar is a horizontal progress bar with:
- Label: Inter, 11px, uppercase, letter-spacing 0.12em
- Value text: Inter, 14px, bold
- Bar: `--color-racing-blue` fill, animated from 0% width on scroll entry
- Background: `rgba(255,255,255,0.06)`

---

### 13.5 CHAMPIONSHIPS SECTION

**Purpose**: The centerpiece of the experience. Four world championships demand visual impact.

**Three.js Scene State**:
- Camera: Tight on halo. The halo glows gold.
- The RB19 halo receives a gold point light to create the appearance of championship trophies reflecting.

**Content**:
```
ChampionshipsSection
├── SectionLabel ("WORLD CHAMPIONSHIPS / HALO")
├── ChampionshipCount ("4×" in massive Bebas Neue, gold)
├── ChampionshipBadgeGrid
│   ├── ChampionshipBadge (2021)
│   │   ├── BadgeYear ("2021")
│   │   ├── BadgeSubtitle ("Abu Dhabi Grand Prix")
│   │   └── BadgeGlow (gold radial gradient)
│   ├── ChampionshipBadge (2022)
│   │   ├── BadgeYear ("2022")
│   │   └── BadgeSubtitle ("Japanese Grand Prix")
│   ├── ChampionshipBadge (2023)
│   │   ├── BadgeYear ("2023")
│   │   └── BadgeSubtitle ("Qatar Grand Prix")
│   └── ChampionshipBadge (2024)
│       ├── BadgeYear ("2024")
│       └── BadgeSubtitle ("Las Vegas Grand Prix")
└── ChampionshipNote ("Most consecutive championships since Michael Schumacher")
```

**ChampionshipBadge Component**:
```tsx
interface ChampionshipBadgeProps {
  year: string
  circuit: string
  animationDelay: number
}
```
- Shape: Circular or hexagonal, 160px
- Border: 2px solid `--color-championship-gold`
- Background: `rgba(255,215,0,0.06)`
- Box shadow on hover: `0 0 32px rgba(255,215,0,0.4)`
- Entrance: Scale 0→1 + Z-rotation -5°→0° + gold glow

---

### 13.6 STATISTICS SECTION

**Purpose**: Numbers tell the story. Data becomes art.

**Content**:
```
StatisticsSection
├── SectionLabel ("BY THE NUMBERS")
├── StatGrid
│   ├── StatCard ("70+" / "RACE WINS" / counter animation)
│   ├── StatCard ("120+" / "PODIUMS" / counter animation)
│   ├── StatCard ("3300+" / "POINTS" / counter animation)
│   ├── StatCard ("48+" / "POLE POSITIONS" / counter animation)
│   └── StatCard ("4×" / "WORLD TITLES" / counter animation, gold)
└── TelemetryGraph (historical wins-per-season bar chart)
    ├── BarChart (years on X, wins on Y, SVG-rendered)
    ├── ChartLabel X ("SEASON")
    └── ChartLabel Y ("WINS")
```

**StatCard Component**:
```tsx
interface StatCardProps {
  value: number
  suffix: string
  label: string
  isGold?: boolean
  animationDelay: number
}
```
- Background: Telemetry panel style (glass, 1px border)
- Value: Inter 700, `clamp(40px, 6vw, 80px)`
- Label: Inter 500, 11px, uppercase, letter-spacing 0.12em
- Gold variant: `--color-championship-gold` border and value color

**TelemetryGraph**:
The season wins chart is an SVG-rendered bar chart (no external charting library). Bars grow from bottom to top with a `DrawSVG`-style animation. Bars use `--color-racing-blue` with the record-season bar in `--color-speed-red`.

---

### 13.7 RECORDS SECTION

**Purpose**: Verstappen's records cement his historical legacy.

**Content**:
```
RecordsSection
├── SectionLabel ("RECORDS / ENGINE ROOM")
├── RecordList
│   ├── RecordItem
│   │   ├── RecordIcon (SVG)
│   │   ├── RecordTitle ("Youngest Formula One Driver")
│   │   ├── RecordValue ("17 years, 166 days")
│   │   └── RecordBar (visual progress, red accent)
│   ├── RecordItem
│   │   ├── RecordTitle ("Youngest Formula One Race Winner")
│   │   ├── RecordValue ("18 years, 228 days — Spain 2016")
│   │   └── RecordBar
│   ├── RecordItem
│   │   ├── RecordTitle ("Most Wins in a Single Season")
│   │   ├── RecordValue ("19 wins — 2023")
│   │   └── RecordBar
│   └── RecordItem
│       ├── RecordTitle ("Most Consecutive Race Wins")
│       ├── RecordValue ("10 wins — 2023")
│       └── RecordBar
└── RecordNote ("Breaking Schumacher's all-time records")
```

---

### 13.8 CARS SECTION

**Purpose**: The evolution of Verstappen's machinery. Each car tells a chapter of the story.

**Content**:
```
CarsSection
├── SectionLabel ("THE MACHINES")
├── CarEvolutionTimeline
│   ├── CarEntry (STR10 / 2015 / "The Beginning")
│   ├── CarEntry (RB12 / 2016 / "The Debut Win — Spain")
│   ├── CarEntry (RB16B / 2021 / "The First Championship")
│   ├── CarEntry (RB18 / 2022 / "Back-to-Back")
│   └── CarEntry (RB19 / 2023 / "The Greatest Season")
└── ActiveCarDisplay (3D model or high-quality render of selected car)
```

---

### 13.9 HELMETS SECTION

**Purpose**: Helmet designs as personal expression. Each design tells a story.

**Content**:
```
HelmetsSection
├── SectionLabel ("HELMET EVOLUTION")
├── HelmetCarousel
│   ├── HelmetDisplay (Lion Design / "National Pride")
│   ├── HelmetDisplay (Orange / "Dutch Wave")
│   ├── HelmetDisplay (Red Bull / "Team Identity")
│   └── HelmetDisplay (Special Editions / "One-Off Designs")
└── HelmetInfo
    ├── HelmetName
    ├── HelmetYear
    └── HelmetDescription
```

Each `HelmetDisplay` shows the helmet on a virtual display stand, rotating at 5rpm. Three.js or high-quality PNG with CSS 3D transform rotation is acceptable.

---

### 13.10 QUOTES SECTION

**Purpose**: Verstappen's voice. Direct. Unfiltered. Definitive.

**Content**:
```
QuotesSection
├── SectionLabel ("IN HIS OWN WORDS")
├── QuoteBlock
│   ├── QuoteText ("Just drive flat out.")
│   └── QuoteUnderline (SVG gold line, DrawSVG reveal)
└── QuoteBlock
    ├── QuoteText ("Winning is everything.")
    └── QuoteUnderline (SVG gold line)
```

**QuoteBlock Component**:
- Font: Montserrat 300 italic
- Size: `clamp(28px, 4vw, 64px)`
- Color: `--color-text-primary`
- No quotation mark characters
- Em-dash prefix: "— Max Verstappen" in Montserrat 400, `--color-text-secondary`, 14px

---

### 13.11 GALLERY SECTION

**Purpose**: Iconic visual moments from the career.

**Content**:
```
GallerySection
├── SectionLabel ("ICONIC MOMENTS")
├── GalleryGrid
│   ├── GalleryItem (Spain 2016 — debut win)
│   ├── GalleryItem (Abu Dhabi 2021 — championship moment)
│   ├── GalleryItem (Spa 2022 — wet weather mastery)
│   ├── GalleryItem (Japan 2023 — fastest season)
│   ├── GalleryItem (Monaco — street circuit maestro)
│   └── GalleryItem (Brazil 2022 — legendary comeback)
└── GalleryCaption (appears on hover)
```

**GalleryGrid Layout**:
- Desktop: Masonry layout, 3 columns, variable heights
- Mobile: 2 columns, uniform height
- Hover: Dark overlay slides up from bottom, caption fades in

---

### 13.12 LEGACY SECTION

**Purpose**: The finale. A full RB19 beauty shot. A statement.

**Three.js Scene State**:
- Camera: 3/4 front angle, full car in frame, classic motorsport photography angle
- Lighting: Full beauty lighting setup. Soft key from front-left, rim light from rear-right, gold fill from above.

**Content**:
```
LegacySection
├── FullCarReveal (Three.js, car fully lit)
├── LegacyTitle ("4× WORLD CHAMPION" in massive Bebas Neue + gold)
├── LegacySummary
│   └── "From the youngest driver in Formula One history to its greatest active competitor..."
├── SponsorsStrip
│   ├── SponsorLogo (Oracle)
│   ├── SponsorLogo (Red Bull)
│   ├── SponsorLogo (TAG Heuer)
│   └── SponsorLogo (Mobil 1)
└── SharingPanel
    ├── ShareButton (Twitter/X)
    ├── ShareButton (Copy Link)
    └── ShareLabel ("Share the Experience")
```

---

## 14. COMPONENT LIBRARY SPECIFICATION

### TelemetryPanel

```tsx
interface TelemetryPanelProps {
  title?: string
  items: Array<{
    label: string
    value: string | number
    highlight?: 'gold' | 'red' | 'blue'
  }>
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: 'sm' | 'md' | 'lg'
}
```

Visual spec:
- Background: `rgba(255,255,255,0.04)` + `backdrop-filter: blur(12px)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Border radius: `4px` (minimal — this is engineered, not rounded)
- Padding: `24px`
- Title: Inter 11px, uppercase, letter-spacing 0.16em, `--color-text-tertiary`
- Label: Inter 11px, uppercase, letter-spacing 0.12em, `--color-text-secondary`
- Value: Inter 14px, 600 weight, `--color-text-primary`
- Corner bracket (SVG): `2px` stroke, `--color-border-default`

### StatCard

```tsx
interface StatCardProps {
  value: number
  suffix?: string
  label: string
  sublabel?: string
  variant?: 'default' | 'gold' | 'championship'
  animationDelay?: number
}
```

### ChampionshipBadge

```tsx
interface ChampionshipBadgeProps {
  year: string
  venue: string
  animationDelay: number
}
```

### SectionLabel

```tsx
interface SectionLabelProps {
  eyebrow: string       // e.g., "FRONT WING"
  slash?: string        // e.g., "CAREER OVERVIEW"
  alignment?: 'left' | 'center'
}
```

Visual spec: `eyebrow / slash` format. Eyebrow in `--color-speed-red`, slash in `--color-text-tertiary`. Both Inter, 11px, uppercase, letter-spacing 0.16em.

### ProgressIndicator

```tsx
interface ProgressIndicatorProps {
  sections: Array<{
    id: string
    label: string
  }>
  activeSection: string
  onNavigate: (sectionId: string) => void
}
```

Visual: Vertical column of 3px × 3px dots on right side of screen. Active: `--color-championship-gold`, 8px diameter. Inactive: `rgba(255,255,255,0.2)`, 4px diameter. Hover label appears to the left of the dot.

### LoadingScreen

```tsx
interface LoadingScreenProps {
  progress: number  // 0-100
  onComplete: () => void
}
```

Visual spec:
- Full-screen dark background (`--color-carbon-black`)
- Centered wordmark: "MAX VERSTAPPEN" in Bebas Neue 48px
- Subtitle: "APEX PRECISION EXPERIENCE" in Inter 11px uppercase
- Progress bar: Thin 1px line, `--color-speed-red` fill, at bottom of screen
- Progress value: "LOADING 74%" in Inter 11px, `--color-text-tertiary`

---

## 15. NAVIGATION SYSTEM

### Primary Navigation

Fixed, right side, vertical. Always visible.

```tsx
const NAVIGATION_SECTIONS = [
  { id: 'hero', label: 'Start' },
  { id: 'front-wing', label: 'Career' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'cockpit', label: 'Driver' },
  { id: 'championships', label: 'Championships' },
  { id: 'statistics', label: 'Statistics' },
  { id: 'records', label: 'Records' },
  { id: 'cars', label: 'Cars' },
  { id: 'quotes', label: 'Quotes' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'legacy', label: 'Legacy' },
]
```

### Section Label (Upper Left)

Fixed. Updates as sections change. Shows current section name. Format: `SECTION / SUBSECTION`. Uses GSAP to crossfade between section names when active section changes.

### Mobile Navigation

- Hamburger icon (top right)
- Expanded menu: slides in from right, full-height dark panel
- Section list with section numbers and names
- Tap to navigate using GSAP ScrollTo

---

## 16. LOADING EXPERIENCE

### Loading Sequence

**Phase 1 — Instant Frame (0–200ms)**
The loading screen appears immediately. No FOUC (flash of unstyled content). This is a Server Component that renders before any JavaScript.

**Phase 2 — Font & CSS Loading (200–800ms)**
Fonts load via `next/font`. The loading screen displays the wordmark.

**Phase 3 — Three.js Bootstrap (800–2500ms)**
Three.js initializes. GLTF loader downloads and parses the car model. Loading progress updates the progress bar.

**Phase 4 — Scene Ready (2500ms–)**
The Three.js scene is ready. The loading screen plays its exit animation: the progress bar completes, the screen fades out with a motion blur wipe. The hero section fades in.

### Loading Progress Calculation

```ts
// Progress = weighted average of asset loading states
const progress = (
  fontsProgress * 0.1 +
  modelProgress * 0.7 +    // Car model is the heaviest asset
  hdriProgress * 0.2
)
```

---

## 17. ACCESSIBILITY SPECIFICATION

### Skip Navigation

The first focusable element is a visually hidden "Skip to main content" link:

```html
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

### Focus Management

When the user clicks a navigation dot to scroll to a section, focus moves to that section's heading after the scroll completes.

### Landmark Regions

```html
<body>
  <a href="#main">Skip to main content</a>
  <nav aria-label="Section navigation"><!-- dot nav --></nav>
  <main id="main">
    <section id="hero" aria-label="Hero">
    <section id="timeline" aria-label="Career Timeline">
    <!-- etc. -->
  </main>
  <footer><!-- social + credits --></footer>
</body>
```

### Reduced Motion Fallback

When `prefers-reduced-motion: reduce` is active:
- Three.js scene is static (no camera animation). Car is shown in the beauty position.
- All scroll-triggered animations are replaced with CSS transitions (opacity only, 0.3s)
- Counter animations are replaced with static final values
- Particle systems are hidden entirely

---

## 18. SEO STRATEGY

### Meta Tags

```html
<title>Max Verstappen — The Apex Precision Experience</title>
<meta name="description" content="An immersive Formula One experience. Explore the career, records, and legacy of 4× World Champion Max Verstappen through a scroll-driven 3D journey." />

<!-- Open Graph -->
<meta property="og:title" content="Max Verstappen — The Apex Precision Experience" />
<meta property="og:description" content="An immersive Formula One experience. 4× World Champion." />
<meta property="og:image" content="/images/og/og-image.jpg" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Max Verstappen — The Apex Precision Experience" />
<meta name="twitter:image" content="/images/og/og-image.jpg" />
```

### Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Max Verstappen",
  "alternateName": "Mad Max",
  "birthDate": "1997-09-30",
  "birthPlace": "Hasselt, Belgium",
  "nationality": "Dutch",
  "jobTitle": "Formula One Driver",
  "worksFor": {
    "@type": "SportsTeam",
    "name": "Oracle Red Bull Racing"
  },
  "award": [
    "2021 Formula One World Championship",
    "2022 Formula One World Championship",
    "2023 Formula One World Championship",
    "2024 Formula One World Championship"
  ]
}
```

---

## 19. PERFORMANCE BUDGET

### Asset Budget

| Asset Type | Budget | Enforcement |
|-----------|--------|-------------|
| Initial JS bundle | < 80KB gzipped | Bundle analyzer in CI |
| Total JS (lazy loaded) | < 800KB gzipped | Bundle analyzer |
| Car 3D model (RB19) | < 12MB uncompressed, < 4MB Draco compressed | Git LFS size check |
| All images | < 200KB per image (WebP 85) | Image optimization CI |
| Web fonts | < 100KB total | next/font |
| HDR environment | < 2MB | Manual check |
| Total initial payload | < 1.5MB | Lighthouse CI |

### Runtime Budget

| Metric | Desktop | Mobile |
|--------|---------|--------|
| Frame time | < 16.6ms | < 33.3ms |
| JavaScript main thread | < 50ms per task | < 50ms per task |
| Memory usage | < 512MB | < 256MB |

---

## 20. EDGE CASES & ERROR STATES

### WebGL Not Supported
**Detection**: Check `WebGLRenderingContext` availability on mount.
**Fallback**: Display static high-quality photography of the RB19 in the same dark studio style. All content sections remain. All text animations remain. A subtle banner informs: "3D experience requires a WebGL-capable browser."

### WebGL Context Lost
**Detection**: Listen to `webglcontextlost` event on canvas.
**Recovery**: Attempt to restore. If restoration fails after 3 seconds, switch to static photography fallback.

### Model Loading Failure
**Detection**: GLTFLoader error callback.
**Recovery**: Retry once with exponential backoff. If retry fails, switch to static photography fallback with error logged to analytics.

### Slow Network
**Detection**: If model download stalls for > 10s with < 50% loaded.
**Response**: Show a "Download taking longer than expected" message on the loading screen. Keep the branded experience — do not show a browser spinner.

### Mobile Low Memory
**Detection**: `performance.memory.usedJSHeapSize` approaching limit (if available).
**Response**: Disable the particle systems and reduce texture sizes without reloading.

### Touch on 3D Elements
**Behavior**: Touch devices do not have hover states. All information exposed via hover on desktop is accessible via the section's scroll content on mobile. No critical information is hover-only.

---

## 21. TECHNICAL ARCHITECTURE

### Tech Stack

| Layer | Technology | Version | Reason |
|-------|-----------|---------|--------|
| Framework | Next.js | 14+ | App Router, RSC, image optimization, font optimization |
| Language | TypeScript | 5+ | Type safety, developer experience |
| Styling | Tailwind CSS | 3.4+ | Utility-first, consistent spacing, easy responsive |
| 3D | Three.js | 0.165+ | WebGL abstraction, community, GLTF support |
| Scroll | Lenis | 1.0+ | Best smooth scroll library; integrates with GSAP |
| Animation | GSAP | 3.12+ | Industry standard, ScrollTrigger, SplitText, DrawSVG |
| Motion | Framer Motion | 11+ | Component-level React animations |
| Lottie | @lottiefiles/react | 2.4+ | Loading animation |

### Rendering Architecture

```
Browser
└── Next.js App Router
    ├── Server Components (static content, meta, structured data)
    └── Client Components (Three.js, GSAP, interactive elements)
        ├── Lenis (smooth scroll instance, mounted once at root)
        ├── ScrollContext (provides progress to all consumers)
        ├── Three.js Scene (mounted once, canvas persists)
        │   └── CameraController (reads ScrollContext)
        └── Content Sections (read ScrollContext for animation triggers)
```

### Data Architecture

All content is static — defined in `constants/verstappenData.ts`. There is no API, no database, no authentication. This is a static site.

```ts
// constants/verstappenData.ts (structure)
export const VERSTAPPEN_DATA = {
  basic: {
    fullName: 'Max Emilian Verstappen',
    nickname: 'Mad Max',
    born: '1997-09-30',
    nationality: 'Dutch',
    residence: 'Monaco',
    height: '1.81m',
    teamName: 'Oracle Red Bull Racing',
    carNumber: 1,
  },
  championships: [...],
  statistics: {...},
  records: [...],
  timeline: [...],
  cars: [...],
  helmets: [...],
  quotes: [...],
  gallery: [...],
} as const
```

---

## 22. FUTURE ROADMAP

### Phase 2

- **Audio Experience**: Ambient F1 engine sounds. User-opt-in. V8 sound library.
- **Race Replay Visualizer**: SVG circuit maps with animated race position data for key races (Spain 2016, Abu Dhabi 2021).
- **Helmet Configurator**: Interactive helmet design tool using Three.js.
- **Multi-language**: Support for Dutch (nl), English (en), Japanese (ja) — three key Verstappen fan markets.

### Phase 3

- **Live Data Integration**: Connect to an F1 data API for the current season's live statistics update.
- **Community Gallery**: User-submitted fan art/photography (with moderation).
- **AR Mode**: WebXR implementation allowing users to view the RB19 in their physical space.

---

## 23. TECHNICAL RISKS & MITIGATIONS

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Three.js performance on mobile | High | High | LOD models, reduced particles, disable post-processing, GPU tier detection |
| GLTF model file size | Medium | High | Draco compression, texture atlasing, LOD strategy |
| GSAP license cost for Club plugins | Low | Medium | Budget for MorphSVG, DrawSVG, SplitText licenses |
| iOS Safari WebGL limitations | High | Medium | Test on iOS 16+. Avoid WebGL 2.0-only features. |
| Lenis + GSAP ScrollTrigger conflicts | Medium | High | Follow documented integration pattern exactly. Single RAF loop. |
| CLS from font loading | Medium | Medium | `next/font` eliminates FOUT. `font-display: swap` as fallback. |
| Long load time for 3D assets | High | Medium | Draco compression, CDN delivery, loading screen experience |
| WebGL context lost on mobile tab switch | Medium | Medium | Implement `webglcontextlost` and `webglcontextrestored` handlers |

---

## 24. MILESTONES & TIMELINE

| Milestone | Deliverable | Target |
|-----------|------------|--------|
| M1: Foundation | Next.js setup, design system, fonts, CSS tokens | Week 1 |
| M2: Scene Setup | Three.js scene, car model loaded, camera working | Week 2 |
| M3: Scroll Engine | Lenis + GSAP ScrollTrigger + camera keyframe system | Week 3 |
| M4: Hero + Front Wing | Hero section complete with all animations | Week 4 |
| M5: Timeline + Profile | Career timeline and driver profile sections | Week 5 |
| M6: Championships | Championship badges with full animation system | Week 6 |
| M7: Statistics + Records | Counters, telemetry graphs, record items | Week 7 |
| M8: Gallery + Quotes | Gallery grid, quote animations | Week 8 |
| M9: Legacy + Navigation | Legacy section, full navigation system | Week 9 |
| M10: Polish + QA | Performance optimization, accessibility audit, cross-browser testing | Week 10 |
| M11: Launch | Deploy to production, Lighthouse CI passing | Week 11 |

---

## 25. ACCEPTANCE CRITERIA

A section is production-ready when all of the following are true:

### Visual Quality
- [ ] The section matches the visual design specification in this PRD
- [ ] Typography uses the correct fonts, sizes, and weights from the type scale
- [ ] Colors use only the defined CSS custom properties
- [ ] Spacing follows the 4px grid system

### Animation Quality
- [ ] All animations run at 60fps on a 2021 MacBook Air M1 (verified in Chrome DevTools Performance panel)
- [ ] Animations use the correct easing from the EASINGS constant
- [ ] Animations trigger at the correct scroll progress value
- [ ] Animations clean up correctly when the section scrolls out of view

### Accessibility
- [ ] Section heading is semantic (h2)
- [ ] All images have descriptive alt text
- [ ] All interactive elements are keyboard accessible
- [ ] Screen reader (VoiceOver or NVDA) announces all content correctly
- [ ] The section is fully usable with `prefers-reduced-motion: reduce`

### Performance
- [ ] No Three.js memory leaks (geometries, materials, textures disposed)
- [ ] No GSAP context leaks (context reverted on unmount)
- [ ] Frame time remains below 16.6ms while this section is active

### Code Quality
- [ ] No TypeScript errors (strict mode)
- [ ] No ESLint errors
- [ ] Component is documented with JSDoc where applicable
- [ ] All content strings reference `VERSTAPPEN_DATA` (no hardcoded content)
- [ ] No hardcoded color values (all reference CSS custom properties or `COLORS` constants)

---

*This PRD is the single contractual definition of the Max Verstappen Apex Precision Experience. Any feature not described here requires an amendment to this document before development begins. Any feature described here is a requirement, not a suggestion.*

---

**End of Document**

*Max Verstappen — The Apex Precision Experience*  
*PRD v1.0*
