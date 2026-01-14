<template>
  <div class="demo-wrapper">
    <div class="demo-header">
      <button @click="toggleTheme" class="theme-toggle">
        {{ isDark ? '☀️ Light' : '🌙 Dark' }}
      </button>
    </div>
    
    <div class="demo-container" :class="{ 'dark-theme': isDark }">
      <!-- Buttons -->
      <div class="demo-section">
        <h4>iOS Button Styles</h4>
        <div class="button-stack">
          <button class="ios-btn ios-btn-primary">Continue</button>
          <button class="ios-btn ios-btn-secondary">Cancel</button>
          <button class="ios-btn ios-btn-primary" disabled>
            <span class="spinner"></span>
            Processing...
          </button>
        </div>
      </div>

      <!-- Text Fields -->
      <div class="demo-section">
        <h4>Text Fields</h4>
        <div class="form-stack">
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" class="ios-input" placeholder="you@example.com" />
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="ios-input" placeholder="Enter password" />
          </div>
          <div class="form-group">
            <label class="form-label">With Error</label>
            <input type="text" class="ios-input ios-input-error" value="invalid@" />
            <div class="error-message">
              <span class="error-icon">⚠️</span>
              Please enter a valid email address
            </div>
          </div>
        </div>
      </div>

      <!-- Status Indicators -->
      <div class="demo-section">
        <h4>Status Indicators</h4>
        <div class="status-row">
          <div class="status-item">
            <span class="status-dot status-success"></span>
            <span class="status-label">Listed</span>
          </div>
          <div class="status-item">
            <span class="status-dot status-warning"></span>
            <span class="status-label">Draft</span>
          </div>
          <div class="status-item">
            <span class="status-dot status-danger"></span>
            <span class="status-label">Failed</span>
          </div>
          <div class="status-item">
            <span class="status-dot status-inactive"></span>
            <span class="status-label">Inactive</span>
          </div>
        </div>
      </div>

      <!-- List Row Card -->
      <div class="demo-section">
        <h4>Listing Row</h4>
        <div class="ios-card ios-list-row">
          <div class="list-row-content">
            <div class="list-row-header">
              <span class="list-row-title">iPhone 13 Pro</span>
              <div class="status-pill status-pill-success">
                <span class="status-dot-small status-success"></span>
                Active
              </div>
            </div>
            <div class="list-row-details">
              <span class="list-row-price">$999.00</span>
              <span class="list-row-divider">•</span>
              <span class="list-row-platform">eBay</span>
            </div>
          </div>
          <span class="chevron">›</span>
        </div>

        <div class="ios-card ios-list-row">
          <div class="list-row-content">
            <div class="list-row-header">
              <span class="list-row-title">MacBook Air M2</span>
              <div class="status-pill status-pill-warning">
                <span class="status-dot-small status-warning"></span>
                Low Stock
              </div>
            </div>
            <div class="list-row-details">
              <span class="list-row-price">$1,199.00</span>
              <span class="list-row-divider">•</span>
              <span class="list-row-platform">Amazon</span>
            </div>
          </div>
          <span class="chevron">›</span>
        </div>
      </div>

      <!-- Collapsible Section -->
      <div class="demo-section">
        <h4>Collapsible Section</h4>
        <div class="ios-collapsible-card">
          <button class="collapsible-header" @click="expanded = !expanded">
            <div class="collapsible-title-group">
              <div class="collapsible-title">Shipping Details</div>
              <div class="collapsible-subtitle">USPS Priority Mail</div>
            </div>
            <span class="collapsible-chevron" :class="{ expanded }">›</span>
          </button>
          <div v-if="expanded" class="collapsible-content">
            <div class="collapsible-row">
              <span class="collapsible-label">Carrier</span>
              <span class="collapsible-value">USPS</span>
            </div>
            <div class="collapsible-row">
              <span class="collapsible-label">Service</span>
              <span class="collapsible-value">Priority Mail</span>
            </div>
            <div class="collapsible-row">
              <span class="collapsible-label">Delivery</span>
              <span class="collapsible-value">2-3 business days</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab Bar -->
      <div class="demo-section">
        <h4>Tab Bar Navigation</h4>
        <div class="ios-tab-bar">
          <button class="tab-item" :class="{ active: activeTab === 'products' }" @click="activeTab = 'products'">
            <span class="tab-icon">📦</span>
            <span class="tab-label">Products</span>
          </button>
          <button class="tab-item" :class="{ active: activeTab === 'inventory' }" @click="activeTab = 'inventory'">
            <span class="tab-icon">📋</span>
            <span class="tab-label">Inventory</span>
          </button>
          <button class="tab-item" :class="{ active: activeTab === 'orders' }" @click="activeTab = 'orders'">
            <span class="tab-icon">🛒</span>
            <span class="tab-label">Orders</span>
          </button>
          <button class="tab-item" :class="{ active: activeTab === 'settings' }" @click="activeTab = 'settings'">
            <span class="tab-icon">⚙️</span>
            <span class="tab-label">Settings</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDark = ref(false)
const expanded = ref(false)
const activeTab = ref('products')

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
  max-width: 420px;
  margin: 0 auto;
}

.demo-container.dark-theme {
  background: #0F172A;
  border-color: #334155;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.demo-section h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.dark-theme .demo-section h4 {
  color: #94A3B8;
}

