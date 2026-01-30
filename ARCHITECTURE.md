# MyWitness.info — Comprehensive Solution Architecture Guide v2.0

## Project Overview

**MyWitness.info** is a biblical apologetics website designed specifically for conversations with Jehovah's Witnesses. The site presents a carefully structured 7-step journey through biblical evidence regarding Bible translation accuracy, the deity of Jesus Christ, and what it means for salvation — culminating in a personal invitation to pray and join a community of believers.

### Core Purpose
1. Establish the Bible as the shared authority (not the Watchtower organization)
2. Demonstrate systematic problems with the New World Translation (NWT)
3. Guide visitors to a trustworthy Bible translation
4. Present comprehensive biblical evidence for Jesus' deity (71 passages across 12 categories)
5. Explain why the deity of Christ matters for salvation
6. Invite visitors to pray to Jesus directly
7. Welcome new believers into community with resources and support

### Target Audience
- Jehovah's Witnesses questioning their beliefs
- Former Jehovah's Witnesses discovering the truth about Jesus
- Christians seeking to understand JW theology for conversations
- Anyone wanting biblical evidence for Christ's deity

### Ministry Principles
- 100% self-funded — no donations, commissions, or financial interest
- Scripture-first methodology using the Legacy Standard Bible (LSB)
- Evidence drawn from the Watchtower's own publications (especially the Kingdom Interlinear Translation)
- Non-aggressive, compassionate tone throughout
- Personal testimony woven into the journey

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.0.2 | React framework with App Router |
| **React** | 19.2.0 | UI library |
| **TypeScript** | ^5 | Type safety |
| **Tailwind CSS** | ^4 | Utility-first CSS (v4 with CSS-first config) |
| **@tailwindcss/postcss** | ^4 | PostCSS integration for Tailwind v4 |
| **AWS Amplify** | — | Hosting, CI/CD, auto-deploy on push to `main` |

### Key Configuration Files

```
mywitness-site/
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript (strict mode, @/* path alias)
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # @tailwindcss/postcss (Tailwind v4)
├── tailwind.config.ts    # Legacy config (extended via @theme in CSS)
├── amplify.yml           # AWS Amplify build config
├── eslint.config.mjs     # ESLint configuration
└── src/app/
    ├── layout.tsx        # Root layout (Inter + Crimson Pro fonts)
    ├── fonts.ts          # Google Fonts configuration
    └── globals.css       # Tailwind v4 imports + Luminous Light theme
```

### Build Commands
```bash
npm run dev    # Development server with webpack (port 3000)
npm run build  # Production build with webpack
npm run start  # Start production server
npm run lint   # ESLint checking
```

> **Note:** The `--webpack` flag is used in dev/build scripts because Next.js 16 defaults to Turbopack, but this project uses webpack for compatibility.

---

## Tailwind CSS v4 — Critical Architecture Notes

This project uses **Tailwind CSS v4**, which has significant differences from v3:

