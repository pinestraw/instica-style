<template>
  <div class="demo-wrapper">
    <div class="demo-header">
      <button @click="toggleTheme" class="theme-toggle">
        {{ isDark ? '☀️ Light' : '🌙 Dark' }}
      </button>
    </div>
    
    <div class="demo-container" :class="{ 'dark-theme': isDark }">
      <div class="demo-section">
        <h4>Typography Scale</h4>
        <p class="demo-note">Hover to see size/line-height details</p>
        
        <div class="type-specimens">
          <div class="specimen-row">
            <div class="specimen-label">Display</div>
            <div class="specimen-example type-display">
              The quick brown fox jumps
              <div class="specimen-meta">32px / 40px · -0.03em · 700</div>
            </div>
          </div>
          
          <div class="specimen-row">
            <div class="specimen-label">H1</div>
            <div class="specimen-example type-h1">
              The quick brown fox jumps over
              <div class="specimen-meta">28px / 36px · -0.02em · 700</div>
            </div>
          </div>
          
          <div class="specimen-row">
            <div class="specimen-label">H2</div>
            <div class="specimen-example type-h2">
              The quick brown fox jumps over the lazy dog
              <div class="specimen-meta">24px / 32px · -0.01em · 600</div>
            </div>
          </div>
          
          <div class="specimen-row">
            <div class="specimen-label">H3</div>
            <div class="specimen-example type-h3">
              The quick brown fox jumps over the lazy dog
              <div class="specimen-meta">20px / 28px · 0 · 600</div>
            </div>
          </div>
          
          <div class="specimen-row">
            <div class="specimen-label">H4</div>
            <div class="specimen-example type-h4">
              The quick brown fox jumps over the lazy dog and runs away
              <div class="specimen-meta">18px / 24px · 0 · 600</div>
            </div>
          </div>
          
          <div class="specimen-row">
            <div class="specimen-label">H5</div>
            <div class="specimen-example type-h5">
              The quick brown fox jumps over the lazy dog and runs away
              <div class="specimen-meta">16px / 24px · 0 · 600</div>
            </div>
          </div>
          
          <div class="specimen-row">
            <div class="specimen-label">Large</div>
            <div class="specimen-example type-large">
              The quick brown fox jumps over the lazy dog and runs away into the forest
              <div class="specimen-meta">15px / 24px · 0 · 400</div>
            </div>
          </div>
          
          <div class="specimen-row">
            <div class="specimen-label">Body</div>
            <div class="specimen-example type-body">
              The quick brown fox jumps over the lazy dog and runs away into the forest where it finds shelter
              <div class="specimen-meta">14px / 20px · 0 · 400</div>
            </div>
          </div>
          
          <div class="specimen-row">
            <div class="specimen-label">Small</div>
            <div class="specimen-example type-small">
              The quick brown fox jumps over the lazy dog and runs away into the forest where it finds shelter under the old oak tree
              <div class="specimen-meta">13px / 18px · 0 · 400</div>
            </div>
          </div>
          
          <div class="specimen-row">
            <div class="specimen-label">Caption</div>
            <div class="specimen-example type-caption">
              The quick brown fox jumps over the lazy dog and runs away into the forest where it finds shelter under the old oak tree that has stood for centuries
              <div class="specimen-meta">12px / 16px · +0.01em · 400</div>
            </div>
          </div>
          
          <div class="specimen-row">
            <div class="specimen-label">Micro</div>
            <div class="specimen-example type-micro">
              THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG AND RUNS AWAY INTO THE FOREST WHERE IT FINDS SHELTER UNDER THE OLD OAK TREE
              <div class="specimen-meta">11px / 14px · +0.02em · 500</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="demo-section">
        <h4>Typography in Context</h4>
        
        <div class="context-examples">
          <!-- Card example -->
          <div class="context-card">
            <h3 class="type-h3">Product Feature</h3>
            <p class="type-body">This is the main body text that provides detailed information about the feature. It uses the standard 14px body size for optimal readability in product interfaces.</p>
            <div class="type-caption" style="color: #64748B; margin-top: 12px;">Updated 2 hours ago</div>
          </div>
          
          <!-- List example -->
          <div class="context-card">
            <h4 class="type-h4">Recent Activity</h4>
            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="type-body">New inventory item added</span>
                <span class="type-small" style="color: #64748B;">2m ago</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="type-body">Photo uploaded</span>
                <span class="type-small" style="color: #64748B;">15m ago</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="type-body">Price updated</span>
                <span class="type-small" style="color: #64748B;">1h ago</span>
              </div>
            </div>
          </div>
          
          <!-- Metric example -->
          <div class="context-card">
            <div class="type-caption" style="color: #64748B; text-transform: uppercase; letter-spacing: 0.05em;">Total Revenue</div>
            <div class="type-display" style="margin-top: 8px; font-variant-numeric: tabular-nums;">$24,580</div>
            <div class="type-small" style="color: #059669; margin-top: 4px;">↑ 12.5% from last month</div>
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

