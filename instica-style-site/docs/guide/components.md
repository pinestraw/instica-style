---
title: Components
outline: deep
---

# Components

This section stays in lockstep with the `.style_inspiration` references and adds SwiftUI snippets so engineering can copy → paste.

## 3.0 Icons

Icons are integrated throughout our component system to enhance usability and provide visual context. See the [Icons guide](./icons.md) for comprehensive specifications.

### Icon Integration Patterns

**Button Icons**
- Place icons to the left of labels with `space.sm` (8px) spacing
- Use 24px icons for standard buttons, 20px for compact buttons
- Never trail icons on primary CTAs unless indicating external navigation

```swift
Button(action: scanAction) {
	HStack(spacing: 8) {
		Image("scan-search")
			.resizable()
			.frame(width: 24, height: 24)
		Text("Scan Item")
	}
	.padding(.vertical, 12)
	.padding(.horizontal, 16)
}
```

**List Row Icons**
- Use 32px icons to lead list rows for feature identification
- Maintain 12px spacing between icon and text content
- Reserve trailing icons for navigation chevrons only

```swift
HStack(spacing: 12) {
	Image("organize-items")
		.resizable()
		.frame(width: 32, height: 32)
	VStack(alignment: .leading) {
		Text("Category Settings")
		Text("Organize your inventory").font(.caption)
	}
	Spacer()
	Image(systemName: "chevron.right")
}
```

**Card Headers**
- Use 48px–64px icons in card headers for feature emphasis
- Pair with headline text at `space.md` (12px) distance
- Consider tinted backgrounds that complement icon gradients

```swift
VStack(alignment: .leading, spacing: 12) {
	Image("price-optimization")
		.resizable()
		.frame(width: 48, height: 48)
	VStack(alignment: .leading, spacing: 4) {
		Text("Smart Pricing")
			.font(.title3.weight(.semibold))
		Text("Optimize your listing prices")
			.font(.caption)
			.foregroundColor(Color("textSecondary"))
	}
}
.padding(24)
```

**Empty States**
- Use 128px icons for empty state illustrations
- Center align on mobile, left align on desktop
- Maintain `space.xl` (24px) between icon and messaging

```swift
VStack(spacing: 24) {
	Image("upload-multiple")
		.resizable()
		.frame(width: 128, height: 128)
	VStack(spacing: 8) {
		Text("No items yet")
			.font(.title2.weight(.semibold))
		Text("Start by uploading your first item")
			.font(.body)
			.foregroundColor(Color("textSecondary"))
	}
	Button("Upload Now", action: uploadAction)
}
```

**Workflow Step Indicators**
- Use 40px icons for multi-step workflows
- Display in horizontal arrangement with connecting lines
- Highlight active step with brand color accent

```swift
HStack(spacing: 16) {
	ForEach(steps) { step in
		VStack(spacing: 8) {
			Image(step.icon)
				.resizable()
				.frame(width: 40, height: 40)
				.opacity(step.isActive ? 1.0 : 0.5)
			Text(step.name)
				.font(.caption)
		}
	}
}
```

### Icon Accessibility in Components

- Always provide descriptive labels via `.accessibilityLabel()`
- Use `.accessibilityHidden(true)` for purely decorative icons
- Ensure icon + text combinations meet WCAG AA contrast requirements
- Test icons on both light and dark backgrounds during component design

```swift
Image("quick-actions")
	.resizable()
	.frame(width: 24, height: 24)
	.accessibilityLabel("Quick actions menu")
```

### Platform-Specific Guidelines

**iOS**
- Use `.renderingMode(.original)` to preserve PNG gradients
- Consider SF Symbols for system actions, workflow icons for app-specific features
- Test icons at 1x, 2x, 3x scales to ensure clarity

**Web**
- Set `alt` attributes with meaningful descriptions
- Use CSS `object-fit: contain` to prevent distortion
- Provide loading="lazy" for below-the-fold icon usage

**Responsive Sizing**
- Mobile: Scale icons down by 25% in dense layouts
- Tablet: Use default sizes as specified
- Desktop: Scale up to 150% for hero sections only

### Related Resources

- [Icons Guide](./icons.md) - Complete icon specifications and catalog
- [Icons Token File](../../tokens/icons.json) - Programmatic access to icon metadata
- [Color System](./color-system.md) - Gradient colors used in icons

## 3.1 Buttons

| Variant | Anatomy | When to use |
| --- | --- | --- |
| Primary | `color.brand` fill, white text, `radius.md` (12px) | Single most important action. Max two per screen. |
| Secondary | Transparent fill, `color.brand` border/text | Supportive actions of similar priority. |
| Destructive | `color.error` fill, white text | Deleting, canceling payouts, irreversible steps. |
| Disabled | 60% opacity + `cursor: not-allowed` | When inputs are incomplete. Provide context text nearby. |