### What Changed from v3 to v4
| Aspect | Tailwind v3 | Tailwind v4 (this project) |
|--------|-------------|---------------------------|
| **PostCSS plugin** | `tailwindcss` | `@tailwindcss/postcss` |
| **CSS import** | `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| **Theme config** | `tailwind.config.ts` | `@theme {}` block in CSS |
| **Config file** | Auto-loaded | Ignored unless `@config` referenced |
| **Content detection** | Manual `content` array | Automatic file scanning |
| **CSS layers** | Tailwind-managed | Native CSS `@layer` |

### Key Lesson Learned
Using `@tailwind base; @tailwind components; @tailwind utilities;` (v3 syntax) caused **all Tailwind utility classes to fail silently** — grid layouts, flex, padding, etc. didn't generate. The fix was switching to `@import "tailwindcss"` and defining all theme customization in a `@theme` block within `globals.css`.

### Another Key Lesson
Custom CSS classes that rely on CSS class application (like `.hero-gradient-light`) may not apply reliably through Tailwind v4's cascade. For critical visual elements (hero backgrounds), **inline styles are more reliable** than CSS classes.

---

## Design System — Luminous Light Theme

The site uses a "Luminous Light" design language — light backgrounds with modern design patterns including glow borders, shimmer buttons, hover lifts, ambient light effects, and staggered entrance animations.

### Color Palette

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Deep Forest | `#3a5a3a` | — | Hero gradient top |
| Dark Sage | `#2f3f2f` | `--dark-text` | Primary text, headings |
| Medium Sage | `#577557` | `--sage` | Secondary text, accents, nav links |
| Light Sage | `#6b8e6b` | `--sage-light` | Hover states, lighter accents |
| Gold | `#d4af37` | `--gold` | CTAs, highlights, badges, "Jesus" gradient |
| Gold Dark | `#b8941f` | `--gold-dark` | Button gradient end |
| Cream | `#fdfdf8` | `--light-bg` | Page backgrounds |
| Light Surface | `#f6f8f6` | `--light-surface` | Section backgrounds |
| White | `#ffffff` | `--light-elevated` | Card backgrounds |
| Border | `#e0e8e0` | `--light-border` | Card borders, dividers |
| Sage Glow | `rgba(87,117,87,0.15)` | `--sage-glow` | Hover shadows, glows |
| Gold Glow | `rgba(212,175,55,0.3)` | `--gold-glow` | Button shadows |

### Typography

| Element | Font | Tailwind Classes |
|---------|------|-----------------|
| Headings | Crimson Pro (serif) | `font-serif font-bold` |
| Body | Inter (sans-serif) | `font-sans` |
| Hero H1 | Crimson Pro | `text-5xl sm:text-6xl md:text-7xl lg:text-8xl` |
| Section H2 | Crimson Pro | `text-4xl md:text-5xl` |
| Card H3 | Crimson Pro | `text-xl font-bold` |
| Body text | Inter | `text-base` to `text-lg` |

Font loading is configured in `src/app/fonts.ts` using `next/font/google` with CSS variables `--font-inter` and `--font-crimson`.

### CSS Custom Classes (globals.css)

#### Buttons
| Class | Description |
|-------|-------------|
| `.btn-primary` | Gold gradient background, dark text, shimmer sweep on hover, lift + scale |
| `.btn-primary::after` | Shimmer animation (white gradient sweeps left to right on hover) |
| `.btn-secondary` | Transparent with sage border, sage text, lifts on hover |

#### Cards
| Class | Description |
|-------|-------------|
| `.card-modern` | White background, sage border, lifts 8px on hover with sage glow shadow |
| `.card-glow` | White background, sage border, lifts 8px on hover with sage glow |

#### Navigation
| Class | Description |
|-------|-------------|
| `.nav-link` | Sage text, expanding gold underline from center on hover |
| `.nav-link::after` | 2px gold underline, expands to 80% width on hover |

#### Text Effects
| Class | Description |
|-------|-------------|
| `.gradient-text` | White gradient text (for hero on dark backgrounds) |
| `.gradient-text-gold` | Gold gradient text |
| `.gradient-text-sage` | Sage gradient text |

#### Decorative
| Class | Description |
|-------|-------------|
| `.glow-line` | 1px sage gradient line (transparent → sage → transparent) |
| `.glow-line-gold` | 1px gold gradient line |
| `.scripture-quote` | Left sage border, sage gradient background, italic |
| `.icon-bg` | 3.5rem rounded square with sage glow background |

#### Animations
| Class/Effect | Description |
|-------------|-------------|
| `.stagger-children > *` | Children fade in + slide up with 0.1s delay increments |
| `.animate-delay-100` to `.animate-delay-700` | Animation delay utilities |
| `.float` | 6s infinite floating animation |
| `animate-fade-in` | 0.6s opacity fade in |
| `animate-fade-in-up` | 0.6s fade in + translateY(30px → 0) |
| `animate-glow-pulse` | 3s pulsing sage box-shadow |

### Theme Tokens (@theme block)

