---
title: Error States & Feedback
outline: deep
---

# Error States & Feedback

This guide defines patterns for communicating errors, failures, and system feedback across Instica surfaces. Thoughtful error states help users understand what went wrong and guide them toward resolution.

<style scoped>
.component-example {
    padding: 24px;
    background: #F8FAFC;
    border-radius: 12px;
    margin: 24px 0;
    border: 1px solid #E2E8F0;
}
</style>

## Core principles

### Hierarchy of communication

1. **User-facing first**: Transform technical errors into plain language
2. **Context-specific**: Tailor messages to the user's current action
3. **Actionable**: Always provide next steps or recovery options
4. **Graceful degradation**: Show partial data when possible instead of blank states

### Tone guidelines

- **Empathetic**: "We couldn't load..." instead of "Error: Failed to fetch"
- **Direct**: Avoid corporate jargon or overly apologetic language
- **Helpful**: Suggest concrete actions ("Try again" vs "Operation failed")
- **Transparent**: Acknowledge when something is on our end vs user's network

## Error messaging patterns

### Message structure

Follow this pattern for all error messages:

```
[What went wrong] + [Why it might have happened] + [What to do next]
```

**Examples:**
- ✅ "We couldn't load this item. Check your connection and try again."
- ✅ "Your changes couldn't be saved right now. Try again in a moment."
- ❌ "Error 500: Internal server error occurred during request processing."

### Context-specific fallbacks

The iOS app implements a `FriendlyErrorContext` enum that maps actions to user-friendly messages:

```swift
enum FriendlyErrorContext {
    case inventoryLoad → "We couldn't load this item. Please try again."
    case orderSave → "We couldn't update the order right now. Please try again."
    case imageUpload → "We couldn't upload that image. Please try again."
    case listingsLoad → "We couldn't load your listings. Please try again."
    // ... and many more
}
```

**Implementation strategy**: Define similar context enums for your platform. Never expose raw error codes or technical stack traces to users.

### Network-specific errors

Handle common network failures with specific guidance:

| Error Type | User Message |
|------------|-------------|
| No internet | "Check your internet connection and try again." |
| Connection lost | "Your connection was interrupted. Please try again." |
| Timeout | "The request is taking longer than expected. Try again in a moment." |
| Cannot reach server | "We couldn't reach the server. Try again shortly." |
| DNS failure | Same as "cannot reach server" |

**Generic network fallback**: "We ran into a network issue. Please try again."

## Visual error patterns

### Full-page error state

Use when an entire view fails to load critical data:

<div class="component-example">
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 28px; text-align: center;">
        <div style="width: 56px; height: 56px; border-radius: 16px; background: #FEF3C7; display: flex; align-items: center; justify-content: center; font-size: 24px;">⚠️</div>
        <div style="font-size: 18px; font-weight: 600; color: #0F172A;">Loading Failed</div>
        <div style="font-size: 14px; color: #64748B; max-width: 320px;">We couldn't load this item. Check your connection and try again.</div>
        <div style="font-size: 12px; color: #94A3B8;">Pull down to retry</div>
        <button style="margin-top: 6px; padding: 8px 16px; border-radius: 8px; border: none; background: #4F46E5; color: #FFFFFF; font-weight: 600;">Retry</button>
    </div>
</div>

#### Layout structure
```
┌─────────────────────────────┐
│                             │
│      [Large icon]           │  ← Warning triangle (50-64pt)
│                             │
│   [Primary message]         │  ← Title2, bold, textPrimary
│                             │
│  [Detailed explanation]     │  ← Body, textSecondary
│                             │
│  [Recovery instruction]     │  ← Caption, textTertiary
│                             │
│    [ Retry Button ]         │  ← Optional CTA
│                             │
└─────────────────────────────┘
```

#### iOS implementation (from InventoryListView)
```swift
VStack(spacing: InsticaSpacing.lg) {
    Image(systemName: "exclamationmark.triangle")
        .font(.system(size: 50))
        .foregroundColor(.stateWarning)

    Text("Loading Failed")
        .font(.insticaTitle2)
        .foregroundColor(.textPrimary)

    Text(errorMessage)
        .font(.insticaBody)
        .foregroundColor(.textSecondary)
        .multilineTextAlignment(.center)
        .padding(.horizontal, InsticaSpacing.screenInset)

    Text("Pull down to retry")
        .font(.insticaCaption)
        .foregroundColor(.textTertiary)
}
.frame(maxWidth: .infinity)
.padding(.top, InsticaSpacing.xxxxxxl)
```

