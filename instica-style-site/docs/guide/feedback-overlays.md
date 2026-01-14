---
title: Feedback & Overlays
outline: deep
---

## Live Examples

<FeedbackDemo />

---

<style scoped>
.component-example {
  padding: 24px;
  background: #F8FAFC;
  border-radius: 12px;
  margin: 24px 0;
  border: 1px solid #E2E8F0;
}
</style>

# Feedback & Overlays

Feedback components communicate system status and guide users through interactions. Overlays focus attention on important content or actions.

## Toast Notifications

### Success Toast

<div class="component-example">
  <div style="display: flex; align-items: flex-start; gap: 12px; padding: 16px; background: #FFFFFF; border-radius: 10px; box-shadow: 0 8px 20px rgba(0,0,0,0.1); max-width: 420px;">
    <div style="width: 28px; height: 28px; border-radius: 8px; background: #DCFCE7; display: flex; align-items: center; justify-content: center;">✅</div>
    <div style="flex: 1;">
      <div style="font-size: 15px; font-weight: 600; color: #0F172A;">Item saved successfully</div>
      <div style="font-size: 14px; color: #64748B; margin-top: 4px;">Your changes have been saved to inventory</div>
    </div>
    <button style="border: none; background: transparent; color: #94A3B8; font-size: 18px;">×</button>
  </div>
</div>

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

<div class="component-example">
  <div style="display: flex; flex-direction: column; gap: 12px; max-width: 420px;">
    <div style="display: flex; align-items: center; gap: 12px; padding: 14px; background: #FFFFFF; border-radius: 10px; border-left: 4px solid #059669; box-shadow: 0 6px 16px rgba(0,0,0,0.08);">
      <span>✅</span>
      <div style="flex: 1; font-size: 14px; color: #0F172A;">Listing published</div>
    </div>
    <div style="display: flex; align-items: center; gap: 12px; padding: 14px; background: #FFFFFF; border-radius: 10px; border-left: 4px solid #D97706; box-shadow: 0 6px 16px rgba(0,0,0,0.08);">
      <span>⚠️</span>
      <div style="flex: 1; font-size: 14px; color: #0F172A;">Photo upload taking longer than usual</div>
    </div>
  </div>
</div>

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

<div class="component-example">
  <div style="position: relative; height: 220px; background: rgba(15, 23, 42, 0.45); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
    <div style="width: 360px; background: #FFFFFF; border-radius: 12px; padding: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.2);">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="font-size: 16px; font-weight: 600; color: #0F172A;">Delete Item</div>
        <button style="border: none; background: transparent; font-size: 18px; color: #94A3B8;">×</button>
      </div>
      <p style="margin: 16px 0; color: #64748B; font-size: 14px;">Are you sure you want to delete this item? This action cannot be undone.</p>
      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button style="padding: 8px 14px; border-radius: 8px; border: 1px solid #E2E8F0; background: #FFFFFF; color: #64748B;">Cancel</button>
        <button style="padding: 8px 14px; border-radius: 8px; border: none; background: #EF4444; color: #FFFFFF; font-weight: 600;">Delete</button>
      </div>
    </div>
  </div>
</div>

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

<div class="component-example">
  <div style="position: relative; height: 240px; background: rgba(15, 23, 42, 0.35); border-radius: 12px; overflow: hidden;">
    <div style="position: absolute; inset: 0 auto 0 0; width: 260px; background: #FFFFFF; padding: 16px; box-shadow: 4px 0 16px rgba(0,0,0,0.12);">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div style="font-size: 16px; font-weight: 600; color: #0F172A;">Filter Options</div>
        <button style="border: none; background: transparent; font-size: 18px; color: #94A3B8;">×</button>
      </div>
      <div style="height: 120px; background: #F8FAFC; border-radius: 8px; border: 1px dashed #CBD5E1; margin-bottom: 12px;"></div>
      <div style="display: flex; gap: 8px;">
        <button style="flex: 1; padding: 8px 12px; border-radius: 8px; border: 1px solid #E2E8F0; background: #FFFFFF; color: #64748B;">Reset</button>
        <button style="flex: 1; padding: 8px 12px; border-radius: 8px; border: none; background: #4F46E5; color: #FFFFFF; font-weight: 600;">Apply</button>
      </div>
    </div>
  </div>
</div>

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

