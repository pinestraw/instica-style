---
title: Brand Foundation
outline: deep
---

# 1. Brand Foundation

Instica exists to give sellers retail-grade control without retail overhead. This section anchors every visual and verbal decision.

## 1.1 Brand Overview
- **What Instica is:** an inventory operating system that unifies sourcing, cataloging, pricing, fulfillment, and payouts in one calm workspace. It reduces taps, exposes margin insight inline, and keeps automation transparent.

| Pillar | Proof points | Visual cues |
| --- | --- | --- |
| **Trust** | Accurate valuations, synced payouts, human-readable logs | High-contrast data tables, neutral surfaces, calm motion |
| **Efficiency** | Batch publish, barcode ingest, automations | Dense-but-ordered layouts, single accent color |
| **Mobility** | Works on iPhone, iPad, desktop with parity | Thumb-friendly CTAs, pinned bottom nav, compact filters |
| **Modern control** | Insights, forecasting, AI recommendations | Gradient hero metrics, confident typography |

**Primary audience**
- Solo resellers managing 50–500 SKUs.
- Vintage + collectible shops that need better cataloging.
- Boutique retailers and ops leads in fast-scaling DTC brands.

> **Positioning sentence:** *Instica is the retail brain for independent sellers who need enterprise-grade clarity without the ops overhead.*

## 1.2 Mission & Voice
- **Mission statement:** *Give every independent retailer the clarity and leverage of an enterprise ops stack.*
- **Personality sliders:**
  - Informative ↔️ **Guiding** (lean guiding but concise)
  - Friendly ↔️ **Professional** (friendly-pro is the target)
  - Playful ↔️ **Minimal** (avoid jokes; rely on warmth in phrasing)
- **Tone habits:** short, crisp, present tense. Prefer verbs like *ship, verify, protect, automate*.
- **Do / Don’t examples:**
  - ✅ “Ship 24 items without leaving this screen.”
  - ⚠️ “You can now ship 24 items with our brand new multi-pack feature!!!”
- **Voice checklist:**
  - Lead with the seller benefit, then describe the feature.
  - State the action before the requirement (e.g., “Print the label, then confirm weight.”).
  - Mirror the UI copy in marketing so transitions feel seamless.

## 1.3 Logo & Usage
- **Primary logo:** `resources/assets/icons/instica-logo-october-24-transparent.png` for light backgrounds; use the grey variant for dark surfaces. Export at 2× and 3×.
- **Clear space:** keep padding ≥ height of the capital “I” on all sides. In code, add `padding: clamp(16px, 1vw, 24px);` around the asset.
- **Incorrect usage:** never stretch, rotate, apply drop shadows, pair with gradients, or place on busy photography without a neutral overlay.
- **Lockups:** wordmark + logomark only. Partner lockups get a shared divider set to `color.border`.
- **Monochrome version:** `instica-logo-october-24-cream.png` when only a single color is available.
- **App icon grid:** 8pt safe area with 12pt rounded corners. Align the logomark vertically centered—see `resources/assets/icons/app-icon-grid.pdf`. Background uses `color.brand` gradient overlay 60°.

| Asset | File | Use case |
| --- | --- | --- |
| Full-color PNG | `instica-logo-october-24-transparent.png` | Marketing decks, docs |
| Grey logo | `instica-logo-october-24-grey-transparent.png` | Dark UI, nav bar |
| Cream mono | `instica-logo-october-24-cream.png` | Embossed surfaces, monochrome prints |

## 1.4 Color Palette
- **Primary palette:** `color.brand`, `color.surface`, `color.textPrimary` from `tokens/colors.json`. Backgrounds should vary by ≤ 2% tint and share the same hue family so interfaces feel cohesive.
- **Secondary accents:** `color.brandSoft`, `color.success`, `color.warning`, `color.error`, `color.info` (coming soon) cover feedback surfaces, while `color.muted` tones down secondary text or dividers.
- **System colors:** map tokens to platform assets (iOS `Color("BrandPrimary")`, Android `colorBrandPrimary`, web `--color-brand`). Maintain both light and dark variants in the asset catalog.
- **Contrast guardrails:**
  - Text vs. background ≥ 4.5:1.
  - Icon-only vs. background ≥ 3:1.
  - Inline charts can dip to 2:1 only when text labels are adjacent.
