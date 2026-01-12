# Typography Modernization Plan

## Analysis: Current State vs. Industry Standards

### Observations from Professional Sites

**Linear**
- Compact typography (body ~14px)
- Tight line-heights for density
- Clear hierarchy with minimal size jumps
- Professional, utility-first aesthetic
- Font weights: 400 (regular), 500 (medium), 600 (semibold)

**Notion**
- Dense but readable layouts
- Small body text (~14px) with good contrast
- Information-first design
- Efficient use of space
- Consistent, predictable hierarchy

**GitHub**
- Developer-focused density
- Compact UI elements
- Small but legible text (13-14px body)
- Monospace integration
- Clear information architecture

**Stripe Dashboard**
- Data-dense interface
- Compact tables and metrics
- Professional polish with tight spacing
- Small body copy with excellent readability
- Card-based layouts with subtle elevation

**Vercel Dashboard**
- Modern web app typography
- Tight hierarchy
- Small but legible throughout
- Inter font stack
- Clean, minimal aesthetic

### Current Issues in Instica Style

1. **Sizing Too Large for Data-Dense UI**
   - Large title: 40px → Should be 32px (more compact)
   - Title1: 32px → Should be 28px (tighter hierarchy)
   - Body: 15px → Should be 14px (denser, dashboard-like)
   - Need smaller scale for professional/utility feel

2. **Line-Height Not Optimal**
   - Headings: Should be tighter (1.25-1.4 for compact feel)
   - Body: Keep at ~1.4-1.45 for readability in dense layouts

3. **Font Stack**
   - Using Manrope (good choice) but defaulting to "Inter" in many places
   - Should standardize on Manrope Variable for all web surfaces
   - Native should use SF Pro consistently

4. **Letter-Spacing**
   - Missing tight tracking on large headings
   - Should add subtle negative tracking to headings for refinement

5. **Weight Scale**
   - Not clearly defined (400, 500, 600, 700, 800?)
   - Should standardize on 400, 600, 700 for clarity

## Proposed Improvements

### 1. Updated Type Scale (Web) - Compact & Dense

```json
{
  "display": {
    "size": "32px",
    "lineHeight": "40px",
    "weight": 700,
    "letterSpacing": "-0.03em",
    "description": "Hero headlines, landing pages"
  },
  "h1": {
    "size": "28px",
    "lineHeight": "36px",
    "weight": 700,
    "letterSpacing": "-0.02em",
    "description": "Page titles"
  },
  "h2": {
    "size": "24px",
    "lineHeight": "32px",
    "weight": 600,
    "letterSpacing": "-0.01em",
    "description": "Major section headers"
  },
  "h3": {
    "size": "20px",
    "lineHeight": "28px",
    "weight": 600,
    "letterSpacing": "0",
    "description": "Section headers"
  },
  "h4": {
    "size": "18px",
    "lineHeight": "24px",
    "weight": 600,
    "letterSpacing": "0",
    "description": "Subsection headers"
  },
  "h5": {
    "size": "16px",
    "lineHeight": "24px",
    "weight": 600,
    "letterSpacing": "0",
    "description": "Small headers"
  },
  "large": {
    "size": "15px",
    "lineHeight": "24px",
    "weight": 400,
    "letterSpacing": "0",
    "description": "Large body text, lede paragraphs"
  },
  "body": {
    "size": "14px",
    "lineHeight": "20px",
    "weight": 400,
    "letterSpacing": "0",
    "description": "Default body text"
  },
  "small": {
    "size": "13px",
    "lineHeight": "18px",
    "weight": 400,
    "letterSpacing": "0",
    "description": "Small UI text, labels"
  },
  "caption": {
    "size": "12px",
    "lineHeight": "16px",
    "weight": 400,
    "letterSpacing": "0.01em",
    "description": "Captions, metadata"
  },
  "micro": {
    "size": "11px",
    "lineHeight": "14px",
    "weight": 500,
    "letterSpacing": "0.02em",
    "description": "Tiny labels, dense tables"
  }
}
```

### 2. Font Stack Standardization

**Web Primary:**
```css
font-family: "Manrope Variable", "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", "SF Pro Text", system-ui, sans-serif;
```

**Web Mono:**
```css
font-family: "SF Mono", "Monaco", "Cascadia Code", "Courier New", monospace;
```

**Native iOS/macOS:**
- SF Pro Text (body)
- SF Pro Display (large headings 20pt+)
- SF Mono (code)

### 3. Weight Scale

