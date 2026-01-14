---
title: Navigation
outline: deep
---

## Live Examples

<NavigationDemo />

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

# Navigation

Navigation components help users move through the application. They must be consistent, predictable, and accessible.

## Top Navigation Bar

### Desktop Header

<div class="component-example">
  <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden;">
    <div style="display: flex; align-items: center; gap: 24px; padding: 16px 20px;">
      <div style="display: flex; align-items: center; gap: 10px; font-weight: 700; color: #0F172A;">
        <div style="width: 28px; height: 28px; border-radius: 8px; background: #4F46E5;"></div>
        Instica
      </div>
      <nav style="display: flex; gap: 8px; flex: 1;">
        <a href="#" style="padding: 8px 14px; border-radius: 8px; background: #EEF2FF; color: #4F46E5; font-weight: 600; text-decoration: none;">Inventory</a>
        <a href="#" style="padding: 8px 14px; border-radius: 8px; color: #64748B; text-decoration: none;">Marketplaces</a>
        <a href="#" style="padding: 8px 14px; border-radius: 8px; color: #64748B; text-decoration: none;">Analytics</a>
        <a href="#" style="padding: 8px 14px; border-radius: 8px; color: #64748B; text-decoration: none;">Settings</a>
      </nav>
      <div style="display: flex; align-items: center; gap: 8px;">
        <button style="width: 36px; height: 36px; border-radius: 10px; border: 1px solid #E2E8F0; background: #FFFFFF;">🔔</button>
        <button style="width: 36px; height: 36px; border-radius: 10px; border: 1px solid #E2E8F0; background: #FFFFFF;">👤</button>
      </div>
    </div>
  </div>
</div>

```html
<header class="top-nav">
  <div class="top-nav-container">
    <div class="top-nav-brand">
      <img src="/logo.png" alt="Instica" height="32" />
    </div>
    
    <nav class="top-nav-menu">
      <a href="/inventory" class="top-nav-link top-nav-link--active">
        Inventory
      </a>
      <a href="/marketplaces" class="top-nav-link">
        Marketplaces
      </a>
      <a href="/analytics" class="top-nav-link">
        Analytics
      </a>
      <a href="/settings" class="top-nav-link">
        Settings
      </a>
    </nav>
    
    <div class="top-nav-actions">
      <button class="btn-icon" aria-label="Notifications">
        <img src="/icons/features/notifications-alerts.png" alt="" width="20" height="20" />
      </button>
      <button class="btn-icon" aria-label="User menu">
        <img src="/icons/navigation/user-profile.png" alt="" width="20" height="20" />
      </button>
    </div>
  </div>
</header>

<style>
.top-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #FFFFFF;
  border-bottom: 1px solid #E2E8F0;
}

.top-nav-container {
  display: flex;
  align-items: center;
  gap: 32px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
}

.top-nav-brand {
  display: flex;
  align-items: center;
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

.top-nav-link--active {
  color: #4F46E5;
  background: #EEF2FF;
}

.top-nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
```

### Mobile Header

<div class="component-example">
  <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden;">
    <div style="display: flex; align-items: center; gap: 12px; padding: 12px 16px;">
      <button style="width: 36px; height: 36px; border-radius: 10px; border: 1px solid #E2E8F0; background: #FFFFFF;">☰</button>
      <div style="flex: 1; text-align: center; font-weight: 700; color: #0F172A;">Instica</div>
      <button style="width: 36px; height: 36px; border-radius: 10px; border: 1px solid #E2E8F0; background: #FFFFFF;">🔔</button>
    </div>
  </div>
</div>

