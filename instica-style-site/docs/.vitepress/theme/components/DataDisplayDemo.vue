<template>
  <div class="demo-wrapper">
    <div class="demo-header">
      <button @click="toggleTheme" class="theme-toggle">
        {{ isDark ? '☀️ Light' : '🌙 Dark' }}
      </button>
    </div>
    
    <div class="demo-container" :class="{ 'dark-theme': isDark }">
      <!-- Table -->
      <div class="demo-section">
        <h4>Data Table</h4>
        <div class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>SKU</th>
                <th>Status</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>iPhone 13 Pro</td>
                <td>APL-IP13P-128</td>
                <td><span class="badge badge-success">Active</span></td>
                <td>$999.00</td>
              </tr>
              <tr>
                <td>MacBook Air M2</td>
                <td>APL-MBA-M2-256</td>
                <td><span class="badge badge-success">Active</span></td>
                <td>$1,199.00</td>
              </tr>
              <tr>
                <td>AirPods Pro</td>
                <td>APL-APP-2ND</td>
                <td><span class="badge badge-warning">Low Stock</span></td>
                <td>$249.00</td>
              </tr>
              <tr>
                <td>Apple Watch Series 8</td>
                <td>APL-AWS8-41</td>
                <td><span class="badge badge-error">Out of Stock</span></td>
                <td>$399.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Condensed Table -->
      <div class="demo-section">
        <h4>Condensed Table with Images</h4>
        <div class="table-wrapper">
          <table class="data-table data-table-condensed">
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
                <td>
                  <div class="table-cell-product">
                    <div class="table-thumb">📱</div>
                    <span>iPhone 13 Pro</span>
                  </div>
                </td>
                <td>Electronics</td>
                <td>45</td>
                <td><span class="badge badge-success">Active</span></td>
                <td>$999.00</td>
                <td>2 hours ago</td>
              </tr>
              <tr>
                <td>
                  <div class="table-cell-product">
                    <div class="table-thumb">💻</div>
                    <span>MacBook Air M2</span>
                  </div>
                </td>
                <td>Computers</td>
                <td>12</td>
                <td><span class="badge badge-success">Active</span></td>
                <td>$1,199.00</td>
                <td>5 hours ago</td>
              </tr>
              <tr>
                <td>
                  <div class="table-cell-product">
                    <div class="table-thumb">🎧</div>
                    <span>AirPods Pro</span>
                  </div>
                </td>
                <td>Audio</td>
                <td>3</td>
                <td><span class="badge badge-warning">Low Stock</span></td>
                <td>$249.00</td>
                <td>1 day ago</td>
              </tr>
              <tr>
                <td>
                  <div class="table-cell-product">
                    <div class="table-thumb">⌚</div>
                    <span>Apple Watch Series 8</span>
                  </div>
                </td>
                <td>Wearables</td>
                <td>0</td>
                <td><span class="badge badge-error">Out of Stock</span></td>
                <td>$399.00</td>
                <td>3 days ago</td>
              </tr>
              <tr>
                <td>
                  <div class="table-cell-product">
                    <div class="table-thumb">📷</div>
                    <span>Canon EOS R6</span>
                  </div>
                </td>
                <td>Cameras</td>
                <td>8</td>
                <td><span class="badge badge-success">Active</span></td>
                <td>$2,499.00</td>
                <td>1 week ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Badges -->
      <div class="demo-section">
        <h4>Status Badges</h4>
        <div class="badge-row">
          <span class="badge badge-success">Active</span>
          <span class="badge badge-warning">Pending</span>
          <span class="badge badge-error">Inactive</span>
          <span class="badge badge-info">Draft</span>
          <span class="badge badge-neutral">Archived</span>
        </div>
      </div>

      <!-- Cards -->
      <div class="demo-section">
        <h4>Cards</h4>
        <div class="card-grid">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Total Revenue</h3>
              <span class="card-icon">💰</span>
            </div>
            <div class="card-body">
              <div class="card-value">$12,450</div>
              <div class="card-change positive">+12.5%</div>
            </div>
          </div>
          
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Total Orders</h3>
              <span class="card-icon">📦</span>
            </div>
            <div class="card-body">
              <div class="card-value">248</div>
              <div class="card-change positive">+8.2%</div>
            </div>
          </div>
          
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Active Listings</h3>
              <span class="card-icon">📋</span>
            </div>
            <div class="card-body">
              <div class="card-value">156</div>
              <div class="card-change negative">-3.1%</div>
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

