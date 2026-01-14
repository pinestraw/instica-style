---
title: Layout Patterns
outline: deep
---

# Layout Patterns

Layout patterns define the structure and organization of content across the application. Consistent layouts improve usability and create a cohesive experience.

## Container System

### Base Container

```html
<div class="container">
  <h1>Page Content</h1>
</div>

<style>
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.container-sm {
  max-width: 640px;
}

.container-md {
  max-width: 960px;
}

.container-lg {
  max-width: 1280px;
}

.container-xl {
  max-width: 1440px;
}

.container-fluid {
  max-width: none;
}

@media (max-width: 640px) {
  .container {
    padding: 0 16px;
  }
}
</style>
```

## Page Layouts

### Dashboard Layout

```html
<div class="layout-dashboard">
  <aside class="layout-sidebar">
    <!-- Sidebar navigation -->
  </aside>
  
  <div class="layout-main">
    <header class="layout-header">
      <h1>Dashboard</h1>
      <button class="btn btn-primary">Add Item</button>
    </header>
    
    <main class="layout-content">
      <!-- Main content -->
    </main>
  </div>
</div>

<style>
.layout-dashboard {
  display: flex;
  min-height: 100vh;
}

.layout-sidebar {
  width: 240px;
  flex-shrink: 0;
  background: #FFFFFF;
  border-right: 1px solid #E2E8F0;
}

.layout-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.layout-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 32px;
  background: #FFFFFF;
  border-bottom: 1px solid #E2E8F0;
}

.layout-content {
  flex: 1;
  padding: 32px;
  background: #F8FAFC;
}

@media (max-width: 1024px) {
  .layout-sidebar {
    position: fixed;
    left: -240px;
    top: 0;
    bottom: 0;
    z-index: 100;
    transition: left 0.3s ease;
  }
  
  .layout-sidebar.open {
    left: 0;
  }
  
  .layout-content {
    padding: 24px 16px;
  }
}
</style>
```

### List + Detail Layout

```html
<div class="layout-split">
  <div class="layout-list">
    <div class="layout-list-header">
      <h2>Inventory Items</h2>
      <button class="btn-icon" aria-label="Filter">
        <img src="/icons/actions/filter-sort.png" alt="" width="20" height="20" />
      </button>
    </div>
    
    <div class="layout-list-content">
      <!-- List items -->
    </div>
  </div>
  
  <div class="layout-detail">
    <div class="layout-detail-header">
      <h2>Item Details</h2>
      <button class="btn btn-primary">Edit</button>
    </div>
    
    <div class="layout-detail-content">
      <!-- Detail content -->
    </div>
  </div>
</div>

<style>
.layout-split {
  display: grid;
  grid-template-columns: 400px 1fr;
  min-height: 100vh;
}

.layout-list {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-right: 1px solid #E2E8F0;
}

.layout-list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #E2E8F0;
}

.layout-list-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.layout-detail {
  display: flex;
  flex-direction: column;
  background: #F8FAFC;
}

.layout-detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
  background: #FFFFFF;
  border-bottom: 1px solid #E2E8F0;
}

.layout-detail-content {
  flex: 1;
  padding: 32px;
  overflow-y: auto;
}

@media (max-width: 1024px) {
  .layout-split {
    grid-template-columns: 1fr;
  }
  
  .layout-detail {
    display: none;
  }
  
  .layout-detail.active {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
  }
}
</style>
```

### Settings Layout

```html
<div class="layout-settings">
  <nav class="settings-nav">
    <h2 class="settings-nav-title">Settings</h2>
    <a href="#profile" class="settings-nav-link settings-nav-link--active">Profile</a>
    <a href="#account" class="settings-nav-link">Account</a>
    <a href="#notifications" class="settings-nav-link">Notifications</a>
    <a href="#billing" class="settings-nav-link">Billing</a>
  </nav>
  
  <div class="settings-content">
    <div class="settings-section">
      <h1 class="settings-title">Profile Settings</h1>
      <p class="settings-description">Manage your personal information and preferences</p>
    </div>
    
    <div class="settings-card">
      <!-- Form content -->
    </div>
  </div>
</div>

<style>
.layout-settings {
  display: grid;
  grid-template-columns: 240px 1fr;
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 24px;
  gap: 48px;
}

.settings-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: sticky;
  top: 24px;
  height: fit-content;
}

.settings-nav-title {
  font-size: 20px;
  font-weight: 700;
  color: #1E293B;
  margin: 0 0 16px 0;
}

.settings-nav-link {
  padding: 10px 16px;
  font-size: 15px;
  color: #64748B;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.settings-nav-link:hover {
  color: #334155;
  background: #F8FAFC;
}

.settings-nav-link--active {
  color: #4F46E5;
  background: #EEF2FF;
  font-weight: 500;
}

.settings-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.settings-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.settings-title {
  font-size: 32px;
  font-weight: 700;
  color: #1E293B;
  margin: 0;
}

.settings-description {
  font-size: 16px;
  color: #64748B;
  margin: 0;
}

.settings-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 32px;
}

@media (max-width: 1024px) {
  .layout-settings {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .settings-nav {
    position: static;
    flex-direction: row;
    overflow-x: auto;
  }
}
</style>
```

## Grid Systems

### 12-Column Grid

