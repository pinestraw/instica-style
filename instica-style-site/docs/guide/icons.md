# Icons

## Overview

Icons are essential visual elements in the Instica design system. Our icon design philosophy emphasizes clarity, simplicity, and consistency across all touchpoints.

## Design Principles

### Single Object Focus
Each icon represents **one cohesive object or concept**. This creates visual clarity and makes icons instantly recognizable even at small sizes.

### Transparent Backgrounds
All icons use **fully transparent backgrounds** (alpha=0) to seamlessly integrate with any interface color scheme.

### Soft 3D Aesthetic
Icons feature a **soft 3D illustration style** with:
- Subtle depth and dimension
- Clean, smooth surfaces
- Professional yet approachable feel

### Vibrant Gradients
Each icon uses **rich, vibrant gradients** that:
- Create visual interest and depth
- Ensure icons stand out without overwhelming
- Maintain brand consistency

### Optimal Framing
Icons are **centered and fill 65-70% of the frame**, providing:
- Adequate whitespace for breathing room
- Consistent visual weight across the set
- Flexibility for various contexts

## Specifications

| Property | Value |
|----------|-------|
| Format | PNG with alpha channel |
| Dimensions | 1024 × 1024px |
| File Size | ~1.3MB per icon |
| Background | Fully transparent (alpha=0) |
| Frame Fill | 65-70% |
| Style | Soft 3D illustration |

## Workflow Icons

Our workflow icons represent key user actions in the Instica inventory management system.

### Scan & Search
<img src="/instica-style/icons/workflow/scan-search.png" alt="Scan & Search icon" width="200" />

**Concept:** Smartphone with scan interface  
**Gradient:** Blue-purple  
**Use Case:** Product scanning and search functionality

### Add Photos
<img src="/instica-style/icons/workflow/add-photos.png" alt="Add Photos icon" width="200" />

**Concept:** Camera  
**Gradient:** Orange-coral  
**Use Case:** Photo capture and upload features

### Enter Details
<img src="/instica-style/icons/workflow/enter-details.png" alt="Enter Details icon" width="200" />

**Concept:** Fountain pen  
**Gradient:** Teal-turquoise  
**Use Case:** Manual data entry and editing

### Save to List
<img src="/instica-style/icons/workflow/save-list.png" alt="Save to List icon" width="200" />

**Concept:** Badge with checkmark  
**Gradient:** Green-emerald  
**Use Case:** Saving items and creating lists

### Organize Items
<img src="/instica-style/icons/workflow/organize-items.png" alt="Organize Items icon" width="200" />

**Concept:** Storage box  
**Gradient:** Purple-magenta  
**Use Case:** Categorization and organization features

### Track Status
<img src="/instica-style/icons/workflow/track-status.png" alt="Track Status icon" width="200" />

**Concept:** Location pin  
**Gradient:** Cyan-blue  
**Use Case:** Status tracking and location features

### Price Optimization
<img src="/instica-style/icons/workflow/price-optimization.png" alt="Price Optimization icon" width="200" />

**Concept:** Gold coin  
**Gradient:** Gold-amber  
**Use Case:** Pricing tools and optimization

### Quick Actions
<img src="/instica-style/icons/workflow/quick-actions.png" alt="Quick Actions icon" width="200" />

**Concept:** Lightning bolt  
**Gradient:** Yellow-orange  
**Use Case:** Fast actions and shortcuts

### Take Photos
<img src="/instica-style/icons/workflow/take-photos.png" alt="Take Photos icon" width="200" />

**Concept:** Camera lens  
**Gradient:** Blue-cyan  
**Use Case:** Photography and image capture

### Upload Multiple
<img src="/instica-style/icons/workflow/upload-multiple.png" alt="Upload Multiple icon" width="200" />

**Concept:** Upward arrow  
**Gradient:** Pink-purple  
**Use Case:** Batch upload functionality

### Customize Listing
<img src="/instica-style/icons/workflow/customize-listing.png" alt="Customize Listing icon" width="200" />

**Concept:** Paintbrush  
**Gradient:** Rainbow  
**Use Case:** Customization and styling tools

