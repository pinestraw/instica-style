---
title: Components
outline: deep
---

# Components

This section translates the legacy style-guide modules into shareable UI patterns. Each component references tokens and assets so both iOS and web stay synced.

## Buttons
| Variant | Anatomy | Guidance |
| --- | --- | --- |
| Primary | `color.brand` fill, white text, 12px radius | Use for the single most important action on a surface. Max two per screen. |
| Secondary | Transparent background, `color.brand` border/text | Use for supportive actions that still need emphasis. |
| Destructive | `color.error` fill, white text | Always confirm destructive flows with sheet/dialog. |

- Height: 48px mobile, 44px desktop.
- Min width: 120px; buttons grow with content but cap at 320px.
- Loading state replaces label with spinner and preserves width.

## Inputs
- Corners: 12px radius.
- Default stroke: `color.border`; focused stroke: `color.brand` at 2px.
- Helper/error text uses `type.caption` and `color.textSecondary` or `color.error`.
- Use inline icons for search and filters; align to spacing grid.

## Cards
- Padding: `space.xl`.
- Title uses `type.h3`, metadata uses `type.caption`.
- Support quick actions in top-right corner only when necessary.
- For status tags, prefer pill badges with `space.sm` padding and `type.micro` text.

## Tables & Lists
- Desktop tables use sticky headers, zebra striping via `color.surfaceAlt`.
- Mobile lists keep Title + Subtitle + KPI stack, never more than 3 lines.
- Always expose batch selection within toolbar instead of per-row toggles.

## Badges
| Token | Color | Usage |
| --- | --- | --- |
| `badge.success` | `color.success` fill | Delivered, Paid |
| `badge.warning` | `color.warning` fill | Pending, Awaiting Action |
| `badge.info` | `color.brandSoft` fill w/ brand text | Informational alerts |

## Empty states
- Pair illustration from `/resources/assets/inspiration/positive.png` with body text + primary CTA.
- Provide at least one secondary action (e.g., “Import CSV”) to keep users moving.
