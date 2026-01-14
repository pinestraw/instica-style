<template>
  <div class="demo-wrapper">
    <div class="demo-header">
      <button @click="toggleTheme" class="theme-toggle">
        {{ isDark ? '☀️ Light' : '🌙 Dark' }}
      </button>
    </div>
    
    <div class="demo-container" :class="{ 'dark-theme': isDark }">
      <!-- Text Input -->
      <div class="demo-section">
        <h4>Text Input</h4>
        <div class="form-field">
          <label class="form-label">Product Name</label>
          <input type="text" class="form-input" placeholder="Enter product name" />
        </div>
      </div>

      <!-- Input States -->
      <div class="demo-section">
        <h4>Input States</h4>
        <div class="form-grid">
          <div class="form-field">
            <label class="form-label">Success</label>
            <input type="text" class="form-input form-input-success" value="Valid input" />
            <span class="form-hint form-hint-success">✓ Looks good!</span>
          </div>
          <div class="form-field">
            <label class="form-label">Error</label>
            <input type="text" class="form-input form-input-error" value="Invalid" />
            <span class="form-hint form-hint-error">✕ This field is required</span>
          </div>
        </div>
      </div>

      <!-- Textarea -->
      <div class="demo-section">
        <h4>Textarea</h4>
        <div class="form-field">
          <label class="form-label">Description</label>
          <textarea class="form-input" rows="4" placeholder="Enter description..."></textarea>
        </div>
      </div>

      <!-- Select -->
      <div class="demo-section">
        <h4>Select Dropdown</h4>
        <div class="form-field">
          <label class="form-label">Category</label>
          <select class="form-input">
            <option>Select a category</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Home & Garden</option>
          </select>
        </div>
      </div>

      <!-- Checkbox & Radio -->
      <div class="demo-section">
        <h4>Checkboxes & Radios</h4>
        <div class="form-grid">
          <div class="form-field">
            <label class="form-checkbox">
              <input type="checkbox" checked />
              <span>Send notifications</span>
            </label>
            <label class="form-checkbox">
              <input type="checkbox" />
              <span>Enable auto-sync</span>
            </label>
          </div>
          <div class="form-field">
            <label class="form-radio">
              <input type="radio" name="priority" checked />
              <span>High priority</span>
            </label>
            <label class="form-radio">
              <input type="radio" name="priority" />
              <span>Normal priority</span>
            </label>
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

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: #0F172A;
}

.dark-theme .form-label {
  color: #F1F5F9;
}

.form-input {
  padding: 12px 16px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  background: #FFFFFF;
  color: #0F172A;
  transition: all 0.2s ease;
  font-family: inherit;
}

.dark-theme .form-input {
  background: #0F172A;
  border-color: #475569;
  color: #F1F5F9;
}

.form-input:focus {
  outline: none;
  border-color: #4F46E5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.form-input::placeholder {
  color: #94A3B8;
}

.form-input-success {
  border-color: #10B981;
}

.form-input-success:focus {
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.form-input-error {
  border-color: #EF4444;
}

.form-input-error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-hint {
  font-size: 14px;
  margin-top: 4px;
}

.form-hint-success {
  color: #10B981;
}

.form-hint-error {
  color: #EF4444;
}

.form-checkbox,
.form-radio {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 8px 0;
  color: #334155;
}

.dark-theme .form-checkbox,
.dark-theme .form-radio {
  color: #E2E8F0;
}

.form-checkbox input,
.form-radio input {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #4F46E5;
}

textarea.form-input {
  resize: vertical;
  min-height: 100px;
}

select.form-input {
  cursor: pointer;
}
</style>
