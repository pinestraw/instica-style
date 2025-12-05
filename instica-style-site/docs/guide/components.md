---
title: Components
outline: deep
---

# Components

This section stays in lockstep with the `.style_inspiration` references and adds SwiftUI snippets so engineering can copy → paste.

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

### Supporting assets
- Store SwiftUI playgrounds in `/resources/swiftui/` (create if needed) so designers can snapshot updates.
