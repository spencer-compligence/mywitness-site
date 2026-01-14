# MyWitness.info - Solution Architecture Guide

## Project Overview

**MyWitness.info** is a biblical apologetics website designed specifically for conversations with Jehovah's Witnesses. The site presents a guided journey through biblical evidence regarding Bible translation accuracy and the deity of Jesus Christ.

### Core Purpose
To provide a resource that:
1. Demonstrates problems with the New World Translation (NWT)
2. Presents comprehensive biblical evidence for Jesus' deity
3. Explains why the deity of Christ matters for salvation
4. Guides visitors toward a personal response to the gospel

### Target Audience
- Jehovah's Witnesses questioning their beliefs
- Christians seeking to understand JW theology
- Anyone wanting biblical evidence for Christ's deity

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.0.2 | React framework with App Router |
| **React** | 19.2.0 | UI library |
| **TypeScript** | ^5 | Type safety |
| **Tailwind CSS** | ^4 | Utility-first CSS |
| **AWS Amplify** | - | Hosting and deployment |

### Key Configuration Files

```
mywitness-site/
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS/Tailwind setup
├── amplify.yml           # AWS Amplify build config
└── src/app/globals.css   # Global styles and Tailwind imports
```

### Build Commands
```bash
npm run dev    # Development server (port 3000)
npm run build  # Production build
npm run start  # Start production server
npm run lint   # ESLint checking
```

---

## Design System

### Color Palette

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Dark Forest Green | `#2f3f2f` | Primary dark | Headers, dark backgrounds, primary text |
| Medium Sage Green | `#577557` | Primary medium | Secondary text, accents, buttons |
| Light Gray-Green | `#f6f8f6` | Background light | Section backgrounds, cards |
| Off-White/Cream | `#fdfdf8` | Background main | Page backgrounds |
| Gold | `#d4af37` | Accent | Highlights, badges, CTAs |
| Border Gray | `#e8ede8` | Borders | Card borders, dividers |
| Dark Gradient Start | `#1a261a` | Gradient | Hero section gradient end |

### Typography

- **Headings**: Serif font (system serif stack via Tailwind)
- **Body**: Sans-serif (system sans stack)
- **Font Sizes**: Increased globally for readability
  - H1: `text-4xl md:text-5xl lg:text-6xl`
  - H2: `text-3xl md:text-4xl`
  - H3: `text-xl md:text-2xl`
  - Body: `text-base` to `text-lg`

### Common UI Patterns

#### Hero Sections
```tsx
<section
  className="py-20 px-5"
  style={{
    background: 'linear-gradient(135deg, #2f3f2f 0%, #1a261a 100%)',
  }}
>
  {/* White title, gold subtitle, light gray description */}
</section>
```

#### Cards with Left Border Accent
```tsx
<div
  className="rounded-xl p-6 md:p-8"
  style={{ backgroundColor: '#f6f8f6', borderLeft: '4px solid #577557' }}
>
```

#### Gold Accent Cards
```tsx
<div
  className="rounded-xl p-6 md:p-8"
  style={{ backgroundColor: '#fff8e6', borderLeft: '4px solid #d4af37' }}
>
```

#### Numbered Badges
```tsx
<span
  className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
  style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
>
  1
</span>
```

#### Primary CTA Buttons
```tsx
<Link
  href="/path"
  className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
  style={{ backgroundColor: '#d4af37', color: '#2f3f2f' }}
>
  Button Text
</Link>
```

#### Secondary/Outline Buttons
```tsx
<Link
  href="/path"
  className="inline-block px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
  style={{
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '2px solid #ffffff',
  }}
>
  Button Text
</Link>
```

---

## Application Structure

### Directory Layout