```html
<header class="mobile-nav">
  <button class="mobile-nav-toggle" aria-label="Toggle menu">
    <span class="hamburger"></span>
  </button>
  
  <div class="mobile-nav-brand">
    <img src="/logo.png" alt="Instica" height="28" />
  </div>
  
  <div class="mobile-nav-actions">
    <button class="btn-icon" aria-label="Notifications">
      <img src="/icons/features/notifications-alerts.png" alt="" width="20" height="20" />
    </button>
  </div>
</header>

<style>
.mobile-nav {
  display: none;
  position: sticky;
  top: 0;
  z-index: 100;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background: #FFFFFF;
  border-bottom: 1px solid #E2E8F0;
}

.mobile-nav-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

.hamburger {
  display: block;
  width: 20px;
  height: 2px;
  background: #334155;
  position: relative;
}

.hamburger::before,
.hamburger::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 2px;
  background: #334155;
  transition: all 0.3s ease;
}

.hamburger::before {
  top: -6px;
}

.hamburger::after {
  bottom: -6px;
}

.mobile-nav-brand {
  flex: 1;
  display: flex;
  justify-content: center;
}

.mobile-nav-actions {
  display: flex;
  gap: 8px;
}

@media (max-width: 768px) {
  .top-nav {
    display: none;
  }
  
  .mobile-nav {
    display: flex;
  }
}
</style>
```

## Sidebar Navigation

<div class="component-example">
  <div style="display: grid; grid-template-columns: 220px 1fr; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; background: #FFFFFF;">
    <aside style="padding: 16px; border-right: 1px solid #E2E8F0;">
      <div style="font-weight: 700; margin-bottom: 16px; color: #0F172A;">Instica</div>
      <nav style="display: flex; flex-direction: column; gap: 8px;">
        <a href="#" style="display: flex; align-items: center; gap: 8px; padding: 10px 12px; border-radius: 8px; background: #EEF2FF; color: #4F46E5; font-weight: 600; text-decoration: none;">📦 Inventory</a>
        <a href="#" style="display: flex; align-items: center; gap: 8px; padding: 10px 12px; border-radius: 8px; color: #64748B; text-decoration: none;">🏪 Marketplaces</a>
        <a href="#" style="display: flex; align-items: center; gap: 8px; padding: 10px 12px; border-radius: 8px; color: #64748B; text-decoration: none;">📈 Analytics</a>
        <a href="#" style="display: flex; align-items: center; gap: 8px; padding: 10px 12px; border-radius: 8px; color: #64748B; text-decoration: none;">⚙️ Settings</a>
      </nav>
    </aside>
    <div style="padding: 24px; color: #64748B;">Content area</div>
  </div>
</div>

```html
<aside class="sidebar">
  <div class="sidebar-header">
    <img src="/logo.png" alt="Instica" height="32" />
  </div>
  
  <nav class="sidebar-nav">
    <a href="/inventory" class="sidebar-link sidebar-link--active">
      <img src="/icons/navigation/inventory-list.png" alt="" width="24" height="24" />
      <span>Inventory</span>
    </a>
    
    <a href="/products" class="sidebar-link">
      <img src="/icons/navigation/products-catalog.png" alt="" width="24" height="24" />
      <span>Products</span>
    </a>
    
    <a href="/marketplaces" class="sidebar-link">
      <img src="/icons/navigation/marketplaces.png" alt="" width="24" height="24" />
      <span>Marketplaces</span>
    </a>
    
    <a href="/analytics" class="sidebar-link">
      <img src="/icons/navigation/analytics-reports.png" alt="" width="24" height="24" />
      <span>Analytics</span>
    </a>
    
    <div class="sidebar-divider"></div>
    
    <a href="/settings" class="sidebar-link">
      <img src="/icons/navigation/settings.png" alt="" width="24" height="24" />
      <span>Settings</span>
    </a>
  </nav>
</aside>

<style>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-right: 1px solid #E2E8F0;
  overflow-y: auto;
}

.sidebar-header {
  display: flex;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #E2E8F0;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 12px;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 500;
  color: #64748B;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.sidebar-link:hover {
  color: #334155;
  background: #F8FAFC;
}

.sidebar-link--active {
  color: #4F46E5;
  background: #EEF2FF;
}

.sidebar-divider {
  height: 1px;
  background: #E2E8F0;
  margin: 8px 0;
}
</style>
```

## Breadcrumbs

<div class="component-example">
  <nav aria-label="Breadcrumb" style="display: flex; align-items: center; gap: 8px; font-size: 14px; color: #64748B;">
    <a href="#" style="color: #4F46E5; text-decoration: none;">Home</a>
    <span style="color: #CBD5E1;">/</span>
    <a href="#" style="color: #4F46E5; text-decoration: none;">Inventory</a>
    <span style="color: #CBD5E1;">/</span>
    <span style="color: #0F172A; font-weight: 600;">Item Details</span>
  </nav>
