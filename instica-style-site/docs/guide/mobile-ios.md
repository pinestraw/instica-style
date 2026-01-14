---
title: Mobile Components (iOS)
description: Native iOS/SwiftUI component library and conventions for Instica Inventory
---

# Mobile Components (iOS)

This guide documents the native iOS components, patterns, and conventions used in the Instica Inventory app. All examples use SwiftUI and follow iOS Human Interface Guidelines while maintaining brand consistency.

## Live Examples

<MobileIOSDemo />

---

## Design Tokens

### Colors

The iOS app uses a comprehensive color system defined in [DesignTokens.swift](DesignTokens.swift):

```swift
// Brand & Semantic Colors
Color.brandPrimary = Color(hex: "#4F46E5")
Color.brandPrimaryDark = Color(hex: "#818CF8")
Color.brandPrimaryNight = Color(hex: "#312E81")
Color.brandCreamBackground = Color(hex: "#FFF6E8")
Color.brandSecondary = Color(hex: "#14B8A6")
Color.accentHighlight = Color(hex: "#F59E0B")

// Semantic Colors
Color.stateSuccess = Color(hex: "#10B981")
Color.stateWarning = Color(hex: "#EA580C")
Color.stateDanger = Color(hex: "#DC2626")
Color.stateInfo = Color(hex: "#2563EB")

// Neutral Scale (Slate)
Color.neutralN0 through neutralN900
```

**Adaptive Colors:** The app uses system colors for dark mode support:

```swift
Color.surfaceBase // UIColor.systemBackground
Color.surfaceCard // UIColor.secondarySystemBackground
Color.surfaceRaised // UIColor.tertiarySystemBackground
Color.borderDefault // UIColor.separator
Color.textPrimary // UIColor.label
Color.textSecondary // UIColor.secondaryLabel
Color.textTertiary // UIColor.tertiaryLabel
```

### Typography

San Francisco (SF Pro) font family with semantic font styles:

```swift
// Large Title: SF Pro Display 34/41 Bold
Font.insticaLargeTitle = Font.custom("SF Pro Display", size: 34).weight(.bold)

// Title 1: SF Pro Display 28/34 Semibold
Font.insticaTitle1 = Font.custom("SF Pro Display", size: 28).weight(.semibold)

// Title 2: SF Pro Text 22/28 Semibold
Font.insticaTitle2 = Font.system(size: 22, weight: .semibold)

// Title 3: SF Pro Text 20/25 Medium
Font.insticaTitle3 = Font.system(size: 20, weight: .medium)

// Headline: SF Pro Text 17/22 Semibold
Font.insticaHeadline = Font.system(size: 17, weight: .semibold)

// Body: SF Pro Text 17/22 Regular
Font.insticaBody = Font.system(size: 17, weight: .regular)

// Subheadline: SF Pro Text 15/20 Medium
Font.insticaSubheadline = Font.system(size: 15, weight: .medium)

// Footnote: SF Pro Text 13/18 Regular
Font.insticaFootnote = Font.system(size: 13, weight: .regular)

// Caption: SF Pro Text 12/16 Regular
Font.insticaCaption = Font.system(size: 12, weight: .regular)

// Price: SF Pro Text 20/24 Semibold with monospaced digits
Font.insticaPrice = Font.system(size: 20, weight: .semibold).monospacedDigit()
```

### Spacing

Consistent spacing scale from 2px to 64px:

```swift
enum InsticaSpacing {
    static let xxxs: CGFloat = 2   // Minimal gap
    static let xs: CGFloat = 4     // Tight spacing
    static let sm: CGFloat = 8     // Small spacing
    static let md: CGFloat = 12    // Medium spacing
    static let lg: CGFloat = 16    // Large spacing
    static let xl: CGFloat = 20    // Extra large
    static let xxl: CGFloat = 24   // Double XL
    static let xxxl: CGFloat = 32  // Triple XL
    static let xxxxl: CGFloat = 40
    static let xxxxxl: CGFloat = 48
    static let xxxxxxl: CGFloat = 64

    // Screen insets
    static let screenInset: CGFloat = 16
    static let screenInsetLarge: CGFloat = 24
}
```

### Corner Radius

```swift
enum InsticaRadius {
    static let sm: CGFloat = 8    // Icon buttons, quick filters
    static let md: CGFloat = 12   // Primary buttons, inputs
    static let lg: CGFloat = 16   // Cards, sheets
    static let pill: CGFloat = 999 // Badges, pills
}
```

