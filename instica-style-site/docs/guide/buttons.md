---
title: Buttons & Actions
outline: deep
---

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.btn-primary {
  background: #4F46E5;
  color: #FFFFFF;
}

.btn-primary:hover {
  background: #4338CA;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.btn-secondary {
  background: #F8FAFC;
  color: #334155;
  border: 1px solid #E2E8F0;
}

.btn-secondary:hover {
  background: #F1F5F9;
  border-color: #CBD5E1;
}

.btn-tertiary {
  background: transparent;
  color: #64748B;
  border: none;
}

.btn-tertiary:hover {
  background: #F8FAFC;
  color: #334155;
}

.btn-destructive {
  background: #EF4444;
  color: #FFFFFF;
}

.btn-destructive:hover {
  background: #DC2626;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

.btn-sm {
  padding: 8px 16px;
  font-size: 14px;
  line-height: 20px;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 18px;
  line-height: 28px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-group {
  display: inline-flex;
  gap: 12px;
}

.component-example {
  padding: 32px;
  background: #F8FAFC;
  border-radius: 12px;
  margin: 24px 0;
  border: 1px solid #E2E8F0;
}
</style>

# Buttons & Actions

Buttons are the primary way users take action. They must be clear, accessible, and provide appropriate feedback for every interaction.

## Button Variants

### Primary Button

Used for the main action on a page or section.

<div class="component-example">
  <button class="btn btn-primary">Create Listing</button>
</div>

```html
<button class="btn btn-primary">Create Listing</button>

<style>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.btn-primary {
  background: #4F46E5;
  color: #FFFFFF;
}

.btn-primary:hover {
  background: #4338CA;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(79, 70, 229, 0.2);
}

.btn-primary:focus-visible {
  outline: 3px solid rgba(79, 70, 229, 0.4);
  outline-offset: 2px;
}
</style>
```

### Secondary Button

For secondary actions or when multiple buttons appear together.

<div class="component-example">
  <button class="btn btn-secondary">Save Draft</button>
</div>

```html
<button class="btn btn-secondary">Save Draft</button>

<style>
.btn-secondary {
  background: #F8FAFC;
  color: #334155;
  border: 1px solid #E2E8F0;
}

.btn-secondary:hover {
  background: #F1F5F9;
  border-color: #CBD5E1;
}

.btn-secondary:active {
  background: #E2E8F0;
}

.btn-secondary:focus-visible {
  outline: 3px solid rgba(51, 65, 85, 0.2);
  outline-offset: 2px;
}
</style>
```

### Tertiary/Ghost Button

For low-emphasis actions that don't need visual weight.

<div class="component-example">
  <button class="btn btn-tertiary">Cancel</button>
</div>

```html
<button class="btn btn-tertiary">Cancel</button>

<style>
.btn-tertiary {
  background: transparent;
  color: #64748B;
  border: none;
}

.btn-tertiary:hover {
  background: #F8FAFC;
  color: #334155;
}

.btn-tertiary:active {
  background: #F1F5F9;
}
</style>
```

### Destructive Button

For dangerous or irreversible actions like delete.

<div class="component-example">
  <button class="btn btn-destructive">Delete Item</button>
</div>

```html
<button class="btn btn-destructive">Delete Item</button>

<style>
.btn-destructive {
  background: #DC2626;
  color: #FFFFFF;
}

.btn-destructive:hover {
  background: #B91C1C;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
}

.btn-destructive:active {
  transform: translateY(0);
}

.btn-destructive:focus-visible {
  outline: 3px solid rgba(220, 38, 38, 0.4);
  outline-offset: 2px;
}
</style>
```

## Button Sizes

<div class="component-example">
  <div class="btn-group">
    <button class="btn btn-primary btn-sm">Small</button>
    <button class="btn btn-primary">Medium (Default)</button>
    <button class="btn btn-primary btn-lg">Large</button>
  </div>
</div>

```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Medium (Default)</button>
<button class="btn btn-primary btn-lg">Large</button>

<style>
.btn-sm {
  padding: 8px 16px;
  font-size: 14px;
  line-height: 20px;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 18px;
  line-height: 28px;
}
</style>
```

## Button States

### Disabled

<div class="component-example">
  <button class="btn btn-primary" disabled>
    Create Listing
  </button>
</div>

```html
<button class="btn btn-primary" disabled>
  Create Listing
</button>

<style>
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
```

### Loading

```html
<button class="btn btn-primary btn-loading">
  <span class="btn-spinner"></span>
  <span>Processing...</span>
</button>

<style>
.btn-loading {
  position: relative;
  pointer-events: none;
}

.btn-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #FFFFFF;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
```

### With Icon

```html
<button class="btn btn-primary">
  <img src="/icons/actions/edit-modify.png" alt="" width="20" height="20" />
  <span>Edit</span>
</button>

<button class="btn btn-secondary">
  <span>Download</span>
  <img src="/icons/actions/download-export.png" alt="" width="20" height="20" />
</button>
```

## Icon-Only Buttons

For toolbar actions or compact layouts.

```html
<button class="btn-icon" aria-label="Edit item">
  <img src="/icons/actions/edit-modify.png" alt="" width="20" height="20" />
</button>

<button class="btn-icon" aria-label="Delete item">
  <img src="/icons/actions/delete-remove.png" alt="" width="20" height="20" />
</button>

<style>
.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-icon:hover {
  background: #F8FAFC;
  border-color: #CBD5E1;
}

.btn-icon:active {
  background: #F1F5F9;
}

.btn-icon:focus-visible {
  outline: 3px solid rgba(79, 70, 229, 0.2);
  outline-offset: 2px;
}
</style>
```

## Button Groups

### Horizontal Group

```html
<div class="btn-group">
  <button class="btn btn-secondary btn-group-item">Day</button>
  <button class="btn btn-secondary btn-group-item btn-group-item--active">Week</button>
  <button class="btn btn-secondary btn-group-item">Month</button>
</div>

<style>
.btn-group {
  display: inline-flex;
  gap: 0;
  border-radius: 8px;
  overflow: hidden;
}

.btn-group-item {
  border-radius: 0;
  border-right: none;
}

.btn-group-item:first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.btn-group-item:last-child {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-right: 1px solid #E2E8F0;
}

.btn-group-item--active {
  background: #4F46E5;
  color: #FFFFFF;
  border-color: #4F46E5;
  z-index: 1;
}
</style>
```

### Split Button

```html
<div class="split-button">
  <button class="btn btn-primary split-button-main">
    Publish Listing
  </button>
  <button class="btn btn-primary split-button-dropdown" aria-label="More options">
    <span>▼</span>
  </button>
</div>

<style>
.split-button {
  display: inline-flex;
  gap: 1px;
}

.split-button-main {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.split-button-dropdown {
  padding: 12px 16px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
```

## Full-Width Buttons

```html
<button class="btn btn-primary btn-block">
  Continue to Checkout
</button>

<style>
.btn-block {
  width: 100%;
}
</style>
```

## Link Buttons

Styled as buttons but navigate instead of submitting.

```html
<a href="/settings" class="btn btn-secondary">
  Go to Settings
</a>
```

## Floating Action Button (FAB)

For primary mobile actions.

```html
<button class="fab" aria-label="Add new item">
  <span class="fab-icon">+</span>
</button>

<style>
.fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4F46E5;
  color: #FFFFFF;
  border: none;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(79, 70, 229, 0.4);
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1000;
}

.fab:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 32px rgba(79, 70, 229, 0.5);
}

.fab:active {
  transform: scale(0.95);
}

.fab-icon {
  font-size: 28px;
  font-weight: 300;
  line-height: 1;
}

@media (min-width: 1024px) {
  .fab {
    display: none;
  }
}
</style>
```

## Button Combinations

### Action Bar

```html
<div class="action-bar">
  <button class="btn btn-tertiary">Cancel</button>
  <div class="action-bar-main">
    <button class="btn btn-secondary">Save Draft</button>
    <button class="btn btn-primary">Publish</button>
  </div>
</div>

<style>
.action-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  background: #FFFFFF;
  border-top: 1px solid #E2E8F0;
}

.action-bar-main {
  display: flex;
  gap: 12px;
}

@media (max-width: 640px) {
  .action-bar {
    flex-direction: column;
  }
  
  .action-bar button {
    width: 100%;
  }
  
  .action-bar-main {
    width: 100%;
    flex-direction: column-reverse;
  }
}
</style>
```

## Accessibility

- Use semantic `<button>` elements for actions (not `<div>` or `<span>`)
- Use `<a>` for navigation (styled as buttons if needed)
- Always provide `aria-label` for icon-only buttons
- Ensure focus states are clearly visible
- Maintain minimum 44×44px touch target on mobile
- Disable pointer events for loading/disabled states
- Use `type="button"` to prevent form submission
- Provide loading state feedback during async operations

## Usage Guidelines

### Do ✓

- Use one primary button per screen section
- Place primary action on the right in dialogs
- Use icon + text for better clarity
- Maintain consistent sizing within sections
- Provide immediate feedback on click

### Don't ✗

- Use multiple primary buttons competing for attention
- Create buttons smaller than 32px height
- Rely solely on color to communicate state
- Use vague labels like "Click Here" or "Submit"
- Nest buttons or make them too close together

## Design Tokens

```css
:root {
  /* Button colors */
  --btn-primary-bg: #4F46E5;
  --btn-primary-hover: #4338CA;
  --btn-secondary-bg: #F8FAFC;
  --btn-secondary-hover: #F1F5F9;
  --btn-destructive-bg: #DC2626;
  --btn-destructive-hover: #B91C1C;
  
  /* Button spacing */
  --btn-padding-sm: 8px 16px;
  --btn-padding-md: 12px 24px;
  --btn-padding-lg: 16px 32px;
  --btn-border-radius: 8px;
  --btn-gap: 8px;
  
  /* Button typography */
  --btn-font-size-sm: 14px;
  --btn-font-size-md: 16px;
  --btn-font-size-lg: 18px;
  --btn-font-weight: 600;
  
  /* Button shadows */
  --btn-shadow-hover: 0 4px 12px rgba(79, 70, 229, 0.3);
  --btn-shadow-active: 0 2px 4px rgba(79, 70, 229, 0.2);
}
```
