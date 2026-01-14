<template>
  <div class="demo-wrapper">
    <div class="demo-header">
      <button @click="toggleTheme" class="theme-toggle">
        {{ isDark ? '☀️ Light' : '🌙 Dark' }}
      </button>
    </div>
    
    <div class="demo-container" :class="{ 'dark-theme': isDark }">
      <!-- Grid Layout -->
      <div class="demo-section">
        <h4>Grid Layout</h4>
        <div class="grid-demo">
          <div class="grid-item">1</div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
        </div>
      </div>

      <!-- Container Sizes -->
      <div class="demo-section">
        <h4>Container Sizes</h4>
        <div class="container-stack">
          <div class="container container-sm">Small (640px max)</div>
          <div class="container container-md">Medium (768px max)</div>
          <div class="container container-lg">Large (1024px max)</div>
        </div>
      </div>

      <!-- Flex Layout -->
      <div class="demo-section">
        <h4>Flex Layout - Space Between</h4>
        <div class="flex-demo flex-between">
          <div class="flex-item">Left</div>
          <div class="flex-item">Right</div>
        </div>
      </div>

      <div class="demo-section">
        <h4>Flex Layout - Center</h4>
        <div class="flex-demo flex-center">
          <div class="flex-item">Centered</div>
        </div>
      </div>

      <!-- Spacing Scale -->
      <div class="demo-section">
        <h4>Spacing Scale</h4>
        <div class="spacing-demo">
          <div class="spacing-item" style="height: 8px">8px</div>
          <div class="spacing-item" style="height: 16px">16px</div>
          <div class="spacing-item" style="height: 24px">24px</div>
          <div class="spacing-item" style="height: 32px">32px</div>
          <div class="spacing-item" style="height: 48px">48px</div>
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

.grid-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
}

.grid-item {
  padding: 32px;
  background: white;
  border: 2px solid #E2E8F0;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  color: #64748B;
}

.dark-theme .grid-item {
  background: #0F172A;
  border-color: #475569;
  color: #94A3B8;
}

.container-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

.container {
  width: 100%;
  padding: 16px;
  background: white;
  border: 2px dashed #E2E8F0;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #64748B;
}

.dark-theme .container {
  background: #0F172A;
  border-color: #475569;
  color: #94A3B8;
}

.container-sm {
  max-width: 640px;
}

.container-md {
  max-width: 768px;
}

.container-lg {
  max-width: 1024px;
}

.flex-demo {
  display: flex;
  padding: 24px;
  background: white;
  border: 2px solid #E2E8F0;
  border-radius: 8px;
}

.dark-theme .flex-demo {
  background: #0F172A;
  border-color: #475569;
}

.flex-between {
  justify-content: space-between;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.flex-item {
  padding: 16px 24px;
  background: #F1F5F9;
  border-radius: 6px;
  font-weight: 600;
  color: #334155;
}

.dark-theme .flex-item {
  background: #334155;
  color: #F1F5F9;
}

.spacing-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

.spacing-item {
  background: #4F46E5;
  border-radius: 4px;
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 600;
}
</style>
