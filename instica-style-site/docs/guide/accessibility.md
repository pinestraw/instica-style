---
title: Accessibility
outline: deep
---

# Accessibility

Building accessible interfaces ensures all users can effectively interact with our products. Accessibility is not optional—it's a fundamental requirement.

## Core Principles

### Perceivable
- Provide text alternatives for non-text content
- Ensure sufficient color contrast
- Make content adaptable to different presentations
- Use clear visual hierarchy

### Operable
- Make all functionality keyboard accessible
- Provide users enough time to read and interact
- Avoid content that could cause seizures
- Provide clear navigation and wayfinding

### Understandable
- Make text readable and understandable
- Make content appear and operate in predictable ways
- Help users avoid and correct mistakes

### Robust
- Maximize compatibility with assistive technologies
- Use semantic HTML
- Validate markup
- Test with screen readers

## Color Contrast

### WCAG AA Standards (Minimum)

**Normal Text (< 18px)**
- Minimum contrast ratio: 4.5:1

**Large Text (≥ 18px or ≥ 14px bold)**
- Minimum contrast ratio: 3:1

**UI Components & Graphics**
- Minimum contrast ratio: 3:1

### Color Combinations

```html
<!-- Good: Sufficient contrast -->
<div style="background: #FFFFFF; color: #334155;">
  High contrast text (10.8:1)
</div>

<!-- Good: Meets AA for large text -->
<div style="background: #4F46E5; color: #FFFFFF;">
  White on primary (4.8:1)
</div>

<!-- Bad: Insufficient contrast -->
<div style="background: #F8FAFC; color: #CBD5E1;">
  Low contrast text (1.6:1) ❌
</div>
```

### Never Rely on Color Alone

```html
<!-- Bad: Color only -->
<span style="color: red;">Error</span>

<!-- Good: Color + icon + text -->
<span class="error">
  <img src="/icons/status/error-failed.png" alt="" />
  <span>Error: Invalid email address</span>
</span>
```

## Keyboard Navigation

### Focus States

All interactive elements must have visible focus indicators.

```css
/* Required focus styles */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 3px solid rgba(79, 70, 229, 0.4);
  outline-offset: 2px;
}

/* Never remove focus without replacement */
*:focus {
  /* DON'T: outline: none; */
}
```

### Focus Order

Maintain logical tab order that follows visual layout:

```html
<form>
  <!-- Tab order: 1 -->
  <input type="text" id="name" tabindex="0" />
  
  <!-- Tab order: 2 -->
  <input type="email" id="email" tabindex="0" />
  
  <!-- Tab order: 3 -->
  <button type="submit" tabindex="0">Submit</button>
  
  <!-- Explicitly skip -->
  <div tabindex="-1">Not focusable</div>
</form>
```

### Keyboard Shortcuts

| Pattern | Keys | Action |
| --- | --- | --- |
| Navigation | Tab | Move focus forward |
| Navigation | Shift + Tab | Move focus backward |
| Activation | Enter / Space | Activate buttons and links |
| Dismissal | Escape | Close modals/dropdowns |
| Selection | Arrow Keys | Navigate lists/menus |
| Selection | Home / End | Jump to start/end |

## Semantic HTML

### Use Proper Elements

```html
<!-- Good: Semantic HTML -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Content...</p>
  </article>
</main>

<footer>
  <p>© 2026 Instica</p>
</footer>

<!-- Bad: Generic divs -->
<div class="header">
  <div class="nav">
    <div class="link">Home</div>
  </div>
</div>
```

### Headings Hierarchy

```html
<!-- Good: Proper hierarchy -->
<h1>Page Title</h1>
  <h2>Section 1</h2>
    <h3>Subsection 1.1</h3>
    <h3>Subsection 1.2</h3>
  <h2>Section 2</h2>

<!-- Bad: Skipping levels -->
<h1>Page Title</h1>
  <h4>Wrong level</h4> ❌
```

## ARIA Attributes

### Landmark Roles

```html
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
    <!-- Nav content -->
  </nav>
</header>

<main role="main">
  <!-- Main content -->
</main>

<aside role="complementary">
  <!-- Sidebar -->
</aside>

<footer role="contentinfo">
  <!-- Footer -->
</footer>
```

### Labels and Descriptions

```html
<!-- Button with visible label -->
<button>Save Changes</button>

<!-- Icon-only button needs aria-label -->
<button aria-label="Close dialog">
  ×
</button>

<!-- Input with associated label -->
<label for="email">Email</label>
<input type="email" id="email" aria-describedby="email-help" />
<span id="email-help">We'll never share your email</span>

<!-- Input with error -->
<input 
  type="email" 
  id="email-error"
  aria-invalid="true" 
  aria-describedby="error-msg" 
/>
<span id="error-msg" role="alert">Please enter a valid email</span>
```

### Live Regions

```html
<!-- Announce dynamic content -->
<div role="status" aria-live="polite">
  3 items updated
</div>

<!-- Urgent announcements -->
<div role="alert" aria-live="assertive">
  Error: Connection lost
</div>

<!-- Loading states -->
<div role="status" aria-live="polite" aria-busy="true">
  Loading...
</div>
```

### Interactive States

