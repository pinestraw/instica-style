---
title: Data Display
outline: deep
---

## Live Examples

<DataDisplayDemo />

---

<style scoped>
.table-container {
  width: 100%;
  overflow-x: auto;
  border-radius: 14px;
  background: white;
  padding: 10px;
  border: 1px solid #EEF2F7;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.table thead {
  background: transparent;
}

.table th {
  padding: 14px 18px;
  text-align: left;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #A1AAB6;
  border-bottom: 1px solid #EEF2F7;
}

.table td {
  padding: 16px 18px;
  border-bottom: 1px solid #EEF2F7;
  color: #1F2937;
}

.table tbody tr:last-child td {
  border-bottom: none;
}

.table tbody tr:hover {
  background: #F8FAFF;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 12px;
  white-space: nowrap;
}

.badge-success {
  background: #DCFCE7;
  color: #166534;
}

.badge-warning {
  background: #FEF3C7;
  color: #92400E;
}

.badge-error {
  background: #FEE2E2;
  color: #991B1B;
}

.badge-info {
  background: #DBEAFE;
  color: #1E40AF;
}

.card {
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #0F172A;
  margin: 0 0 8px 0;
}

.card-description {
  font-size: 14px;
  color: #64748B;
  margin: 0 0 16px 0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid #F1F5F9;
}

.component-example {
  padding: 32px;
  background: #F8FAFC;
  border-radius: 12px;
  margin: 24px 0;
  border: 1px solid #E2E8F0;
}
</style>

# Data Display

Data display components present information clearly and enable users to scan, understand, and act on content efficiently.

## Tables

### Basic Table

<div class="component-example">
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th>Product</th>
          <th>SKU</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Vintage Camera</td>
          <td>CAM-001</td>
          <td>5</td>
          <td>$249.99</td>
          <td><span class="badge badge-success">Active</span></td>
        </tr>
        <tr>
          <td>Leather Bag</td>
          <td>BAG-045</td>
          <td>0</td>
          <td>$89.99</td>
          <td><span class="badge badge-warning">Out of Stock</span></td>
        </tr>
        <tr>
          <td>Wooden Desk</td>
          <td>DESK-112</td>
          <td>3</td>
          <td>$399.00</td>
          <td><span class="badge badge-success">Active</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Product</th>
        <th>SKU</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="table-cell-content">
            <img src="/placeholder.png" alt="" class="table-thumb" />
            <span>Vintage Camera</span>
          </div>
        </td>
        <td>CAM-001</td>
        <td>5</td>
        <td>$249.99</td>
        <td><span class="badge badge-success">Active</span></td>
      </tr>
      <tr>
        <td>
          <div class="table-cell-content">
            <img src="/placeholder.png" alt="" class="table-thumb" />
            <span>Leather Bag</span>
          </div>
        </td>
        <td>BAG-045</td>
        <td>0</td>
        <td>$89.99</td>
        <td><span class="badge badge-warning">Out of Stock</span></td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.table-container {
  width: 100%;
  overflow-x: auto;
  border-radius: 14px;
  background: #FFFFFF;
  padding: 10px;
  border: 1px solid #EEF2F7;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.table thead {
  background: transparent;
}

.table th {
  padding: 14px 18px;
  text-align: left;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #A1AAB6;
  border-bottom: 1px solid #EEF2F7;
}

.table td {
  padding: 16px 18px;
  color: #1F2937;
  border-bottom: 1px solid #EEF2F7;
}

.table tbody tr:last-child td {
  border-bottom: none;
}

.table tbody tr:hover {
  background: #F8FAFF;
}

.table-cell-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.table-thumb {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: #F3F6FB;
  object-fit: cover;
  flex-shrink: 0;
}
</style>
```

### Selectable Rows

```html
<table class="table table-selectable">
  <thead>
    <tr>
      <th style="width: 40px;">
        <input type="checkbox" class="table-checkbox" aria-label="Select all" />
      </th>
      <th>Product</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-row-selected">
      <td>
        <input type="checkbox" class="table-checkbox" checked aria-label="Select row" />
      </td>
      <td>Vintage Camera</td>
      <td>$249.99</td>
    </tr>
    <tr>
      <td>
        <input type="checkbox" class="table-checkbox" aria-label="Select row" />
      </td>
      <td>Leather Bag</td>
      <td>$89.99</td>
    </tr>
  </tbody>