### Publish & Track
<img src="/instica-style/icons/workflow/publish-track.png" alt="Publish & Track icon" width="200" />

**Concept:** Star  
**Gradient:** Gold-yellow  
**Use Case:** Publishing and tracking published items

## Generation Prompt

Our icons are generated using AI with this comprehensive prompt template:

```
Create a [ICON_CONCEPT] icon with these specifications:

Style & Appearance:
- Soft 3D illustration style with subtle depth and dimension
- Clean, modern, professional aesthetic
- Smooth surfaces and polished finish
- [GRADIENT_DESCRIPTION] color scheme

Composition:
- Single cohesive object, not multiple separate elements
- Centered in frame, filling 65-70% of the canvas
- Clear silhouette that's recognizable at any size
- Adequate negative space for breathing room

Technical Requirements:
- Fully transparent background (alpha=0, no white/cream backgrounds)
- High contrast between icon and transparency
- Sharp, clean edges
- Optimized for both light and dark UI backgrounds

Visual Inspiration:
- Dribbble UI icon best practices
- Contemporary app icon design
- Material Design principles
- iOS/macOS icon guidelines

Avoid:
- Multiple disconnected objects
- Busy or cluttered compositions
- Flat 2D design (needs dimensional depth)
- Drop shadows or glows
- Text or labels
```

### Variables

- `[ICON_CONCEPT]`: The specific object to illustrate (e.g., "smartphone", "camera", "fountain pen")
- `[GRADIENT_DESCRIPTION]`: The gradient colors (e.g., "vibrant blue-to-purple gradient", "warm orange-to-coral gradient")

## Usage Guidelines

### Sizing

Icons should maintain their aspect ratio and be displayed at these recommended sizes:

- **Extra Small:** 16×16px (UI elements, dense layouts)
- **Small:** 24×24px (Buttons, navigation)
- **Medium:** 32×32px (Default size, cards)
- **Large:** 48×48px (Feature highlights)
- **Extra Large:** 64×64px (Hero sections)
- **Marketing:** 128×128px+ (Landing pages, marketing materials)

### Accessibility

- Always provide descriptive `alt` text for screen readers
- Ensure sufficient contrast with background colors
- Don't rely solely on color to convey information
- Provide text labels alongside icons when context isn't clear

### Context

- **Web:** Use PNG format with alpha channel
- **Mobile Apps:** Convert to native formats (SVG, PDF vectors) when possible
- **Print:** Use high-resolution exports (2x-3x scale)

## Best Practices

### Do ✓

- Use icons to supplement text, not replace it entirely
- Maintain consistent sizing within the same context
- Align icons to a baseline grid
- Test icons on both light and dark backgrounds
- Use semantic meaning consistently across the product

### Don't ✗

- Distort or stretch icons
- Add backgrounds or containers that weren't designed in
- Mix different icon styles in the same context
- Use decoratively when they don't add meaning
- Animate excessively or distractingly

## Implementation

### Web

```html
<!-- HTML -->
<img src="/icons/workflow/scan-search.png" alt="Scan and search" width="32" height="32" />
```

```css
/* CSS */
.icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}
```

### React/Next.js

```jsx
import Image from 'next/image'

<Image
  src="/icons/workflow/scan-search.png"
  alt="Scan and search"
  width={32}
  height={32}
/>
```

### iOS (Swift)

```swift
// Load PNG with preserved alpha channel
if let image = UIImage(named: "scan-search") {
    let imageView = UIImageView(image: image)
    imageView.contentMode = .scaleAspectFit
}
```

## Resources

- **Icon Assets:** All workflow icons are available in the [public/icons/workflow](https://github.com/instica/instica-style/tree/main/instica-style-site/docs/public/icons/workflow) directory
- **Token File:** See [tokens/icons.json](../tokens/icons.json) for programmatic access
- **Design Files:** Contact the design team for source files

## Related

- [Colors](./colors.md) - Color palette and gradients used in icons
- [Components](./components.md) - How to integrate icons into components
- [Typography](./typography.md) - Pairing icons with text