```
src/
├── app/
│   ├── globals.css                    # Global styles
│   ├── layout.tsx                     # Root layout
│   ├── page.tsx                       # Homepage
│   │
│   ├── components/                    # Shared components
│   │   ├── Header.tsx                 # Site header/navigation
│   │   └── Footer.tsx                 # Site footer
│   │
│   ├── nwt-problem/                   # Step 1: NWT Problems
│   │   ├── page.tsx                   # Main NWT problem page
│   │   └── components/
│   │       ├── TableOfContents.tsx
│   │       └── John11Evidence.tsx
│   │
│   ├── which-bible/                   # Step 2: Bible recommendations
│   │   └── page.tsx
│   │
│   ├── who-is-jesus/                  # Step 3: Deity of Christ
│   │   ├── page.tsx                   # Main overview (12 accordions)
│   │   ├── components/
│   │   │   ├── ScriptureAccordion.tsx # Collapsible section component
│   │   │   └── ScripturePassage.tsx   # Scripture display component
│   │   │
│   │   └── [12 sub-pages]/            # Dedicated pages for each section
│   │       ├── old-testament-prophecies/
│   │       ├── direct-statements/
│   │       ├── equality-claims/
│   │       ├── creator/
│   │       ├── worship/
│   │       ├── divine-attributes/
│   │       ├── divine-actions/
│   │       ├── yahweh-passages/
│   │       ├── pre-existence/
│   │       ├── i-am-statements/
│   │       ├── alpha-omega/
│   │       └── parallel-titles/
│   │
│   ├── who-is-the-holy-spirit/        # Holy Spirit page
│   │   └── page.tsx
│   │
│   ├── why-it-matters/                # Step 4: Why deity matters
│   │   ├── page.tsx                   # Main page
│   │   └── objections/
│   │       └── page.tsx               # Common objections sub-page
│   │
│   ├── praying-to-jesus/              # Step 5: Call to action
│   │   └── page.tsx
│   │
│   └── evidence/                      # Legacy/alternate evidence page
│       └── page.tsx
```

---

## User Journey Flow

The site is designed as a sequential journey:

```
┌─────────────────────────────────────────────────────────────────┐
│                         HOMEPAGE                                 │
│                    (4-step overview)                            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    STEP 1: /nwt-problem                         │
│         "A Problem With Your Bible Translation"                  │
│                                                                  │
│  - John 1:1 analysis ("a god" vs "God")                         │
│  - Polytheism problem                                           │
│  - Greek grammar evidence                                       │
│  - Scholar quotes                                               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    STEP 2: /which-bible                         │
│              "Which Bible Should I Use?"                         │
│                                                                  │
│  - Recommended translations (LSB, NASB, ESV)                    │
│  - What to look for in a translation                            │
│  - Online resources                                             │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    STEP 3: /who-is-jesus                        │
│                     "Who Is Jesus?"                              │
│                                                                  │
│  Main page: 12 collapsible accordion sections                   │
│  Each section links to dedicated sub-page with full content     │
│                                                                  │
│  12 Categories (71 total passages):                             │
│  1. Old Testament Prophecies (10 passages)                      │
│  2. Direct Statements That Jesus Is God (11 passages)           │
│  3. Jesus' Claims to Equality with God (8 passages)             │
│  4. Jesus as Creator (4 passages)                               │
│  5. Jesus Receives Worship (9 passages)                         │
│  6. Jesus Has Divine Attributes (8 passages)                    │
│  7. Jesus Does What Only God Can Do (5 passages)                │
│  8. OT Yahweh Passages Applied to Jesus (5 passages)            │
│  9. Christ's Pre-existence (3 passages)                         │
│  10. The "I AM" Statements (5 passages)                         │
│  11. The Alpha and Omega (3 passages)                           │
│  12. Parallel Titles Chart (17 title comparisons)               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                  STEP 4: /why-it-matters                        │
│            "Why Does It Matter That Jesus Is God?"               │
│                                                                  │
│  - John 8:24 - salvation requires believing Jesus is "I AM"     │
│  - Acts 4:12 - no other name for salvation                      │
│  - The infinite sin problem (Anselm's argument)                 │
│  - Jesus as High Priest (Hebrews 7:25)                          │
│  - Objections summary (links to /why-it-matters/objections)     │
│  - Quotes from T.F. Torrance, C.S. Lewis                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                  STEP 5: /praying-to-jesus                      │
│              "Praying to Jesus for Salvation"                    │
│                                                                  │
│  - Biblical basis for praying to Jesus                          │
│  - Stephen's prayer (Acts 7:59-60)                              │
│  - Personal testimony                                           │
│  - Prayer of confession with guided steps                       │
└─────────────────────────────────────────────────────────────────┘
```