</table>

<style>
.table-row-selected {
  background: #EEF2FF !important;
}

.table-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}
</style>
```

### Dark Mode Tables

Tables must have excellent contrast in dark mode with proper alternating row styling:

```html
<style>
/* Light mode - default */
.table-wrapper {
  overflow-x: auto;
  border-radius: 14px;
  background: #FFFFFF;
  padding: 10px;
  border: 1px solid #EEF2F7;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-variant-numeric: tabular-nums;
}

.table th {
  text-align: left;
  padding: 14px 18px;
  font-size: 11px;
  font-weight: 500;
  color: #A1AAB6;
  background: transparent;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #EEF2F7;
}

.table td {
  padding: 16px 18px;
  font-size: 14px;
  color: #1F2937;
  border-bottom: 1px solid #EEF2F7;
}

.table tbody tr:last-child td {
  border-bottom: none;
}

.table tbody tr:hover {
  background: #F8FAFF;
}

/* Dark mode */
.dark-theme .table-wrapper {
  background: #0F172A;
  border-color: #1E293B;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
}

.dark-theme .table th {
  color: #8B95A7;
  border-bottom-color: #1F2937;
}

.dark-theme .table td {
  color: #E5E7EB;
  border-bottom-color: #1F2937;
}

.dark-theme .table tbody tr:hover {
  background: #162033;
}
</style>
```

**Key Dark Mode Guidelines:**
- Header text: `#8B95A7` for subtle column labels
- Body text: `#E5E7EB` for high contrast on dark backgrounds
- **Minimal borders**: light horizontal separators only (`#1F2937`)
- **No vertical borders** between columns - cleaner appearance
- Hover: `#162033` for subtle interaction feedback
- Always test with real data - empty cells should remain readable

### Condensed Tables

<div class="component-example">
  <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
    <thead>
      <tr style="text-align: left; color: #A1AAB6; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em;">
        <th style="padding: 10px 14px; border-bottom: 1px solid #EEF2F7;">SKU</th>
        <th style="padding: 10px 14px; border-bottom: 1px solid #EEF2F7;">Stock</th>
        <th style="padding: 10px 14px; border-bottom: 1px solid #EEF2F7;">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px 14px; border-bottom: 1px solid #EEF2F7; color: #1F2937;">CAM-001</td>
        <td style="padding: 10px 14px; border-bottom: 1px solid #EEF2F7; color: #1F2937;">5</td>
        <td style="padding: 10px 14px; border-bottom: 1px solid #EEF2F7; color: #1F2937;">$249.99</td>
      </tr>
      <tr>
        <td style="padding: 10px 14px; color: #1F2937;">BAG-045</td>
        <td style="padding: 10px 14px; color: #1F2937;">0</td>
        <td style="padding: 10px 14px; color: #1F2937;">$89.99</td>
      </tr>
    </tbody>
  </table>
</div>

For dense data displays with more columns:

```html
<table class="table table-condensed">
  <thead>
    <tr>
      <th>Product</th>
      <th>Category</th>
      <th>Stock</th>
      <th>Status</th>
      <th>Price</th>
      <th>Last Updated</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>iPhone 13 Pro</td>
      <td>Electronics</td>
      <td>45</td>
      <td><span class="badge badge-success">Active</span></td>
      <td>$999.00</td>
      <td>2 hours ago</td>
    </tr>
    <tr>
      <td>MacBook Air M2</td>
      <td>Computers</td>
      <td>12</td>
      <td><span class="badge badge-success">Active</span></td>
      <td>$1,199.00</td>
      <td>5 hours ago</td>
    </tr>
  </tbody>
</table>

<style>
.table-condensed th {
  padding: 10px 14px;
  font-size: 11px;
}

.table-condensed td {
  padding: 10px 14px;
  font-size: 13px;
}
</style>
```

**When to use condensed tables:**
- Dashboards with multiple data columns (6+)
- Admin panels showing detailed records
- Data exports or reports with many fields
- Not recommended for mobile - use standard tables

### Tables with Images

