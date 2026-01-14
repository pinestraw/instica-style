---
title: Typography
outline: deep
---

# Typography

Instica typography is compact and utility-first for data-dense product surfaces.

- Token source of truth: `tokens/typography.json`
- Web implementation: CSS variables in `.vitepress/theme/custom.css`
- Native: map roles to platform text styles and honor Dynamic Type

## Typeface
- **Web:** Manrope Variable (preferred), then Manrope → system fallbacks. Keep letter-spacing tight on headings; avoid over-weighting body text.
- **Mono:** SF Mono (or system monospace fallback).
- **Native:** SF Pro Text/Display for iOS/macOS; respect Dynamic Type.

### Platform stacks
| Surface | Font stack | Notes |
| --- | --- | --- |
| Web | `"Manrope Variable", "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", "SF Pro Text", system-ui, sans-serif` | Compact dashboard feel; enable tabular numerals when displaying metrics. |
| iOS / iPadOS | System (SF Pro) via Dynamic Type | Map roles to text styles; never block user scaling. |
| Android / Jetpack Compose (future) | `FontFamily(Font("inter_regular"), Font("inter_semibold"))` | Keep tabular numerals for commerce metrics. |

### CSS + Swift snippets

```css
:root {
	font-family: "Manrope Variable", "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", "SF Pro Text", system-ui, sans-serif;
	font-feature-settings: 'tnum' off;
}

.price {
	font-variant-numeric: tabular-nums;
}
```

```swift
Text(value)
	.font(.custom("Manrope", size: 16, relativeTo: .body))
	.kerning(-0.2)
	.monospacedDigit()
```

## Compact scale (web)
These roles come directly from `tokens/typography.json` and are reflected in CSS variables.

<TypographyDemo />

| Role | Size / Line | Letter | Weight | Usage |
| --- | --- | --- | --- | --- |
| Display | 32 / 40 | -0.03em | 700 | Hero headlines, top of page |
| H1 | 28 / 36 | -0.02em | 700 | Page titles |
| H2 | 24 / 32 | -0.01em | 600 | Major sections |
| H3 | 20 / 28 | 0 | 600 | Section headers |
| H4 | 18 / 24 | 0 | 600 | Subsections |
| H5 | 16 / 24 | 0 | 600 | Small headers |
| Large | 15 / 24 | 0 | 400 | Lede / intro body |
| Body | 14 / 20 | 0 | 400 | Default body text |
| Small | 13 / 18 | 0 | 400 | UI labels |
| Caption | 12 / 16 | +0.01em | 400 | Metadata, table headers |
| Micro | 11 / 14 | +0.02em | 500 | Tiny labels, chips |

### Usage guidelines
- Headings: 1.1–1.25 line-height, negative tracking on Display/H1/H2 for polish.
- Body: 1.4–1.5 line-height, keep to ~65–75 characters width for reading.
- Dense UI: 1.2–1.3 line-height for tables/lists; favor Small/Caption for labels.
- Numerics: use `font-variant-numeric: tabular-nums;` when showing prices/metrics.

### Type specimens

```html
<div class="type-specimen">
	<p class="display">Display 32/40 — hero headline</p>
	<p class="h1">H1 28/36 — page title</p>
	<p class="h2">H2 24/32 — section title</p>
	<p class="h3">H3 20/28 — subsection</p>
	<p class="h4">H4 18/24 — detail header</p>
	<p class="h5">H5 16/24 — small header</p>
	<p class="large">Large 15/24 — lede paragraph</p>
	<p class="body">Body 14/20 — default copy and UI text</p>
	<p class="small">Small 13/18 — form labels and hints</p>
	<p class="caption">Caption 12/16 — metadata and table headers</p>
	<p class="micro">Micro 11/14 — badges and chips</p>
</div>
```

### Token → platform mapping
| Token | CSS variable | SwiftUI style | Min contrast |
| --- | --- | --- | --- |
| `type.display` | `var(--type-display-size)` / `var(--type-display-line)` | `.largeTitle` | 4.5:1 |
| `type.h1` | `var(--type-h1-size)` / `var(--type-h1-line)` | `.title` | 4.5:1 |
| `type.h2` | `var(--type-h2-size)` / `var(--type-h2-line)` | `.title2` | 4.5:1 |
| `type.h3` | `var(--type-h3-size)` / `var(--type-h3-line)` | `.title3` | 4.5:1 |
| `type.body` | `var(--type-body-size)` / `var(--type-body-line)` | `.body` | 4.5:1 |
| `type.caption` | `var(--type-caption-size)` / `var(--type-caption-line)` | `.caption` | 3:1 |
| `type.micro` | `var(--type-micro-size)` / `var(--type-micro-line)` | `.caption2` | 3:1 |

### Density defaults
- Default docs/marketing body: Body 14/20 with `var(--type-body-letter)`.
- Long-form content: Large 15/24 for opening paragraphs, then Body.
- UI and tables: Small 13/18 or Caption 12/16 for labels/meta to keep density high.

### Micro-interaction copy
- Keep CTAs short (≤24 characters) to avoid wrapping.
- Use sentence case for buttons; reserve all-caps for Micro labels with positive tracking.
- Pair headings with consistent spacing tokens (e.g., `space.md`) to maintain rhythm.
