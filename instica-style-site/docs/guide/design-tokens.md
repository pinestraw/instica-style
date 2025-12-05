---
title: Design Tokens
outline: deep
---

# 2. Design Tokens

Tokens turn our brand principles into reusable primitives for design and engineering. They live in `/tokens/*.json` and sync to SwiftUI + CSS variables.

## 2.1 Spacing Scale
- Core rhythm: **4 / 8 / 12 / 16 / 24 / 32 / 48 px**.
- **Padding rules:**
  - Mobile cards: `space.xl` horizontal, `space.lg` vertical.
  - Forms: `space.md` between label and input, `space.xl` between groups.
- **Vertical rhythm:** keep multiples of 4px; avoid odd increments.
- **SwiftUI snippet:**
  ```swift
  struct Space {
    static let xs: CGFloat = 4
    static let sm: CGFloat = 8
    static let md: CGFloat = 12
    static let lg: CGFloat = 16
    static let xl: CGFloat = 24
  }
  ```

## 2.2 Border Radius
| Token | Value | Usage |
| --- | --- | --- |
| `radius.sm` | 8px | Buttons, inputs |
| `radius.md` | 12px | Cards, sheets |
| `radius.lg` | 16px | Large modals, hero blocks |
| `radius.pill` | 999px | Badges, pills |

Guidelines:
- Keep buttons at 12px radius for thumb comfort.
- Sheets/modals use 16px radius with top corners only.

## 2.3 Shadows / Elevation
| Level | Light mode | Dark mode | Usage |
| --- | --- | --- | --- |
| Base | none | none | Page background |
| Raised | `0 8px 24px rgba(25,32,36,0.08)` | `0 8px 24px rgba(0,0,0,0.45)` | Cards, popovers |
| Floating | `0 16px 40px rgba(25,32,36,0.16)` | `0 16px 40px rgba(0,0,0,0.6)` | Dialogs, FABs |

- Avoid stacking more than two elevations per screen.
- Dark mode shadows include a subtle inner stroke (`rgba(255,255,255,0.04)`) to retain depth.

## 2.4 Iconography
- **Style:** outlined with 2px strokes, rounded terminals.
- **Filled variant:** only for active states or destructive confirmations.
- **Touch targets:** 44×44pt minimum, even if the glyph is smaller.
- **Padding:** icons inside pills use `space.sm` padding left/right.
- **Do:** keep stroke weight consistent with typography weight.
- **Don’t:** mix third-party icon sets without tokenizing their size + stroke first.

Store SVG sources in `resources/assets/icons/` and optimize via `svgo` before committing.