- Height: 48px (mobile) / 44px (desktop).
- Maintain 16px horizontal padding, 12px vertical.
- Loading state: replace label with an activity indicator but keep width.
- **Don’t** turn links into buttons—use textual links for secondary navigation.
- **Icon pairing:** icons sit `space.sm` left of the label. Don’t trail icons on primary CTAs.
- **Hit area:** minimum 48×48pt; add invisible padding if UI feels crowded.

| State | Token | Behavior |
| --- | --- | --- |
| Hover | `state.hover.overlay` | Light overlay (`rgba(255,255,255,0.06)`) for primary buttons, `rgba(60,100,255,0.08)` for secondary |
| Focus | `state.focus` | 2px outline using `color.brand` at 60% opacity |
| Active | `state.active` | Darken fill by 8% and reduce shadow |
| Loading | `state.loading` | Spinner replaces text; button remains same width |

**Do / Don’t**
- ✅ Keep button labels to ≤ 24 characters. Prefer verbs (“Print label”).
- ✅ Stack secondary buttons beneath primary on mobile.
- ❌ Mix destructive + primary next to each other; insert `space.2xl` or move destructive to sheet footer.
- ❌ Use all caps; title case only.

```swift
struct InsticaButton: View {
	enum Style { case primary, secondary, destructive }

	var title: String
	var style: Style = .primary
	var action: () -> Void

	var body: some View {
		Button(action: action) {
			HStack(spacing: Space.sm) {
				Text(title)
					.font(.custom("Inter", size: 16, relativeTo: .body).weight(.semibold))
					.frame(maxWidth: .infinity)
			}
			.padding(.vertical, 12)
			.padding(.horizontal, 16)
			.background(background)
			.foregroundColor(foreground)
			.cornerRadius(12)
		}
		.buttonStyle(.plain)
	}

	private var background: Color {
		switch style {
		case .primary: return Color("brand")
		case .secondary: return Color.clear
		case .destructive: return Color("error")
		}
	}

	private var foreground: Color {
		style == .secondary ? Color("brand") : .white
	}
}
```

## 3.2 Input Fields
- **TextField/SecureField:** 12px radius, 1px `color.border` stroke, 2px `color.brand` focus stroke.
- **Dropdown picker:** uses same field chrome plus chevron icon. Options list uses `space.md` padding and sticky confirm button on mobile.
- **Validation:** inline message beneath field using `type.caption` + `color.error`.
- **Keyboard rules:**
	- Email → `.emailAddress`
	- Quantities → `.numberPad` with `.monospacedDigit()` value
	- Names → `.namePhonePad` with `.autocapitalization(.words)`
- **Auto-capitalization:** off for SKUs, on for addresses. Always disable Smart Quotes for SKU/ID fields.
- **Accessory icons:** left icons reserve `space.md`; never place icons on both ends unless the right icon is for password reveal.

| State | Stroke | Background | Helper text |
| --- | --- | --- | --- |
| Default | 1px `color.border` | `color.surface` | Optional caption |
| Focused | 2px `color.brand` | `color.surface` | Move helper to top to avoid jump |
| Error | 2px `color.error` | `color.surface` | Caption switches to `color.error` |
| Disabled | 1px `color.borderMuted` | `color.surfaceMuted` | Text at 60% opacity |

- **Group forms:** stack related fields in blocks of three, separated by `space.xl` and a section label.
- **Assistive text:** describe expected format (“AA-12345”) rather than restating label.
- **Error writing style:** “Add a tracking number” instead of “Tracking number required.”

```swift
struct InsticaTextField: View {
	@Binding var value: String
	var title: String
	var placeholder: String
	var error: String?

	var body: some View {
		VStack(alignment: .leading, spacing: 4) {
			Text(title).font(.caption).foregroundColor(Color("textSecondary"))
			TextField(placeholder, text: $value)
				.textInputAutocapitalization(.never)
				.autocorrectionDisabled()
				.padding(.horizontal, 14)
				.padding(.vertical, 12)
				.background(Color("surface"))
				.overlay(RoundedRectangle(cornerRadius: 12).stroke(borderColor, lineWidth: borderWidth))
		}
	}

	private var borderColor: Color { error == nil ? Color("border") : Color("error") }
	private var borderWidth: CGFloat { error == nil ? 1 : 2 }
}
```

## 3.3 Cards
- **Padding:** `space.xl` inside, `space.lg` between stacked cards.
- **Elevation:** Raised level shadow; add 1px border in dark mode.
- **Metadata placement:** top-right for status pills, bottom row for timestamps.
- **Layout grid:** 12-column desktop grid; mobile cards stretch edge-to-edge with 16px gutters.
- **Thumbnail usage:** If cards display imagery, keep aspect ratio 4:3 and align thumbnails left with `radius.md`.
- **Content order:** Title → KPI → Meta. Avoid placing actions inside cards; use a single trailing chevron or button row below the card.

| Card type | Description |
| --- | --- |
| Metric card | Display single KPI with sparkline; use `space.md` between value and trend |
| Collection card | Contains list of SKUs; keep list ≤ 4 items before truncating |
| Warning card | Uses `color.warning` border and icon, standard surface background |

- **Don’t:** mix two different radii in the same grid or set cards flush against viewport edges.