## Button Styles

### Primary Button

Solid fill with brand color. Used for primary actions.

```swift
struct PrimaryButtonStyle: ButtonStyle {
    @Environment(\.isEnabled) private var isEnabled
    @Environment(\.colorScheme) private var colorScheme

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.insticaHeadline)
            .foregroundColor(.white)
            .frame(maxWidth: .infinity)
            .frame(height: 48)
            .background(
                RoundedRectangle(cornerRadius: InsticaRadius.md)
                    .fill(buttonBackgroundColor(isPressed: configuration.isPressed))
            )
    }

    private func buttonBackgroundColor(isPressed: Bool) -> Color {
        if !isEnabled {
            return Color.brandPrimary.opacity(0.35)
        }
        return Color.brandPrimary
    }
}

// Usage
Button("Continue") { /* action */ }
    .buttonStyle(PrimaryButtonStyle())
```

**Guidelines:**
- Height: 48pt (minimum touch target)
- Corner radius: 12pt
- Font: Headline (17pt semibold)
- Full-width on mobile, inline on iPad
- Disabled state: 35% opacity
- No press animation (iOS handles natively)

### Secondary Button

Outlined button with transparent background.

```swift
struct SecondaryButtonStyle: ButtonStyle {
    @Environment(\.isEnabled) private var isEnabled
    @Environment(\.colorScheme) private var colorScheme

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.insticaHeadline)
            .foregroundColor(isEnabled ? Color.brandPrimary : Color.brandPrimary.opacity(0.35))
            .frame(maxWidth: .infinity)
            .frame(height: 48)
            .background(
                RoundedRectangle(cornerRadius: InsticaRadius.md)
                    .strokeBorder(
                        isEnabled ? Color.brandPrimary : Color.brandPrimary.opacity(0.35),
                        lineWidth: 1
                    )
                    .background(
                        RoundedRectangle(cornerRadius: InsticaRadius.md)
                            .fill(configuration.isPressed ? Color.brandPrimary.opacity(0.12) : Color.clear)
                    )
            )
            .scaleEffect(configuration.isPressed ? 0.98 : 1.0)
            .animation(.easeInOut(duration: 0.1), value: configuration.isPressed)
    }
}

// Usage
Button("Cancel") { /* action */ }
    .buttonStyle(SecondaryButtonStyle())
```

**Guidelines:**
- Border: 1pt brand color
- Press effect: 12% opacity fill + 0.98 scale
- Use for cancel, secondary actions
- Stack below primary on mobile

### Loading Button Content

For async operations, show loading spinner alongside text.

```swift
struct LoadingButtonContent: View {
    let text: String
    let isLoading: Bool

    var body: some View {
        HStack {
            if isLoading {
                ProgressView()
                    .progressViewStyle(CircularProgressViewStyle(tint: .white))
                    .scaleEffect(0.8)
                Text(text)
                    .opacity(0.7)
            } else {
                Text(text)
            }
        }
    }
}

// Usage
Button(action: { await submitForm() }) {
    LoadingButtonContent(text: "Submit", isLoading: isSubmitting)
}
.buttonStyle(PrimaryButtonStyle())
.disabled(isSubmitting)
```

## Form Components

### Text Field Style

Standard text field with border and focus state.

```swift
struct InsticaTextFieldStyle: TextFieldStyle {
    @Environment(\.colorScheme) private var colorScheme
    @FocusState private var isFocused: Bool

    func _body(configuration: TextField<Self._Label>) -> some View {
        configuration
            .font(.insticaBody)
            .padding(.horizontal, InsticaSpacing.lg)
            .frame(height: 44)
            .background(
                RoundedRectangle(cornerRadius: InsticaRadius.md)
                    .strokeBorder(
                        isFocused ? Color.brandPrimary : borderColor,
                        lineWidth: 1
                    )
                    .background(
                        RoundedRectangle(cornerRadius: InsticaRadius.md)
                            .fill(Color.surfaceCard)
                    )
            )
            .focused($isFocused)
    }

    private var borderColor: Color {
        colorScheme == .dark ? Color.neutralN600 : Color.neutralN300
    }
}

// Usage
TextField("Email", text: $email)
    .textFieldStyle(InsticaTextFieldStyle())
```

