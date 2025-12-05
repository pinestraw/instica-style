---
title: Design Tokens
outline: deep
---

# 2. Design Tokens

Tokens turn our brand principles into reusable primitives for design and engineering. They live in `/tokens/*.json` and sync to SwiftUI + CSS variables.

## 2.1 Spacing Scale
- Core rhythm: **4 / 8 / 12 / 16 / 24 / 32 / 48 px**. All layout spacing snaps to this grid to keep density consistent across mobile and desktop.
- **Token map:**

| Token | Value | Typical usage |
| --- | --- | --- |
| `space.xs` | 4px | Icon padding, micro gaps |
| `space.sm` | 8px | Inline labels, chip padding |
| `space.md` | 12px | Between label and input, quick filters |
| `space.lg` | 16px | Button stacks, card gutters |
| `space.xl` | 24px | Section padding, sheet margins |
| `space.2xl` | 32px | Desktop page gutters |
| `space.3xl` | 48px | Hero rows, empty states |

- **Padding rules:**
  - Mobile cards: `space.xl` horizontal, `space.lg` vertical.
  - Forms: `space.md` between label and input, `space.xl` between groups.
  - Navigation rails: `space.lg` between icons, `space.sm` for labels.
- **Vertical rhythm:** keep multiples of 4px; avoid odd increments. When aligning to system-safe areas, round to the nearest token.
- **Platform exports:**
  - CSS variables: `--space-lg: 1rem;` etc.
  - iOS: `enum Space { static let lg: CGFloat = 16 }`
  - Android: `dimen/space_lg = 16dp`
- **SwiftUI snippet:**
  ```swift
  enum Space {
    static let xs: CGFloat = 4
    static let sm: CGFloat = 8
    static let md: CGFloat = 12
    static let lg: CGFloat = 16
    static let xl: CGFloat = 24
    static let xxl: CGFloat = 32
  }
  ```

## 2.2 Border Radius
| Token | Value | Usage |
| --- | --- | --- |
| `radius.sm` | 8px | Icon buttons, quick filters |
| `radius.md` | 12px | Primary buttons, inputs |
| `radius.lg` | 16px | Cards, sheets |
| `radius.xl` | 20px | Hero blocks, floating panels |
| `radius.pill` | 999px | Chips, badges |

Guidelines:
- Keep buttons at 12px radius for thumb comfort; avoid mixing 8px + 12px in the same control group.
- Sheets/modals use 16px radius with top corners only; bottom corners remain square to align with the viewport edge.
- Data viz tiles introduce `radius.xl` when a hero metric needs extra prominence.
- In SwiftUI, map radius tokens to `cornerRadius(_:antialiased:)` using `Space` multiples to avoid decimal values.

## 2.3 Shadows / Elevation
| Level | Token | Light mode | Dark mode | Usage |
| --- | --- | --- | --- | --- |
| Base | `elevation.base` | none | none | Page background |
| Raised | `elevation.raised` | `0 8px 24px rgba(25,32,36,0.08)` | `0 8px 24px rgba(0,0,0,0.45)` | Cards, popovers |
| Floating | `elevation.floating` | `0 16px 40px rgba(25,32,36,0.16)` | `0 16px 40px rgba(0,0,0,0.6)` | Dialogs, FABs |
| Overlay | `elevation.overlay` | `0 20px 64px rgba(18,20,36,0.30)` | `0 24px 72px rgba(0,0,0,0.65)` | Modals, command palette |

- Avoid stacking more than two elevations per screen.
- Dark mode shadows include a subtle inner stroke (`rgba(255,255,255,0.04)`) to retain depth.
- Web implementation: `box-shadow: var(--elevation-floating);` where variables map to tokens.
- iOS: use `CALayer.shadowColor` + `shadowRadius`; ensure `shadowPath` matches rounded corners to prevent clipping.

## 2.4 Iconography
- **Style:** outlined with 2px strokes, rounded terminals.
- **Filled variant:** only for active states or destructive confirmations.
- **Touch targets:** 44×44pt minimum, even if the glyph is smaller.
- **Padding:** icons inside pills use `space.sm` padding left/right.
- **Do:** keep stroke weight consistent with typography weight.
- **Don’t:** mix third-party icon sets without tokenizing their size + stroke first.

Store SVG sources in `resources/assets/icons/` and optimize via `svgo` before committing.

| Attribute | Token | Value |
| --- | --- | --- |
| Grid | `icon.grid` | 24×24pt |
| Stroke | `icon.stroke` | 2px |
| Corner style | `icon.corner` | Rounded |
| Padding | `icon.padding` | `space.sm` |

> **Tip:** match icon labels to `Body/Medium` text for consistent weight when icons act as toggles.

## 2.5 Color Tokens
- Color tokens live in `tokens/colors.json` and sync to the theme generator.
- **Naming:** `color.category.intent.state` (e.g., `color.feedback.success.background`).
- **Semantic tiers:**
  - `color.brand.*` for primary actions.
  - `color.feedback.*` for success/warning/error/info.
  - `color.data.*` for charts (limit to 5 hues; rotate via hue shift).
- **Export strategy:** convert JSON to `ColorSet` on iOS, `#define` on web, and Compose theming on Android.
- For gradients, store both start + end color tokens to keep parity across hero blocks.

## 2.6 Motion & Timing
- Motion tokens describe **timing**, **curve**, and **distance**.

| Token | Duration | Curve | Usage |
| --- | --- | --- | --- |
| `motion.fast` | 120ms | `ease-out` | Buttons, toggles |
| `motion.base` | 180ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Cards, popovers |
| `motion.slow` | 240ms | `ease-in-out` | Modal transitions |

- Distances align with spacing tokens (e.g., sheet slides `space.3xl`).
- Avoid bounce or overshoot; keep motion “intentional glide.”
- SwiftUI sample:
  ```swift
  .animation(.timingCurve(0.4, 0, 0.2, 1, duration: 0.18), value: isPresented)
  ```

## 2.7 State Tokens
- **Focus:** `state.focus`: 2px outline using `color.brand` at 60% opacity; for dark mode use `color.brandSoft` overlay.
- **Disabled:** `state.disabled.opacity` = 0.32 for controls, 0.48 for text.
- **Loading:** `state.loading.overlay` uses `color.surface` with 80% alpha plus shimmer gradient `color.brand` -> `color.brandSoft`.
- **Error text:** `state.error.text` references `color.error` but clamps font weight to Medium to avoid visual noise.

These state tokens keep behavior consistent across components. When shipping features, reference token names in commits to make audit trails easy.
