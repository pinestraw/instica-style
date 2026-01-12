# Icon Generation Guide

This document contains internal guidelines for generating workflow icons for the Instica design system.

## AI Generation Prompt Template

Use this prompt template with `gpt-image-1.5` (quality: 'high') to generate new workflow icons:

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

## Variables

- **[ICON_CONCEPT]**: The specific object to illustrate (e.g., "smartphone", "camera", "fountain pen")
- **[GRADIENT_DESCRIPTION]**: The gradient colors (e.g., "vibrant blue-to-purple gradient", "warm orange-to-coral gradient")

## Model Settings

```javascript
{
  model: "gpt-image-1.5",
  quality: "high",
  size: "1024x1024",
  // Note: gpt-image-1.5 does not support response_format parameter
  // API returns either URL or b64_json depending on response
}
```

## Post-Processing

After generation, icons may require background removal if the AI doesn't produce fully transparent backgrounds:

```bash
# Using ImageMagick
magick input.png -fuzz 10% -transparent white output.png
```

## Current Workflow Icons

See `tokens/icons.json` for complete metadata on all 12 workflow icons including:
- Concept descriptions
- Gradient color specifications
- Use cases
- File names

## Example Usage

To generate the "Scan & Search" icon:

```
Create a smartphone with scan interface icon with these specifications:

Style & Appearance:
- Soft 3D illustration style with subtle depth and dimension
- Clean, modern, professional aesthetic
- Smooth surfaces and polished finish
- Vibrant blue-to-purple gradient color scheme

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

## Storage

Generated icons should be stored in:
- **Design system**: `instica-style-site/docs/public/icons/workflow/`
- **Marketing site**: `instica-marketing-web/public/images/icons/workflow/`

Both locations should be kept in sync when icons are updated.