```html
<div class="grid">
  <div class="col-4">Column 4</div>
  <div class="col-4">Column 4</div>
  <div class="col-4">Column 4</div>
</div>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

.col-1 { grid-column: span 1; }
.col-2 { grid-column: span 2; }
.col-3 { grid-column: span 3; }
.col-4 { grid-column: span 4; }
.col-5 { grid-column: span 5; }
.col-6 { grid-column: span 6; }
.col-7 { grid-column: span 7; }
.col-8 { grid-column: span 8; }
.col-9 { grid-column: span 9; }
.col-10 { grid-column: span 10; }
.col-11 { grid-column: span 11; }
.col-12 { grid-column: span 12; }

@media (max-width: 1024px) {
  .col-md-6 { grid-column: span 6; }
  .col-md-12 { grid-column: span 12; }
}

@media (max-width: 640px) {
  .col-sm-12 { grid-column: span 12; }
}
</style>
```

### Auto-Fit Grid

```html
<div class="grid-auto">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>

<style>
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
</style>
```

## Responsive Breakpoints

```css
/* Mobile first approach */

/* Small devices (phones, 640px and up) */
@media (min-width: 640px) {
  /* ... */
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  /* ... */
}

/* Large devices (desktops, 1024px and up) */
@media (min-width: 1024px) {
  /* ... */
}

/* Extra large devices (large desktops, 1280px and up) */
@media (min-width: 1280px) {
  /* ... */
}

/* 2XL devices (1536px and up) */
@media (min-width: 1536px) {
  /* ... */
}
```

## Content Sections

### Hero Section

```html
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1 class="hero-title">Manage your inventory with ease</h1>
      <p class="hero-description">
        Track, organize, and list your items across multiple marketplaces
      </p>
      <div class="hero-actions">
        <button class="btn btn-primary btn-lg">Get Started</button>
        <button class="btn btn-secondary btn-lg">Learn More</button>
      </div>
    </div>
    <div class="hero-image">
      <img src="/hero.png" alt="Dashboard preview" />
    </div>
  </div>
</section>

<style>
.hero {
  padding: 80px 0;
  background: linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 100%);
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  color: #1E293B;
  margin: 0;
}

.hero-description {
  font-size: 20px;
  line-height: 1.6;
  color: #64748B;
  margin: 0;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.hero-image {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.1);
}

.hero-image img {
  width: 100%;
  height: auto;
}

@media (max-width: 1024px) {
  .hero .container {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  
  .hero-title {
    font-size: 40px;
  }
  
  .hero-description {
    font-size: 18px;
  }
}
</style>
```

### Feature Grid

```html
<section class="features">
  <div class="container">
    <div class="features-header">
      <h2>Everything you need</h2>
      <p>Powerful features to manage your inventory</p>
    </div>
    
    <div class="features-grid">
      <div class="feature">
        <img src="/icons/features/bulk-actions.png" alt="" width="48" height="48" />
        <h3>Bulk Actions</h3>
        <p>Update multiple items at once</p>
      </div>
      
      <div class="feature">
        <img src="/icons/features/notifications-alerts.png" alt="" width="48" height="48" />
        <h3>Smart Notifications</h3>
        <p>Stay informed with real-time alerts</p>
      </div>
      
      <div class="feature">
        <img src="/icons/features/revenue-sales.png" alt="" width="48" height="48" />
        <h3>Revenue Tracking</h3>
        <p>Monitor sales and profitability</p>
      </div>
    </div>
  </div>
</section>

<style>
.features {
  padding: 80px 0;
}

.features-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 64px;
}

.features-header h2 {
  font-size: 40px;
  font-weight: 700;
  color: #1E293B;
  margin: 0 0 16px;
}

.features-header p {
  font-size: 18px;
  color: #64748B;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.feature {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.feature:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}

.feature h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1E293B;
  margin: 0;
}

.feature p {
  font-size: 15px;
  color: #64748B;
  line-height: 1.6;
  margin: 0;
}
</style>
```

## Utility Classes

```css
/* Spacing utilities */
.m-0 { margin: 0; }
.mt-4 { margin-top: 16px; }
.mb-4 { margin-bottom: 16px; }
.p-4 { padding: 16px; }

/* Display utilities */
.d-none { display: none; }
.d-block { display: block; }
.d-flex { display: flex; }
.d-grid { display: grid; }

/* Flex utilities */
.flex-column { flex-direction: column; }
.justify-center { justify-content: center; }
.align-center { align-items: center; }
.gap-4 { gap: 16px; }

/* Text utilities */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

/* Responsive utilities */
@media (max-width: 640px) {
  .sm\\:hidden { display: none; }
}

@media (min-width: 1024px) {
  .lg\\:block { display: block; }
}
```

## Z-Index Scale

```css
:root {
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
  --z-notification: 800;
}
```

## Design Tokens

```css
:root {
  /* Container widths */
  --container-sm: 640px;
  --container-md: 960px;
  --container-lg: 1280px;
  --container-xl: 1440px;
  
  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  
  /* Section spacing */
  --section-padding-mobile: 48px 0;
  --section-padding-desktop: 80px 0;
  
  /* Grid gaps */
  --grid-gap-sm: 16px;
  --grid-gap-md: 24px;
  --grid-gap-lg: 32px;
}
```
