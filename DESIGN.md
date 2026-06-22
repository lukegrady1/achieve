# DESIGN.md — Achieve Performance Training (Gym)

**Purpose:** This is a build spec for Claude. Produce a marketing website for **Achieve Performance Training**, a strength & conditioning / youth athletic development gym in Clinton, MA. Use the **exact same design system, layout, and component set as the Stallone's Pro Wash spec** (bold condensed display type, pill buttons, before/after sliders, badge marquee, value cards, 4-step process, the full section flow) — but apply **Achieve's own color scheme, content, and gym/training services**. Do **not** copy any other company's logo, text, or images verbatim.

**The swap, in one line:** keep Stallone's *structure + typography + components*, change *colors → Achieve black/red/white*, change *subject → athletic training & youth development instead of pressure washing*, change *all copy → Achieve's real info*.

**Theme:** bold, athletic, high-energy "train hard / build better athletes / achieve your goals." Same punchy visual system as Stallone, no boxing metaphor — this is a performance gym.

**Stack:** Build with **Next.js (App Router) + TypeScript + Tailwind CSS** (same project structure as §1).

---

## 0. Company facts (use these everywhere)

- **Business name:** Achieve Performance Training (Achieve Performance Inc.). Short form: "Achieve."
- **What they do:** Physical Education, Youth Athletic Development, Speed & Agility, Strength & Conditioning, and Adult Fitness — both **in-person** (Clinton, MA gym) and via an **online Learning Platform**.
- **Location:** Clinton, MA. Locally owned and operated physical fitness facility. Established 2010.
- **Founder / head coach:** **Jeremy Frisch** (writes the training articles/blog).
- **Online Learning Platform:** youth athletic development and physical education videos plus an exercise reference guide — exclusive video content accessible from any computer or phone, anytime, anywhere. New content released regularly. Audience: teachers, coaches, trainers & parents.
- **Programs:** Adult Stick Stretch, Adult Group Fitness, Youth Athletic Development (plus speed & agility, strength & conditioning, PE).
- **Primary CTAs:** **"View Training Schedule"** (gym hours) and **"Subscribe / Join the Learning Platform."** Also "Achieve Gear" store (SquadLocker).
- **Socials:** Facebook `facebook.com/achieveperformance.training`, Instagram `instagram.com/achieve_performance`, Twitter/X `@JeremyFrisch`.
- **Contact:** via the contact page. *(No public phone/email on the homepage — leave clearly-marked placeholders for the client to fill in.)*
- **Nav:** Schedule · Learning Platform · Subscribe · Training (Clinton MA / Training Schedule / Programs) · Achieve Gear · Login.

---

## 1. Tech stack & ground rules

**Stack: Next.js (App Router) + TypeScript + Tailwind CSS.** Scaffold with `npx create-next-app@latest --typescript --tailwind --app --eslint`.

- **Project structure:**
  - `app/page.tsx` — homepage, composed of section components.
  - `app/layout.tsx` — root layout: fonts, metadata, global header/footer.
  - `app/globals.css` — Tailwind directives + a few CSS variables/utilities.
  - `components/` — one file per section + reusable UI (`Button.tsx`, `ServiceCard.tsx`, `BeforeAfterSlider.tsx`, `BadgeMarquee.tsx`, `Header.tsx`, `Footer.tsx`, etc.). Each is a typed React component with a `Props` interface.
  - `lib/content.ts` — site copy/data (programs, articles, steps, values, schedule highlights) as typed constants so content is easy to edit in one place.
  - `public/` — images and SVGs.
