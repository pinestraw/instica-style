---
title: Color System
outline: deep
---

# Color System

Instica uses a three-tier palette: foundation neutrals, accent blues, and supporting feedback colors. All values map directly to `tokens/colors.json` so SwiftUI and CSS builds stay synchronized.

## Neutral base
<table class="color-table">
	<thead>
		<tr>
			<th>Token</th>
			<th>Swatch</th>
			<th>Value</th>
			<th>Usage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>color.surface</code></td>
			<td><span class="color-swatch is-light" style="--color-value:#F7F8FA"></span></td>
			<td>#F7F8FA</td>
			<td>Backgrounds, cards</td>
		</tr>
		<tr>
			<td><code>color.surfaceAlt</code></td>
			<td><span class="color-swatch is-light" style="--color-value:#FFFFFF"></span></td>
			<td>#FFFFFF</td>
			<td>Elevated cards, sheets</td>
		</tr>
		<tr>
			<td><code>color.textPrimary</code></td>
			<td><span class="color-swatch is-dark" style="--color-value:#192024"></span></td>
			<td>#192024</td>
			<td>Primary copy</td>
		</tr>
		<tr>
			<td><code>color.textSecondary</code></td>
			<td><span class="color-swatch is-dark" style="--color-value:#5F6C75"></span></td>
			<td>#5F6C75</td>
			<td>Supporting copy</td>
		</tr>
		<tr>
			<td><code>color.border</code></td>
			<td><span class="color-swatch is-light" style="--color-value:#DFE3E8"></span></td>
			<td>#DFE3E8</td>
			<td>Dividers, strokes</td>
		</tr>
	</tbody>
</table>

## Brand accent
<table class="color-table">
	<thead>
		<tr>
			<th>Token</th>
			<th>Swatch</th>
			<th>Value</th>
			<th>Usage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>color.brand</code></td>
			<td><span class="color-swatch is-dark" style="--color-value:#1A73E8"></span></td>
			<td>#1A73E8</td>
			<td>Primary buttons, links</td>
		</tr>
		<tr>
			<td><code>color.brandSoft</code></td>
			<td><span class="color-swatch is-light" style="--color-value:#DCEBFF"></span></td>
			<td>#DCEBFF</td>
			<td>Accent backgrounds</td>
		</tr>
	</tbody>
</table>

## Feedback states
<table class="color-table">
	<thead>
		<tr>
			<th>Token</th>
			<th>Swatch</th>
			<th>Value</th>
			<th>Usage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>color.success</code></td>
			<td><span class="color-swatch is-dark" style="--color-value:#0F9D58"></span></td>
			<td>#0F9D58</td>
			<td>Success badges</td>
		</tr>
		<tr>
			<td><code>color.warning</code></td>
			<td><span class="color-swatch is-dark" style="--color-value:#F4B400"></span></td>
			<td>#F4B400</td>
			<td>Pending status</td>
		</tr>
		<tr>
			<td><code>color.error</code></td>
			<td><span class="color-swatch is-dark" style="--color-value:#D93025"></span></td>
			<td>#D93025</td>
			<td>Errors, destructive</td>
		</tr>
	</tbody>
</table>

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

### Hero gradients inspired by Apple + Oura
- Apple’s iPhone hero keeps the background whisper-quiet. Start with `color.surface` and introduce a 60° gradient blending `color.brand` (8% opacity) into `#E7EEFF`.
- Overlay a second radial highlight at 20% opacity to mimic Oura’s floating hardware glow. This subtle halo supports 3D renders of tokens or screenshots without fighting the copy.
- Keep buttons solid—gradients belong to hero backdrops, not CTAs.

```css
.hero-shell {
	background:
		radial-gradient(circle at 15% 20%, rgba(255,255,255,0.9), transparent 55%),
	linear-gradient(135deg, rgba(26,115,232,0.08), rgba(239,246,255,1));
}
```

### Doc console palette (Oura developer + Meta docs)
- Split doc layouts into a light content column and a rich “console” column using `color.surfaceDark`.
- The console inherits `color.brand` for the run button, muted blues for code backgrounds, and accent reds for error badges (mirroring the Oura screenshot).
- Keep the left nav pale, like Meta’s docs, so breadcrumbs and section headings stay legible.

| Region | Light mode | Dark mode | Reference |
| --- | --- | --- | --- |
| Content column | `color.surface` | `color.surfaceDark` | Meta docs overview |
| Console column | `#0B1D33` | `#060C15` | Oura developer panel |
| Request badge | `color.brand` | `color.brandSoft` | Oura GET badge |
| Error list | `#FFE5E5` text `color.error` | `#331818` text `#FF8A8A` | HTTP error stack |

These palettes help our design system docs feel like a living API explorer instead of static markdown.
