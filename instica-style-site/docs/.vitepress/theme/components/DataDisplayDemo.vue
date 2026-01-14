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
      <!-- Image Gallery -->>
      <div class="demo-section">
        <h4>Image Gallery with Carousel</h4>
        
        <!-- Main Carousel -->
        <div class="photo-carousel">
          <div class="carousel-container">
            <img :src="`https://via.placeholder.com/400x280/4F46E5/FFFFFF?text=Photo+${activeGalleryIndex + 1}`" :alt="`Photo ${activeGalleryIndex + 1}`" class="carousel-image" />
            
            <div class="carousel-gradient"></div>
            
            <div class="carousel-indicators">
              <span v-for="i in 4" :key="i" class="indicator" :class="{ active: activeGalleryIndex === i - 1 }"></span>
            </div>
            
            <button class="carousel-fullscreen-btn">
              ⛶ Full Screen
            </button>
          </div>
          
          <div class="carousel-counter">
            <span class="counter-text">{{ activeGalleryIndex + 1 }} of 4 photos</span>
            <div class="counter-actions">
              <button class="counter-btn">⊞ View Gallery</button>
              <button class="counter-btn">+ Add Photos</button>
            </div>
          </div>
        </div>
        
        <!-- Thumbnail Strip -->
        <div class="thumbnail-section">
          <label class="thumbnail-label">Preview deck</label>
          <div class="thumbnail-strip">
            <button 
              v-for="i in 4" 
              :key="i"
              class="thumbnail"
              :class="{ 
                'thumbnail-hero': i === 1,
                active: activeGalleryIndex === i - 1 
              }"
              @click="activeGalleryIndex = i - 1"
            >
              <img :src="`https://via.placeholder.com/${i === 1 ? '180' : '80'}x120/4F46E5/FFFFFF?text=${i}`" :alt="`Photo ${i}`" />
              <div v-if="i === 1" class="thumbnail-overlay">
                <div class="thumbnail-meta">
                  <span class="thumbnail-title">Photo {{ i }}</span>
                  <span class="thumbnail-subtitle">Hero image</span>
                </div>
              </div>
            </button>
            
            <button class="thumbnail thumbnail-add">
              <span class="add-icon">+</span>
              <span class="add-label">Add</span>
            </button>
          </div>
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
const activeGalleryIndex = ref(0)

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
  background: white;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.04);
}

.dark-theme .table-wrapper {
  background: #0B1220;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35), 0 8px 24px rgba(0, 0, 0, 0.35);
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  font-variant-numeric: tabular-nums;
}

.dark-theme .data-table {
  background: #0B1220;
}

.data-table th {
  text-align: left;
  padding: 16px 20px;
  font-size: 13px;
  font-weight: 600;
  color: #64748B;
  background: #F8FAFC;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.dark-theme .data-table th {
  background: #111827;
  color: #94A3B8;
}

.data-table td {
  padding: 16px 20px;
  font-size: 15px;
  color: #0F172A;
}

.dark-theme .data-table td {
  color: #F1F5F9;
}

.data-table tbody tr {
  transition: background-color 0.15s ease;
}

.data-table tbody tr:nth-child(even) {
  background: #F8FAFC;
}

.dark-theme .data-table tbody tr:nth-child(even) {
  background: #0B1220;
}

.data-table tbody tr:nth-child(odd) {
  background: white;
}

.dark-theme .data-table tbody tr:nth-child(odd) {
  background: #111827;
}

.data-table tbody tr:hover {
  background: #EEF2FF !important;
}

.dark-theme .data-table tbody tr:hover {
  background: #1E293B !important;
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

/* Gallery Carousel */
.photo-carousel {
  width: 100%;
  margin-bottom: 16px;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  background: #F8FAFC;
}

.dark-theme .carousel-container {
  background: #1E293B;
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
  z-index: 2;
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
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

.carousel-fullscreen-btn:hover {
  background: rgba(0, 0, 0, 0.85);
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.carousel-counter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 4px;
  font-size: 13px;
  color: #64748B;
}

.dark-theme .carousel-counter {
  color: #94A3B8;
}

.counter-text {
  font-size: 13px;
}

.counter-actions {
  display: flex;
  gap: 8px;
}

.counter-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 13px;
  font-weight: 600;
  color: #4F46E5;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.dark-theme .counter-btn {
  color: #818CF8;
}

.counter-btn:hover {
  opacity: 0.8;
}

/* Thumbnail Strip */
.thumbnail-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
}

.thumbnail-label {
  font-size: 13px;
  color: #64748B;
  font-weight: 500;
}

.dark-theme .thumbnail-label {
  color: #94A3B8;
}

.thumbnail-strip {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.thumbnail {
  position: relative;
  flex-shrink: 0;
  width: 80px;
  height: 120px;
  border-radius: 16px;
  overflow: hidden;
  background: #F1F5F9;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
}

.dark-theme .thumbnail {
  background: #334155;
}

.thumbnail:hover {
  border-color: #CBD5E1;
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.dark-theme .thumbnail:hover {
  border-color: #64748B;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.thumbnail.active {
  border-color: #4F46E5;
  box-shadow: 0 12px 24px rgba(79, 70, 229, 0.15);
  transform: translateY(-4px) scale(1.05);
}

.dark-theme .thumbnail.active {
  border-color: #818CF8;
  box-shadow: 0 12px 24px rgba(129, 140, 248, 0.2);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.thumbnail:hover img {
  transform: scale(1.1);
}

.thumbnail-hero {
  width: 180px;
  height: 120px;
}

.thumbnail-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.65));
  transition: opacity 0.3s ease;
}

.thumbnail:hover .thumbnail-overlay {
  opacity: 0.85;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #4F46E5;
  background: #F8FAFC;
}

.dark-theme .thumbnail-add {
  background: #1E293B;
  color: #818CF8;
}

.thumbnail-add:hover {
  background: #F1F5F9;
  border-color: #4F46E5;
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(79, 70, 229, 0.15);
}

.dark-theme .thumbnail-add:hover {
  background: #334155;
  border-color: #818CF8;
  box-shadow: 0 8px 16px rgba(129, 140, 248, 0.2);
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
}

.add-icon {
  font-size: 20px;
}

.add-label {
  font-size: 12px;
  font-weight: 600;
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