.dark-theme .theme-toggle {
  background: #334155;
  border-color: #475569;
  color: #F1F5F9;
}

.demo-container {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s;
}

.dark-theme.demo-container {
  background: #0F172A;
  border-color: #1E293B;
}

.demo-section {
  margin-bottom: 32px;
}

.demo-section:last-child {
  margin-bottom: 0;
}

.demo-section h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: #0F172A;
}

.dark-theme .demo-section h4 {
  color: #F1F5F9;
}

.demo-note {
  margin: 0 0 24px 0;
  font-size: 13px;
  color: #64748B;
}

.dark-theme .demo-note {
  color: #94A3B8;
}

/* Typography Specimens */
.type-specimens {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.specimen-row {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 24px;
  align-items: start;
  padding: 16px;
  border-radius: 8px;
  transition: background 0.2s;
}

.specimen-row:hover {
  background: #F8FAFC;
}

.dark-theme .specimen-row:hover {
  background: #1E293B;
}

.specimen-label {
  font-size: 13px;
  font-weight: 600;
  color: #64748B;
  text-align: right;
  padding-top: 4px;
}

.dark-theme .specimen-label {
  color: #94A3B8;
}

.specimen-example {
  position: relative;
  color: #0F172A;
}

.dark-theme .specimen-example {
  color: #F1F5F9;
}

.specimen-meta {
  margin-top: 8px;
  font-size: 11px;
  font-weight: 500;
  color: #94A3B8;
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
  opacity: 0;
  transition: opacity 0.2s;
}

.specimen-row:hover .specimen-meta {
  opacity: 1;
}

.dark-theme .specimen-meta {
  color: #64748B;
}

/* Typography Styles */
.type-display {
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.03em;
  font-weight: 700;
}

.type-h1 {
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  font-weight: 700;
}

.type-h2 {
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.01em;
  font-weight: 600;
}

.type-h3 {
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0;
  font-weight: 600;
}

.type-h4 {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0;
  font-weight: 600;
}

.type-h5 {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  font-weight: 600;
}

.type-large {
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0;
  font-weight: 400;
}

.type-body {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  font-weight: 400;
}

.type-small {
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0;
  font-weight: 400;
}

.type-caption {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  font-weight: 400;
}

.type-micro {
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.02em;
  font-weight: 500;
  text-transform: uppercase;
}

/* Context Examples */
.context-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.context-card {
  padding: 20px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  transition: all 0.2s;
}

.context-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.dark-theme .context-card {
  background: #1E293B;
  border-color: #334155;
}

.dark-theme .context-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.context-card .type-h3,
.context-card .type-h4 {
  margin: 0 0 12px 0;
  color: #0F172A;
}

.dark-theme .context-card .type-h3,
.dark-theme .context-card .type-h4 {
  color: #F1F5F9;
}

.context-card .type-body {
  margin: 0;
  color: #334155;
}

.dark-theme .context-card .type-body {
  color: #CBD5E1;
}

.dark-theme .context-card .type-caption,
.dark-theme .context-card .type-small {
  color: #94A3B8 !important;
}

@media (max-width: 768px) {
  .specimen-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  
  .specimen-label {
    text-align: left;
    padding-top: 0;
  }
  
  .context-examples {
    grid-template-columns: 1fr;
  }
}
</style>