**Guidelines:**
- Height: 44pt (minimum tap target)
- Padding: 16pt horizontal
- Corner radius: 12pt
- Focus: brand primary border
- Background: surfaceCard (adaptive)

### Elegant Text Field (Sign-In)

Elevated style with brand border for authentication flows.

```swift
struct ElegantTextFieldStyle: TextFieldStyle {
    @Environment(\.colorScheme) private var colorScheme
    @FocusState private var isFocused: Bool

    func _body(configuration: TextField<Self._Label>) -> some View {
        configuration
            .font(.insticaBody)
            .foregroundColor(textColor)
            .padding(.horizontal, InsticaSpacing.lg)
            .frame(height: 44)
            .background(
                RoundedRectangle(cornerRadius: InsticaRadius.md)
                    .strokeBorder(Color.brandPrimary, lineWidth: 1)
                    .background(
                        RoundedRectangle(cornerRadius: InsticaRadius.md)
                            .fill(fieldBackground)
                    )
            )
            .focused($isFocused)
    }

    private var textColor: Color {
        colorScheme == .dark ? .white : .textPrimary
    }

    private var fieldBackground: Color {
        colorScheme == .dark ? Color.brandPrimaryNight : Color.clear
    }
}
```

### Error Message View

Consistent error display for form validation.

```swift
struct ErrorMessageView: View {
    let message: String

    var body: some View {
        HStack(alignment: .top, spacing: InsticaSpacing.sm) {
            Image(systemName: "exclamationmark.circle.fill")
                .foregroundColor(.stateDanger)
                .font(.system(size: 16))

            Text(message)
                .font(.insticaFootnote)
                .foregroundColor(.stateDanger)
                .multilineTextAlignment(.leading)
        }
        .padding(.horizontal, InsticaSpacing.xs)
    }
}

// Usage
VStack(alignment: .leading, spacing: InsticaSpacing.sm) {
    TextField("Email", text: $email)
        .textFieldStyle(InsticaTextFieldStyle())
    
    if let error = emailError {
        ErrorMessageView(message: error)
    }
}
```

## Status Indicators

### Status Dot

Small colored circle for status indication.

```swift
enum StatusDotStatus {
    case listed    // Green (success)
    case draft     // Orange (warning)
    case failed    // Red (danger)
    case inactive  // Gray (neutral)
    
    var color: Color {
        switch self {
        case .listed: return .stateSuccess
        case .draft: return .stateWarning
        case .failed: return .stateDanger
        case .inactive: return .neutralN300
        }
    }
}

struct StatusDot: View {
    let status: StatusDotStatus
    let size: CGFloat
    
    init(status: StatusDotStatus, size: CGFloat = 8) {
        self.status = status
        self.size = size
    }
    
    var body: some View {
        Circle()
            .fill(status.color)
            .frame(width: size, height: size)
    }
}

// Usage
HStack(spacing: InsticaSpacing.xs) {
    StatusDot(status: .listed)
    Text("Active")
        .font(.insticaCaption)
}
```

## Card Components

### Listing Row

Compact row for list views with status and chevron.

```swift
struct ListingRow: View {
    let listing: InventoryItemListing

    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: InsticaSpacing.xs) {
                // Title and status indicator
                HStack {
                    Text(listing.title ?? "Untitled Listing")
                        .font(.insticaSubheadline)
                        .fontWeight(.medium)
                        .foregroundColor(.textPrimary)
                        .lineLimit(1)

                    Spacer(minLength: InsticaSpacing.sm)

                    // Status pill
                    HStack(spacing: InsticaSpacing.xs) {
                        Circle()
                            .fill(statusColor)
                            .frame(width: 6, height: 6)
                        Text(listing.statusDisplay)
                            .font(.insticaCaption)
                            .fontWeight(.medium)
                            .foregroundColor(statusColor)
                    }
                    .padding(.horizontal, InsticaSpacing.xs)
                    .padding(.vertical, InsticaSpacing.xs / 2)
                    .background(statusColor.opacity(0.15))
                    .cornerRadius(InsticaRadius.sm)
                }

                // Price and platform
                HStack {
                    Text(listing.formattedPrice)
                        .font(.insticaFootnote)
                        .foregroundColor(.textPrimary)

                    Spacer()

                    Text(listing.platform.name)
                        .font(.insticaFootnote)
                        .foregroundColor(.textSecondary)
                }
            }

            // Chevron
            Image(systemName: "chevron.right")
                .font(.insticaFootnote)
                .foregroundColor(.textTertiary)
        }
        .padding(InsticaSpacing.md)
        .background(Color.surfaceCard)
        .cornerRadius(InsticaRadius.sm)
    }

    private var statusColor: Color {
        // Map status string to semantic color
    }
}
```