Custom values defined in the `@theme` block in `globals.css`:
- Colors: `--color-sage-50` through `--color-sage-900`, `--color-gold`, `--color-gold-light`, `--color-gold-dark`, `--color-warm-white`, `--color-warm-gray`
- Fonts: `--font-sans`, `--font-serif`
- Font sizes: `--font-size-7xl` (4.75rem), `--font-size-8xl` (6rem)
- Animations: `--animate-fade-in`, `--animate-fade-in-up`, `--animate-glow-pulse`, `--animate-float`
- Keyframes: `fadeIn`, `fadeInUp`, `glowPulse`, `float`

---

## Application Structure

### Complete Directory Layout

```
src/app/
├── layout.tsx                          # Root layout (Inter + Crimson Pro fonts)
├── fonts.ts                            # Google Fonts configuration
├── globals.css                         # Tailwind v4 + Luminous Light theme
├── page.tsx                            # Homepage
├── favicon.ico
│
├── components/                         # Shared components
│   ├── Header.tsx                      # Sticky nav with backdrop blur
│   ├── Footer.tsx                      # 3-column footer (sage background)
│   ├── Hero.tsx                        # Full-screen hero with ambient effects
│   ├── JourneyCards.tsx                # 7-step card grid (4+3 layout)
│   ├── TestimonyTeaser.tsx             # Blockquote testimonial section
│   ├── FeaturedEvidence.tsx            # Evidence highlight cards
│   └── ScriptureCard.tsx              # Generic scripture display card
│
├── my-story/
│   └── page.tsx                        # Personal testimony narrative
│
├── why-the-bible-matters/              # Step 1
│   └── page.tsx                        # Establish Bible as authority
│
├── nwt-problem/                        # Step 2
│   ├── page.tsx                        # NWT mistranslation evidence
│   └── components/
│       ├── TableOfContents.tsx         # Floating TOC sidebar
│       ├── ScriptureWarning.tsx        # Interpretation disclaimer
│       ├── WorshipEvidence.tsx         # proskuneo analysis
│       ├── Hebrews1Evidence.tsx        # Hebrews 1 deity claims
│       ├── Isaiah96Evidence.tsx        # Isaiah 9:6 prophecy
│       ├── John858Evidence.tsx         # John 8:58 "I AM"
│       ├── John11Evidence.tsx          # John 1:1 "Word was God"
│       ├── Colossians1Evidence.tsx     # Colossians 1:15-20
│       ├── RevelationAlphaOmegaEvidence.tsx  # Alpha/Omega
│       └── ThomasDeclarationEvidence.tsx     # John 20:28
│
├── which-bible/                        # Step 3
│   └── page.tsx                        # Bible translation guide
│
├── who-is-jesus/                       # Step 4
│   ├── page.tsx                        # Hub: 12 categories overview
│   ├── components/
│   │   ├── ScriptureAccordion.tsx      # Static section display (not collapsible)
│   │   └── ScripturePassage.tsx        # Individual passage with analysis
│   ├── old-testament-prophecies/page.tsx    # 10 passages
│   ├── direct-statements/page.tsx           # 11 passages
│   ├── equality-claims/page.tsx             # 8 passages
│   ├── creator/page.tsx                     # 4 passages
│   ├── worship/page.tsx                     # 9 passages
│   ├── divine-attributes/page.tsx           # 8 passages
│   ├── divine-actions/page.tsx              # 5 passages
│   ├── yahweh-passages/page.tsx             # 5 passages
│   ├── pre-existence/page.tsx               # 3 passages
│   ├── i-am-statements/page.tsx             # 5 passages
│   ├── alpha-omega/page.tsx                 # 3 passages
│   └── parallel-titles/page.tsx             # 17 title comparisons
│
├── why-it-matters/                     # Step 5
│   ├── page.tsx                        # Why Jesus' deity matters
│   └── objections/page.tsx             # Common objections responses
│
├── praying-to-jesus/                   # Step 6
│   └── page.tsx                        # Prayer guide + testimony
│
├── share-your-story/                   # Step 7
│   └── page.tsx                        # Community form + resources
│
├── evidence/                           # Supplementary
│   └── page.tsx                        # Evidence hub (coming soon sections)
│
└── who-is-the-holy-spirit/             # Supplementary
    └── page.tsx                        # Holy Spirit deity evidence
```