</div>

```html
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol class="breadcrumb-list">
    <li class="breadcrumb-item">
      <a href="/" class="breadcrumb-link">Home</a>
    </li>
    <li class="breadcrumb-separator">/</li>
    <li class="breadcrumb-item">
      <a href="/inventory" class="breadcrumb-link">Inventory</a>
    </li>
    <li class="breadcrumb-separator">/</li>
    <li class="breadcrumb-item">
      <span class="breadcrumb-current" aria-current="page">Item Details</span>
    </li>
  </ol>
</nav>

<style>
.breadcrumb {
  padding: 12px 0;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-link {
  font-size: 14px;
  color: #64748B;
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: #4F46E5;
}

.breadcrumb-current {
  font-size: 14px;
  color: #334155;
  font-weight: 500;
}

.breadcrumb-separator {
  font-size: 14px;
  color: #CBD5E1;
  user-select: none;
}
</style>
```

## Tabs

<div class="component-example">
  <div style="display: inline-flex; gap: 8px; padding: 6px; background: #F1F5F9; border-radius: 10px;">
    <button style="padding: 8px 14px; border-radius: 8px; background: #FFFFFF; border: 1px solid #E2E8F0; color: #0F172A; font-weight: 600;">Details</button>
    <button style="padding: 8px 14px; border-radius: 8px; background: transparent; border: 1px solid transparent; color: #64748B;">Photos</button>
    <button style="padding: 8px 14px; border-radius: 8px; background: transparent; border: 1px solid transparent; color: #64748B;">History</button>
  </div>
</div>

```html
<div class="tabs">
  <div class="tabs-list" role="tablist">
    <button 
      class="tab tab--active" 
      role="tab" 
      aria-selected="true"
      aria-controls="panel-1"
    >
      Details
    </button>
    <button 
      class="tab" 
      role="tab" 
      aria-selected="false"
      aria-controls="panel-2"
    >
      Pricing
    </button>
    <button 
      class="tab" 
      role="tab" 
      aria-selected="false"
      aria-controls="panel-3"
    >
      Images
    </button>
    <button 
      class="tab" 
      role="tab" 
      aria-selected="false"
      aria-controls="panel-4"
    >
      History
    </button>
  </div>
  
  <div class="tab-panels">
    <div id="panel-1" class="tab-panel" role="tabpanel">
      <p>Details content...</p>
    </div>
  </div>
</div>

<style>
.tabs {
  display: flex;
  flex-direction: column;
}

.tabs-list {
  display: flex;
  gap: 8px;
  border-bottom: 1px solid #E2E8F0;
}

.tab {
  position: relative;
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 500;
  color: #64748B;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab:hover {
  color: #334155;
  background: #F8FAFC;
}

.tab--active {
  color: #4F46E5;
}

.tab--active::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #4F46E5;
}

.tab-panel {
  padding: 24px 0;
}
</style>
```

## Pagination

<div class="component-example">
  <nav aria-label="Pagination" style="display: flex; align-items: center; gap: 6px;">
    <button style="width: 36px; height: 36px; border-radius: 8px; border: 1px solid #E2E8F0; background: #FFFFFF; color: #94A3B8;" disabled>‹</button>
    <button style="min-width: 36px; height: 36px; padding: 0 10px; border-radius: 8px; border: 1px solid #4F46E5; background: #EEF2FF; color: #4F46E5; font-weight: 600;">1</button>
    <button style="min-width: 36px; height: 36px; padding: 0 10px; border-radius: 8px; border: 1px solid #E2E8F0; background: #FFFFFF; color: #64748B;">2</button>
    <button style="min-width: 36px; height: 36px; padding: 0 10px; border-radius: 8px; border: 1px solid #E2E8F0; background: #FFFFFF; color: #64748B;">3</button>
    <span style="color: #94A3B8; padding: 0 6px;">…</span>
    <button style="min-width: 36px; height: 36px; padding: 0 10px; border-radius: 8px; border: 1px solid #E2E8F0; background: #FFFFFF; color: #64748B;">10</button>
    <button style="width: 36px; height: 36px; border-radius: 8px; border: 1px solid #E2E8F0; background: #FFFFFF; color: #64748B;">›</button>
  </nav>
