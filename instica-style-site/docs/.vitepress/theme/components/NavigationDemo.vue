<template>
  <div class="demo-wrapper">
    <div class="demo-header">
      <button @click="toggleTheme" class="theme-toggle">
        {{ isDark ? '☀️ Light' : '🌙 Dark' }}
      </button>
    </div>
    
    <div class="demo-container" :class="{ 'dark-theme': isDark }">
      <!-- Top Navigation -->
      <div class="demo-section">
        <h4>Top Navigation</h4>
        <div class="top-nav">
          <div class="top-nav-container">
            <div class="top-nav-brand">Brand</div>
            <nav class="top-nav-menu">
              <a href="#" class="top-nav-link">Dashboard</a>
              <a href="#" class="top-nav-link">Products</a>
              <a href="#" class="top-nav-link">Orders</a>
              <a href="#" class="top-nav-link">Settings</a>
            </nav>
          </div>
        </div>
      </div>

      <!-- Breadcrumbs -->
      <div class="demo-section">
        <h4>Breadcrumbs</h4>
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="#" class="breadcrumb-link">Home</a>
          <span class="breadcrumb-separator">/</span>
          <a href="#" class="breadcrumb-link">Products</a>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-current">iPhone 13 Pro</span>
        </nav>
      </div>

      <!-- Tabs -->
      <div class="demo-section">
        <h4>Tabs</h4>
        <div class="tabs" role="tablist">
          <button class="tab-item active" role="tab">Overview</button>
          <button class="tab-item" role="tab">Specifications</button>
          <button class="tab-item" role="tab">Reviews</button>
          <button class="tab-item" role="tab">Support</button>
        </div>
      </div>

      <!-- Pagination -->
      <div class="demo-section">
        <h4>Pagination</h4>
        <nav class="pagination" aria-label="Pagination">
          <button class="pagination-btn" aria-label="Previous page">
            <svg width="16" height="16" fill="currentColor"><path d="M10 12l-4-4 4-4"/></svg>
          </button>
          <button class="pagination-page">1</button>
          <button class="pagination-page active" aria-current="page">2</button>
          <button class="pagination-page">3</button>
          <button class="pagination-page">4</button>
          <button class="pagination-btn" aria-label="Next page">
            <svg width="16" height="16" fill="currentColor"><path d="M6 12l4-4-4-4"/></svg>
          </button>
        </nav>
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

.top-nav {
  background: #FFFFFF;
  border-bottom: 1px solid #E2E8F0;
  border-radius: 8px;
}

.dark-theme .top-nav {
  background: #0F172A;
  border-bottom-color: #475569;
}

.top-nav-container {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 24px;
  height: 64px;
}

.top-nav-brand {
  font-weight: 700;
  font-size: 18px;
  color: #4F46E5;
}

.top-nav-menu {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.top-nav-link {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  font-size: 15px;
  font-weight: 500;
  color: #64748B;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.top-nav-link:hover {
  color: #334155;
  background: #F8FAFC;
}

.dark-theme .top-nav-link {
  color: #94A3B8;
}

.dark-theme .top-nav-link:hover {
  color: #E2E8F0;
  background: #1E293B;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: white;
  border-radius: 8px;
}

.dark-theme .breadcrumb {
  background: #0F172A;
}

.breadcrumb-link {
  color: #4F46E5;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: #6366F1;
}

.breadcrumb-separator {
  color: #CBD5E1;
  user-select: none;
}

.breadcrumb-current {
  color: #0F172A;
  font-weight: 500;
  font-size: 14px;
}

.tabs {
  display: flex;
  gap: 4px;
  padding: 4px;
  background: #F1F5F9;
  border-radius: 10px;
  width: fit-content;
}

.dark-theme .tabs {
  background: #0F172A;
}

.tab-item {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #64748B;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-item:hover {
  color: #334155;
  background: rgba(255, 255, 255, 0.5);
}

.tab-item.active {
  color: #0F172A;
  background: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.dark-theme .tab-item.active {
  color: #F1F5F9;
  background: #334155;
}

.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pagination-btn,
.pagination-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 500;
  color: #64748B;
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dark-theme .pagination-btn,
.dark-theme .pagination-page {
  background: #0F172A;
  border-color: #475569;
  color: #94A3B8;
}

.pagination-btn:hover,
.pagination-page:hover {
  color: #334155;
  border-color: #CBD5E1;
  background: #F8FAFC;
}

.pagination-page.active {
  color: white;
  background: #4F46E5;
  border-color: #4F46E5;
}

.dark-theme .pagination-page.active {
  background: #4F46E5;
  border-color: #4F46E5;
  color: white;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