---

## 7-Step User Journey

```
┌─────────────────────────────────────────────────────────────────┐
│                          HOMEPAGE                               │
│   Hero → 7-Step Journey Cards → Testimony → Evidence → CTA     │
└──────────────────────────────┬──────────────────────────────────┘
                               │
          ┌────────────────────▼────────────────────┐
          │     STEP 1: /why-the-bible-matters      │
          │     "Why The Bible Matters"              │
          │                                         │
          │  Establish shared foundation:            │
          │  Bible is the authority, not an org      │
          │  The Berean principle                    │
          └────────────────────┬────────────────────┘
                               │
          ┌────────────────────▼────────────────────┐
          │     STEP 2: /nwt-problem                │
          │     "The NWT Problem"                   │
          │                                         │
          │  8 evidence sections comparing:          │
          │  Greek → KIT → NWT                       │
          │  John 1:1, 8:58, 20:28, etc.            │
          └────────────────────┬────────────────────┘
                               │
          ┌────────────────────▼────────────────────┐
          │     STEP 3: /which-bible                │
          │     "Which Bible?"                      │
          │                                         │
          │  Recommended: LSB, ESV, NASB            │
          │  Criteria for trustworthy translations  │
          └────────────────────┬────────────────────┘
                               │
          ┌────────────────────▼────────────────────┐
          │     STEP 4: /who-is-jesus               │
          │     "Who Is Jesus?"                     │
          │                                         │
          │  71 Scripture passages                   │
          │  12 evidence categories                  │
          │  12 dedicated sub-pages                  │
          └────────────────────┬────────────────────┘
                               │
          ┌────────────────────▼────────────────────┐
          │     STEP 5: /why-it-matters             │
          │     "Why It Matters"                    │
          │                                         │
          │  Salvation requires believing Jesus      │
          │  is God (John 8:24, Romans 10:9)        │
          │  Lewis Trilemma, objections response    │
          └────────────────────┬────────────────────┘
                               │
          ┌────────────────────▼────────────────────┐
          │     STEP 6: /praying-to-jesus           │
          │     "Praying to Jesus"                  │
          │                                         │
          │  Biblical basis for praying to Jesus     │
          │  Personal testimony (miraculous answer)  │
          │  Guided prayer of confession             │
          │  Next steps after salvation              │
          └────────────────────┬────────────────────┘
                               │
          ┌────────────────────▼────────────────────┐
          │     STEP 7: /share-your-story           │
          │     "Share Your Story"                  │
          │                                         │
          │  Contact form (Formspree)                │
          │  Email alternative                       │
          │  Resources for new believers             │
          │  Finding a church guide                  │
          │  Coming soon: forum, prayer, mentorship  │
          └────────────────────────────────────────┘
```

### Supplementary Pages (Not in Main Flow)

| Route | Purpose |
|-------|---------|
| `/my-story` | Author's personal testimony (linked from hero + footer) |
| `/evidence` | Evidence hub — false prophecies, child abuse, doctrine changes (coming soon) |
| `/who-is-the-holy-spirit` | Holy Spirit deity evidence (6-part structure) |
| `/why-it-matters/objections` | Expanded responses to common JW objections |

---

## Key Components — Detailed Reference

### Header (`src/app/components/Header.tsx`)

**Type:** Client component (`'use client'`)

**Features:**
- Sticky positioning with backdrop blur (`backdrop-blur-md`)
- Semi-transparent cream background
- MyWitness.info logo with gold `.info` accent
- Desktop navigation: 9 links using `.nav-link` class (expanding gold underline)
- Mobile: hamburger menu with slide-down navigation
- All 7 journey steps + Home + My Story in nav

