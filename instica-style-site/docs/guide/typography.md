---
title: Typography
outline: deep
---

# Typography

Instica typography balances retail polish with utilitarian clarity. All values map to `tokens/typography.json` and SwiftUI text styles.

## Typeface
- **Primary:** Inter (Variable) for both product and marketing.
- **Fallback stack (web + native):** `"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- **Optical sizing:** enable for headings on iOS/macOS (`.fontDesign(.rounded)` optional) and `font-optical-sizing: auto;` on the web.

### Platform stacks
| Surface | Font stack | Notes |
| --- | --- | --- |
| Web | `"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | Add `font-feature-settings: "tnum" off, "ss01" on;` for rounded terminals. |
| iOS / iPadOS | Inter variable as custom font, fallback to `SF Pro Text` via `UIFontMetrics` | Use `.font(.custom("Inter", size: ... , relativeTo: .body))` and opt into Dynamic Type. |
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

## Text scale
| Token | Size | Weight | Usage |
| --- | --- | --- | --- |
| `type.display` | 44/52 | Semibold | Hero metrics |
| `type.h1` | 32/40 | Semibold | Page titles |
| `type.h2` | 24/32 | Medium | Section titles |
| `type.h3` | 20/28 | Medium | Module headings |
| `type.body` | 16/24 | Regular | Default copy |
| `type.bodyBold` | 16/24 | Semibold | Emphasis |
| `type.caption` | 14/20 | Medium | Metadata |
| `type.micro` | 12/16 | Medium | Labels, table headers |

### Dynamic Type guidance
- Use system text styles on native platforms; map tokens to `UIFont.TextStyle` equivalents.
- Keep minimum body size at 16pt for readability.
- Allow captions/micro text to wrap; never truncate critical data.

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
