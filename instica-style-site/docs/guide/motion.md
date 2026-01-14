---
title: Motion & Animation
outline: deep
---

# Motion & Animation

Motion creates continuity, provides feedback, and guides user attention. Our approach balances delight with performance and accessibility.

## Animation Principles

### Purpose-Driven
Every animation should have a clear purpose:
- **Feedback**: Confirm user actions
- **Guidance**: Direct attention to important changes
- **Continuity**: Smooth state transitions
- **Delight**: Enhance emotional connection (sparingly)

### Natural Motion
- Use easing curves that mimic natural movement
- Avoid linear motion (feels robotic)
- Match intensity to importance
- Respect user motion preferences

### Performance First
- Animate only transform and opacity
- Avoid animating width, height, margin, padding
- Use CSS transforms over JavaScript
- Test on lower-end devices

## Duration Scale

Our timing system balances responsiveness with smoothness:

```css
:root {
  /* Micro-interactions */
  --duration-instant: 100ms;   /* Button press, hover */
  --duration-fast: 150ms;       /* Checkbox, toggle, chip */
  
  /* Standard transitions */
  --duration-base: 200ms;       /* Cards, dropdowns, tooltips */
  --duration-moderate: 300ms;   /* Drawer slide, tabs */
  
  /* Complex animations */
  --duration-slow: 400ms;       /* Modal enter, page transition */
  --duration-deliberate: 500ms; /* Toast slide-in, alert appear */
}
```

### Duration Guidelines

| Duration | Use Case | Example |
| --- | --- | --- |
| 100ms | Instant feedback | Button hover, focus ring |
| 150ms | Toggle state | Checkbox check, switch flip |
| 200ms | Standard transition | Card hover, dropdown open |
| 300ms | Moderate movement | Sidebar expand, tab switch |
| 400ms | Complex state change | Modal fade-in, page transition |
| 500ms | Attention-getting | Toast notification, success animation |

## Easing Functions

### Standard Curves

```css
:root {
  /* Acceleration curves */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);          /* Starts slow, ends fast */
  --ease-out: cubic-bezier(0, 0, 0.2, 1);         /* Starts fast, ends slow */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);    /* Slow-fast-slow */
  
  /* Natural motion (recommended default) */
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);    /* Subtle deceleration */
  
  /* Special effects */
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Overshoot */
  --ease-sharp: cubic-bezier(0.4, 0, 0.6, 1);     /* Quick, decisive */
}
```

### When to Use Each

```css
/* EASE-OUT: Elements entering (most common) */
.modal-enter {
  animation: fadeIn 300ms var(--ease-out);
}

/* EASE-IN: Elements exiting */
.modal-exit {
  animation: fadeOut 200ms var(--ease-in);
}

/* EASE-IN-OUT: Moving between positions */
.sidebar-slide {
  transition: transform 300ms var(--ease-in-out);
}

/* EASE-STANDARD: Default for most UI */
.button {
  transition: all 150ms var(--ease-standard);
}
```

## Common Animation Patterns

### Fade

```html
<style>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

.fade-enter {
  animation: fadeIn 200ms var(--ease-out);
}

.fade-exit {
  animation: fadeOut 150ms var(--ease-in);
}
</style>

<div class="fade-enter">
  Content fades in
</div>
```

### Slide

```html
<style>
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOutLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-20px);
  }
}

.slide-in {
  animation: slideInRight 300ms var(--ease-out);
}

.slide-out {
  animation: slideOutLeft 200ms var(--ease-in);
}
</style>

<!-- Toast notification -->
<div class="toast slide-in">
  Changes saved successfully
</div>
```

### Scale

```html
<style>
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.scale-enter {
  animation: scaleIn 200ms var(--ease-out);
  transform-origin: center;
}

/* Button press feedback */
.button-press {
  transition: transform 100ms var(--ease-standard);
}

.button-press:active {
  transform: scale(0.96);
}
</style>

<button class="button-press">
  Press Me
</button>
```

### Rotate / Spin