**State:** `mobileMenuOpen` (useState)

### Hero (`src/app/components/Hero.tsx`)

**Type:** Client component (`'use client'`)

**Props:**
```typescript
interface HeroProps {
  title: string;      // Not directly rendered (headline is hardcoded)
  subtitle: string;   // Not directly rendered
  ctaText: string;    // Primary CTA button text
  ctaLink: string;    // Primary CTA href (supports #anchor smooth scroll)
}
```

**Features:**
- Full-screen sage gradient background (inline style for Tailwind v4 reliability)
- Ambient light effects: two pulsing radial gradient blurs
- Eyebrow badge: "A Personal Journey of Discovery" with gold pulse dot
- Headline: "The Truth About" (white) / "Jesus" (gold shimmer gradient)
- "Jesus" uses `linear-gradient(135deg, #d4af37, #f0d060, #ffffff, #f0d060, #d4af37)` with background-clip text
- Subtitle with gold accent on "Begin a journey from doubt to discovery"
- Dual CTAs: gold primary button + white ghost secondary ("Read My Story")
- Scroll indicator: bouncing chevron linking to `#journey`
- Smooth scroll handler for anchor links

### JourneyCards (`src/app/components/JourneyCards.tsx`)

**Type:** Client component (`'use client'`)

**Features:**
- Section anchored as `id="journey"` (scroll target from hero)
- 7 journey steps with emoji icons, zero-padded step numbers ('01' – '07')
- Two-row grid layout:
  - Row 1: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` (steps 1–4)
  - Row 2: `grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto` (steps 5–7, centered)
- Each card: `.card-glow` class, watermark step number, gold CTA arrow
- Staggered entrance animation via `.stagger-children`
- Gold decorative divider under section header

**Sub-component:** `JourneyCard` (renders individual step cards)

### TestimonyTeaser (`src/app/components/TestimonyTeaser.tsx`)

**Type:** Client component (`'use client'`)

**Features:**
- Centered blockquote format with SVG speech bubble icon in gold circle
- Pull quote: "The instant I said 'Amen'—literally, the very second—the phone on my desk rang. Jesus answered."
- Attribution: "From a former Jehovah's Witness who prayed to Jesus for the first time after 34 years"
- `.btn-secondary` CTA linking to `/my-story`
- Light pattern overlay (`hero-pattern-light` at 30% opacity)

### FeaturedEvidence (`src/app/components/FeaturedEvidence.tsx`)

**Type:** Client component (`'use client'`)

**Features:**
- 3-column grid of evidence cards (John 8:58, John 1:1, John 20:28)
- Each card: `.card-modern` class, sage pill reference badge, gold arrow CTA
- Links directly to relevant sections within `/nwt-problem` page
- Staggered entrance animation
- Gold glow-line decorative divider

### Footer (`src/app/components/Footer.tsx`)

**Type:** Client component (`'use client'`)

**Features:**
- Dark sage background (`#2f3f2f`)
- Gold glow line at top
- 3-column grid:
  - Brand: MyWitness.info logo + tagline
  - The Journey: 7 navigation links
  - About: Home + My Story links + self-funding disclaimer
- Hover color transitions on links (`onMouseEnter`/`onMouseLeave`)
- Gradient divider before copyright
- Auto-updating copyright year

### ScriptureAccordion (`src/app/who-is-jesus/components/ScriptureAccordion.tsx`)

**Type:** Server component (no longer client — `useState` removed)

**Props:**
```typescript
interface ScriptureAccordionProps {
  title: string;
  partNumber: number;
  description: string;
  children: React.ReactNode;
  subPageLink: string;
  defaultOpen?: boolean;  // Kept for interface compat, unused
}
```

**Features:**
- Static display — content always visible (accordion expand/collapse removed)
- Gold part number badge
- Left sage border accent (`borderLeft: '4px solid #577557'`)
- "View Full Section" CTA linking to dedicated sub-page
- Intro text: "Each section below presents key passages with analysis."