/* iOS Buttons */
.button-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ios-btn {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 17px;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

.ios-btn-primary {
  background: #4F46E5;
  color: white;
}

.ios-btn-primary:hover:not(:disabled) {
  background: #4338CA;
}

.ios-btn-primary:disabled {
  background: rgba(79, 70, 229, 0.35);
  cursor: not-allowed;
}

.ios-btn-secondary {
  background: transparent;
  color: #4F46E5;
  border: 1px solid #4F46E5;
}

.dark-theme .ios-btn-secondary {
  color: #818CF8;
  border-color: #818CF8;
}

.ios-btn-secondary:hover {
  background: rgba(79, 70, 229, 0.1);
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Text Fields */
.form-stack {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-label {
  font-size: 15px;
  font-weight: 500;
  color: #334155;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

.dark-theme .form-label {
  color: #E2E8F0;
}

.ios-input {
  width: 100%;
  height: 44px;
  padding: 0 16px;
  font-size: 17px;
  color: #1E293B;
  background: white;
  border: 1px solid #CBD5E1;
  border-radius: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  transition: all 0.2s;
}

.ios-input::placeholder {
  color: #94A3B8;
}

.ios-input:focus {
  outline: none;
  border-color: #4F46E5;
}

.dark-theme .ios-input {
  background: #312E81;
  border-color: #4F46E5;
  color: white;
}

.dark-theme .ios-input::placeholder {
  color: #64748B;
}

.ios-input-error {
  border-color: #DC2626;
}

.error-message {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #DC2626;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

.error-icon {
  font-size: 16px;
}

/* Status Indicators */
.status-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-dot-small {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.status-success {
  background: #10B981;
}

.status-warning {
  background: #EA580C;
}

.status-danger {
  background: #DC2626;
}

.status-inactive {
  background: #CBD5E1;
}

.status-label {
  font-size: 15px;
  color: #475569;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

.dark-theme .status-label {
  color: #94A3B8;
}

/* iOS Cards */
.ios-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s;
}

.dark-theme .ios-card {
  background: #1E293B;
}

.ios-list-row {
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 12px;
  margin-bottom: 8px;
  cursor: pointer;
}

.ios-list-row:hover {
  background: #F8FAFC;
}

.dark-theme .ios-list-row:hover {
  background: #334155;
}

.list-row-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.list-row-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.list-row-title {
  font-size: 15px;
  font-weight: 500;
  color: #1E293B;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

.dark-theme .list-row-title {
  color: #F1F5F9;
}

.status-pill {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

.status-pill-success {
  background: rgba(16, 185, 129, 0.15);
  color: #059669;
}

.status-pill-warning {
  background: rgba(234, 88, 12, 0.15);
  color: #C2410C;
}

.list-row-details {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}

.list-row-price {
  font-weight: 600;
  color: #1E293B;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  font-variant-numeric: tabular-nums;
}

.dark-theme .list-row-price {
  color: #F1F5F9;
}

.list-row-divider {
  color: #CBD5E1;
}

.list-row-platform {
  color: #64748B;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

.dark-theme .list-row-platform {
  color: #94A3B8;
}

.chevron {
  font-size: 20px;
  color: #CBD5E1;
  font-weight: 300;
}

.dark-theme .chevron {
  color: #475569;
}

/* Collapsible */
.ios-collapsible-card {
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  overflow: hidden;
}

.dark-theme .ios-collapsible-card {
  background: #1E293B;
  border-color: #334155;
}

.collapsible-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}

.collapsible-header:hover {
  background: rgba(0, 0, 0, 0.02);
}

.dark-theme .collapsible-header:hover {
  background: rgba(255, 255, 255, 0.05);
}

.collapsible-title-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}

.collapsible-title {
  font-size: 13px;
  font-weight: 600;
  color: #1E293B;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

.dark-theme .collapsible-title {
  color: #F1F5F9;
}

.collapsible-subtitle {
  font-size: 12px;
  color: #64748B;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

.dark-theme .collapsible-subtitle {
  color: #94A3B8;
}

.collapsible-chevron {
  font-size: 18px;
  color: #94A3B8;
  transition: transform 0.2s;
  transform: rotate(0deg);
}

.collapsible-chevron.expanded {
  transform: rotate(90deg);
}

.collapsible-content {
  padding: 0 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: slideDown 0.2s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.collapsible-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

.collapsible-label {
  color: #64748B;
}

.dark-theme .collapsible-label {
  color: #94A3B8;
}

.collapsible-value {
  color: #1E293B;
  font-weight: 500;
}

.dark-theme .collapsible-value {
  color: #F1F5F9;
}

/* Tab Bar */
.ios-tab-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: white;
  border-top: 1px solid #E2E8F0;
  border-radius: 12px;
  overflow: hidden;
}

.dark-theme .ios-tab-bar {
  background: #1E293B;
  border-top-color: #334155;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-item:hover {
  background: rgba(0, 0, 0, 0.02);
}

.dark-theme .tab-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.tab-icon {
  font-size: 24px;
  opacity: 0.5;
  transition: opacity 0.2s;
}

.tab-item.active .tab-icon {
  opacity: 1;
}

.tab-label {
  font-size: 10px;
  color: #64748B;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  transition: color 0.2s;
}

.tab-item.active .tab-label {
  color: #4F46E5;
}

.dark-theme .tab-item.active .tab-label {
  color: #818CF8;
}
</style>