.table-wrapper {
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid #E2E8F0;
  background: white;
}

.dark-theme .table-wrapper {
  border-color: #334155;
  background: #0F172A;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  font-variant-numeric: tabular-nums;
}

.dark-theme .data-table {
  background: #0F172A;
}

.data-table th {
  text-align: left;
  padding: 16px 20px;
  font-size: 13px;
  font-weight: 600;
  color: #475569;
  background: #F8FAFC;
  border-bottom: 2px solid #E2E8F0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.dark-theme .data-table th {
  background: #1E293B;
  border-bottom-color: #334155;
  color: #94A3B8;
}

.data-table td {
  padding: 16px 20px;
  font-size: 15px;
  color: #1E293B;
  border-bottom: 1px solid #E2E8F0;
}

.dark-theme .data-table td {
  color: #F1F5F9;
  border-bottom-color: #1E293B;
}

.data-table tbody tr {
  transition: background-color 0.15s ease;
}

.data-table tbody tr:nth-child(even) {
  background: #F8FAFC;
}

.dark-theme .data-table tbody tr:nth-child(even) {
  background: #0F172A;
}

.data-table tbody tr:nth-child(odd) {
  background: white;
}

.dark-theme .data-table tbody tr:nth-child(odd) {
  background: #1E293B;
}

.data-table tbody tr:hover {
  background: #EEF2FF !important;
}

.dark-theme .data-table tbody tr:hover {
  background: #312E81 !important;
}

/* Condensed Table */
.data-table-condensed th {
  padding: 10px 16px;
  font-size: 11px;
}

.data-table-condensed td {
  padding: 10px 16px;
  font-size: 13px;
}

/* Table Cell with Image */
.table-cell-product {
  display: flex;
  align-items: center;
  gap: 12px;
}

.table-thumb {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: #F1F5F9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.dark-theme .table-thumb {
  background: #334155;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  white-space: nowrap;
}

.badge-success {
  background: #DCFCE7;
  color: #166534;
}

.dark-theme .badge-success {
  background: #14532D;
  color: #86EFAC;
}

.badge-warning {
  background: #FEF3C7;
  color: #92400E;
}

.dark-theme .badge-warning {
  background: #78350F;
  color: #FDE047;
}

.badge-error {
  background: #FEE2E2;
  color: #991B1B;
}

.dark-theme .badge-error {
  background: #7F1D1D;
  color: #FCA5A5;
}

.badge-info {
  background: #DBEAFE;
  color: #1E40AF;
}

.dark-theme .badge-info {
  background: #1E3A8A;
  color: #93C5FD;
}

.badge-neutral {
  background: #F1F5F9;
  color: #475569;
}

.dark-theme .badge-neutral {
  background: #475569;
  color: #CBD5E1;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.card {
  padding: 20px;
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  transition: all 0.2s;
}

.dark-theme .card {
  background: #0F172A;
  border-color: #475569;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.card-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #64748B;
}

.dark-theme .card-title {
  color: #94A3B8;
}

.card-icon {
  font-size: 24px;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-value {
  font-size: 32px;
  font-weight: 700;
  color: #0F172A;
}

.dark-theme .card-value {
  color: #F1F5F9;
}

.card-change {
  font-size: 14px;
  font-weight: 600;
}

.card-change.positive {
  color: #10B981;
}

.card-change.negative {
  color: #EF4444;
}
</style>