<div class="component-example">
  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    <thead>
      <tr style="text-align: left; color: #A1AAB6; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">
        <th style="padding: 14px 18px; border-bottom: 1px solid #EEF2F7;">Product</th>
        <th style="padding: 14px 18px; border-bottom: 1px solid #EEF2F7;">Price</th>
        <th style="padding: 14px 18px; border-bottom: 1px solid #EEF2F7;">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 16px 18px; border-bottom: 1px solid #EEF2F7;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 36px; height: 36px; border-radius: 6px; background: #F3F6FB;"></div>
            <span style="color: #1F2937;">Vintage Camera</span>
          </div>
        </td>
        <td style="padding: 16px 18px; border-bottom: 1px solid #EEF2F7; color: #1F2937;">$249.99</td>
        <td style="padding: 16px 18px; border-bottom: 1px solid #EEF2F7;"><span style="background: #DCFCE7; color: #166534; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 500;">Active</span></td>
      </tr>
      <tr>
        <td style="padding: 16px 18px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 36px; height: 36px; border-radius: 6px; background: #F3F6FB;"></div>
            <span style="color: #1F2937;">Leather Bag</span>
          </div>
        </td>
        <td style="padding: 16px 18px; color: #1F2937;">$89.99</td>
        <td style="padding: 16px 18px;"><span style="background: #FEF3C7; color: #92400E; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 500;">Low Stock</span></td>
      </tr>
    </tbody>
  </table>
</div>

Display product thumbnails or user avatars:

```html
<table class="table">
  <thead>
    <tr>
      <th>Product</th>
      <th>Category</th>
      <th>Stock</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="table-cell-product">
          <img src="/product-thumb.jpg" alt="" class="table-thumb" />
          <span>iPhone 13 Pro</span>
        </div>
      </td>
      <td>Electronics</td>
      <td>45</td>
      <td>$999.00</td>
    </tr>
  </tbody>
</table>

<style>
.table-cell-product {
  display: flex;
  align-items: center;
  gap: 12px;
}

.table-thumb {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: #F3F6FB;
  object-fit: cover;
  flex-shrink: 0;
}

.dark-theme .table-thumb {
  background: #1E293B;
}

/* For condensed tables with images */
.table-condensed .table-thumb {
  width: 32px;
  height: 32px;
  border-radius: 4px;
}
</style>
```

**Image Guidelines:**
- Size: 36×36px standard, 32×32px condensed
- Border radius: 6px standard, 4px condensed
- Always use `flex-shrink: 0` to prevent squishing
- Include `alt=""` for decorative images
- Use `object-fit: cover` for product photos
- Background color for loading/fallback states

## Cards

### Info Card

<div class="component-example">
  <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px; max-width: 320px;">
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
      <div style="font-weight: 600; color: #0F172A;">Recent Sales</div>
      <div style="width: 28px; height: 28px; border-radius: 8px; background: #F1F5F9;"></div>
    </div>
    <div style="font-size: 24px; font-weight: 700; color: #0F172A;">$12,450</div>
    <div style="font-size: 12px; color: #94A3B8;">Last 30 days</div>
    <div style="font-size: 13px; color: #059669; margin-top: 6px;">↑ 12.5%</div>
  </div>
</div>

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Recent Sales</h3>
    <button class="btn-icon" aria-label="More options">
      •••
    </button>
  </div>
  <div class="card-body">
    <div class="stat">
      <div class="stat-value">$12,450</div>
      <div class="stat-label">Last 30 days</div>
      <div class="stat-change stat-change--positive">
        ↑ 12.5%
      </div>
    </div>
  </div>
</div>

<style>
.card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #F1F5F9;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #1E293B;
  margin: 0;
}

.card-body {
  padding: 24px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
  color: #1E293B;
  line-height: 1;
}

.stat-label {
  font-size: 14px;
  color: #64748B;
}

.stat-change {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
}

.stat-change--positive {
  color: #059669;
}