### Additional Pages (Not in Main Flow)

```
┌─────────────────────────────────────────────────────────────────┐
│               /who-is-the-holy-spirit                           │
│          "Who Is the Holy Spirit?"                               │
│                                                                  │
│  6 Parts:                                                       │
│  1. What the Watchtower Teaches (5 arguments + responses)       │
│  2. The Holy Spirit Is a Person (mind, emotions, will)          │
│  3. The Holy Spirit Is God (Acts 5:3-4, attributes)             │
│  4. Answering Watchtower Objections                             │
│  5. Key Scriptures Summary                                      │
│  6. Why This Matters                                            │
│                                                                  │
│  Note: Integration point TBD                                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## Key Components

### ScriptureAccordion (`/who-is-jesus/components/ScriptureAccordion.tsx`)

A client component (`'use client'`) that provides collapsible sections.

**Props:**
```typescript
interface ScriptureAccordionProps {
  title: string;           // Section title
  partNumber: number;      // Display number (1-12)
  description: string;     // Brief description
  children: React.ReactNode; // Scripture passages
  subPageLink: string;     // Link to full page
  defaultOpen?: boolean;   // Whether to start expanded
}
```

**Features:**
- Animated expand/collapse with CSS transitions
- Numbered badge display
- "View Full Section" CTA button
- Responsive design

### ScripturePassage (`/who-is-jesus/components/ScripturePassage.tsx`)

Displays individual scripture passages with analysis.

**Props:**
```typescript
interface ScripturePassageProps {
  reference: string;       // e.g., "John 1:1"
  title: string;           // Descriptive title
  text: string;            // Scripture text
  whyItMatters: string;    // Analysis/explanation
  translation?: string;    // Translation used (default: LSB)
  nwtNote?: string;        // Note about NWT rendering
  keyPoints?: string[];    // Optional bullet points
}
```

### Header (`/components/Header.tsx`)

Site navigation header with:
- Logo/site title
- Navigation links
- Responsive mobile menu

### Footer (`/components/Footer.tsx`)

Site footer with:
- Copyright information
- Additional navigation
- Contact/about links

---

## Page Content Summary

### Homepage (`/`)
- Hero with site purpose
- 4-step journey overview cards
- Quick navigation to each step

### NWT Problem (`/nwt-problem`)
- Analysis of John 1:1 translation
- "a god" creates polytheism problem
- Greek grammar explanation (anarthrous predicate nominative)
- Quotes from Greek scholars
- Interactive evidence components

### Which Bible (`/which-bible`)
- Recommended translations: LSB, NASB, ESV
- Criteria for good translations
- Free online resources (Bible Gateway, Blue Letter Bible)

### Who Is Jesus (`/who-is-jesus`)
- **Main page**: 12 collapsible sections with 2-3 sample passages each
- **Sub-pages**: Full content for each category

| Sub-page | Passages | Key Content |
|----------|----------|-------------|
| `/old-testament-prophecies` | 10 | Isaiah 9:6, Micah 5:2, Zechariah 12:10, etc. |
| `/direct-statements` | 11 | John 1:1, John 20:28, Titus 2:13, etc. |
| `/equality-claims` | 8 | John 8:58, John 10:30, John 5:18, etc. |
| `/creator` | 4 | John 1:3, Colossians 1:16-17, Hebrews 1:2 |
| `/worship` | 9 | Hebrews 1:6, Matthew 28:9, Revelation 5:13-14 |
| `/divine-attributes` | 8 | Omnipresence, omniscience, immutability |
| `/divine-actions` | 5 | Forgives sins, gives life, judges |
| `/yahweh-passages` | 5 | Isaiah 40:3→Matt 3:3, Isaiah 45:23→Phil 2:10 |
| `/pre-existence` | 3 | 1 Cor 10:4, Jude 5, John 17:5 |
| `/i-am-statements` | 5 | John 8:24, 8:58, 18:5-6 |
| `/alpha-omega` | 3 | Revelation 1:17-18, 22:12-13 |
| `/parallel-titles` | 17 titles | Comparative table format |

### Who Is the Holy Spirit (`/who-is-the-holy-spirit`)
- Addresses Watchtower teaching that Spirit is impersonal force
- 6-part structure with card-based layouts
- Mobile-friendly (no tables)

### Why It Matters (`/why-it-matters`)
- Theological importance of Christ's deity
- Salvation implications
- Brief objections section with link to full page

### Why It Matters - Objections (`/why-it-matters/objections`)
- 4 detailed objection responses:
  1. "Jesus is 'a god'" - polytheism problem
  2. "Jesus received His position" - incarnation vs creation
  3. "Son of God, not God" - ancient usage
  4. "Pray through, not to" - biblical examples

### Praying to Jesus (`/praying-to-jesus`)
- Biblical basis for praying to Jesus
- Personal testimony section
- Guided prayer of confession
- Clear call to action

---

## Deployment

### AWS Amplify Configuration (`amplify.yml`)

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

### Deployment URL
- **Primary**: `https://main.d3c4lv91wha9ea.amplifyapp.com`
- **Custom domain**: TBD (mywitness.info)