</div>

```html
<nav aria-label="Pagination" class="pagination">
  <button class="pagination-btn" disabled aria-label="Previous page">
    ‹
  </button>
  
  <button class="pagination-page pagination-page--active" aria-current="page">
    1
  </button>
  <button class="pagination-page">2</button>
  <button class="pagination-page">3</button>
  <span class="pagination-ellipsis">…</span>
  <button class="pagination-page">10</button>
  
  <button class="pagination-btn" aria-label="Next page">
    ›
  </button>
</nav>

<style>
.pagination {
  display: flex;
  align-items: center;
  gap: 4px;
}

.pagination-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  font-size: 20px;
  color: #64748B;
  background: transparent;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-btn:hover:not(:disabled) {
  background: #F8FAFC;
  border-color: #CBD5E1;
}

.pagination-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 8px;
  font-size: 14px;
  font-weight: 500;
  color: #64748B;
  background: transparent;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-page:hover {
  background: #F8FAFC;
  border-color: #CBD5E1;
}

.pagination-page--active {
  color: #FFFFFF;
  background: #4F46E5;
  border-color: #4F46E5;
}

.pagination-ellipsis {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  font-size: 14px;
  color: #94A3B8;
}
</style>
```

## Vertical Navigation Menu

<div class="component-example">
  <div style="display: grid; grid-template-columns: 1fr; gap: 16px;">
    <div>
      <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #94A3B8; padding: 6px 12px;">Account</div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <a href="#" style="padding: 10px 12px; border-radius: 8px; background: #EEF2FF; color: #4F46E5; font-weight: 600; text-decoration: none;">Profile Settings</a>
        <a href="#" style="padding: 10px 12px; border-radius: 8px; color: #64748B; text-decoration: none;">Notifications</a>
        <a href="#" style="padding: 10px 12px; border-radius: 8px; color: #64748B; text-decoration: none;">Security</a>
      </div>
    </div>
    <div>
      <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #94A3B8; padding: 6px 12px;">Billing</div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <a href="#" style="padding: 10px 12px; border-radius: 8px; color: #64748B; text-decoration: none;">Subscription</a>
        <a href="#" style="padding: 10px 12px; border-radius: 8px; color: #64748B; text-decoration: none;">Payment Methods</a>
        <a href="#" style="padding: 10px 12px; border-radius: 8px; color: #64748B; text-decoration: none;">Invoices</a>
      </div>
    </div>
  </div>
</div>

```html
<nav class="vertical-menu">
  <div class="vertical-menu-section">
    <h3 class="vertical-menu-heading">Account</h3>
    <a href="/profile" class="vertical-menu-link vertical-menu-link--active">
      Profile Settings
    </a>
    <a href="/notifications" class="vertical-menu-link">
      Notifications
    </a>
    <a href="/security" class="vertical-menu-link">
      Security
    </a>
  </div>
  
  <div class="vertical-menu-section">
    <h3 class="vertical-menu-heading">Billing</h3>
    <a href="/subscription" class="vertical-menu-link">
      Subscription
    </a>
    <a href="/payment" class="vertical-menu-link">
      Payment Methods
    </a>
    <a href="/invoices" class="vertical-menu-link">
      Invoices
    </a>
  </div>
</nav>

<style>
.vertical-menu {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 0;
}

.vertical-menu-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.vertical-menu-heading {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94A3B8;
  padding: 8px 16px;
  margin: 0;
}

.vertical-menu-link {
  display: block;
  padding: 10px 16px;
  font-size: 15px;
  color: #64748B;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.vertical-menu-link:hover {
  color: #334155;
  background: #F8FAFC;
}

.vertical-menu-link--active {
  color: #4F46E5;
  background: #EEF2FF;
  font-weight: 500;
}
</style>
```

## Mobile Navigation Drawer

