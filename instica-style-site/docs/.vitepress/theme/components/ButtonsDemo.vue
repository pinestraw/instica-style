<template>
  <div class="demo-wrapper">
    <div class="demo-header">
      <button @click="toggleTheme" class="theme-toggle">
        {{ isDark ? '☀️ Light' : '🌙 Dark' }}
      </button>
    </div>
    
    <div class="demo-container" :class="{ 'dark-theme': isDark }">
      <!-- Primary Buttons -->
      <div class="demo-section">
        <h4>Primary Buttons</h4>
        <div class="button-row">
          <button class="btn btn-primary">Save Changes</button>
          <button class="btn btn-primary" disabled>Disabled</button>
          <button class="btn btn-primary btn-loading">
            <span class="spinner"></span>
            Loading...
          </button>
        </div>
      </div>

      <!-- Secondary Buttons -->
      <div class="demo-section">
        <h4>Secondary Buttons</h4>
        <div class="button-row">
          <button class="btn btn-secondary">Cancel</button>
          <button class="btn btn-secondary" disabled>Disabled</button>
        </div>
      </div>

      <!-- Tertiary Buttons -->
      <div class="demo-section">
        <h4>Tertiary Buttons</h4>
        <div class="button-row">
          <button class="btn btn-tertiary">Learn More</button>
          <button class="btn btn-tertiary" disabled>Disabled</button>
        </div>
      </div>

      <!-- Destructive Button -->
      <div class="demo-section">
        <h4>Destructive Action</h4>
        <div class="button-row">
          <button class="btn btn-destructive">Delete Item</button>
          <button class="btn btn-destructive" disabled>Disabled</button>
        </div>
      </div>

      <!-- Icon Buttons -->
      <div class="demo-section">
        <h4>Icon Buttons</h4>
        <div class="button-row">
          <button class="btn btn-icon" aria-label="Settings">⚙️</button>
          <button class="btn btn-icon" aria-label="Search">🔍</button>
          <button class="btn btn-icon" aria-label="More">⋯</button>
        </div>
      </div>

      <!-- Button Sizes -->
      <div class="demo-section">
        <h4>Button Sizes</h4>
        <div class="button-row align-center">
          <button class="btn btn-primary btn-sm">Small</button>
          <button class="btn btn-primary">Medium</button>
          <button class="btn btn-primary btn-lg">Large</button>
        </div>
      </div>

      <!-- Button Groups -->
      <div class="demo-section">
        <h4>Button Groups</h4>
        <div class="btn-group">
          <button class="btn-group-item">Day</button>
          <button class="btn-group-item active">Week</button>
          <button class="btn-group-item">Month</button>
          <button class="btn-group-item">Year</button>
        </div>
      </div>

      <!-- Split Button -->
      <div class="demo-section">
        <h4>Split Button</h4>
        <div class="split-button">
          <button class="btn btn-primary split-main">Publish Listing</button>
          <button class="btn btn-primary split-dropdown" aria-label="More options">▼</button>
        </div>
      </div>

      <!-- Full Width Button -->
      <div class="demo-section">
        <h4>Full Width Button</h4>
        <button class="btn btn-primary btn-block">Continue to Checkout</button>
      </div>

      <!-- Floating Action Button -->
      <div class="demo-section">
        <h4>Floating Action Button</h4>
        <button class="btn-fab" aria-label="Add new item">
          <span style="font-size: 24px;">+</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDark = ref(false)
const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<style scoped>
.demo-wrapper {
  margin: 24px 0;
}

.demo-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
}

.theme-toggle {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  background: #F1F5F9;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.theme-toggle:hover {
  background: #E2E8F0;
}

.demo-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  background: #F8FAFC;
  border-radius: 12px;
  border: 1px solid #E2E8F0;
  transition: all 0.3s;
}

.demo-container.dark-theme {
  background: #1E293B;
  border-color: #334155;
}

.demo-section h4 {
  margin: 0 0 16px 0;
  font-size: 14px;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.dark-theme .demo-section h4 {
  color: #94A3B8;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.button-row.align-center {
  align-items: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
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

.btn-primary:hover:not(:disabled) {
  background: #4338CA;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.btn-secondary {
  background: #F1F5F9;
  color: #334155;
}

.dark-theme .btn-secondary {
  background: #334155;
  color: #F1F5F9;
}

.btn-secondary:hover:not(:disabled) {
  background: #E2E8F0;
}

.dark-theme .btn-secondary:hover:not(:disabled) {
  background: #475569;
}

.btn-tertiary {
  background: transparent;
  color: #4F46E5;
  border: 1px solid #E2E8F0;
}

.dark-theme .btn-tertiary {
  color: #818CF8;
  border-color: #475569;
}

.btn-tertiary:hover:not(:disabled) {
  background: #F8FAFC;
  border-color: #CBD5E1;
}

.dark-theme .btn-tertiary:hover:not(:disabled) {
  background: #334155;
  border-color: #64748B;
}

.btn-destructive {
  background: #EF4444;
  color: #FFFFFF;
}

.btn-destructive:hover:not(:disabled) {
  background: #DC2626;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.btn-icon {
  padding: 12px;
  width: 48px;
  height: 48px;
  background: #F1F5F9;
  color: #334155;
}

.dark-theme .btn-icon {
  background: #334155;
  color: #F1F5F9;
}

.btn-icon:hover:not(:disabled) {
  background: #E2E8F0;
}

.dark-theme .btn-icon:hover:not(:disabled) {
  background: #475569;
}

.btn-sm {
  padding: 8px 16px;
  font-size: 14px;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 18px;
}

.btn-loading {
  position: relative;
  pointer-events: none;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.btn-group {
  display: inline-flex;
  background: #F1F5F9;
  padding: 4px;
  border-radius: 8px;
  gap: 4px;
}

.dark-theme .btn-group {
  background: #0F172A;
}

.btn-group-item {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #64748B;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-group-item:hover {
  color: #334155;
  background: rgba(255, 255, 255, 0.5);
}

.dark-theme .btn-group-item:hover {
  background: #1E293B;
}

.btn-group-item.active {
  color: #0F172A;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.dark-theme .btn-group-item.active {
  color: #F1F5F9;
  background: #334155;
}

.split-button {
  display: inline-flex;
  gap: 1px;
}

.split-main {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.split-dropdown {
  padding: 12px 16px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-block {
  width: 100%;
  justify-content: center;
}

.btn-fab {
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4F46E5;
  color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
  cursor: pointer;
  transition: all 0.2s;
}

.btn-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(79, 70, 229, 0.5);
}

.btn-fab:active {
  transform: translateY(0);
}
</style>