### Deployment Process
1. Push to `main` branch on GitHub
2. Amplify automatically detects changes
3. Runs `npm install` and `npm run build`
4. Deploys `.next` directory

---

## Development Notes

### Server vs Client Components

Next.js 16 with App Router uses React Server Components by default. Client components require the `'use client'` directive.

**Server Components** (default):
- All page.tsx files without interactivity
- Can use async/await directly
- Cannot use useState, useEffect, or browser APIs

**Client Components** (`'use client'`):
- `ScriptureAccordion.tsx` - uses useState for expand/collapse
- Any component needing interactivity

### Styling Approach

The project uses **inline styles** for colors and Tailwind for layout/utilities. This was chosen for:
1. Precise color control
2. Easy theming potential
3. Avoiding Tailwind v4 configuration complexity

### Content Source Documents

Original research documents (in Downloads folder):
- `Who_is_Jesus_Complete_Scripture_Reference.md` - 71 passages
- `Why_Jesus_Deity_Matters_Research.md` - Why it matters content
- `Holy_Spirit_Research.md` - Holy Spirit page content

---

## Future Considerations

### Pending Integration
- Holy Spirit page needs navigation integration
- Consider adding to main journey flow or as supplementary content

### Potential Enhancements
- Search functionality across all scripture passages
- Print-friendly versions of pages
- PDF export of evidence summaries
- Dark mode support
- Multi-language support

### Mobile Optimization
- Card format on Holy Spirit page vs table format on Parallel Titles
- Compare after deployment to determine best approach
- May need to convert Parallel Titles to card format

---

## Quick Reference

### Adding a New Page

1. Create folder in `src/app/[page-name]/`
2. Add `page.tsx` with metadata export
3. Follow existing styling patterns
4. Add navigation links as needed

### Adding Scripture Content

Use the `ScripturePassage` component:
```tsx
<ScripturePassage
  reference="John 3:16"
  title="God So Loved the World"
  text="For God so loved the world..."
  whyItMatters="This verse demonstrates..."
  nwtNote="The NWT renders this as..." // optional
  keyPoints={['Point 1', 'Point 2']} // optional
/>
```

### Color Quick Reference
- Primary dark: `#2f3f2f`
- Primary medium: `#577557`
- Gold accent: `#d4af37`
- Light background: `#f6f8f6`
- Page background: `#fdfdf8`
- Border: `#e8ede8`

---

*Document generated: January 2025*
*For use with Claude Opus or other AI assistants for project continuation*