- **400 (Regular)**: Body text, descriptions
- **600 (Semibold)**: Subheadings, emphasis, buttons
- **700 (Bold)**: Major headings, hero text

### 4. Letter-Spacing Scale

| Size | Tracking | Use Case |
|------|----------|----------|
| 32px+ | -0.03em | Display/hero |
| 28px | -0.02em | H1 |
| 24px | -0.01em | H2 |
| 20px | 0 | H3 |
| 18px | 0 | H4, body large |
| 16px | 0 | H5 |
| 14px | 0 | Body |
| 13px | 0 | Small |
| 12px | +0.01em | Caption, labels |
| 11px | +0.02em | Micro, uppercase labels |

### 5. Line-Height Principles

- **Display/Headings**: 1.1-1.25 (tight, compact aesthetic)
- **Body text**: 1.4-1.5 (readable but not spacious)
- **UI elements**: 1.3-1.4 (compact interface density)
- **Dense data**: 1.2-1.3 (tables, lists, dashboards)
- **Buttons/Labels**: 1.0-1.2 (tight, minimal padding)

### 6. Responsive Scaling

```css
/* Mobile (< 768px) */
--display: 28px;
--h1: 24px;
--h2: 20px;
--h3: 18px;

/* Tablet (768px - 1024px) */
--display: 30px;
--h1: 26px;
--h2: 22px;
--h3: 19px;

/* Desktop (> 1024px) */
--display: 32px;
--h1: 28px;
--h2: 24px;
--h3: 20px;
```

## Implementation Plan

### Phase 1: Token Updates
1. Update `tokens/typography.json` with new scale
2. Add letter-spacing definitions
3. Add responsive breakpoint variants
4. Document weight usage patterns

### Phase 2: CSS Variable Updates
1. Update custom.css with new CSS variables
2. Add responsive typography classes
3. Implement letter-spacing utilities
4. Update component-specific overrides

### Phase 3: Style Guide Updates
1. Update typography.md documentation with compact scale philosophy
2. Add visual examples with live specimens showing density and hierarchy
3. Document do's and don'ts (when to use compact vs. standard spacing)
4. Add responsive behavior examples across breakpoints
5. Update components.md with new type usage and dashboard patterns
6. Add comparison examples (before/after with screenshots)

### Phase 4: Component Migration
1. Update hero sections (compact display text, tighter line-height)
2. Update card components (denser typography for information density)
3. Update navigation/headers (smaller but readable nav links)
4. Update form labels and inputs (compact labels, 14px inputs)
5. Update tables and data displays (tight cells, dense rows, small headers)
6. Update buttons and CTAs (compact padding with tight line-height)
7. Update footer and secondary navigation

### Phase 5: QA & Refinement
1. Test on multiple screen sizes (mobile especially critical with smaller text)
2. Verify contrast ratios (WCAG AA compliance - crucial for 14px body text)
3. Test with real content (ensure 14px is readable with actual data)
4. Test across different browsers and OS (rendering differences)
5. Gather user feedback on readability and information density
6. Fine-tune letter-spacing and line-heights if needed
7. Adjust responsive breakpoints for optimal mobile experience

## Key Improvements Expected

1. **Denser, more data-focused**: Smaller type creates utility-first feel like dashboards
2. **Better information density**: More content visible without scrolling
3. **Professional polish**: Proper letter-spacing makes text feel refined
4. **Compact hierarchy**: Smaller scale jumps keep everything tight and organized
5. **Responsive by default**: Type scales appropriately on all devices
6. **Easier maintenance**: Clear token system makes updates systematic
7. **Dashboard aesthetic**: Feels more like professional tools (Linear, Notion, etc.)

## Inspiration References

- **Linear**: Compact, professional typography for productivity tools
- **Notion**: Dense but readable, information-first
- **GitHub**: Developer-focused density
- **Stripe Dashboard**: Data-dense professional interface
- **Vercel Dashboard**: Tight hierarchy, small but legible
- **Figma**: Compact UI with excellent readability

## Success Metrics

- [ ] All headings follow new compact scale with proper weights
- [ ] Body text is 14px with ~1.4 line-height for density
- [ ] Letter-spacing applied to headings for refinement
- [ ] Responsive scaling works across breakpoints
- [ ] Style guide shows clear visual examples with live type specimens
- [ ] All documentation updated to reflect new scale
- [ ] WCAG AA contrast maintained (critical for smaller text)
- [ ] Visual hierarchy is immediately clear despite compact sizing
- [ ] Information density improved without sacrificing readability
- [ ] Dashboard/utility aesthetic achieved across all pages
