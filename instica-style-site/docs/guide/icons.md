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

<div class="icon-grid">
  <div class="icon-card">
    <img src="/icons/workflow/scan-search.png" alt="Scan & Search icon" />
    <h4>Scan & Search</h4>
    <p class="icon-meta">Smartphone · Blue-purple</p>
  </div>
  
  <div class="icon-card">
    <img src="/icons/workflow/add-photos.png" alt="Add Photos icon" />
    <h4>Add Photos</h4>
    <p class="icon-meta">Camera · Orange-coral</p>
  </div>
  
  <div class="icon-card">
    <img src="/icons/workflow/enter-details.png" alt="Enter Details icon" />
    <h4>Enter Details</h4>
    <p class="icon-meta">Fountain pen · Teal-turquoise</p>
  </div>
  
  <div class="icon-card">
    <img src="/icons/workflow/save-list.png" alt="Save to List icon" />
    <h4>Save to List</h4>
    <p class="icon-meta">Badge with checkmark · Green-emerald</p>
  </div>
  
  <div class="icon-card">
    <img src="/icons/workflow/organize-items.png" alt="Organize Items icon" />
    <h4>Organize Items</h4>
    <p class="icon-meta">Storage box · Purple-magenta</p>
  </div>
  
  <div class="icon-card">
    <img src="/icons/workflow/track-status.png" alt="Track Status icon" />
    <h4>Track Status</h4>
    <p class="icon-meta">Location pin · Cyan-blue</p>
  </div>
  
  <div class="icon-card">
    <img src="/icons/workflow/price-optimization.png" alt="Price Optimization icon" />
    <h4>Price Optimization</h4>
    <p class="icon-meta">Gold coin · Gold-amber</p>
  </div>
  
  <div class="icon-card">
    <img src="/icons/workflow/quick-actions.png" alt="Quick Actions icon" />
    <h4>Quick Actions</h4>
    <p class="icon-meta">Lightning bolt · Yellow-orange</p>
  </div>
  
  <div class="icon-card">
    <img src="/icons/workflow/take-photos.png" alt="Take Photos icon" />
    <h4>Take Photos</h4>
    <p class="icon-meta">Camera lens · Blue-cyan</p>
  </div>
  
  <div class="icon-card">
    <img src="/icons/workflow/upload-multiple.png" alt="Upload Multiple icon" />
    <h4>Upload Multiple</h4>
    <p class="icon-meta">Upward arrow · Pink-purple</p>
  </div>
  
  <div class="icon-card">
    <img src="/icons/workflow/customize-listing.png" alt="Customize Listing icon" />
    <h4>Customize Listing</h4>
    <p class="icon-meta">Paintbrush · Rainbow</p>
  </div>
  
  <div class="icon-card">
    <img src="/icons/workflow/publish-track.png" alt="Publish & Track icon" />
    <h4>Publish & Track</h4>
    <p class="icon-meta">Star · Gold-yellow</p>
  </div>
</div>

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

- [Colors](./color-system.md) - Color palette and gradients used in icons
- [Components](./components.md) - How to integrate icons into components
- [Typography](./typography.md) - Pairing icons with text