```swift
struct InventoryCard: View {
	var title: String
	var subtitle: String
	var kpi: String

	var body: some View {
		VStack(alignment: .leading, spacing: Space.md) {
			Text(title).font(.title3.weight(.semibold))
			Text(subtitle).font(.caption).foregroundColor(Color("textSecondary"))
			Text(kpi).font(.title)
		}
		.padding(24)
		.background(Color("surfaceAlt"))
		.cornerRadius(16)
		.shadow(color: Color.black.opacity(0.08), radius: 24, x: 0, y: 8)
	}
}
```

## 3.4 Navigation
- **Tab bar:** up to four tabs; icons 28×28pt with labels using `type.micro`.
- **NavigationStack:** prefer `.navigationBarTitleDisplayMode(.large)` on root screens, `.inline` after drill-down.
- **Buttons in nav bars:** use secondary button style with minimal border.
- **Back button:** system default; avoid custom glyphs unless mirroring brand arrow.
- **Side navigation (desktop):** 64px rail with icons centered; expanded rail reveals labels on hover.
- **Breadcrumbs:** show on desktop detail pages when depth ≥ 3. Use micro separators `›` with `color.textSecondary`.
- **Sticky footers:** mobile nav can pin “Scan” or “Add item” button as floating action aligned to center of tab bar.

```swift
struct RootView: View {
	var body: some View {
		TabView {
			InventoryList()
				.tabItem { Label("Inventory", systemImage: "shippingbox") }
			AnalyticsView()
				.tabItem { Label("Insights", systemImage: "chart.bar") }
		}
		.tint(Color("brand"))
	}
}
```

## 3.5 Lists & Rows
- **Spacing:** 12px between cells, 16px internal padding.
- **Dividers:** use subtle dividers (`color.border`) on dense data; omit on cards.
- **Trailing icons:** 16px from right edge. Use `chevron.right` for navigation rows only.
- **Batch actions:** keep selection state inside toolbar rather than per-row toggles.
- **Selection:** multi-select uses `color.brandSoft` background + checkmark. For single select, highlight text and show left accent bar.
- **Density modes:** list items support `compact` (40px height) and `regular` (56px). Default to `regular` except on analytics tables.
- **Empty states:** show icon + 1 headline + 1 sentence + single CTA; align illustration left on desktop, centered on mobile.

```swift
struct InventoryRow: View {
	var body: some View {
		HStack(spacing: Space.md) {
			VStack(alignment: .leading, spacing: 4) {
				Text("SKU #8493").font(.body.weight(.semibold))
				Text("12 units • Ready to ship").font(.caption).foregroundColor(Color("textSecondary"))
			}
			Spacer()
			Text("$289")
				.font(.title3.weight(.semibold))
				.monospacedDigit()
			Image(systemName: "chevron.right")
				.foregroundColor(Color("textSecondary"))
		}
		.padding(.vertical, 12)
	}
}
```

### When not to use a button
- Use plain links for secondary navigation, especially inside inline sentences.
- Use chips or toggles for filter selections rather than stacking multiple secondary buttons.

### QA checklist per component
- Buttons: verify focus ring appears on keyboard nav; confirm disabled state removes hover.
- Inputs: ensure labels stay visible when fields are empty; never rely on placeholder alone.
- Cards: confirm dark mode adds 1px inner border; check for responsive wrapping at tablet breakpoints.
- Navigation: test orientation changes; nav should resize assets without cropping.
- Lists: confirm swipe actions map to logical colors (trash = red, archive = brand).

### Supporting assets
- Store SwiftUI playgrounds in `/resources/swiftui/` (create if needed) so designers can snapshot updates.

## 3.6 Doc shell + inspiration cards
Blend Meta’s developer docs with the Oura console to modernize long-form guides.

| Element | Spec | Reference |
| --- | --- | --- |
| Left rail | 248px wide, `space.md` vertical rhythm, uppercase micro labels | Meta doc sidebar |
| Breadcrumb bar | 40px tall, 8px gap before H1, subtle divider | Meta doc header |
| Console panel | `doc.console.surface` background, pill badges for HTTP verbs or component status | Oura developer panel |
| Inspiration cards | 24px radius, gradient backgrounds, inline CTA like Nike hero modules | Nike seasonal hero |

- Cards should support annotations: add a `badge` slot for “LIVE”, “DRAFT”, or “WIP”.
- Use staggered `motion.base` delays (80ms increments) to recreate the subtle hover reveals from the inspiration captures.

```vue
<section class="doc-shell">
	<aside>
		<nav>
			<a class="active">Overview</a>
			<a>API tokens</a>
		</nav>
	</aside>
	<article>
		<header>
			<p class="breadcrumb">Docs / Components</p>
			<h1>Form patterns</h1>
		</header>
		<div class="console-panel">
			<span class="badge get">GET</span>
			<code>POST /inventory/bulk-update</code>
		</div>
	</article>
</section>
```

> This shell keeps our docs feeling as intentional as the Nike, Apple, Meta, and Oura experiences the team referenced.