<div class="component-example">
  <div style="position: relative; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; background: #F8FAFC; height: 260px;">
    <div style="position: absolute; inset: 0; background: rgba(15, 23, 42, 0.35);"></div>
    <div style="position: absolute; inset: 0 auto 0 0; width: 220px; background: #FFFFFF; padding: 16px; box-shadow: 4px 0 16px rgba(0,0,0,0.12);">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
        <div style="font-weight: 700; color: #0F172A;">Instica</div>
        <button style="width: 28px; height: 28px; border-radius: 8px; border: 1px solid #E2E8F0; background: #FFFFFF;">×</button>
      </div>
      <nav style="display: flex; flex-direction: column; gap: 8px;">
        <a href="#" style="padding: 10px 12px; border-radius: 8px; background: #EEF2FF; color: #4F46E5; font-weight: 600; text-decoration: none;">Inventory</a>
        <a href="#" style="padding: 10px 12px; border-radius: 8px; color: #64748B; text-decoration: none;">Marketplaces</a>
        <a href="#" style="padding: 10px 12px; border-radius: 8px; color: #64748B; text-decoration: none;">Analytics</a>
        <a href="#" style="padding: 10px 12px; border-radius: 8px; color: #64748B; text-decoration: none;">Settings</a>
      </nav>
    </div>
  </div>
</div>

```html
<div class="nav-drawer" id="nav-drawer">
  <div class="nav-drawer-overlay" onclick="closeDrawer()"></div>
  
  <div class="nav-drawer-content">
    <div class="nav-drawer-header">
      <img src="/logo.png" alt="Instica" height="32" />
      <button class="nav-drawer-close" onclick="closeDrawer()" aria-label="Close menu">
        ×
      </button>
    </div>
    
    <nav class="nav-drawer-menu">
      <a href="/inventory" class="nav-drawer-link">
        <img src="/icons/navigation/inventory-list.png" alt="" width="24" height="24" />
        <span>Inventory</span>
      </a>
      <a href="/marketplaces" class="nav-drawer-link">
        <img src="/icons/navigation/marketplaces.png" alt="" width="24" height="24" />
        <span>Marketplaces</span>
      </a>
      <a href="/analytics" class="nav-drawer-link">
        <img src="/icons/navigation/analytics-reports.png" alt="" width="24" height="24" />
        <span>Analytics</span>
      </a>
      <a href="/settings" class="nav-drawer-link">
        <img src="/icons/navigation/settings.png" alt="" width="24" height="24" />
        <span>Settings</span>
      </a>
    </nav>
  </div>
</div>

<style>
.nav-drawer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: none;
}

.nav-drawer.open {
  display: block;
}

.nav-drawer-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.nav-drawer-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  background: #FFFFFF;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.nav-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #E2E8F0;
}

.nav-drawer-close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  line-height: 1;
  color: #64748B;
  background: transparent;
  border: none;
  cursor: pointer;
}

.nav-drawer-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
}

.nav-drawer-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  font-size: 16px;
  color: #334155;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.nav-drawer-link:hover {
  background: #F8FAFC;
}
</style>

<script>
function closeDrawer() {
  document.getElementById('nav-drawer').classList.remove('open');
}
</script>
```

## Accessibility

- Use semantic HTML5 elements (`<nav>`, `<header>`)
- Provide `aria-label` or `aria-labelledby` for navigation landmarks
- Use `aria-current="page"` for current page links
- Ensure keyboard navigation works (Tab, Arrow keys)
- Maintain focus visibility
- Use `role="tablist"` for tab components
- Trap focus in mobile navigation drawers
- Announce drawer state changes to screen readers

## Usage Guidelines

### Do ✓

- Keep navigation consistent across pages
- Highlight the current page/section
- Organize items by frequency of use
- Use clear, descriptive labels
- Provide visual feedback on hover

### Don't ✗

- Nest navigation more than 2-3 levels deep
- Use too many top-level items (max 7-8)
- Hide essential navigation behind hamburger menus on desktop
- Change navigation structure between sections
- Use ambiguous icon-only navigation without labels

## Design Tokens

```css
:root {
  /* Navigation colors */
  --nav-bg: #FFFFFF;
  --nav-border: #E2E8F0;
  --nav-link: #64748B;
  --nav-link-hover: #334155;
  --nav-link-active: #4F46E5;
  --nav-active-bg: #EEF2FF;
  
  /* Navigation sizing */
  --nav-height: 64px;
  --sidebar-width: 240px;
  --nav-link-padding: 12px 16px;
  --nav-gap: 8px;
}
```
