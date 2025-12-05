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
