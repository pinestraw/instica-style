---
title: Color System
outline: deep
---

# Color System

Instica uses a three-tier palette: foundation neutrals, accent blues, and supporting feedback colors. All values map directly to `tokens/colors.json` so SwiftUI and CSS builds stay synchronized.

## Neutral base
| Token | Value | Usage |
| --- | --- | --- |
| `color.surface` | #F7F8FA | Backgrounds, cards |
| `color.surfaceAlt` | #FFFFFF | Elevated cards, sheets |
| `color.textPrimary` | #192024 | Primary copy |
| `color.textSecondary` | #5F6C75 | Supporting copy |
| `color.border` | #DFE3E8 | Dividers, strokes |

## Brand accent
| Token | Value | Usage |
| --- | --- | --- |
| `color.brand` | #1A73E8 | Primary buttons, links |
| `color.brandSoft` | #DCEBFF | Accent backgrounds |

## Feedback states
| Token | Value | Usage |
| --- | --- | --- |
| `color.success` | #0F9D58 | Success badges |
| `color.warning` | #F4B400 | Pending status |
| `color.error` | #D93025 | Errors, destructive |

### Contrast guidance
- Maintain 4.5:1 for text above surface neutrals.
- When using `color.brand` on neutral backgrounds, ensure text sits on `color.surface` or use white copy at 14pt+ bold.
- For charts, stick to accent hues plus one neutral line; avoid rainbow palettes.

### Dark mode mapping
| Light token | Dark token |
| --- | --- |
| `color.surface` → `color.surfaceDark` (#0F1418)
| `color.surfaceAlt` → `color.surfaceAltDark` (#131A20)
| `color.textPrimary` → `color.textPrimaryDark` (#F4F6F8)

Dark tokens live in the same JSON file to minimize theme switching logic.