**Design specifications:**
- Icon size: 50-64px
- Icon color: `stateWarning` (#F59E0B) or `stateDanger` (#DC2626) for critical errors
- Vertical spacing: `lg` (16px) between elements
- Top padding: `xxxxxxl` (96px) to center vertically
- Text alignment: Center
- Horizontal padding: `screenInset` (16px) on body text

### Inline error banner

Use for errors that don't block the entire page (e.g., failed save, upload error):

<div class="component-example">
    <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: #DC2626; color: #FFFFFF; border-radius: 10px;">
        <span>⚠️</span>
        <div style="font-size: 14px; font-weight: 600;">Upload failed. Try again in a moment.</div>
        <button style="margin-left: auto; border: none; background: transparent; color: #FFFFFF; font-weight: 700;">×</button>
    </div>
</div>

#### iOS implementation (from InventoryDetailView)
```swift
HStack {
    Image(systemName: "exclamationmark.triangle.fill")
        .foregroundColor(.white)
        .font(.system(size: 16, weight: .medium))
    
    Text(errorMessage)
        .font(.system(size: 14, weight: .medium))
        .foregroundColor(.white)
        .lineLimit(nil)
        .multilineTextAlignment(.leading)
    
    Spacer()
    
    Button(action: { dismissError() }) {
        Image(systemName: "xmark")
            .foregroundColor(.white)
            .font(.system(size: 14, weight: .bold))
    }
}
.padding(.horizontal, InsticaSpacing.md)
.padding(.vertical, InsticaSpacing.md)
.background(Color.red)
.cornerRadius(InsticaRadius.sm)
.padding(.horizontal, InsticaSpacing.md)
.padding(.top, InsticaSpacing.sm)
.animation(.easeInOut(duration: 0.3), value: errorMessage != nil)
```

**Design specifications:**
- Background: `stateDanger` (#DC2626) for errors, `stateWarning` (#F59E0B) for warnings
- Text color: White for contrast
- Icon + text + dismiss button layout
- Corner radius: `sm` (8px)
- Padding: `md` (12px) internal, `md` external
- Animation: 300ms ease-in-out on appearance/dismissal

### Callout/Card error (contextual)

Use for inline warnings within a specific section (e.g., listing unavailable, missing requirements):

<div class="component-example">
    <div style="display: flex; gap: 12px; padding: 16px; border-radius: 12px; border: 1px solid #FECACA; background: #FEF2F2;">
        <div style="width: 28px; height: 28px; border-radius: 8px; background: #FCA5A5; display: flex; align-items: center; justify-content: center;">⚠️</div>
        <div>
            <div style="font-size: 13px; font-weight: 700; color: #B91C1C; margin-bottom: 4px;">Listing Error</div>
            <div style="font-size: 13px; color: #0F172A;">This item is missing required photos.</div>
            <div style="font-size: 12px; color: #64748B; margin-top: 4px;">Add at least 3 photos to publish.</div>
        </div>
    </div>
</div>

#### iOS implementation (from MarketplaceListingCard)
```swift
VStack(alignment: .leading, spacing: InsticaSpacing.sm) {
    HStack(alignment: .top, spacing: InsticaSpacing.sm) {
        // Warning icon
        Image(systemName: "exclamationmark.triangle.fill")
            .font(.insticaSubheadline)
            .foregroundColor(.stateDanger)

        VStack(alignment: .leading, spacing: InsticaSpacing.xs) {
            // Error title
            Text("Listing Error")
                .font(.insticaFootnote)
                .fontWeight(.semibold)
                .foregroundColor(.stateDanger)

            // Error message
            Text(errorMessage)
                .font(.insticaFootnote)
                .foregroundColor(.textPrimary)
                .fixedSize(horizontal: false, vertical: true)

            // Error description if available
            if let description = errorDescription {
                Text(description)
                    .font(.insticaCaption)
                    .foregroundColor(.textSecondary)
            }
        }
    }
}
.padding(InsticaSpacing.lg)
.background(
    RoundedRectangle(cornerRadius: InsticaRadius.lg)
        .fill(Color.stateWarning.opacity(0.12))
        .overlay(
            RoundedRectangle(cornerRadius: InsticaRadius.lg)
                .stroke(Color.stateWarning.opacity(0.3), lineWidth: 1)
        )
)
```

**Design specifications:**
- Background: Semantic color at 12% opacity (`stateWarning.opacity(0.12)`)
- Border: Same semantic color at 30% opacity
- Icon: Leading position, `stateDanger` or `stateWarning`
- Title: Semibold, `insticaFootnote` (13px), semantic color
- Body: Regular weight, `textPrimary`
- Description: `insticaCaption` (11px), `textSecondary`
- Padding: `lg` (16px)
- Corner radius: `lg` (12px)

### Warning callout (non-critical)

Use for soft warnings that inform but don't block action:

#### iOS implementation (from InventoryDetailView)
```swift
VStack(alignment: .leading, spacing: InsticaSpacing.xs) {
    Label {
        Text("Listing unavailable")
            .font(.insticaFootnote.weight(.semibold))
            .foregroundColor(Color.stateWarning)
    } icon: {
        Image(systemName: "exclamationmark.triangle.fill")
            .font(.insticaFootnote)
            .foregroundColor(Color.stateWarning)
    }
    .labelStyle(.titleAndIcon)

    Text(reason)
        .font(.insticaCaption)
        .foregroundColor(.textSecondary)
}
.padding(InsticaSpacing.md)
.background(
    RoundedRectangle(cornerRadius: InsticaRadius.md)
        .fill(Color.stateWarning.opacity(0.18))
)
.overlay(
    RoundedRectangle(cornerRadius: InsticaRadius.md)
        .stroke(Color.stateWarning.opacity(0.4), lineWidth: 1)
)
```

**Design specifications:**
- Background: `stateWarning.opacity(0.18)` for dark mode, `0.12` for light
- Border: `stateWarning.opacity(0.4)`
- Icon: `exclamationmark.triangle.fill` in `stateWarning`
- Title: Semibold, `insticaFootnote`, `stateWarning`
- Body: Regular, `insticaCaption`, `textSecondary`
- Padding: `md` (12px)
- Corner radius: `md` (10px)

## Empty states

Empty states are not errors, but they're related feedback patterns:

### Empty inventory/list

```swift
VStack(spacing: InsticaSpacing.xl) {
    Image(systemName: "tray.fill")
        .font(.system(size: 64))
        .foregroundColor(.brandPrimary)

    VStack(spacing: InsticaSpacing.sm) {
        Text("No items in inventory")
            .font(.insticaTitle2)
            .foregroundColor(.textPrimary)

        Text("Your inventory is empty. Add new items to get started.")
            .font(.insticaBody)
            .foregroundColor(.textSecondary)
            .multilineTextAlignment(.center)
            .padding(.horizontal, InsticaSpacing.screenInset)
    }

    Button("Add New Item") {
        // Action
    }
    .buttonStyle(PrimaryButtonStyle())
}
.frame(maxWidth: .infinity, maxHeight: .infinity)
.padding(.top, InsticaSpacing.xxxxxxl)
```

**Design specifications:**
- Icon: Contextual (tray, folder, doc, etc.) at 64px
- Icon color: `brandPrimary` for positive empty states
- Title: `insticaTitle2`, bold, `textPrimary`
- Body: `insticaBody`, regular, `textSecondary`, centered
- CTA: Primary button style, action-oriented label
- Top padding: `xxxxxxl` (96px) for vertical centering

## Loading states

### Inline progress (small operations)

```swift
HStack(spacing: InsticaSpacing.xs) {
    ProgressView()
        .progressViewStyle(CircularProgressViewStyle(tint: .brandPrimary))
        .scaleEffect(0.7)
    Text("Saving...")
        .font(.insticaFootnote)
        .foregroundColor(.textSecondary)
}
```

### Full-page loading (initial data fetch)

```swift
VStack(spacing: InsticaSpacing.xl) {
    ProgressView()
        .progressViewStyle(CircularProgressViewStyle(tint: .brandPrimary))
        .scaleEffect(1.4)
    
    VStack(spacing: InsticaSpacing.xs) {
        Text("Loading inventory")
            .font(.insticaHeadline)
            .foregroundColor(.textPrimary)
        
        if let statusMessage = detailedStatus {
            Text(statusMessage)
                .font(.insticaCaption)
                .foregroundColor(.textTertiary)
        }
    }
}
.frame(maxWidth: .infinity, maxHeight: .infinity)
```

### Loading button state

```swift
Button(action: submit) {
    HStack(spacing: InsticaSpacing.xs) {
        if isLoading {
            ProgressView()
                .progressViewStyle(CircularProgressViewStyle(tint: .white))
                .scaleEffect(0.7)
            Text("Submitting...")
        } else {
            Text("Submit")
        }
    }
}
.disabled(isLoading)
```

## Color semantics

Use semantic colors consistently across all error states:

| State | Color Token | Hex (Light) | Hex (Dark) | Use Case |
|-------|-------------|-------------|------------|----------|
| Danger | `stateDanger` | #DC2626 | #EF4444 | Critical errors, destructive actions |
| Warning | `stateWarning` | #F59E0B | #FBBF24 | Non-critical issues, soft blocks |
| Success | `stateSuccess` | #10B981 | #34D399 | Confirmations, completed actions |
| Info | `stateInfo` | #3B82F6 | #60A5FA | Neutral information, tips |

**Background opacity guidelines:**
- Light mode: 12% for backgrounds, 30% for borders
- Dark mode: 18% for backgrounds, 40% for borders

## Icon selection

### Error icons (by severity)

| Severity | Icon | SF Symbol | Use Case |
|----------|------|-----------|----------|
| Critical | ⚠️ filled | `exclamationmark.triangle.fill` | Fatal errors, data loss risk |
| Warning | ⚠️ outline | `exclamationmark.triangle` | Soft warnings, recoverable issues |
| Info | ℹ️ | `info.circle` / `info.circle.fill` | Helpful tips, neutral notices |
| Network | 📡 | `wifi.slash` / `antenna.radiowaves.left.and.right.slash` | Connectivity issues |

### Empty state icons

| Context | Icon | SF Symbol |
|---------|------|-----------|
| Empty list | 📋 | `tray.fill` |
| No results | 🔍 | `magnifyingglass` |
| No content | 📄 | `doc` |
| No images | 🖼️ | `photo` |

## Animation patterns

### Error banner entrance

```swift
.animation(.easeInOut(duration: 0.3), value: errorMessage != nil)
```

Use 300ms ease-in-out for:
- Banner slide-in from top
- Callout fade-in
- Inline error appearance

### Loading transitions

```swift
.animation(.easeInOut, value: isLoading)
```

Use default ease-in-out for:
- Progress spinner appearance
- Button state changes
- Skeleton shimmer

## Accessibility

### Screen reader announcements

```swift
.accessibilityLabel("Error: Could not load inventory")
.accessibilityHint("Pull to refresh and try again")
```

- Always prefix error messages with "Error:" or "Warning:" for screen readers
- Provide actionable hints for recovery
- Announce error state changes via `aria-live="polite"` (web) or `.accessibilityLiveRegion()` (iOS)

### Focus management

- Move focus to error message when it appears
- Ensure dismiss buttons are keyboard-accessible
- Trap focus within modal error dialogs

### Color contrast

- Error text on colored backgrounds must meet WCAG AA (4.5:1 minimum)
- Use white text on `stateDanger`/`stateWarning` backgrounds
- Test with color blindness simulators (especially red-green)

## Implementation checklist

When implementing error states:

- [ ] User-facing message (no technical jargon)
- [ ] Context-specific fallback defined
- [ ] Actionable recovery instruction provided
- [ ] Appropriate semantic color used (`stateDanger`, `stateWarning`, etc.)
- [ ] Icon matches severity and context
- [ ] Dismissible if non-critical
- [ ] Accessible label and hint
- [ ] Animation duration 300ms or less
- [ ] Tested with screen reader
- [ ] Color contrast verified (4.5:1 minimum)

## Reference implementations

- **iOS error handling**: [Instica/Utilities/UserFacingError.swift](https://github.com/instica/instica-inventory-app/blob/main/Instica/Instica/Utilities/UserFacingError.swift)
- **Full-page error**: [Instica/InventoryListView_Fixed.swift](https://github.com/instica/instica-inventory-app/blob/main/Instica/Instica/InventoryListView_Fixed.swift#L115-L145)
- **Inline banner**: [Instica/InventoryDetailView.swift](https://github.com/instica/instica-inventory-app/blob/main/Instica/Instica/InventoryDetailView.swift#L4154-L4185)
- **Callout error**: [Instica/Views/MarketplaceListingCard.swift](https://github.com/instica/instica-inventory-app/blob/main/Instica/Instica/Views/MarketplaceListingCard.swift#L679-L714)

---

**Key takeaway**: Error states should be empathetic, actionable, and visually distinct without being alarming. Always provide a path forward, even if it's just "try again."