.stat-change--negative {
  color: #DC2626;
}
</style>
```

### Product Card

<div class="component-example">
  <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; max-width: 320px;">
    <div style="height: 140px; background: #F1F5F9;"></div>
    <div style="padding: 14px;">
      <div style="font-weight: 600; color: #0F172A;">Vintage Camera</div>
      <div style="font-size: 13px; color: #64748B; margin-top: 4px;">SKU CAM-001</div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px;">
        <div style="font-weight: 700; color: #0F172A;">$249.99</div>
        <div style="font-size: 12px; color: #059669;">Active</div>
      </div>
    </div>
  </div>
</div>

```html
<div class="product-card">
  <div class="product-card-image">
    <img src="/placeholder.png" alt="Product" />
    <button class="product-card-favorite" aria-label="Add to favorites">
      ♡
    </button>
  </div>
  <div class="product-card-content">
    <h4 class="product-card-title">Vintage Camera</h4>
    <p class="product-card-description">Professional 35mm film camera in excellent condition</p>
    <div class="product-card-footer">
      <span class="product-card-price">$249.99</span>
      <span class="badge badge-success">In Stock</span>
    </div>
  </div>
</div>

<style>
.product-card {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.product-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.product-card-image {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #F8FAFC;
}

.product-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-card-favorite {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
}

.product-card-favorite:hover {
  background: #FFFFFF;
  transform: scale(1.1);
}

.product-card-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
}

.product-card-title {
  font-size: 16px;
  font-weight: 600;
  color: #1E293B;
  margin: 0;
}

.product-card-description {
  font-size: 14px;
  color: #64748B;
  line-height: 1.5;
  margin: 0;
}

.product-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}

.product-card-price {
  font-size: 20px;
  font-weight: 700;
  color: #1E293B;
}
</style>
```

## Lists

### Simple List

<div class="component-example">
  <div style="display: grid; gap: 8px; max-width: 360px;">
    <div style="padding: 12px; border: 1px solid #E2E8F0; border-radius: 10px; background: #FFFFFF;">Basic inventory tracking</div>
    <div style="padding: 12px; border: 1px solid #E2E8F0; border-radius: 10px; background: #FFFFFF;">Up to 100 items</div>
    <div style="padding: 12px; border: 1px solid #E2E8F0; border-radius: 10px; background: #FFFFFF;">Email support</div>
  </div>
</div>

```html
<ul class="list">
  <li class="list-item">
    <span class="list-item-text">Basic inventory tracking</span>
  </li>
  <li class="list-item">
    <span class="list-item-text">Up to 100 items</span>
  </li>
  <li class="list-item">
    <span class="list-item-text">Email support</span>
  </li>
</ul>

<style>
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #F1F5F9;
}

.list-item:last-child {
  border-bottom: none;
}

.list-item::before {
  content: "✓";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: 700;
  color: #059669;
  background: #D1FAE5;
  border-radius: 50%;
}

.list-item-text {
  font-size: 15px;
  color: #334155;
}
</style>
```

### Action List

<div class="component-example">
  <div style="display: grid; gap: 6px; max-width: 360px;">
    <button style="text-align: left; padding: 12px; border-radius: 10px; border: 1px solid #E2E8F0; background: #FFFFFF;">Edit Details</button>
    <button style="text-align: left; padding: 12px; border-radius: 10px; border: 1px solid #E2E8F0; background: #FFFFFF;">Export Data</button>
    <button style="text-align: left; padding: 12px; border-radius: 10px; border: 1px solid #FECACA; background: #FEF2F2; color: #DC2626;">Delete Item</button>
  </div>
</div>

```html
<div class="action-list">
  <button class="action-list-item">
    <img src="/icons/actions/edit-modify.png" alt="" width="20" height="20" />
    <span>Edit Details</span>
  </button>
  
  <button class="action-list-item">
    <img src="/icons/actions/download-export.png" alt="" width="20" height="20" />
    <span>Export Data</span>
  </button>
  
  <div class="action-list-divider"></div>
  
  <button class="action-list-item action-list-item--danger">
    <img src="/icons/actions/delete-remove.png" alt="" width="20" height="20" />
    <span>Delete Item</span>
  </button>
</div>

<style>
.action-list {
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  overflow: hidden;
}

.action-list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  font-size: 15px;
  color: #334155;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background 0.2s ease;
}

.action-list-item:hover {
  background: #F8FAFC;
}

.action-list-item--danger {
  color: #DC2626;
}

.action-list-item--danger:hover {
  background: #FEF2F2;
}

