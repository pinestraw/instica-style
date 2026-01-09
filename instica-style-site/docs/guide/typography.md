---
title: Typography
outline: deep
---

# Typography

Instica typography balances retail polish with utilitarian clarity.

- Token source of truth: `tokens/typography.json`
- Web exports: CSS variables generated from tokens
- Native: map roles to platform text styles (and honor Dynamic Type)

## Typeface
- **Web:** Use the product/marketing brand font (currently Manrope variable where available) with system fallbacks.
- **Native:** Use system typography by default (SF Pro Text/Display on Apple platforms) and map tokens to Dynamic Type styles.

### Platform stacks
| Surface | Font stack | Notes |
| --- | --- | --- |
| Web | `"Manrope", "Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | Prefer variable font. Keep letter-spacing tight; don’t over-bold body copy. |
| iOS / iPadOS | System (SF Pro) via Dynamic Type | Map tokens to text styles, then let Dynamic Type scale. |
| Android / Jetpack Compose (future) | `FontFamily(Font("inter_regular"), Font("inter_semibold"))` | Keep tabular numerals enabled for commerce metrics. |

### CSS + Swift snippets

```css
:root {
	font-family: "Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
	font-feature-settings: 'tnum' off, 'ss01' on;
}

.price {
	font-variant-numeric: tabular-nums;
}
```

```swift
Text(value)
	.font(.custom("Inter", size: 16, relativeTo: .body))
	.kerning(-0.2)
	.monospacedDigit()
```

## Text scale (token roles)
These roles come directly from `tokens/typography.json`:

| Role | Typical usage |
| --- | --- |
| `largeTitle` | Hero headlines / top-level page title (native-first) |
| `title1` | Page titles |
| `title2` | Section titles |
| `title3` | Subsection titles |
| `headline` | Labels, short emphasis headings |
| `body` | UI copy (forms, tables, controls) |
| `subheadline` | Secondary UI copy / long-form reading on web |
| `footnote` | Metadata, helper text |
| `caption` | Dense labels, table headers |
| `code` | Monospace snippets |

### Dynamic Type guidance
- Use system text styles on native platforms; map tokens to `UIFont.TextStyle` equivalents.
- Keep body text readable; prefer native defaults (e.g., 17pt baseline on iOS) and never block Dynamic Type.
- Allow captions/micro text to wrap; never truncate critical data.

## Web density (docs-like default)
For web properties with lots of reading (marketing pages, docs-like content, legal, long-form help), default body copy should feel tighter and more “documentation” than “marketing poster.”

- Use **15/22** (or the equivalent of the `subheadline` role) for long-form paragraphs.
- Keep line length around **65–75 characters** (roughly `72ch`).
- Use `headline` sparingly; avoid making paragraph text Semibold.

### Token → platform mapping
| Token | CSS variable | SwiftUI style | Min contrast |
| --- | --- | --- | --- |
| `type.display` | `var(--instica-type-display)` | `.largeTitle` | 4.5:1 |
| `type.h1` | `var(--instica-type-h1)` | `.title` | 4.5:1 |
| `type.h2` | `var(--instica-type-h2)` | `.title2` | 4.5:1 |
| `type.h3` | `var(--instica-type-h3)` | `.title3` | 4.5:1 |
| `type.body` | `var(--instica-type-body)` | `.body` | 4.5:1 |
| `type.caption` | `var(--instica-type-caption)` | `.caption` | 3:1 |
| `type.micro` | `var(--instica-type-micro)` | `.caption2` | 3:1 |

> Define the CSS variables inside the tokens export script or use Tailwind/custom properties to map size + line-height from `tokens/typography.json` automatically.

### Numerics
- Use tabular lining numerals for prices, quantities, and SKU counts.
- Align currency symbols with numbers via `font-variant-numeric: tabular-nums;` on web.

### Pairing with color
- Default text color is `color.textPrimary`.
- Use `color.textSecondary` for support text but keep contrast ≥ 3:1.

### Micro-interaction copy
- Limit CTA labels to 24 characters to avoid wrapping on compact widths.
- Use sentence case in buttons and all caps only for badges using `type.micro`.
- Keep vertical rhythm by pairing `type.h*` headings with `space.md` spacing before the next block.

## Editorial references
Use the reference captures as typographic guardrails:

- **Apple hero:** Centered H1 with thin supporting copy. When presenting a flagship feature, mirror this structure with `type.display` for the headline and `type.body` for the lede stacked within 24px.
- **Anthropic homepage:** Employ underline accents sparingly to call attention to action verbs. The underline color should be `color.brand` at 60% opacity.
- **Nike navigation:** Uppercase, micro letter-spacing belongs in nav rails or category labels only. Keep it to 0.18em to preserve legibility.
- **Oura docs:** Code headings use mono fonts with pill badges (“GET”) to echo API vernacular. Map those to `type.micro` with `font-variant-caps: all-small-caps;` on the web for authenticity.

> If a page doesn’t echo at least one of these references, reevaluate the typographic system you’re applying.