- **Gradient usage:** the hero gradient runs 60° from `color.brand` (start) to `#8EC5FF` (end) at 70% opacity. Never apply gradients to buttons.

| Token | Light mode | Dark mode | Notes |
| --- | --- | --- | --- |
| `color.brand` | `#3C64FF` | `#82A0FF` | Buttons, key icons |
| `color.brandSoft` | `#E8EEFF` | `#1E2240` | Background tints |
| `color.surface` | `#FFFFFF` | `#0E1224` | Cards, containers |
| `color.surfaceMuted` | `#F3F5FF` | `#151932` | Subpanels, filters |
| `color.textPrimary` | `#0C1020` | `#EFF2FF` | Headlines, data |
| `color.textSecondary` | `#4A5270` | `#A9B8E0` | Helper text |
| `color.success` | `#15B88A` | `#27E1A8` | Confirmations |
| `color.warning` | `#E7A437` | `#F3C15C` | Caution states |
| `color.error` | `#E04E4E` | `#FF6E6E` | Destructive actions |

**Implementation snippet (web):**

```css
:root {
  --color-brand: #3C64FF;
  --color-surface: #FFFFFF;
  --color-surface-muted: #F3F5FF;
}
@media (prefers-color-scheme: dark) {
  :root {
    --color-brand: #82A0FF;
    --color-surface: #0E1224;
  }
}
```

For deeper swatches and pairings visit the [Color System](/guide/color-system) page.

## 1.5 Typography Overview
- **Hierarchy:** Display → H1 → H2 → H3 → Body → Caption → Micro. If a screen needs two data-heavy blocks, prefer H3 paired with Body and reserve Display/H1 for hero sections.
- **Line height:** 1.2× for headings, 1.4× for numeric stats, 1.5× for body/caption. Never go below 1.4× on paragraph text.
- **Tracking:** -1% on headings, -0.2pt on body text, 0 on captions/micro.
- **Weights:**
  - Display/H1/H2: Semibold
  - H3: Medium
  - Body: Regular, with Semibold for emphasis
  - Caption/Micro: Medium for clarity
- **Numeral usage:** default to tabular lining numerals for reports. Use stylistic set `ss02` in Inter for currency pairs.
- **Platform mapping:**
  - Web: `font-family: "Inter", "SF Pro Display", system;`
  - iOS: Text styles built on `SF Pro Rounded` for hero metrics, `SF Pro Display` elsewhere.
  - Android: `Google Sans` fallback when Inter unavailable.
- Dive deeper in the [Typography](/guide/typography) section for platform stacks, code snippets, and downloadable styles.

## 1.6 Reference Moodboard
The refresh leans on specific product screenshots you provided to calibrate tone, layout, and interaction depth.

| Reference | Observations | Instica adaptation |
| --- | --- | --- |
| Nike Women’s mega-nav | Mega menus span the full width with confident whitespace, micro icons, and ultra-light dividers. | Navigation drawers keep the generous spacing, borderless columns, and slim weight lines when we surface multi-category link groups. |
| Apple.com iPhone hero | Massive photography sits against a quiet neutral field with a tight headline and dual CTAs. | Hero rows mix our code/token modules with full-bleed imagery + overline copy, mirroring the Apple rhythm but using Instica tokens. |
| Oura marketing hero | Glassy gradients, serif headlines, and floating hardware tell a premium hardware story. | Token previews adopt the layered gradient treatment with soft blur borders to echo Oura’s depth without leaving our palette. |
| Oura developer docs | Split-screen layout with a dense left nav and dark right-hand request panel. | Guide pages now ship with a left rail, sticky outline, and contrasting code blocks so spec content feels like an API console. |
| Meta developer docs | Clear breadcrumb + hero card, persistent on-page nav. | We mirror the doc shell so readers always see context, breadcrumbs, and status callouts. |
| Anthropic marketing hero | Editorial typography with underlines, warm neutrals, and cards stacked like note cards. | Section headings borrow the editorial spacing and introduce underline accents to keep prose lively while still product-focused. |

> **Use the moodboard when reviewing new work:** if a layout drifts off-brand, gut-check it against these reference pillars and the Instica tokens before shipping.