.action-list-divider {
  height: 1px;
  background: #E2E8F0;
  margin: 4px 0;
}
</style>
```

## Badges

<div class="component-example">
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <span class="badge badge-success">Active</span>
    <span class="badge badge-warning">Pending</span>
    <span class="badge badge-error">Error</span>
    <span class="badge badge-info">Processing</span>
  </div>
</div>

```html
<span class="badge badge-primary">New</span>
<span class="badge badge-success">Active</span>
<span class="badge badge-warning">Pending</span>
<span class="badge badge-error">Error</span>
<span class="badge badge-neutral">Draft</span>

<style>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 12px;
  white-space: nowrap;
}

.badge-primary {
  background: #EEF2FF;
  color: #4F46E5;
}

.badge-success {
  background: #D1FAE5;
  color: #059669;
}

.badge-warning {
  background: #FEF3C7;
  color: #D97706;
}

.badge-error {
  background: #FEE2E2;
  color: #DC2626;
}

.badge-neutral {
  background: #F1F5F9;
  color: #64748B;
}
</style>
```

### Badge with Dot

<div class="component-example">
  <span style="display: inline-flex; align-items: center; gap: 8px; padding: 4px 12px; border-radius: 999px; font-size: 13px; font-weight: 600; background: #DCFCE7; color: #166534;">
    <span style="width: 6px; height: 6px; border-radius: 50%; background: #059669;"></span>
    Online
  </span>
</div>

```html
<span class="badge badge-dot badge-success">
  <span class="badge-dot-indicator"></span>
  <span>Online</span>
</span>

<style>
.badge-dot {
  padding-left: 10px;
}