**Guidelines:**
- Padding: 12pt all sides
- Background: surfaceCard (adaptive)
- Corner radius: 8pt
- Status pill: 8pt radius, 15% opacity background
- Chevron: tertiary text color

### Marketplace Listing Card

Detailed card for marketplace listings with actions.

```swift
VStack(alignment: .leading, spacing: 4) {
    // Platform and status header
    HStack {
        Text(listing.platform.name)
            .font(.headline)
        Spacer()
        Text(listing.statusDisplay)
            .font(.caption)
            .foregroundColor(.secondary)
    }

    // Price and details
    HStack(alignment: .top, spacing: InsticaSpacing.lg) {
        VStack(alignment: .leading, spacing: InsticaSpacing.xs) {
            if listing.status == .listed, let price = listing.priceDisplay {
                Text(price)
                    .font(.insticaPrice) // Monospaced digits
                    .foregroundColor(.textPrimary)
            }
            
            if let title = listing.title {
                Text(title)
                    .font(.insticaFootnote)
                    .foregroundColor(.textSecondary)
                    .lineLimit(2)
            }
        }
        
        Spacer()
        
        // Action buttons column
        actionsColumn
            .frame(width: 118)
    }
}
.padding(InsticaSpacing.lg)
.background(
    RoundedRectangle(cornerRadius: InsticaRadius.lg)
        .fill(Color.surfaceCard)
        .shadow(
            color: colorScheme == .dark ? .clear : .black.opacity(0.1),
            radius: 10, x: 0, y: 4
        )
        .overlay(
            RoundedRectangle(cornerRadius: InsticaRadius.lg)
                .strokeBorder(
                    colorScheme == .dark ? Color.neutralN700.opacity(0.6) : Color.clear,
                    lineWidth: 1
                )
        )
)
```

**Dark Mode:** Add 1pt border in dark mode; use shadow in light mode.

### Collapsible Detail Section

Expandable card section with header and toggle.

```swift
struct CollapsibleDetailSection<Content: View>: View {
    let title: String
    var subtitle: String?
    let isExpanded: Bool
    let onToggle: () -> Void
    @ViewBuilder let content: () -> Content

    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    var body: some View {
        VStack(spacing: 0) {
            // Header button
            Button(action: animateToggle) {
                HStack(spacing: InsticaSpacing.sm) {
                    VStack(alignment: .leading, spacing: InsticaSpacing.xxxs) {
                        Text(title)
                            .font(.insticaFootnote.weight(.semibold))
                            .foregroundColor(.textPrimary)
                        if let subtitle {
                            Text(subtitle)
                                .font(.insticaCaption)
                                .foregroundColor(.textSecondary)
                        }
                    }

                    Spacer()

                    Image(systemName: "chevron.down")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundColor(.textSecondary)
                        .rotationEffect(.degrees(isExpanded ? 0 : -90))
                        .animation(.easeInOut(duration: 0.18), value: isExpanded)
                }
                .padding(.horizontal, InsticaSpacing.lg)
                .padding(.vertical, InsticaSpacing.md)
            }
            .buttonStyle(.plain)
            
            // Content (conditionally shown)
            if isExpanded {
                Divider()
                    .padding(.horizontal, InsticaSpacing.lg)

                VStack(alignment: .leading, spacing: InsticaSpacing.lg) {
                    content()
                }
                .padding(.horizontal, InsticaSpacing.lg)
                .padding(.vertical, InsticaSpacing.lg)
                .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
        .background(
            RoundedRectangle(cornerRadius: InsticaRadius.md)
                .fill(Color.surfaceCard)
                .overlay(
                    RoundedRectangle(cornerRadius: InsticaRadius.md)
                        .stroke(Color.borderDefault, lineWidth: 1)
                )
        )
    }

    private func animateToggle() {
        if reduceMotion {
            onToggle()
        } else {
            withAnimation(.spring(response: 0.35, dampingFraction: 0.85)) {
                onToggle()
            }
        }
    }
}
```

**Accessibility:** Respects `accessibilityReduceMotion` preference.

## Navigation Patterns

### Tab Bar

Bottom tab navigation with SF Symbols icons.