```html
<!-- Toggle button -->
<button 
  aria-pressed="false"
  onclick="this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true')"
>
  Toggle Feature
</button>

<!-- Expandable section -->
<button 
  aria-expanded="false" 
  aria-controls="details"
  onclick="toggleExpand()"
>
  Show Details
</button>
<div id="details" hidden>
  <!-- Details content -->
</div>

<!-- Current page in navigation -->
<nav>
  <a href="/home" aria-current="page">Home</a>
  <a href="/about">About</a>
</nav>
```

## Form Accessibility

### Required Fields

```html
<label for="username">
  Username <span aria-label="required">*</span>
</label>
<input 
  type="text" 
  id="username" 
  required 
  aria-required="true"
/>
```

### Error Messages

```html
<div class="form-field">
  <label for="email-field">Email</label>
  <input 
    type="email" 
    id="email-field"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <span id="email-error" role="alert" class="error">
    Please enter a valid email address
  </span>
</div>
```

### Fieldsets and Legends

```html
<fieldset>
  <legend>Shipping Address</legend>
  
  <label for="street">Street</label>
  <input type="text" id="street" />
  
  <label for="city">City</label>
  <input type="text" id="city" />
</fieldset>
```

## Modal Accessibility

### Focus Trap

```javascript
function trapFocus(modal) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
    
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  firstFocusable.focus();
}
```

### Modal Markup

```html
<div 
  class="modal" 
  role="dialog" 
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Confirm Deletion</h2>
  <p id="modal-description">
    Are you sure you want to delete this item?
  </p>
  
  <button onclick="confirm()">Delete</button>
  <button onclick="closeModal()">Cancel</button>
</div>
```

## Screen Reader Only Content

```html
<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>

<button>
  <img src="/icon.png" alt="" />
  <span class="sr-only">Add to cart</span>
</button>
```

## Images and Media

### Alt Text

```html
<!-- Informative image -->
<img src="/product.jpg" alt="Vintage camera with leather case" />

<!-- Decorative image -->
<img src="/decoration.svg" alt="" role="presentation" />

<!-- Linked image -->
<a href="/camera">
  <img src="/camera.jpg" alt="View vintage camera details" />
</a>

<!-- Complex image needs description -->
<figure>
  <img src="/chart.png" alt="Sales data chart" aria-describedby="chart-desc" />
  <figcaption id="chart-desc">
    Sales increased 25% from Q1 to Q2, reaching $50,000 in June.
  </figcaption>
</figure>
```

### Video and Audio

```html
<video controls>
  <source src="/video.mp4" type="video/mp4" />
  <track kind="captions" src="/captions.vtt" srclang="en" label="English" />
  <track kind="descriptions" src="/descriptions.vtt" srclang="en" />
</video>
```

## Motion and Animation

### Respect User Preferences

```css
/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Safe Animation Patterns

```css
/* Good: Gentle transitions */
.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

/* Avoid: Rapid flashing */
.flashing {
  /* Don't flash more than 3 times per second */
  animation: flash 2s infinite; ❌
}
```

## Testing Checklist

### Keyboard Testing
- [ ] Tab through all interactive elements
- [ ] Verify focus indicators are visible
- [ ] Test keyboard shortcuts (Enter, Space, Escape)
- [ ] Ensure no keyboard traps
- [ ] Check focus order matches visual order

### Screen Reader Testing
- [ ] Test with NVDA (Windows) or VoiceOver (Mac)
- [ ] Verify all images have appropriate alt text
- [ ] Check form labels and error messages
- [ ] Test dynamic content announcements
- [ ] Verify button and link purposes are clear

### Color and Contrast
- [ ] Check color contrast ratios
- [ ] Test in grayscale
- [ ] Verify color is not the only indicator
- [ ] Test with color blindness simulators

### Responsive and Zoom
- [ ] Test at 200% browser zoom
- [ ] Verify mobile touch targets (min 44×44px)
- [ ] Check responsive text scaling
- [ ] Test landscape and portrait orientations

## Tools and Resources

### Browser Extensions
- axe DevTools (Chrome, Firefox)
- WAVE (Web Accessibility Evaluation Tool)
- Lighthouse (Chrome DevTools)
- Color Contrast Analyzer

### Screen Readers
- NVDA (Windows, free)
- JAWS (Windows, paid)
- VoiceOver (macOS, iOS, built-in)
- TalkBack (Android, built-in)

### Testing Tools
- Pa11y (automated testing)
- axe-core (JavaScript library)
- Jest-axe (React testing)
- Storybook a11y addon

## Design Tokens

```css
:root {
  /* Focus indicators */
  --focus-outline-width: 3px;
  --focus-outline-color: rgba(79, 70, 229, 0.4);
  --focus-outline-offset: 2px;
  
  /* Touch targets */
  --touch-target-min: 44px;
  
  /* Animation preferences */
  --animation-duration: 0.2s;
  --reduced-animation-duration: 0.01ms;
}
```

## WCAG Compliance

We target **WCAG 2.1 Level AA** compliance as our minimum standard:

- ✓ Perceivable: Text alternatives, adaptable content, distinguishable
- ✓ Operable: Keyboard accessible, enough time, navigable
- ✓ Understandable: Readable, predictable, input assistance
- ✓ Robust: Compatible with assistive technologies

For critical flows (authentication, payments, core features), we aim for **AAA** where practical.