- **TypeScript everywhere.** No `any`. Define `interface` types for every component's props and for the content data shapes in `lib/content.ts`.
- **Styling is Tailwind utility classes**, driven by a custom theme in `tailwind.config.ts` (see §2). Avoid hand-written CSS except for keyframes (marquee), the before/after clip logic, and anything truly dynamic. Group repeated utility patterns with `@apply` or small components.
- **Server vs client components:** sections are Server Components by default. Add `"use client"` only where interactivity is needed — `Header` (mobile menu + scroll state), `BeforeAfterSlider` (drag), and the scroll-reveal wrapper.
- **Fonts via `next/font/google`** (Bebas Neue + Poppins) — see §3.
- **Images via `next/image`** for lazy-loading, responsive `sizes`, `webp`. Always set `alt`.
- **Mobile-first, fully responsive.** Tailwind breakpoints `md:` (768px), `lg:` (1024px). Hero, grids, and sliders reflow cleanly on phones.
- **Smooth-scroll** for in-page anchors (`scroll-smooth` on `<html>`). Sticky header.
- **Accessibility:** semantic landmarks, alt text, visible `focus-visible:` rings, AA contrast. Buttons and sliders keyboard-operable.
- **Performance:** `next/image` for all imagery, lazy-load below the fold, minimal client JS.
- Deliver clean, typed, commented code.

---

## 2. Brand color system (Achieve Performance)

Achieve's palette is **black + bright athletic red on white**, with gray for secondary text. These are the exact values pulled from their site. Define them in `tailwind.config.ts` under `theme.extend`.

