#!/usr/bin/env node
/**
 * Icon generation script for Instica design system.
 * Generates soft 3D icons using OpenAI's gpt-image-1.5 model.
 */

const fs = require('fs');
const path = require('path');

// Ensure fetch is available (Node 18+)
if (typeof fetch !== 'function') {
  console.error('❌ Fetch API not available. Please use Node 18+ or add a fetch polyfill.');
  process.exit(1);
}

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error('❌ Error: OPENAI_API_KEY environment variable not set');
  process.exit(1);
}

const OUTPUT_ROOT = path.join(__dirname, '..', 'instica-style-site', 'docs', 'public', 'icons');

const PROMPT_TEMPLATE = ({ concept, gradient }) => `Create a ${concept} icon with these specifications:

Style & Appearance:
- Soft 3D illustration style with subtle depth and dimension
- Clean, modern, professional aesthetic
- Smooth surfaces and polished finish
- ${gradient} color scheme

Composition:
- Single cohesive object, not multiple separate elements
- Centered in frame, filling 65-70% of the canvas
- Clear silhouette that's recognizable at any size
- Adequate negative space for breathing room

Technical Requirements:
- Fully transparent background (alpha=0, no white/cream backgrounds)
- High contrast between icon and transparency
- Sharp, clean edges
- Optimized for both light and dark UI backgrounds

Visual Inspiration:
- Dribbble UI icon best practices
- Contemporary app icon design
- Material Design principles
- iOS/macOS icon guidelines

Avoid:
- Multiple disconnected objects
- Busy or cluttered compositions
- Flat 2D design (needs dimensional depth)
- Drop shadows or glows
- Text or labels`;

const ICONS = [
  // Navigation
  { name: 'products-catalog', concept: '3D cube box with subtle shine and dimension', gradient: 'vibrant blue-to-purple gradient', category: 'navigation' },
  { name: 'inventory-list', concept: 'checklist document with items and checkmarks', gradient: 'bright teal-to-turquoise gradient', category: 'navigation' },
  { name: 'marketplaces', concept: 'storefront building with awning', gradient: 'warm orange-to-coral gradient', category: 'navigation' },
  { name: 'analytics-reports', concept: 'bar chart with ascending trend arrows', gradient: 'bright cyan-to-blue gradient', category: 'navigation' },
  { name: 'settings', concept: 'gear mechanism with depth and dimension', gradient: 'cool gray-to-slate gradient', category: 'navigation' },
  { name: 'user-profile', concept: 'circular avatar badge with person silhouette', gradient: 'vibrant purple-to-magenta gradient', category: 'navigation' },
  // Actions
  { name: 'edit-modify', concept: 'fountain pen with elegant tip', gradient: 'bright blue-to-cyan gradient', category: 'actions' },
  { name: 'delete-remove', concept: 'trash bin with lid', gradient: 'vibrant red-to-rose gradient', category: 'actions' },
  { name: 'search-find', concept: 'magnifying glass with handle', gradient: 'bright teal-to-emerald gradient', category: 'actions' },
  { name: 'filter-sort', concept: 'funnel with gradient flow', gradient: 'vibrant purple-to-indigo gradient', category: 'actions' },
  { name: 'refresh-sync', concept: 'circular arrows forming continuous loop', gradient: 'bright blue-to-sky gradient', category: 'actions' },
  { name: 'download-export', concept: 'downward arrow into open folder', gradient: 'vibrant green-to-emerald gradient', category: 'actions' },
  // Status
  { name: 'success-complete', concept: 'checkmark badge with shine', gradient: 'vibrant green-to-emerald gradient', category: 'status' },
  { name: 'warning-caution', concept: 'triangle with exclamation mark', gradient: 'bright yellow-to-amber gradient', category: 'status' },
  { name: 'error-failed', concept: 'X symbol in circle badge', gradient: 'vibrant red-to-rose gradient', category: 'status' },
  { name: 'in-progress-pending', concept: 'hourglass with flowing sand', gradient: 'bright blue-to-indigo gradient', category: 'status' },
  { name: 'information-help', concept: 'information i symbol in circle', gradient: 'bright blue-to-sky gradient', category: 'status' },
  // Features
  { name: 'bulk-actions', concept: 'stack of cards or documents layered', gradient: 'vibrant purple-to-violet gradient', category: 'features' },
  { name: 'share-export-listing', concept: 'connected nodes with share arrow', gradient: 'vibrant pink-to-purple gradient', category: 'features' },
  { name: 'notifications-alerts', concept: 'bell with notification dot badge', gradient: 'warm orange-to-amber gradient', category: 'features' },
  { name: 'orders-fulfillment', concept: 'package box with shipping label', gradient: 'bright blue-to-cyan gradient', category: 'features' },
  { name: 'revenue-sales', concept: 'money bag with dollar symbol', gradient: 'bright gold-to-yellow gradient', category: 'features' },
  // Content
  { name: 'image-photo', concept: 'picture frame with landscape scene', gradient: 'vibrant blue-to-purple gradient', category: 'content' },
  { name: 'document-file', concept: 'document sheet with text lines', gradient: 'cool gray-to-slate gradient', category: 'content' },
  { name: 'video', concept: 'play button on video screen', gradient: 'vibrant red-to-pink gradient', category: 'content' }
];

async function generateIcon(icon, index, total) {
  console.log(`\n[${index + 1}/${total}] Generating: ${icon.name}`);
  const prompt = PROMPT_TEMPLATE({ concept: icon.concept, gradient: icon.gradient });

  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-image-1.5',
        prompt,
        size: '1024x1024',
        quality: 'high',
        n: 1
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`API error ${response.status}: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const payload = data?.data?.[0];
    if (!payload) {
      throw new Error('Missing image data in response');
    }

    let buffer;
    if (payload.url) {
      const imageResp = await fetch(payload.url);
      if (!imageResp.ok) {
        throw new Error(`Download failed: ${imageResp.status}`);
      }
      const arr = await imageResp.arrayBuffer();
      buffer = Buffer.from(arr);
    } else if (payload.b64_json) {
      buffer = Buffer.from(payload.b64_json, 'base64');
    } else {
      throw new Error('No url or base64 data present');
    }

    const categoryDir = path.join(OUTPUT_ROOT, icon.category);
    fs.mkdirSync(categoryDir, { recursive: true });
    const outPath = path.join(categoryDir, `${icon.name}.png`);
    fs.writeFileSync(outPath, buffer);
    const sizeKB = (buffer.byteLength / 1024).toFixed(1);
    console.log(`   ✓ Saved ${outPath} (${sizeKB} KB)`);
    return true;
  } catch (err) {
    console.error(`   ✗ Error: ${err.message}`);
    return false;
  }
}

(async () => {
  console.log('🚀 Starting icon generation (gpt-image-1.5)');
  console.log(`📁 Output: ${OUTPUT_ROOT}`);
  console.log(`🎯 Total icons: ${ICONS.length}`);

  let success = 0;
  for (let i = 0; i < ICONS.length; i++) {
    const ok = await generateIcon(ICONS[i], i, ICONS.length);
    if (ok) success += 1;
  }

  console.log('\n============================================================');
  console.log(`✅ Successfully generated: ${success}/${ICONS.length}`);
  console.log(`❌ Failed: ${ICONS.length - success}`);
  console.log('============================================================');
})();