### ScripturePassage (`src/app/who-is-jesus/components/ScripturePassage.tsx`)

**Props:**
```typescript
interface ScripturePassageProps {
  reference: string;       // e.g., "John 1:1"
  title: string;           // Descriptive title
  text: string;            // Scripture text
  whyItMatters: string;    // Analysis/explanation
  translation?: string;    // Translation used (default: LSB)
  nwtNote?: string;        // Optional NWT comparison note
  keyPoints?: string[];    // Optional bullet points
}
```

**Features:**
- White scripture box with italic text
- Translation badge (defaults to LSB)
- "Why It Matters" explanation section
- Optional NWT comparison note (yellow background)
- Optional key points with gold bullet markers

---

## Page Content Reference

### Homepage (`/`)
- **Hero:** Full-screen sage gradient, "The Truth About Jesus" with gold gradient
- **Journey Cards:** 7-step grid with staggered animation
- **Testimony Teaser:** Pull quote from author's story
- **Featured Evidence:** 3 key NWT passages
- **Final CTA:** "Ready to Discover the Truth?" with gold button
- **Footer:** 3-column with navigation

### My Story (`/my-story`)
Personal narrative covering:
- 34 years as a Jehovah's Witness
- Growing doubts about Watchtower teachings
- Research journey through Scripture
- Discovery that Jesus is God
- First prayer to Jesus (miraculous phone call response)
- IT professional's reaction to the unexplainable sounds
- Registration by a local Christian school
- New life in Christ