```swift
struct MainTabView: View {
    @State private var selectedTab = 0
    
    var body: some View {
        TabView(selection: $selectedTab) {
            ProductListView()
                .tabItem {
                    Image(systemName: "cube.box")
                    Text("Products")
                }
                .tag(0)
            
            InventoryListView()
                .tabItem {
                    Image(systemName: "list.bullet")
                    Text("Inventory")
                }
                .tag(1)
        }
        .accentColor(.brandPrimary)
    }
}
```

**Icons:**
- Products: `cube.box`
- Inventory: `list.bullet`
- Use outline style for inactive, filled for active
- Tint: brand primary

### Navigation Bar

```swift
.navigationTitle("Inventory")
.navigationBarTitleDisplayMode(.inline)
.toolbar {
    ToolbarItem(placement: .navigationBarLeading) {
        Button(action: { showingMenu.toggle() }) {
            Image(systemName: "line.3.horizontal")
                .foregroundColor(.brandPrimary)
        }
    }
    
    ToolbarItem(placement: .navigationBarTrailing) {
        Button("Add") { /* action */ }
            .foregroundColor(.brandPrimary)
    }
}
```

**Guidelines:**
- Title: inline display mode
- Tint: brand primary
- Left: hamburger menu or back button
- Right: primary action (text or icon)

### Custom Tab Selector

Horizontal segmented control for sub-navigation.

```swift
HStack(spacing: 0) {
    ForEach(tabItems, id: \.id) { tab in
        Button(action: {
            withAnimation(.easeInOut(duration: 0.2)) {
                selectedTab = tab.id
            }
        }) {
            VStack(spacing: InsticaSpacing.sm) {
                Text(tab.title)
                    .font(.insticaSubheadline)
                    .foregroundColor(selectedTab == tab.id ? .brandPrimary : .textSecondary)
                    .padding(.top, InsticaSpacing.md)

                Rectangle()
                    .fill(selectedTab == tab.id ? Color.brandPrimary : Color.clear)
                    .frame(height: 3)
            }
        }
        .frame(maxWidth: .infinity)
    }
}
.background(Color.surfaceBase)
.overlay(
    Rectangle()
        .frame(height: 1)
        .foregroundColor(.borderDefault),
    alignment: .bottom
)
```

## List Patterns

### Pull-to-Refresh

```swift
ScrollView {
    // Content
}
.refreshable {
    await loadData()
}
```

### Infinite Scroll

```swift
LazyVStack {
    ForEach(items) { item in
        ItemRow(item: item)
            .onAppear {
                if item.id == items.last?.id && hasMorePages {
                    Task { await loadMoreItems() }
                }
            }
    }
    
    if isLoading && !items.isEmpty {
        ProgressView()
            .frame(maxWidth: .infinity)
            .padding()
    }
}
```

### Empty State

```swift
VStack(spacing: InsticaSpacing.lg) {
    Image(systemName: "tray")
        .font(.system(size: 64))
        .foregroundColor(.textTertiary)
    
    Text("No Items Yet")
        .font(.insticaTitle3)
        .foregroundColor(.textPrimary)
    
    Text("Add your first item to get started")
        .font(.insticaBody)
        .foregroundColor(.textSecondary)
        .multilineTextAlignment(.center)
    
    Button("Add Item") { /* action */ }
        .buttonStyle(PrimaryButtonStyle())
        .padding(.horizontal, InsticaSpacing.xxl)
}
.frame(maxWidth: .infinity, maxHeight: .infinity)
.padding(.horizontal, InsticaSpacing.screenInset)
```

## Sheet & Modal Patterns

### Full Screen Cover (iOS)

```swift
.fullScreenCover(isPresented: $showingDetail) {
    DetailView()
}
```

### Sheet with Dismiss Button

```swift
NavigationStack {
    ContentView()
        .navigationTitle("Settings")
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .navigationBarTrailing) {
                Button("Done") { dismiss() }
            }
        }
}
```

### Confirmation Dialog

```swift
.confirmationDialog(
    "Cancel Subscription",
    isPresented: $showingConfirmation,
    titleVisibility: .visible
) {
    Button("Confirm", role: .destructive) {
        performAction()
    }
    Button("Keep Subscription", role: .cancel) { }
} message: {
    Text("This action cannot be undone.")
}
```

## Motion & Animation

### Standard Transitions