<div class="component-example">
  <div style="position: relative; display: inline-flex; align-items: center; gap: 8px;">
    <button style="padding: 8px 12px; border-radius: 8px; border: 1px solid #E2E8F0; background: #FFFFFF;">Hover me</button>
    <div style="position: absolute; top: -44px; left: 0; background: #0F172A; color: #FFFFFF; padding: 6px 10px; border-radius: 6px; font-size: 12px; white-space: nowrap;">More details here</div>
  </div>
</div>

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

<div class="component-example">
  <div style="position: relative; display: inline-flex;">
    <button style="padding: 8px 14px; border-radius: 8px; border: 1px solid #E2E8F0; background: #FFFFFF;">Options</button>
    <div style="position: absolute; top: 44px; left: 0; width: 220px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; box-shadow: 0 12px 24px rgba(0,0,0,0.12); padding: 12px;">
      <div style="font-weight: 600; margin-bottom: 8px; color: #0F172A;">Quick Actions</div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <button style="text-align: left; border: none; background: transparent; color: #64748B; padding: 6px 4px;">Duplicate listing</button>
        <button style="text-align: left; border: none; background: transparent; color: #64748B; padding: 6px 4px;">Share link</button>
        <button style="text-align: left; border: none; background: transparent; color: #DC2626; padding: 6px 4px;">Archive</button>
      </div>
    </div>
  </div>
</div>

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

<div class="component-example">
  <div style="width: 40px; height: 40px; border-radius: 50%; border: 4px solid #E2E8F0; border-top-color: #4F46E5; animation: spin 0.8s linear infinite;"></div>
</div>

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

<div class="component-example">
  <div style="width: 320px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden;">
    <div style="height: 140px; background: linear-gradient(90deg,#F1F5F9 0%,#E2E8F0 50%,#F1F5F9 100%); background-size: 200% 100%; animation: shimmer 1.5s infinite;"></div>
    <div style="padding: 16px; display: grid; gap: 8px;">
      <div style="height: 16px; width: 80%; background: linear-gradient(90deg,#F1F5F9 0%,#E2E8F0 50%,#F1F5F9 100%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 6px;"></div>
      <div style="height: 16px; width: 60%; background: linear-gradient(90deg,#F1F5F9 0%,#E2E8F0 50%,#F1F5F9 100%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 6px;"></div>
      <div style="height: 16px; width: 40%; background: linear-gradient(90deg,#F1F5F9 0%,#E2E8F0 50%,#F1F5F9 100%); background-size: 200% 100%; animation: shimmer 1.5s infinite; border-radius: 6px;"></div>
    </div>
  </div>
</div>

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

<div class="component-example">
  <div style="display: flex; align-items: center; gap: 12px;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <div style="width: 24px; height: 24px; border-radius: 999px; background: #4F46E5; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 12px;">✓</div>
      <div style="font-size: 13px; color: #0F172A;">Details</div>
    </div>
    <div style="width: 24px; height: 2px; background: #CBD5E1;"></div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <div style="width: 24px; height: 24px; border-radius: 999px; border: 2px solid #4F46E5; color: #4F46E5; display: flex; align-items: center; justify-content: center; font-size: 12px;">2</div>
      <div style="font-size: 13px; color: #64748B;">Photos</div>
    </div>
    <div style="width: 24px; height: 2px; background: #E2E8F0;"></div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <div style="width: 24px; height: 24px; border-radius: 999px; border: 2px solid #E2E8F0; color: #94A3B8; display: flex; align-items: center; justify-content: center; font-size: 12px;">3</div>
      <div style="font-size: 13px; color: #94A3B8;">Publish</div>
    </div>
  </div>
</div>

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

<div class="component-example">
  <div style="display: flex; align-items: flex-start; gap: 12px; padding: 16px; border-radius: 10px; background: #EEF2FF; border: 1px solid #C7D2FE; max-width: 520px;">
    <div style="width: 28px; height: 28px; border-radius: 8px; background: #4F46E5; color: #FFFFFF; display: flex; align-items: center; justify-content: center;">i</div>
    <div style="flex: 1;">
      <div style="font-weight: 600; color: #1E293B;">Inventory sync paused</div>
      <div style="font-size: 14px; color: #475569; margin-top: 4px;">Reconnect your marketplace account to resume sync.</div>
    </div>
    <button style="border: none; background: transparent; color: #4F46E5; font-weight: 600;">Reconnect</button>
  </div>
</div>

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