.badge-dot-indicator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.badge-success .badge-dot-indicator {
  background: #059669;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
```

## Image Galleries & Carousels

### Photo Carousel with Thumbnails

A primary image viewer with thumbnail navigation strip, based on the iOS inventory app pattern:

<div class="component-example">
  <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden;">
    <div style="height: 160px; background: linear-gradient(135deg, #4F46E5, #818CF8); position: relative;">
      <div style="position: absolute; bottom: 10px; left: 12px; display: flex; gap: 4px;">
        <span style="width: 6px; height: 6px; border-radius: 50%; background: #4F46E5;"></span>
        <span style="width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.5);"></span>
        <span style="width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.5);"></span>
      </div>
    </div>
    <div style="padding: 12px; display: flex; gap: 8px; overflow-x: auto;">
      <div style="width: 120px; height: 80px; border-radius: 10px; background: #E2E8F0; border: 2px solid #4F46E5;"></div>
      <div style="width: 80px; height: 80px; border-radius: 10px; background: #E2E8F0;"></div>
      <div style="width: 80px; height: 80px; border-radius: 10px; background: #E2E8F0;"></div>
    </div>
  </div>
</div>

```html
<div class="gallery-section">
  <!-- Main Carousel -->
  <div class="photo-carousel">
    <div class="carousel-container">
      <img src="/photo-1.jpg" alt="Product view 1" class="carousel-image" />
      
      <!-- Gradient overlay for controls -->
      <div class="carousel-gradient"></div>
      
      <!-- Page indicator dots -->
      <div class="carousel-indicators">
        <span class="indicator active"></span>
        <span class="indicator"></span>
        <span class="indicator"></span>
        <span class="indicator"></span>
      </div>
      
      <!-- Full screen button -->
      <button class="carousel-fullscreen-btn">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M2 2h4v2H4v2H2V2zm0 8v4h4v-2H4v-2H2zm12 4h-4v-2h2v-2h2v4zm0-12v4h-2V4h-2V2h4z"/>
        </svg>
        Full Screen
      </button>
      
      <!-- Photo counter -->
      <div class="carousel-counter">
        <span class="counter-text">1 of 4 photos</span>
        <div class="counter-actions">
          <button class="counter-btn">
            <svg width="16" height="16"><!-- grid icon --></svg>
            View Gallery
          </button>
          <button class="counter-btn">
            <svg width="16" height="16"><!-- plus icon --></svg>
            Add Photos
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Thumbnail Strip -->
  <div class="thumbnail-section">
    <label class="thumbnail-label">Preview deck</label>
    <div class="thumbnail-strip">
      <!-- Hero thumbnail (larger) -->
      <button class="thumbnail thumbnail-hero active">
        <img src="/photo-1.jpg" alt="Photo 1" />
        <div class="thumbnail-overlay">
          <div class="thumbnail-meta">
            <span class="thumbnail-title">Photo 1</span>
            <span class="thumbnail-subtitle">Hero image</span>
          </div>
        </div>
      </button>
      
      <!-- Regular thumbnails -->
      <button class="thumbnail">
        <img src="/photo-2.jpg" alt="Photo 2" />
      </button>
      <button class="thumbnail">
        <img src="/photo-3.jpg" alt="Photo 3" />
      </button>
      <button class="thumbnail">
        <img src="/photo-4.jpg" alt="Photo 4" />
      </button>
      
      <!-- Add more button -->
      <button class="thumbnail thumbnail-add">
        <svg width="20" height="20"><!-- plus icon --></svg>
        <span>Add</span>
      </button>
    </div>
  </div>
</div>

<style>
.gallery-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Carousel */
.photo-carousel {
  width: 100%;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  background: #F8FAFC;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.carousel-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 110px;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3));
  pointer-events: none;
}

.carousel-indicators {
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  gap: 4px;
}

.indicator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.indicator:hover {
  transform: scale(1.3);
  background: rgba(255, 255, 255, 0.6);
}

.indicator.active {
  background: #4F46E5;
  transform: scale(1.5);
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
}

.carousel-fullscreen-btn {
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6pxall 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-fullscreen-btn:hover {
  background: rgba(0, 0, 0, 0.85);
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.carousel-fullscreen-btn:hover {
  background: rgba(0, 0, 0, 0.75);
}

.carousel-counter {
  position: absolute;
  top: 280px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  font-size: 13px;
  color: #64748B;
}

.counter-actions {
  display: flex;
  gap: 8px;
}

.counter-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  font-size: 13px;
  font-weight: 600;
  color: #4F46E5;
  background: transparent;
  border: none;
  cursor: pointer;
}

/* Thumbnail Strip */
.thumbnail-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.thumbnail-label {
  font-size: 13px;
  color: #64748B;
  font-weight: 500;
}

.thumbnail-strip {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.thumbnail {3s cubic-bezier(0.4, 0, 0.2, 1);
}

.thumbnail:hover {
  border-color: #CBD5E1;
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.thumbnail.active {
  border-color: #4F46E5;
  box-shadow: 0 12px 24px rgba(79, 70, 229, 0.15);
  transform: translateY(-4px) scale(1.05);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.thumbnail:hover img {
  transform: scale(1.1)

.thumbnail.active {
  border-color: #4F46E5;
  box-shadow: 0 12px 24px rgba(79, 70, 229, 0.15);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Hero thumbnail (larger) */
.thumbnail-hero {
  width: 180px;
  transition: opacity 0.3s ease;
}

.thumbnail:hover .thumbnail-overlay {
  opacity: 0.85;
  height: 120px;
}

.thumbnail-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.65));
}

.thumbnail-meta {
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.thumbnail-title {
  font-size: 13px;
  font-weight: 600;
  color: white;
}

.thumbnail-subtitle {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.8);
}

.thumbnail-add {
  display: flex;
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(79, 70, 229, 0.15);
}

.thumbnail-add:hover .add-icon {
  animation: pulse 0.6s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #4F46E5;
  background: #F8FAFC;
}

.thumbnail-add:hover {
  background: #F1F5F9;
  border-color: #4F46E5;
}

/* Dark mode */
.dark-theme .carousel-container {
  background: #1E293B;
}

.dark-theme .thumbnail {
  background: #334155;
  border-color: #475569;
}

.dark-theme .thumbnail.active {
  border-color: #818CF8;
}

.dark-theme .thumbnail-add {
  background: #1E293B;
  color: #818CF8;
}
</style>
```

### Grid Gallery

For viewing all photos in a grid layout:

<div class="component-example">
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
    <div style="aspect-ratio: 1; border-radius: 12px; background: #E2E8F0;"></div>
    <div style="aspect-ratio: 1; border-radius: 12px; background: #E2E8F0;"></div>
    <div style="aspect-ratio: 1; border-radius: 12px; background: #E2E8F0;"></div>
    <div style="aspect-ratio: 1; border-radius: 12px; background: #E2E8F0;"></div>
    <div style="aspect-ratio: 1; border-radius: 12px; background: #E2E8F0;"></div>
    <div style="aspect-ratio: 1; border-radius: 12px; background: #E2E8F0;"></div>
  </div>
</div>

```html
<div class="grid-gallery">
  <div class="gallery-grid">
    <button class="gallery-tile">
      <img src="/photo-1.jpg" alt="Photo 1" />
    </button>
    <button class="gallery-tile">
      <img src="/photo-2.jpg" alt="Photo 2" />
    </button>
    <button class="gallery-tile">
      <img src="/photo-3.jpg" alt="Photo 3" />
    </button>
    <button class="gallery-tile">
      <img src="/photo-4.jpg" alt="Photo 4" />
    </button>
    <button class="gallery-tile">
      <img src="/photo-5.jpg" alt="Photo 5" />
    </button>
    <button class="gallery-tile">
      <img src="/photo-6.jpg" alt="Photo 6" />
    </button>
  </div>
</div>

<style>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
}

.gallery-tile {
  position: relative;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  background: #F1F5F9;
  border: 1px solid #E2E8F0;
  cursor: pointer;
  transition: all 0.2s;
}

.gallery-tile:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.gallery-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive grid */
@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 767px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Dark mode */
.dark-theme .gallery-tile {
  background: #334155;
  border-color: #475569;
}
</style>
```

**Gallery Guidelines:**

**Carousel Pattern:**
- Main image: 280px height, 16px border radius
- Gradient overlay: 110px height, `rgba(0, 0, 0, 0.3)`
- Page indicators: 6px circles, brand primary for active
- Counter: 13px font, slate-500 color
- Full screen button: Capsule shape, 60% black background

**Thumbnail Strip:**
- Hero thumbnail: 180×120px (active photo)
- Regular thumbnails: 80×120px
- Border: 2px, brand primary when active
- Overlay: Gradient with photo number and label
- Spacing: 12px gap, horizontal scroll
- Add button: Same size, centered icon + label

**Grid Gallery:**
- Responsive columns: 2 (mobile), 3 (tablet+)
- Tiles: 1:1 aspect ratio, 12px radius
- Hover: 1.02 scale + shadow
- Gap: 12px between tiles

**Animations:**
- **Carousel image:** Fade in with subtle scale (0.5s) on photo change
- **Indicators:** Scale to 1.5× when active, 1.3× on hover with smooth cubic-bezier easing
- **Thumbnails:** Lift up 4px + scale 1.03× on hover, 1.05× when active
- **Thumbnail images:** Zoom 1.1× on parent hover for parallax effect
- **Add button:** Pulse animation on hover (+ icon scales 1.2×)
- **Fullscreen button:** Scale 1.05× + shadow on hover
- Use `cubic-bezier(0.4, 0, 0.2, 1)` for natural feel
- All transitions: 0.3-0.4s duration for smoothness

**Loading States:**
- Empty state: Dashed border, centered icon
- Loading: Circular progress, brand primary
- Failed: Photo icon, tertiary text

**iOS Specific:**
- Use `aspectRatio(1, contentMode: .fit)` for tiles
- `TabView` with `.page` style for carousel
- Enable swipe gestures with drag detection
- Support full-screen `.fullScreenCover`

## Tags

<div class="component-example">
  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
    <span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px; background: #F1F5F9; color: #334155; font-size: 13px;">Electronics ×</span>
    <span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px; background: #F1F5F9; color: #334155; font-size: 13px;">Vintage ×</span>
    <span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px; background: #F1F5F9; color: #334155; font-size: 13px;">Camera ×</span>
  </div>
</div>

```html
<div class="tag-list">
  <span class="tag">
    <span>Electronics</span>
    <button class="tag-remove" aria-label="Remove tag">×</button>
  </span>
  <span class="tag">
    <span>Vintage</span>
    <button class="tag-remove" aria-label="Remove tag">×</button>
  </span>
  <span class="tag">
    <span>Camera</span>
    <button class="tag-remove" aria-label="Remove tag">×</button>
  </span>
</div>

<style>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 14px;
  color: #334155;
  background: #F1F5F9;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
}

.tag-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  font-size: 18px;
  line-height: 1;
  color: #64748B;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tag-remove:hover {
  background: #E2E8F0;
  color: #334155;
}
</style>
```

## Empty States

<div class="component-example">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px; text-align: center;">
    <div style="width: 64px; height: 64px; border-radius: 16px; background: #EEF2FF; display: flex; align-items: center; justify-content: center; font-size: 24px;">📦</div>
    <div style="font-weight: 600; color: #0F172A;">No items yet</div>
    <div style="font-size: 14px; color: #64748B;">Get started by adding your first inventory item.</div>
    <button style="margin-top: 6px; padding: 8px 16px; border-radius: 8px; border: none; background: #4F46E5; color: #FFFFFF; font-weight: 600;">Add Item</button>
  </div>
</div>

```html
<div class="empty-state">
  <img src="/icons/navigation/inventory-list.png" alt="" width="80" height="80" class="empty-state-icon" />
  <h3 class="empty-state-title">No items yet</h3>
  <p class="empty-state-description">
    Get started by adding your first inventory item
  </p>
  <button class="btn btn-primary">Add Item</button>
</div>

<style>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 64px 24px;
  text-align: center;
}