```swift
// Button press
.scaleEffect(isPressed ? 0.98 : 1.0)
.animation(.easeInOut(duration: 0.1), value: isPressed)

// Section expand/collapse
withAnimation(.spring(response: 0.35, dampingFraction: 0.85)) {
    isExpanded.toggle()
}

// Tab switching
withAnimation(.easeInOut(duration: 0.2)) {
    selectedTab = newTab
}
```

### Accessibility-Aware

```swift
@Environment(\.accessibilityReduceMotion) private var reduceMotion

private func animateToggle() {
    if reduceMotion {
        isExpanded.toggle()
    } else {
        withAnimation(.spring(response: 0.35, dampingFraction: 0.85)) {
            isExpanded.toggle()
        }
    }
}
```

## iOS-Specific Guidelines

### Touch Targets
- Minimum: 44×44pt for all tappable elements
- Buttons: 48pt height (provides comfortable thumb reach)
- Icon buttons: 44×44pt minimum frame

### Safe Areas
```swift
.ignoresSafeArea() // Use sparingly for backgrounds
.safeAreaInset(edge: .bottom) { /* persistent controls */ }
```

### Haptics
```swift
#if os(iOS)
let generator = UIImpactFeedbackGenerator(style: .light)
generator.impactOccurred()
#endif
```

**When to use:**
- Success: light haptic
- Error: warning/error notification haptic
- Selection: selection haptic
- Avoid overuse; limit to meaningful interactions

### System Integration

**Safari View:**
```swift
#if os(iOS)
import SafariServices

struct SafariView: UIViewControllerRepresentable {
    let url: URL

    func makeUIViewController(context: Context) -> SFSafariViewController {
        let controller = SFSafariViewController(url: url)
        controller.dismissButtonStyle = .close
        return controller
    }
}
#endif
```

**Notifications:**
```swift
import UserNotifications

UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound, .badge]) { granted, error in
    // Handle authorization
}
```

### Dark Mode Best Practices

1. **Use Semantic Colors:** Always use `Color.surfaceBase`, `Color.textPrimary`, etc. Never hardcode `#FFFFFF` or `.black`
2. **Card Borders:** Add 1pt border to cards in dark mode for depth
3. **Shadows:** Remove/reduce shadows in dark mode
4. **Test Both Modes:** Verify all screens in light and dark appearance

```swift
@Environment(\.colorScheme) private var colorScheme

var cardBackground: some View {
    RoundedRectangle(cornerRadius: InsticaRadius.lg)
        .fill(Color.surfaceCard)
        .shadow(
            color: colorScheme == .dark ? .clear : .black.opacity(0.1),
            radius: 10
        )
        .overlay(
            RoundedRectangle(cornerRadius: InsticaRadius.lg)
                .strokeBorder(
                    colorScheme == .dark ? Color.neutralN700 : Color.clear,
                    lineWidth: 1
                )
        )
}
```

## Checklist for New Components

- [ ] Uses design tokens (spacing, colors, typography)
- [ ] Supports dark mode with semantic colors
- [ ] Respects accessibility settings (reduce motion, dynamic type)
- [ ] Meets minimum touch target sizes (44×44pt)
- [ ] Has appropriate focus/pressed states
- [ ] Includes accessibility labels
- [ ] Follows iOS Human Interface Guidelines
- [ ] Tested on iPhone and iPad size classes
- [ ] Uses SF Symbols for icons (outline → filled for active)
- [ ] Animation durations: 0.2s for instant, 0.35s spring for meaningful

## Platform-Specific Tokens

### iOS Screen Insets
```swift
InsticaSpacing.screenInset = 16 // Standard horizontal padding
InsticaSpacing.screenInsetLarge = 24 // iPad or landscape
```

### Responsive Behavior
```swift
@Environment(\.horizontalSizeClass) var sizeClass

var columnCount: Int {
    sizeClass == .regular ? 2 : 1 // iPad vs iPhone
}
```

### Font Scaling
All font tokens use `.relativeTo()` for Dynamic Type support:
```swift
Font.system(size: 17, weight: .regular, design: .default)
// Automatically scales with user's text size preference
```

## Resources

- iOS app source code: `instica-inventory-app/`
- Design tokens: `instica-inventory-app/Instica/Instica/DesignTokens.swift`
- Button styles: `instica-inventory-app/Instica/Instica/Styles/InsticaStyles.swift`
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [SF Symbols](https://developer.apple.com/sf-symbols/)
