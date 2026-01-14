---
title: Feedback & Overlays
outline: deep
---

## Live Examples

<FeedbackDemo />

---

# Feedback & Overlays

Feedback components communicate system status and guide users through interactions. Overlays focus attention on important content or actions.

## Toast Notifications

### Success Toast

```html
<div class="toast toast-success">
  <div class="toast-icon">
    <img src="/icons/status/success-complete.png" alt="" width="24" height="24" />
  </div>
  <div class="toast-content">
    <div class="toast-title">Item saved successfully</div>
    <div class="toast-message">Your changes have been saved to inventory</div>
  </div>
  <button class="toast-close" aria-label="Close">×</button>
</div>

<style>
.toast {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 320px;
  max-width: 480px;
  padding: 16px;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  animation: slideInRight 0.3s ease;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast-icon {
  flex-shrink: 0;
}

.toast-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.toast-title {
  font-size: 15px;
  font-weight: 600;
  color: #1E293B;
}

.toast-message {
  font-size: 14px;
  color: #64748B;
  line-height: 1.5;
}

.toast-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 20px;
  line-height: 1;
  color: #94A3B8;
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.toast-close:hover {
  background: #F1F5F9;
  color: #64748B;
}

.toast-success {
  border-left: 4px solid #059669;
}

.toast-error {
  border-left: 4px solid #DC2626;
}

.toast-warning {
  border-left: 4px solid #D97706;
}

.toast-info {
  border-left: 4px solid #4F46E5;
}
</style>
```

### Toast Container

```html
<div class="toast-container">
  <!-- Toasts appear here -->
</div>

<style>
.toast-container {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none;
}

.toast-container .toast {
  pointer-events: auto;
}

@media (max-width: 640px) {
  .toast-container {
    top: auto;
    bottom: 24px;
    left: 16px;
    right: 16px;
  }
  
  .toast {
    min-width: 0;
    max-width: none;
  }
}
</style>
```

## Modal Dialogs

### Standard Modal

```html
<div class="modal-overlay">
  <div class="modal">
    <div class="modal-header">
      <h2 class="modal-title">Delete Item</h2>
      <button class="modal-close" aria-label="Close">×</button>
    </div>
    
    <div class="modal-body">
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </div>
    
    <div class="modal-footer">
      <button class="btn btn-secondary">Cancel</button>
      <button class="btn btn-destructive">Delete</button>
    </div>
  </div>
</div>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal {
  width: 100%;
  max-width: 480px;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
  animation: scaleIn 0.2s ease;
}

@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid #E2E8F0;
}

.modal-title {
  font-size: 20px;
  font-weight: 600;
  color: #1E293B;
  margin: 0;
}

.modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 28px;
  line-height: 1;
  color: #64748B;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: #F8FAFC;
  color: #334155;
}

.modal-body {
  padding: 24px;
  font-size: 15px;
  color: #475569;
  line-height: 1.6;
}

.modal-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 16px 24px;
  border-top: 1px solid #E2E8F0;
}

@media (max-width: 640px) {
  .modal-footer {
    flex-direction: column-reverse;
  }
  
  .modal-footer button {
    width: 100%;
  }
}
</style>
```

### Full-Screen Modal (Drawer)

```html
<div class="drawer drawer-right">
  <div class="drawer-overlay"></div>
  
  <div class="drawer-content">
    <div class="drawer-header">
      <h2 class="drawer-title">Filter Options</h2>
      <button class="drawer-close" aria-label="Close">×</button>
    </div>
    
    <div class="drawer-body">
      <!-- Filter content -->
    </div>
    
    <div class="drawer-footer">
      <button class="btn btn-secondary btn-block">Reset</button>
      <button class="btn btn-primary btn-block">Apply Filters</button>
    </div>
  </div>
</div>

<style>
.drawer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: none;
}

.drawer.open {
  display: block;
}

.drawer-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.3s ease;
}

.drawer-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.1);
  animation: slideInRight 0.3s ease;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid #E2E8F0;
}

.drawer-title {
  font-size: 20px;
  font-weight: 600;
  color: #1E293B;
  margin: 0;
}

.drawer-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 28px;
  line-height: 1;
  color: #64748B;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.drawer-body {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
}

.drawer-footer {
  display: flex;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid #E2E8F0;
}
</style>
```

## Tooltips

```html
<button class="btn-icon tooltip-trigger" aria-describedby="tooltip-1">
  <img src="/icons/status/information-help.png" alt="" width="20" height="20" />
  <span class="tooltip" id="tooltip-1" role="tooltip">
    Click to view more information
  </span>
</button>

<style>
.tooltip-trigger {
  position: relative;
}

.tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  color: #FFFFFF;
  background: #1E293B;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 1000;
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: #1E293B;
}

.tooltip-trigger:hover .tooltip,
.tooltip-trigger:focus .tooltip {
  opacity: 1;
}
</style>
```

## Popovers