| Role (was, in Stallone) | Achieve color | Hex |
|---|---|---|
| Primary dark / dark sections / body text (was teal-700) | **Near-black / black** | `#0f0f0f` / `#000000` |
| Accent "punch" — eyebrows, highlights, slider handle, key words (was red) | **Achieve red** | `#ed1d00` |
| Light alt-section background (was sage) | **Mist gray** | `#efefef` |
| Page / card background | **White** | `#ffffff` |
| Muted secondary copy | **Gray** | `#999999` |

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0f0f0f", // PRIMARY dark — dark sections, headlines, body text
          950: "#000000", // pure black for deepest fields
        },
        brand: {
          red:  "#ed1d00", // PRIMARY accent — eyebrows, key words, slider handle, hovers
          red2: "#c41700", // darker red — button hover / pressed
        },
        mist: "#efefef",   // light alternating-section background
        muted: "#999999",  // muted secondary copy
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"], // Bebas Neue
        body: ["var(--font-poppins)", "sans-serif"],  // Poppins
      },
      borderRadius: { pill: "100px", card: "16px" },
      maxWidth: { site: "1200px" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 30s linear infinite" },
    },
  },
  plugins: [],
};
export default config;
```

**Usage rules (mirror Stallone's logic, recolored):**
- Default page background is **white**; long-form body text is **near-black `#0f0f0f`**. Use **mist `#efefef`** for alternating sections so white blocks don't run together (this replaces Stallone's sage).
- "Hero" and emphasis bands use a **black background** (`ink-900`/`ink-950`) with white text (replaces Stallone's dark-teal bands). Athletic, gritty, high-contrast.
- **Red is the accent only** — eyebrow labels, the before/after slider handle, icon fills, small underlines, hovers, and the one highlighted word in big headlines. Never large fields of red.
- Black + white + red is the signature combo; gray `#999` only for secondary captions.
- Body default in `globals.css`: `body { @apply text-ink-900 bg-white font-body; }`.

---

## 3. Typography (same as Stallone)

Identical type system — core to "the same design." Load with `next/font/google`.

| Role | Font | Notes |
|---|---|---|
| **Display / headings** | **Bebas Neue** | Tall, condensed, bold — perfect athletic feel. H1–H3, buttons, big stats, eyebrows. |
| **Body / UI** | **Poppins** | Paragraphs, nav, labels, captions. Weights 300–700. |

```ts
// app/layout.tsx
import { Bebas_Neue, Poppins } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas", display: "swap" });
const poppins = Poppins({ weight: ["300","400","500","600","700"], subsets: ["latin"], variable: "--font-poppins", display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${poppins.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
```

**Type scale (desktop):**

| Element | Font | Size | Line-height | Color |
|---|---|---|---|---|
| H1 (hero) | Bebas Neue | `clamp(48px, 7vw, 72px)` | 1.1 | white on black |
| H2 (section super-headline) | Bebas Neue | `clamp(44px, 9vw, 97px)` | 1.0 | white or ink-900 |
| H3 (card titles) | Bebas Neue | `clamp(24px, 3vw, 34px)` | 1.1 | ink-900 |
| Eyebrow / kicker | Poppins | 14px / 600 | 1 | UPPERCASE, letter-spacing .12em, **brand-red** |
| Body | Poppins | 16–18px / 400 | 1.65 | ink-900 / muted |
| Button label | Bebas Neue | 18px / 700 | 1 | white |
| Fine print / footer | Poppins | 13px | 1.5 | muted |

Tailwind examples — hero H1: `font-display text-white text-[clamp(48px,7vw,72px)] leading-[1.1] tracking-[0.01em]`; eyebrow: `font-body font-semibold text-[14px] uppercase tracking-[0.12em] text-brand-red`.

**Signature heading treatment:** color ONE key word **red** while the rest stays white/black — e.g. "Build Better **Athletes**." Wrap the punch word in `<span className="text-brand-red">`.

---

## 4. Core components (same as Stallone, recolored)

### 4.1 Buttons — `components/Button.tsx`
Primary CTA is a **pill**. Typed component with `variant` + `href` props:
```tsx
type ButtonProps = { href: string; variant?: "primary" | "accent" | "ghost"; children: React.ReactNode };

const base =
  "inline-flex items-center gap-2 font-display font-bold text-[18px] tracking-[0.02em] " +
  "px-5 py-3 rounded-pill transition-transform transition-colors duration-150 " +
  "hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red";

const variants = {
  primary: "bg-ink-900 text-white hover:bg-ink-950",
  accent:  "bg-brand-red text-white hover:bg-brand-red2",
  ghost:   "bg-transparent text-ink-900 ring-2 ring-inset ring-ink-900",
};

export default function Button({ href, variant = "primary", children }: ButtonProps) {
  return <a href={href} className={`${base} ${variants[variant]}`}>{children}</a>;
}
```
Most CTAs read **"View Training Schedule"** (links to gym hours) or **"Join the Learning Platform"** (links to subscribe). Small circular arrow icon inside the pill is a nice touch. Use the **red** `accent` variant for the top-priority CTA in dark sections so it pops on black.

### 4.2 Service/Program cards — `components/ServiceCard.tsx`
Image-topped cards, rounded corners. Hover (desktop) lifts the card and reveals a short description; on mobile the blurb shows by default. Typed props, `next/image`:
```tsx
type ServiceCardProps = { title: string; blurb: string; href: string; img: string; alt: string };
```
Wrapper: `group rounded-card overflow-hidden bg-white shadow-[0_6px_24px_rgba(0,0,0,0.10)] transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.20)]`. Image: `w-full aspect-[3/2] object-cover`. Reveal blurb on `md:` with `max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all`; visible by default below `md`.

### 4.3 Before / After slider ★ (signature element) — `components/BeforeAfterSlider.tsx`
Reframe for a gym as a **transformation / progress slider** — e.g. an athlete's "Day 1 → After Training" or a movement-quality comparison. Mark `"use client"`. Two stacked images, a vertical divider with a round grab-handle in **brand-red**, drag to wipe between the two states.

Implementation: `useState<number>` for divider percentage; two `next/image` layers absolutely positioned; clip the top image with inline `style={{ clipPath: \`inset(0 ${100 - pos}% 0 0)\` }}`; a handle `<button>` updates `pos` on pointer move (`onPointerDown/Move/Up`) and on `ArrowLeft`/`ArrowRight` keydown. Default `pos = 50`. Label sides "BEFORE" / "AFTER" (or "DAY 1" / "NOW") in small `font-display` tags. All drag math typed (`number`), no `any`. *If a true before/after pair isn't available, swap this block for a bold image gallery of the gym — keep the component in the codebase either way.*

### 4.4 Scrolling badge marquee — `components/BadgeMarquee.tsx`
Horizontal auto-scrolling strip, duplicated content for a seamless loop (`animate-marquee`), pause on hover (`hover:[animation-play-state:paused]`). On a **black** or mist band. Achieve badge phrases: **Locally Owned · Since 2010 · Youth Athletic Development · Strength & Conditioning · In-Person + Online · Expert Coaching · Clinton, MA.** Separate items with a small red diamond/star glyph.

### 4.5 Stat / icon blocks
Round icon (or single big number/letter) above a short bold title and one-line description. Used for the values section and the process steps. Icon fills in red on black, or black on white. Great place for stats like **"Est. 2010," "All Ages," "In-Person + Online."**

---

## 5. Page structure (sections, in order)

Build the homepage (`app/page.tsx`) by composing one component per section. Each section is full-width with inner container `max-w-site mx-auto px-6` and padding `py-[clamp(64px,10vw,120px)]`. Pull all copy/data from `lib/content.ts`.

### 5.1 Sticky header / nav — `Header.tsx` (`"use client"`)
- Left: Achieve logo (wordmark in Bebas Neue + a small mark if you generate one).
- Center/right: nav — **Schedule**, **Training** (dropdown: Clinton MA Gym, Training Schedule, Programs), **Learning Platform**, **Subscribe**, **Achieve Gear**.
- Far right: **Login** link + a red pill **"View Schedule"** (or "Start Training") button.
- Mobile: hamburger → full-screen overlay menu, **black** background, white Bebas Neue links, primary CTA pinned at bottom.
- Header transparent over the hero, then solid **white** background + subtle shadow on scroll.

### 5.2 Hero
- **Black full-bleed background** (`ink-950`) — ideally a darkened action photo from the gym (athletes sprinting, lifting, training), with a black overlay so white text pops.
- Logo mark, then **H1** with Achieve energy — e.g. "Train to **Achieve**." or "Build Better **Athletes**." — a subhead echoing the real positioning ("Physical Education, Youth Athletic Development, Strength & Conditioning, and Adult Fitness in Clinton, MA"), and the primary pill CTA ("View Training Schedule") + a secondary ghost CTA ("Join the Learning Platform").
- One red accent word in the headline. Optional faint athletic motif (track lines, chevrons) — tasteful.

### 5.3 Offerings teaser (3 quick tiles)
Three icon tiles under the hero — **Youth Development / Strength & Conditioning / Adult Fitness** — each a simple line icon + name. Fast jump menu.

### 5.4 Badge marquee
The scrolling trust strip from §4.4, on a mist or black band.

### 5.5 "Everything It Takes to Perform — Under One Roof"
- Big H2 + one-paragraph positioning: "Achieve Performance Training is a locally owned strength & conditioning and youth athletic development facility in Clinton, MA — building physical literacy and lifelong athletes, in person and online."
- **Grid of program cards** (§4.2):
  - **Youth Athletic Development** — "Age-appropriate speed, agility, coordination, and strength that builds confident, capable young athletes."
  - **Speed & Agility** — "Sprinting, cutting, and movement mechanics to make athletes faster and more explosive."
  - **Strength & Conditioning** — "Coach-led strength training and conditioning for athletes of every level."
  - **Adult Group Fitness** — "Energetic group classes that keep adults strong, mobile, and moving well."
  - **Adult Stick Stretch** — "A mobility and stretch program to keep you loose, balanced, and injury-resistant."
  - **Online Learning Platform** — "Youth athletic development and PE videos plus an exercise reference guide — train anywhere, anytime." (Links to Subscribe.)

### 5.6 Mid-page CTA band
Full-width **black band**: a "ready to start?" line on the left, red pill CTA ("View Training Schedule") on the right. White text, high contrast.

### 5.7 Transformation / gym gallery — before/after
Header ("See the Work" / "Inside the Gym"), then a **before/after slider** (§4.3) or a bold gallery of real gym photos (training, lifting, kids in class).

### 5.8 Reviews
- "What Members Say" eyebrow + 3 testimonial cards (carousel on mobile).
- Each: 5-star graphic (red stars), the quote, member **name**, short role line ("Parent" / "Youth Athlete" / "Adult Member").
- *No public testimonials on the homepage — use clearly-marked placeholders for the client to replace, or embed their Facebook reviews/feed later.*

### 5.9 Coach / brand story (replaces Stallone's "family-owned" section)
- Eyebrow, big H2 ("Coach-Led, Locally **Owned**"), warm paragraph: Achieve Performance Training is a locally owned and operated facility in Clinton, MA, founded by coach **Jeremy Frisch** and serving the community since 2010 — known for its work in youth athletic development and physical education, in person and through its online learning platform.
- Photo slot for Jeremy / the coaching team. Optional "Since 2010" radial badge accent (red/black).
- Optional **"From the Coach" articles** strip pulling Jeremy Frisch's blog posts (e.g. "10 Things to Work On," "Active Children = Smarter Children") as 3–4 linked cards.

### 5.10 "Why Achieve" — value cards (replaces Stallone's C.H.A.M.P.)
Four icon/stat blocks (§4.5) grounded in real facts:
- **Athlete-Centered** — Age-appropriate, long-term athletic development, not one-size-fits-all.
- **Locally Owned** — A Clinton, MA gym, operated by coaches who know the community.
- **In-Person + Online** — Train at the facility or anywhere via the Learning Platform.
- **Proven Since 2010** — A decade-plus of coaching athletes of all ages and abilities.

Big red/black icons or numbers (Bebas Neue) over a short title and one sentence.

### 5.11 Get started — 4 steps
Header ("How to Get Started"), numbered horizontal stepper (vertical on mobile), red number badges:
1. **Check the Schedule** — find a class or program that fits your goals.
2. **Come Train** — join us in person at the Clinton, MA facility.
3. **Train Anywhere** — access exclusive videos and the exercise guide on the Learning Platform.
4. **Achieve Your Goals** — progress with expert, coach-led programming.

Connect steps with a dashed line/arrow.

### 5.12 Location / hours
- Eyebrow "— Where to find us", H2 ("Training in **Clinton, MA**"), a short paragraph + a "View Full Schedule" CTA (links to gym hours).
- A simple map graphic or gym photo, plus highlighted hours/age-group blocks. *(Use placeholders for exact address and hours for the client to confirm.)*

### 5.13 Final CTA
Big **black** closing band: eyebrow ("— Ready to train?"), H2 with a red accent word ("It's Time to **Achieve**"), one persuasive line, primary pill CTA ("View Training Schedule") + secondary ("Join the Learning Platform").

### 5.14 Footer
**Black** footer (`ink-950`), white/gray text, multi-column:
- Col 1: white Achieve logo + one-line description ("Strength & conditioning, youth athletic development, and physical education in Clinton, MA — in person and online.") + a "View Schedule" link.
- Col 2: **Train** — Gym Hours, Programs, Our Gym, Achieve Gear.
- Col 3: **Learn** — Learning Platform, Subscribe, Blog/Articles, FAQs.
- Col 4: **Company / Contact** — About, Contact, Login. Social icons (Facebook, Instagram, X/Twitter @JeremyFrisch). *(Add phone/email placeholders for the client.)*
- Bottom bar: © 2010–[current year] Achieve Performance Inc. + Terms, Privacy, Disclaimers links.
- Small floating/sticky **"View Schedule"** button on mobile is on-brand.

---

## 6. Motion & interaction (same as Stallone)

- **Scroll-reveal:** reusable `components/Reveal.tsx` (`"use client"`) wraps children, uses a typed `IntersectionObserver` in `useEffect`, toggles `translate-y-4 opacity-0` → `translate-y-0 opacity-100 transition-all duration-500 ease-out`. Subtle; never bouncy.
- **Hover:** cards lift, buttons darken + rise 2px, links get a **red** underline wipe.
- **Marquee** auto-scrolls (`animate-marquee`), pauses on hover.
- **Before/after slider** drags with pointer + touch + keyboard.
- Respect `prefers-reduced-motion` via the observer gate + Tailwind `motion-reduce:` variants.
- High-energy but controlled — athletic, not chaotic. No neon glows, no excessive parallax.

---

## 7. Imagery & iconography direction

- **Photography:** real gym action — youth athletes doing speed/agility drills, adults lifting, group fitness, stick-stretch mobility work. High-contrast, slightly gritty, lots of motion. Black-and-white action shots with red accents look great. Placeholder: athletic training scenes.
- **Icons:** simple two-tone line icons — black with occasional red fill. Training icons (stopwatch, dumbbell, sprinting figure, agility ladder, play button for the video platform, whistle).
- **Brand motif:** performance / motion — chevrons, track lines, a forward-arrow "achieve" idea. Keep it bold and clean.
- **Logos/graphics:** white logo variant for black sections, black for white. SVG preferred.
- All decorative graphics use the brand palette only (black / red / white / gray).

---

## 8. Copy voice

Confident, motivating, coach-like. Short punchy lines (same energy as Stallone, athletic flavor). On-brand phrasing: "train to achieve," "build better athletes," "stronger, faster, more confident," "physical literacy for life," "in person and online." Always lead CTAs with **View Training Schedule** or **Join the Learning Platform**. Emphasize: locally owned, Clinton MA, since 2010, youth athletic development, coach-led, all ages, in-person + online.

---

## 9. Deliverable checklist

- [ ] Next.js (App Router) + TypeScript + Tailwind scaffolded; `npm run build` and `tsc --noEmit` pass with no errors and no `any`.
- [ ] **Achieve palette** in `tailwind.config.ts` — black-dominant dark sections, red `#ed1d00` accent, white pages, mist `#efefef` alt sections, gray `#999` for secondary text.
- [ ] Bebas Neue + Poppins via `next/font/google`; `font-display`/`font-body` utilities wired through CSS variables.
- [ ] Sections split into typed components under `components/`; copy/data in `lib/content.ts`; `"use client"` only where needed.
- [ ] All imagery uses `next/image` with alt text.
- [ ] Sticky header, transparent-over-hero → solid-on-scroll, working mobile hamburger (black overlay).
- [ ] Hero with black background, big condensed headline, **red** accent word, red pill CTA ("View Training Schedule") + secondary ("Join the Learning Platform").
- [ ] At least one working **before/after (transformation) slider** OR a bold gym gallery using the same component (pointer + touch + keyboard).
- [ ] Auto-scrolling **badge marquee** (Achieve badges) that loops seamlessly and pauses on hover.
- [ ] Program cards for the six offerings with hover-reveal descriptions.
- [ ] "Why Achieve" value cards, 4-step get-started, reviews, coach/Jeremy Frisch story (+ optional articles strip), location/hours.
- [ ] Two black CTA bands (mid + final), each with the schedule + learning-platform CTAs.
- [ ] Footer with Train / Learn / Company columns, socials (Facebook, Instagram, X @JeremyFrisch), © 2010–present Achieve Performance Inc., Terms/Privacy/Disclaimers.
- [ ] Real Achieve facts throughout; any missing contact info, address/hours, or reviews clearly marked as placeholders.
- [ ] Fully responsive at 768/1024; no horizontal scroll on phones; AA contrast; keyboard-navigable; reduced-motion fallback.

Build it section by section, test responsiveness as you go, and keep black + red + white consistent from the hero to the footer.