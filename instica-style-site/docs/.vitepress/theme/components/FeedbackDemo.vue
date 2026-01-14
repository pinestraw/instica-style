<template>
  <div class="demo-wrapper">
    <div class="demo-header">
      <button @click="toggleTheme" class="theme-toggle">
        {{ isDark ? '☀️ Light' : '🌙 Dark' }}
      </button>
    </div>
    
    <div class="demo-container" :class="{ 'dark-theme': isDark }">
      <!-- Toasts -->
      <div class="demo-section">
        <h4>Toast Notifications</h4>
        <div class="toast-stack">
          <div class="toast toast-success">
            <svg width="20" height="20" fill="currentColor" class="toast-icon">
              <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-2 15l-5-5 1.41-1.41L8 12.17l7.59-7.59L17 6l-9 9z"/>
            </svg>
            <div class="toast-content">
              <div class="toast-title">Success</div>
              <div class="toast-message">Product saved successfully</div>
            </div>
          </div>
          <div class="toast toast-error">
            <svg width="20" height="20" fill="currentColor" class="toast-icon">
              <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z"/>
            </svg>
            <div class="toast-content">
              <div class="toast-title">Error</div>
              <div class="toast-message">Failed to save product</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Alerts -->
      <div class="demo-section">
        <h4>Alerts</h4>
        <div class="alert-stack">
          <div class="alert alert-info">
            <svg width="20" height="20" fill="currentColor" class="alert-icon">
              <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z"/>
            </svg>
            <div class="alert-content">
              <div class="alert-title">Information</div>
              <div class="alert-message">Your trial expires in 7 days</div>
            </div>
          </div>
          <div class="alert alert-warning">
            <svg width="20" height="20" fill="currentColor" class="alert-icon">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            <div class="alert-content">
              <div class="alert-title">Warning</div>
              <div class="alert-message">Low inventory on 5 products</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="demo-section">
        <h4>Modal Dialog</h4>
        <div class="modal-preview">
          <div class="modal">
            <div class="modal-header">
              <h3 class="modal-title">Confirm Delete</h3>
              <button class="modal-close" aria-label="Close">×</button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to delete this product? This action cannot be undone.</p>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary">Cancel</button>
              <button class="btn btn-destructive">Delete</button>
            </div>
          </div>
        </div>
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
  padding: 24px;
  background: #F8FAFC;
  border-radius: 8px;
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

.toast-stack,
.alert-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.toast {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
}

.dark-theme .toast {
  background: #0F172A;
  border-left-width: 4px;
}

.toast-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.toast-success {
  border-left: 4px solid #10B981;
}

.toast-success .toast-icon {
  color: #10B981;
}

.toast-error {
  border-left: 4px solid #EF4444;
}

.toast-error .toast-icon {
  color: #EF4444;
}

.toast-content {
  flex: 1;
}

.toast-title {
  font-weight: 600;
  font-size: 14px;
  color: #0F172A;
  margin-bottom: 4px;
}

.dark-theme .toast-title {
  color: #F1F5F9;
}

.toast-message {
  font-size: 14px;
  color: #64748B;
}

.dark-theme .toast-message {
  color: #94A3B8;
}

.alert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid;
}

.alert-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-info {
  background: #EFF6FF;
  border-color: #BFDBFE;
}

.dark-theme .alert-info {
  background: #1E3A8A;
  border-color: #1E40AF;
}

.alert-warning {
  background: #FFFBEB;
  border-color: #FDE68A;
}

.dark-theme .alert-warning {
  background: #78350F;
  border-color: #92400E;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-weight: 600;
  font-size: 14px;
  color: #0F172A;
  margin-bottom: 4px;
}

.dark-theme .alert-title {
  color: #F1F5F9;
}

.alert-message {
  font-size: 14px;
  color: #64748B;
}

.dark-theme .alert-message {
  color: #94A3B8;
}

.modal-preview {
  padding: 24px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  max-width: 480px;
  width: 100%;
}

.dark-theme .modal {
  background: #0F172A;
  border: 1px solid #475569;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 16px;
  border-bottom: 1px solid #E2E8F0;
}

.modal-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #0F172A;
}

.dark-theme .modal-title {
  color: #F1F5F9;
}

.dark-theme .modal-header {
  border-bottom-color: #475569;
}

.modal-close {
  background: none;
  border: none;
  font-size: 28px;
  color: #94A3B8;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s;
}

.modal-close:hover {
  background: #F1F5F9;
  color: #64748B;
}

.modal-body {
  padding: 24px;
}

.modal-body p {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: #475569;
}

.dark-theme .modal-body p {
  color: #CBD5E1;
}

.modal-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 16px 24px 24px;
  border-top: 1px solid #E2E8F0;
}

.dark-theme .modal-footer {
  border-top-color: #475569;
}

.btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary {
  background: #F1F5F9;
  color: #475569;
}

.dark-theme .btn-secondary {
  background: #334155;
  color: #F1F5F9;
}

.btn-secondary:hover {
  background: #E2E8F0;
}

.btn-destructive {
  background: #EF4444;
  color: white;
}

.btn-destructive:hover {
  background: #DC2626;
}
</style>