### Step 1: Why The Bible Matters (`/why-the-bible-matters`)
- Foundation We Share (Watchtower's own claims about Bible authority)
- What the Bible Says About Itself (2 Timothy 3:16-17, 2 Peter 1:20-21)
- The Contradiction (Bible is authority BUT can't be understood without Watchtower)
- The Berean Invitation (Acts 17:11 — examine your religion)

### Step 2: The NWT Problem (`/nwt-problem`)
8 major evidence sections, each comparing Greek → Kingdom Interlinear → NWT:
1. **Worship** — proskuneo (Jesus accepts worship)
2. **Hebrews 1** — Father calls Son "God", commands angels to worship
3. **Isaiah 9:6** — Virgin birth + "Mighty God"
4. **John 8:58** — "Before Abraham was, I AM" (ego eimi)
5. **John 1:1** — "The Word was God" vs "a god"
6. **Colossians 1:15-20** — Jesus as Creator
7. **Revelation Alpha/Omega** — Divine title
8. **Thomas Declaration** — "My Lord and My God!" (John 20:28)

Features floating Table of Contents sidebar, Scripture Warning disclaimer.

### Step 3: Which Bible? (`/which-bible`)
- Why translation matters
- Criteria: word-for-word, modern language, uses God's name
- Recommended: LSB (primary), ESV, NASB
- Free online resources (Bible Gateway, Blue Letter Bible)

### Step 4: Who Is Jesus? (`/who-is-jesus`)
Hub page with 12 evidence categories (71 total passages). Each category has:
- Overview section on hub page (ScriptureAccordion, always visible)
- Dedicated sub-page with full passages (ScripturePassage components)

| # | Category | Passages | Sub-page |
|---|----------|----------|----------|
| 1 | Old Testament Prophecies | 10 | `/old-testament-prophecies` |
| 2 | Direct Statements | 11 | `/direct-statements` |
| 3 | Equality Claims | 8 | `/equality-claims` |
| 4 | Jesus as Creator | 4 | `/creator` |
| 5 | Receives Worship | 9 | `/worship` |
| 6 | Divine Attributes | 8 | `/divine-attributes` |
| 7 | Divine Actions | 5 | `/divine-actions` |
| 8 | YHWH Passages Applied to Jesus | 5 | `/yahweh-passages` |
| 9 | Pre-existence | 3 | `/pre-existence` |
| 10 | "I AM" Statements | 5 | `/i-am-statements` |
| 11 | Alpha and Omega | 3 | `/alpha-omega` |
| 12 | Parallel Titles | 17 titles | `/parallel-titles` |

### Step 5: Why It Matters (`/why-it-matters`)
- John 8:24 — Must believe Jesus is "I AM" or die in sins
- Romans 10:9 — Confessing Jesus as Lord (Kyrios = YHWH)
- The Infinite Sin Problem (Anselm's argument)
- Jesus as High Priest (Hebrews 7:25)
- Lewis Trilemma (Liar, Lunatic, or Lord)
- Salvation steps
- Sub-page: `/objections` with 4 detailed responses

### Step 6: Praying to Jesus (`/praying-to-jesus`)
- Biblical basis (Acts 7:59-60, 1 Cor 1:2, 2 Cor 12:8, Rev 22:20)
- JW practice vs Scripture comparison
- Personal testimony (miraculous answered prayer at age 34)
- Guided prayer of confession (Romans 10:9, Ephesians 2:8-9)
- Next steps: read Scripture, find church, tell someone, keep praying
- A word about JW family dynamics

### Step 7: Share Your Story (`/share-your-story`)
- Hero: Sage gradient, "Step 7 of 7" badge
- 2 Corinthians 5:17 opening scripture
- Contact form (Formspree: `stories@mywitness.info`) + email fallback
- Resources for new believers:
  - Bibles (4 recommendations)
  - Books (5 recommendations)
  - Websites (3 recommendations)
  - Support communities (2 recommendations)
- Finding a Church guide:
  - "What to Look For" (green border)
  - "Red Flags" (red border)
  - Denomination note
- Coming Soon: Forum, Prayer Wall, Mentorship, Study Guides
- Final encouragement: Philippians 1:6 + "You are loved. You are saved. You are His."

---

## Deployment

### AWS Amplify Configuration

**Build spec** (`amplify.yml`):
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - .next/cache/**/*
      - node_modules/**/*
```

### Deployment URLs
- **Amplify URL**: `https://main.d3c4lv91wha9ea.amplifyapp.com`
- **Custom domain**: `mywitness.info` (TBD)

### Deployment Process
1. Push to `main` branch on GitHub
2. Amplify auto-detects changes and starts build
3. Runs `npm install` → `npm run build`
4. Deploys `.next` directory
5. Build typically completes in 2–4 minutes

### Repository
- **GitHub**: `spencer-compligence/mywitness-site`
- **Local path**: `C:\Users\spencersmith\OneDrive - Saint Louis University\Documents\GitHub\mywitness-site`

---

## Development Notes

### Server vs Client Components

Next.js 16 with App Router uses React Server Components by default.

**Client components** (`'use client'` required) — any component using:
- `useState`, `useEffect`, `useRef`
- Event handlers: `onClick`, `onMouseEnter`, `onMouseLeave`, `onFocus`, `onBlur`, `onChange`, `onSubmit`
- Browser APIs

**Current client components:**
| Component | Why Client |
|-----------|-----------|
| `Header.tsx` | `useState` (mobile menu), `onClick` |
| `Footer.tsx` | `onMouseEnter`/`onMouseLeave` |
| `Hero.tsx` | `onClick`, `onMouseEnter`/`onMouseLeave` |
| `JourneyCards.tsx` | Declared but could be server (no hooks/handlers in current code) |
| `TestimonyTeaser.tsx` | Declared but could be server |
| `FeaturedEvidence.tsx` | Declared but could be server |
| `share-your-story/page.tsx` | `onFocus`/`onBlur` on form inputs |
| `TableOfContents.tsx` | `useState`, `useEffect`, `onClick` |
| `John11Evidence.tsx` | `useState`, `onClick` |

> **Build failure pattern**: Forgetting `'use client'` on components with event handlers causes "Event handlers cannot be passed to Client Component props" errors during static page generation.

### SVG Icons — Sizing Best Practice

All SVG icons must include **both** Tailwind classes and explicit HTML attributes:
```tsx
<svg
  width="20"
  height="20"
  className="w-5 h-5 flex-shrink-0"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
>
```

Without explicit `width`/`height`, SVGs in flex containers can expand to fill available space, causing icons to render at viewport-filling size.

### Styling Approach

The project uses a **hybrid approach**:
1. **Tailwind utilities** for layout, spacing, responsive breakpoints
2. **Inline styles** for colors and critical visual properties (reliable in Tailwind v4)
3. **CSS classes** (`globals.css`) for reusable patterns (buttons, cards, nav links)
4. **CSS custom properties** (`:root`) for design tokens used in CSS classes

### Content Source Documents

Original research documents:
- `Who_is_Jesus_Complete_Scripture_Reference.md` — 71 passages across 12 categories
- `Why_Jesus_Deity_Matters_Research.md` — Why It Matters content
- `Holy_Spirit_Research.md` — Holy Spirit page content
- `Task_Step7_Homepage_Design_Fusion.md` — Design fusion and Step 7 task specification

---

## Recent Commit History

```
d6c66f0 Fix Share Your Story hero: inline sage gradient background
9d11fce Fix hero background: use inline style for reliable sage gradient
48954c7 Enhance hero text visibility and make Jesus shine with gold gradient
fffe904 Remove @config directive - use @theme block for all customization
acffa57 Fix Tailwind v4 compatibility: use @import instead of @tailwind directives
2ad819d Fix oversized SVG icons: add explicit width/height and flex-shrink-0
0e5ec3a Add 'use client' to Share Your Story page for form interactivity
6fcec60 Add 'use client' to Footer for event handler compatibility
b02da3b Homepage modernization and Step 7: Share Your Story
d1039d8 Update personal testimony details on Praying to Jesus page
939ce0d Remove collapsible accordion from Who Is Jesus page
1a37469 Fix spacing between 'that' and 'Jesus' in John 20:30-31 quote
6b93755 Fix spacing between 'and' and 'the heavens' in Hebrews 1:10-12 quote
2d2b20f Housekeeping: enrich NWT Problem page with full quotations and fixes
08c1bcd Add "Why The Bible Matters" as new Step 1 in the journey
e9e3372 Enrich parallel titles page with full LSB scripture quotations
92ebc44 Fix JSX string escape causing build failure
9ddecb6 Add comprehensive solution architecture documentation
7627810 Trigger Amplify rebuild
c08a768 Add Who Is the Holy Spirit page
```

---

## Quick Reference

### Adding a New Page
1. Create folder in `src/app/[page-name]/`
2. Add `page.tsx` — if it uses event handlers, add `'use client'` at top
3. Import `Header` and `Footer` components
4. Follow existing hero pattern (inline sage gradient for hero backgrounds)
5. Add navigation link to `Header.tsx` and `Footer.tsx`

### Adding Scripture Content
```tsx
<ScripturePassage
  reference="John 3:16"
  title="God So Loved the World"
  text="For God so loved the world..."
  whyItMatters="This verse demonstrates..."
  nwtNote="The NWT renders this as..."  // optional
  keyPoints={['Point 1', 'Point 2']}    // optional
/>
```

### Hero Section Pattern
```tsx
<div
  className="py-20 px-4 relative overflow-hidden"
  style={{
    background: 'linear-gradient(180deg, #3a5a3a 0%, #4a6e4a 30%, #577557 60%, #6a8f6a 100%)',
  }}
>
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <h1 style={{ color: '#ffffff' }}>Page Title</h1>
    <p style={{ color: '#ffffff' }}>Subtitle text</p>
  </div>
</div>
```

### Color Quick Reference
```
Primary dark text:    #2f3f2f
Medium sage accent:   #577557
Gold CTA/accent:      #d4af37
Page background:      #fdfdf8
Section background:   #f6f8f6
Card background:      #ffffff
Card border:          #e0e8e0
Hero gradient:        #3a5a3a → #4a6e4a → #577557 → #6a8f6a
```

---

*Document updated: January 30, 2026*
*MyWitness.info Solution Architecture v2.0*
*For use with Claude Code or other AI assistants for project continuation*
