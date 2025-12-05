---
title: Typography
outline: deep
---

# Typography

Instica typography balances retail polish with utilitarian clarity. All values map to `tokens/typography.json` and SwiftUI text styles.

## Typeface
- **Primary:** Inter (Variable) for both product and marketing.
- **Fallbacks:** `"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Use the variable font’s optical sizing for dynamic type support.

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

### Numerics
- Use tabular lining numerals for prices, quantities, and SKU counts.
- Align currency symbols with numbers via `font-variant-numeric: tabular-nums;` on web.

### Pairing with color
- Default text color is `color.textPrimary`.
- Use `color.textSecondary` for support text but keep contrast ≥ 3:1.