```html
<style>
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin 800ms linear infinite;
  width: 24px;
  height: 24px;
  border: 3px solid #E2E8F0;
  border-top-color: #4F46E5;
  border-radius: 50%;
}

/* Icon rotation (chevron expand) */
.chevron {
  transition: transform 200ms var(--ease-standard);
}

.chevron.expanded {
  transform: rotate(180deg);
}
</style>

<div class="spinner"></div>

<button>
  More Options
  <svg class="chevron"><!-- chevron icon --></svg>
</button>
```

## Micro-Interactions

### Button States

```html
<style>
.button {
  position: relative;
  padding: 12px 24px;
  background: #4F46E5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 150ms var(--ease-standard);
}

/* Hover */
.button:hover {
  background: #4338CA;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

/* Active (press) */
.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(79, 70, 229, 0.2);
}

/* Ripple effect */
.button::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: white;
  opacity: 0;
  transform: scale(0);
  transition: opacity 300ms, transform 300ms;
}

.button:active::after {
  opacity: 0.2;
  transform: scale(1);
  transition: 0ms;
}
</style>

<button class="button">
  Click Me
</button>
```

### Toggle Switch

```html
<style>
.switch {
  position: relative;
  width: 48px;
  height: 28px;
  background: #CBD5E1;
  border-radius: 14px;
  cursor: pointer;
  transition: background 200ms var(--ease-standard);
}

.switch-handle {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  transition: transform 200ms var(--ease-standard);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.switch.checked {
  background: #4F46E5;
}

.switch.checked .switch-handle {
  transform: translateX(20px);
}
</style>

<div class="switch">
  <div class="switch-handle"></div>
</div>
```

### Checkbox Check

```html
<style>
@keyframes checkmark {
  0% {
    stroke-dashoffset: 24;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #CBD5E1;
  border-radius: 4px;
  background: white;
  transition: all 150ms var(--ease-standard);
}

.checkbox.checked {
  background: #4F46E5;
  border-color: #4F46E5;
}

.checkmark {
  stroke: white;
  stroke-width: 3;
  stroke-dasharray: 24;
  stroke-dashoffset: 24;
  animation: checkmark 200ms var(--ease-out) forwards;
}
</style>

<div class="checkbox checked">
  <svg viewBox="0 0 20 20">
    <path class="checkmark" d="M5 10 L8 13 L15 6" fill="none" />
  </svg>
</div>
```

### Loading Dots

```html
<style>
@keyframes dotBounce {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

.loading-dots {
  display: flex;
  gap: 8px;
  align-items: center;
}

.dot {
  width: 8px;
  height: 8px;
  background: #4F46E5;
  border-radius: 50%;
  animation: dotBounce 1.4s infinite ease-in-out;
}

.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }
.dot:nth-child(3) { animation-delay: 0s; }
</style>

<div class="loading-dots">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
```

## Page Transitions

### Fade Between Pages

```html
<style>
.page {
  animation: pageEnter 400ms var(--ease-out);
}

@keyframes pageEnter {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<main class="page">
  <!-- Page content -->
</main>
```

### Slide Navigation

```html
<style>
/* Forward navigation */
@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Back navigation */
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.page-forward {
  animation: slideInFromRight 300ms var(--ease-out);
}

.page-back {
  animation: slideInFromLeft 300ms var(--ease-out);
}
</style>
```

## Scroll-Based Animation

### Fade In On Scroll

```html
<style>
.fade-in-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 600ms var(--ease-out),
              transform 600ms var(--ease-out);
}

.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>

<script>
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-section').forEach(el => {
  observer.observe(el);
});
</script>

<section class="fade-in-section">
  Content fades in as you scroll
</section>
```

### Parallax Effect

```html
<style>
.parallax-container {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.parallax-bg {
  position: absolute;
  inset: -20%;
  background-image: url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  will-change: transform;
}
</style>

<script>
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.parallax-bg');
  parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
});
</script>

<div class="parallax-container">
  <div class="parallax-bg"></div>
</div>
```

## Component-Specific Animations

### Modal Enter/Exit