.empty-state-icon {
  opacity: 0.5;
}

.empty-state-title {
  font-size: 20px;
  font-weight: 600;
  color: #1E293B;
  margin: 0;
}

.empty-state-description {
  font-size: 15px;
  color: #64748B;
  max-width: 400px;
  margin: 0;
}
</style>
```

## Data Visualization

### Progress Bar

```html
<div class="progress">
  <div class="progress-bar" style="width: 65%;" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
    <span class="progress-label">65%</span>
  </div>
</div>

<style>
.progress {
  width: 100%;
  height: 24px;
  background: #F1F5F9;
  border-radius: 12px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #4F46E5, #7C3AED);
  transition: width 0.3s ease;
}

.progress-label {
  font-size: 12px;
  font-weight: 600;
  color: #FFFFFF;
}
</style>
```

### Stat Grid

```html
<div class="stat-grid">
  <div class="stat-card">
    <div class="stat-card-icon">
      <img src="/icons/features/revenue-sales.png" alt="" width="32" height="32" />
    </div>
    <div class="stat-card-content">
      <div class="stat-card-label">Total Revenue</div>
      <div class="stat-card-value">$48,532</div>
      <div class="stat-card-change stat-change--positive">↑ 12.5%</div>
    </div>
  </div>
  
  <div class="stat-card">
    <div class="stat-card-icon">
      <img src="/icons/features/orders-fulfillment.png" alt="" width="32" height="32" />
    </div>
    <div class="stat-card-content">
      <div class="stat-card-label">Orders</div>
      <div class="stat-card-value">1,234</div>
      <div class="stat-card-change stat-change--positive">↑ 8.2%</div>
    </div>
  </div>