```html
<div class="popover-trigger">
  <button class="btn btn-secondary">Options</button>
  
  <div class="popover">
    <div class="popover-arrow"></div>
    <div class="popover-content">
      <div class="popover-header">
        <h4 class="popover-title">Quick Actions</h4>
      </div>
      <div class="popover-body">
        <button class="popover-item">Edit</button>
        <button class="popover-item">Duplicate</button>
        <button class="popover-item popover-item--danger">Delete</button>
      </div>
    </div>
  </div>
</div>

<style>
.popover-trigger {
  position: relative;
}

.popover {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 1000;
  display: none;
  min-width: 200px;
}

.popover.open {
  display: block;
  animation: fadeIn 0.15s ease;
}

.popover-arrow {
  position: absolute;
  bottom: 100%;
  left: 16px;
  border: 6px solid transparent;
  border-bottom-color: #FFFFFF;
  filter: drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.05));
}

.popover-content {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

.popover-header {
  padding: 12px 16px;
  border-bottom: 1px solid #E2E8F0;
}

.popover-title {
  font-size: 14px;
  font-weight: 600;
  color: #1E293B;
  margin: 0;
}

.popover-body {
  display: flex;
  flex-direction: column;
  padding: 8px;
}

.popover-item {
  display: block;
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  color: #334155;
  background: transparent;
  border: none;
  border-radius: 4px;
  text-align: left;
  cursor: pointer;
  transition: background 0.2s ease;
}

.popover-item:hover {
  background: #F8FAFC;
}

.popover-item--danger {
  color: #DC2626;
}

.popover-item--danger:hover {
  background: #FEF2F2;
}
</style>
```

## Loading States

### Spinner

```html
<div class="spinner"></div>

<style>
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #E2E8F0;
  border-top-color: #4F46E5;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner-sm {
  width: 20px;
  height: 20px;
  border-width: 2px;
}

.spinner-lg {
  width: 60px;
  height: 60px;
  border-width: 6px;
}
</style>
```

### Skeleton Loaders

```html
<div class="skeleton-card">
  <div class="skeleton skeleton-rect" style="aspect-ratio: 4/3;"></div>
  <div class="skeleton-content">
    <div class="skeleton skeleton-text" style="width: 80%;"></div>
    <div class="skeleton skeleton-text" style="width: 60%;"></div>
    <div class="skeleton skeleton-text" style="width: 40%;"></div>
  </div>
</div>

<style>
.skeleton {
  background: linear-gradient(
    90deg,
    #F1F5F9 0%,
    #E2E8F0 50%,
    #F1F5F9 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.skeleton-rect {
  width: 100%;
  border-radius: 8px;
}

.skeleton-text {
  height: 16px;
  margin-bottom: 8px;
}

.skeleton-content {
  padding: 16px;
}
</style>
```

### Progress Indicators

```html
<div class="progress-steps">
  <div class="progress-step progress-step--complete">
    <div class="progress-step-icon">✓</div>
    <div class="progress-step-label">Details</div>
  </div>
  
  <div class="progress-step progress-step--active">
    <div class="progress-step-icon">2</div>
    <div class="progress-step-label">Photos</div>
  </div>
  
  <div class="progress-step">
    <div class="progress-step-icon">3</div>
    <div class="progress-step-label">Review</div>
  </div>
</div>

<style>
.progress-steps {
  display: flex;
  align-items: center;
  gap: 8px;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
  position: relative;
}

.progress-step:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 16px;
  left: calc(50% + 20px);
  width: calc(100% - 40px);
  height: 2px;
  background: #E2E8F0;
}

.progress-step--complete::after {
  background: #4F46E5;
}

.progress-step-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 14px;
  font-weight: 600;
  color: #94A3B8;
  background: #F8FAFC;
  border: 2px solid #E2E8F0;
  border-radius: 50%;
  z-index: 1;
}

.progress-step--complete .progress-step-icon {
  color: #FFFFFF;
  background: #4F46E5;
  border-color: #4F46E5;
}

.progress-step--active .progress-step-icon {
  color: #4F46E5;
  background: #EEF2FF;
  border-color: #4F46E5;
}

.progress-step-label {
  font-size: 13px;
  color: #64748B;
  font-weight: 500;
}

.progress-step--active .progress-step-label {
  color: #4F46E5;
}
</style>
```

## Alerts

```html
<div class="alert alert-info">
  <img src="/icons/status/information-help.png" alt="" width="20" height="20" class="alert-icon" />
  <div class="alert-content">
    <div class="alert-title">New feature available</div>
    <div class="alert-message">Try our new bulk editing tools to save time</div>
  </div>
  <button class="alert-close" aria-label="Dismiss">×</button>
</div>

<style>
.alert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid;
}

.alert-info {
  background: #EEF2FF;
  border-color: #C7D2FE;
  color: #3730A3;
}

.alert-success {
  background: #D1FAE5;
  border-color: #A7F3D0;
  color: #065F46;
}

.alert-warning {
  background: #FEF3C7;
  border-color: #FDE68A;
  color: #92400E;
}

.alert-error {
  background: #FEE2E2;
  border-color: #FECACA;
  color: #991B1B;
}

.alert-icon {
  flex-shrink: 0;
}

.alert-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.alert-title {
  font-size: 14px;
  font-weight: 600;
}

.alert-message {
  font-size: 14px;
  line-height: 1.5;
}

.alert-close {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 20px;
  line-height: 1;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}

.alert-close:hover {
  opacity: 1;
}
</style>
```

## Accessibility

- Announce toast notifications to screen readers using `role="status"` or `aria-live="polite"`
- Trap focus within modal dialogs
- Restore focus when modals close
- Use `aria-describedby` for tooltips
- Provide keyboard shortcuts to close overlays (Escape key)
- Ensure sufficient color contrast in all states
- Make loading states perceivable to assistive technologies

## Design Tokens

```css
:root {
  /* Overlay colors */
  --overlay-bg: rgba(0, 0, 0, 0.5);
  --modal-bg: #FFFFFF;
  --toast-bg: #FFFFFF;
  --tooltip-bg: #1E293B;
  
  /* Feedback colors */
  --alert-info-bg: #EEF2FF;
  --alert-success-bg: #D1FAE5;
  --alert-warning-bg: #FEF3C7;
  --alert-error-bg: #FEE2E2;
  
  /* Animation timing */
  --transition-fast: 0.15s;
  --transition-base: 0.2s;
  --transition-slow: 0.3s;
}
```