```html
<style>
/* Backdrop */
@keyframes backdropFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes backdropFadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

/* Modal */
@keyframes modalEnter {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes modalExit {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
}

.modal-backdrop.enter {
  animation: backdropFadeIn 200ms var(--ease-out);
}

.modal-backdrop.exit {
  animation: backdropFadeOut 150ms var(--ease-in);
}

.modal.enter {
  animation: modalEnter 300ms var(--ease-out);
}

.modal.exit {
  animation: modalExit 200ms var(--ease-in);
}
</style>
```

### Drawer Slide

```html
<style>
@keyframes drawerSlideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes drawerSlideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background: white;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
}

.drawer.enter {
  animation: drawerSlideIn 300ms var(--ease-out);
}

.drawer.exit {
  animation: drawerSlideOut 250ms var(--ease-in);
}
</style>
```

### Toast Notification

```html
<style>
@keyframes toastSlideIn {
  from {
    opacity: 0;
    transform: translateY(-100%) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes toastSlideOut {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-100%) scale(0.8);
  }
}

.toast {
  position: fixed;
  top: 24px;
  right: 24px;
  padding: 16px 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.toast.enter {
  animation: toastSlideIn 400ms var(--ease-out);
}

.toast.exit {
  animation: toastSlideOut 300ms var(--ease-in);
}
</style>
```

### Skeleton Shimmer

```html
<style>
@keyframes shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.skeleton {
  background: #F1F5F9;
  background-image: linear-gradient(
    90deg,
    #F1F5F9 0px,
    #E2E8F0 40px,
    #F1F5F9 80px
  );
  background-size: 600px;
  animation: shimmer 1.5s infinite linear;
  border-radius: 4px;
}
</style>

<div class="skeleton" style="width: 200px; height: 20px;"></div>
```

## Reduced Motion

Always respect user motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Preserve essential feedback */
  .button:active {
    /* Keep instant feedback like button press */
    transform: scale(0.96);
  }
}
```

### JavaScript Detection

```javascript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (prefersReducedMotion) {
  // Skip animations or use simplified versions
  element.classList.add('no-animation');
} else {
  // Full animations
  element.classList.add('with-animation');
}
```

## Performance Optimization

### Use Transform and Opacity

```css
/* Good: GPU-accelerated */
.element {
  transform: translateX(100px);
  opacity: 0.5;
}

/* Bad: Causes layout recalculation */
.element {
  left: 100px;
  width: 200px;
}
```

### Will-Change Property

```css
/* Use sparingly for elements about to animate */
.modal {
  will-change: transform, opacity;
}

/* Remove after animation */
.modal.animated {
  will-change: auto;
}
```

### Composite Layers

```css
/* Force composite layer for smooth animation */
.animated-element {
  transform: translateZ(0);
  /* or */
  transform: translate3d(0, 0, 0);
}
```

## Design Tokens

```css
:root {
  /* Duration scale */
  --duration-instant: 100ms;
  --duration-fast: 150ms;
  --duration-base: 200ms;
  --duration-moderate: 300ms;
  --duration-slow: 400ms;
  --duration-deliberate: 500ms;
  
  /* Easing curves */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-sharp: cubic-bezier(0.4, 0, 0.6, 1);
}
```

## Animation Checklist

### Before Shipping
- [ ] Animations have clear purpose (not decoration)
- [ ] Duration feels appropriate (not too fast or slow)
- [ ] Easing curves match the motion type
- [ ] Respects `prefers-reduced-motion`
- [ ] Only animates transform/opacity when possible
- [ ] Tested on lower-end devices
- [ ] No janky frame drops
- [ ] Loading states provide feedback
- [ ] Micro-interactions feel responsive (< 100ms)
- [ ] No distracting or excessive motion

### Accessibility
- [ ] Critical interactions work without animation
- [ ] Reduced motion mode tested
- [ ] No rapid flashing (seizure risk)
- [ ] Animation doesn't interfere with readability
- [ ] Focus states remain visible during transitions

## Examples in Action

See these patterns implemented throughout the style guide:
- [Buttons](/guide/buttons) - Hover and press animations
- [Forms](/guide/forms) - Input focus and validation transitions
- [Feedback & Overlays](/guide/feedback-overlays) - Modal and toast animations
- [Navigation](/guide/navigation) - Menu expand/collapse transitions
- [Data Display](/guide/data-display) - Card hover effects