</div>

<style>
.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.stat-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
}

.stat-card-icon {
  flex-shrink: 0;
}

.stat-card-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-card-label {
  font-size: 13px;
  color: #64748B;
  font-weight: 500;
}

.stat-card-value {
  font-size: 24px;
  font-weight: 700;
  color: #1E293B;
  line-height: 1.2;
}

.stat-card-change {
  font-size: 13px;
  font-weight: 600;
}
</style>
```

## Accessibility

- Use semantic HTML (`<table>`, `<th>`, `<td>`)
- Provide `role` and `aria-*` attributes for custom components
- Include `aria-label` for icon-only actions
- Ensure sufficient color contrast for all text
- Make interactive elements keyboard accessible
- Announce dynamic content changes to screen readers
- Use `aria-sort` for sortable table headers

## Design Tokens

```css
:root {
  /* Data display colors */
  --table-border: #E2E8F0;
  --table-header-bg: #F8FAFC;
  --table-hover-bg: #FAFBFC;
  --card-bg: #FFFFFF;
  --card-border: #E2E8F0;
  --badge-primary-bg: #EEF2FF;
  --badge-primary-text: #4F46E5;
  
  /* Data display spacing */
  --card-padding: 24px;
  --card-radius: 12px;
  --table-padding: 12px 16px;
  --badge-padding: 4px 12px;
}
```
