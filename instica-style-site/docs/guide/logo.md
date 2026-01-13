---
title: Logo & Usage
outline: deep
---

# Logo & Usage

Instica’s logo anchors the brand across product, marketing, and documentation. Use the variants below to match the surface while preserving clarity and contrast.

## Variants

| Variant | Preview | When to use | File |
| --- | --- | --- | --- |
| Full-color | <img src="/logo/instica-logo-october-24-transparent.png" alt="Instica full-color logo" width="160" /> | Light backgrounds in product UI, docs, and marketing. | [PNG](/logo/instica-logo-october-24-transparent.png) |
| Grey | <img src="/logo/instica-logo-october-24-grey-transparent.png" alt="Instica grey logo" width="160" /> | Dark surfaces, nav bars, or muted shells where high contrast is needed. | [PNG](/logo/instica-logo-october-24-grey-transparent.png) |
| Mono (cream) | <img src="/logo/instica-logo-october-24-cream.png" alt="Instica mono cream logo" width="160" /> | Embossed/print use or single-color treatments. | [PNG](/logo/instica-logo-october-24-cream.png) |

All variants sit on transparent backgrounds and should be exported at 2× and 3× where possible.

## Clear space & minimum size
- Clear space: keep padding at least equal to the capital "I" height on all sides. In code, apply `padding: clamp(16px, 1vw, 24px);` around the asset.
- Minimum size: 72px width in product UI, 120px in marketing hero placements. Increase when paired with dense backgrounds.
- Alignment: center vertically in nav bars; align with typographic baselines in hero rows.

## Background guidance
- Light mode: prefer the full-color logo on `color.surface` or neutral gradients up to 2% tint.
- Dark mode: switch to the grey logo for contrast; add a subtle `rgba(255,255,255,0.06)` stroke if the surface is noisy.
- Photography: only place the logo over muted areas; add a neutral overlay if necessary to reach contrast.

## Incorrect usage
- Do not stretch, rotate, skew, or add drop shadows.
- Do not place on clashing gradients or busy imagery without an overlay.
- Do not recolor the logo outside the provided variants.
- Do not pair with gradients on the mark itself; keep gradients to the surrounding surface.

## Implementation snippets

**Web**
```css
.logo-lockup {
  padding: clamp(16px, 1vw, 24px);
  display: inline-flex;
  align-items: center;
}
.logo-lockup img {
  height: 32px;
  width: auto;
  object-fit: contain;
}
```

**iOS**
```swift
Image("instica-logo")
  .resizable()
  .scaledToFit()
  .frame(height: 32)
  .padding(.vertical, 12)
  .padding(.horizontal, 16)
```

**Android**
```xml
<ImageView
    android:id="@+id/logo"
    android:layout_width="wrap_content"
    android:layout_height="32dp"
    android:adjustViewBounds="true"
    android:paddingStart="16dp"
    android:paddingEnd="16dp"
    android:paddingTop="12dp"
    android:paddingBottom="12dp"
    android:contentDescription="Instica logo" />
```

## Source of truth
Assets live in `resources/assets/icons/` and are mirrored to `/logo/` for docs. Update both locations when delivering a new logo batch and regenerate the site to refresh previews.
