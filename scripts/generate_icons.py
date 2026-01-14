#!/usr/bin/env python3
"""
Icon generation script for Instica design system.
Generates 3D illustrated icons using OpenAI's DALL-E 3 API.
"""

import os
import sys
import json
import requests
from pathlib import Path

# Initialize OpenAI API key
API_KEY = os.getenv("OPENAI_API_KEY")
if not API_KEY:
    print("❌ Error: OPENAI_API_KEY environment variable not set")
    sys.exit(1)

# Base prompt template
PROMPT_TEMPLATE = """Create a {concept} icon with these specifications:

Style & Appearance:
- Soft 3D illustration style with subtle depth and dimension
- Clean, modern, professional aesthetic
- Smooth surfaces and polished finish
- {gradient_description} color scheme

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
- Text or labels"""

# Icon specifications
ICONS = [
    # Phase 1: Navigation & Core Actions
    {
        "name": "products-catalog",
        "concept": "3D cube box with subtle shine and dimension",
        "gradient": "vibrant blue-to-purple gradient",
        "colors": ["#4F46E5", "#7C3AED"],
        "category": "navigation",
        "use_case": "Products list navigation"
    },
    {
        "name": "inventory-list",
        "concept": "checklist document with items and checkmarks",
        "gradient": "bright teal-to-turquoise gradient",
        "colors": ["#14B8A6", "#2DD4BF"],
        "category": "navigation",
        "use_case": "Inventory section navigation"
    },
    {
        "name": "marketplaces",
        "concept": "storefront building with awning",
        "gradient": "warm orange-to-coral gradient",
        "colors": ["#F97316", "#FB923C"],
        "category": "navigation",
        "use_case": "Marketplace connections hub"
    },
    {
        "name": "analytics-reports",
        "concept": "bar chart with ascending trend arrows",
        "gradient": "bright cyan-to-blue gradient",
        "colors": ["#06B6D4", "#0EA5E9"],
        "category": "navigation",
        "use_case": "Analytics dashboard navigation"
    },
    {
        "name": "settings",
        "concept": "gear mechanism with depth and dimension",
        "gradient": "cool gray-to-slate gradient",
        "colors": ["#64748B", "#94A3B8"],
        "category": "navigation",
        "use_case": "Settings navigation"
    },
    {
        "name": "user-profile",
        "concept": "circular avatar badge with person silhouette",
        "gradient": "vibrant purple-to-magenta gradient",
        "colors": ["#A855F7", "#C084FC"],
        "category": "navigation",
        "use_case": "Profile section"
    },
    
    # Phase 2: Action Icons
    {
        "name": "edit-modify",
        "concept": "fountain pen with elegant tip",
        "gradient": "bright blue-to-cyan gradient",
        "colors": ["#3B82F6", "#06B6D4"],
        "category": "actions",
        "use_case": "Edit buttons, modify actions"
    },
    {
        "name": "delete-remove",
        "concept": "trash bin with lid",
        "gradient": "vibrant red-to-rose gradient",
        "colors": ["#DC2626", "#F43F5E"],
        "category": "actions",
        "use_case": "Delete/remove actions"
    },
    {
        "name": "search-find",
        "concept": "magnifying glass with handle",
        "gradient": "bright teal-to-emerald gradient",
        "colors": ["#14B8A6", "#10B981"],
        "category": "actions",
        "use_case": "Search functionality"
    },
    {
        "name": "filter-sort",
        "concept": "funnel with gradient flow",
        "gradient": "vibrant purple-to-indigo gradient",
        "colors": ["#8B5CF6", "#6366F1"],
        "category": "actions",
        "use_case": "Filtering and sorting controls"
    },
    {
        "name": "refresh-sync",
        "concept": "circular arrows forming continuous loop",
        "gradient": "bright blue-to-sky gradient",
        "colors": ["#0EA5E9", "#38BDF8"],
        "category": "actions",
        "use_case": "Refresh data, sync operations"
    },
    {
        "name": "download-export",
        "concept": "downward arrow into open folder",
        "gradient": "vibrant green-to-emerald gradient",
        "colors": ["#10B981", "#34D399"],
        "category": "actions",
        "use_case": "Export data, download reports"
    },
    
    # Phase 3: Status & Feedback Icons
    {
        "name": "success-complete",
        "concept": "checkmark badge with shine",
        "gradient": "vibrant green-to-emerald gradient",
        "colors": ["#10B981", "#34D399"],
        "category": "status",
        "use_case": "Success messages, completed states"
    },
    {
        "name": "warning-caution",
        "concept": "triangle with exclamation mark",
        "gradient": "bright yellow-to-amber gradient",
        "colors": ["#EAB308", "#F59E0B"],
        "category": "status",
        "use_case": "Warning states"
    },
    {
        "name": "error-failed",
        "concept": "X symbol in circle badge",
        "gradient": "vibrant red-to-rose gradient",
        "colors": ["#DC2626", "#F43F5E"],
        "category": "status",
        "use_case": "Error messages, failed operations"
    },
    {
        "name": "in-progress-pending",
        "concept": "hourglass with flowing sand",
        "gradient": "bright blue-to-indigo gradient",
        "colors": ["#3B82F6", "#6366F1"],
        "category": "status",
        "use_case": "Loading states, pending operations"
    },
    {
        "name": "information-help",
        "concept": "information i symbol in circle",
        "gradient": "bright blue-to-sky gradient",
        "colors": ["#0EA5E9", "#38BDF8"],
        "category": "status",
        "use_case": "Help tooltips, info callouts"
    },
    
    # Phase 4: Feature-Specific Icons
    {
        "name": "bulk-actions",
        "concept": "stack of cards or documents layered",
        "gradient": "vibrant purple-to-violet gradient",
        "colors": ["#8B5CF6", "#A855F7"],
        "category": "features",
        "use_case": "Bulk edit, batch operations"
    },
    {
        "name": "share-export-listing",
        "concept": "connected nodes with share arrow",
        "gradient": "vibrant pink-to-purple gradient",
        "colors": ["#EC4899", "#A855F7"],
        "category": "features",
        "use_case": "Share listings, export to platforms"
    },
    {
        "name": "notifications-alerts",
        "concept": "bell with notification dot badge",
        "gradient": "warm orange-to-amber gradient",
        "colors": ["#F97316", "#FBBF24"],
        "category": "features",
        "use_case": "Notification center, alerts"
    },
    {
        "name": "orders-fulfillment",
        "concept": "package box with shipping label",
        "gradient": "bright blue-to-cyan gradient",
        "colors": ["#3B82F6", "#06B6D4"],
        "category": "features",
        "use_case": "Orders section, fulfillment tracking"
    },
    {
        "name": "revenue-sales",
        "concept": "money bag with dollar symbol",
        "gradient": "bright gold-to-yellow gradient",
        "colors": ["#FBBF24", "#FCD34D"],
        "category": "features",
        "use_case": "Revenue metrics, sales analytics"
    },
    
    # Phase 5: Content Type Icons
    {
        "name": "image-photo",
        "concept": "picture frame with landscape scene",
        "gradient": "vibrant blue-to-purple gradient",
        "colors": ["#4F46E5", "#A855F7"],
        "category": "content",
        "use_case": "Image galleries, photo management"
    },
    {
        "name": "document-file",
        "concept": "document sheet with text lines",
        "gradient": "cool gray-to-slate gradient",
        "colors": ["#64748B", "#94A3B8"],
        "category": "content",
        "use_case": "File attachments, documents"
    },
    {
        "name": "video",
        "concept": "play button on video screen",
        "gradient": "vibrant red-to-pink gradient",
        "colors": ["#DC2626", "#EC4899"],
        "category": "content",
        "use_case": "Video content, tutorials"
    },
]


def generate_icon(icon_spec, output_dir):
    """Generate a single icon using OpenAI API."""
    name = icon_spec["name"]
    concept = icon_spec["concept"]
    gradient_desc = icon_spec["gradient"]
    
    print(f"\n🎨 Generating: {name}")
    print(f"   Concept: {concept}")
    print(f"   Gradient: {gradient_desc}")
    
    prompt = PROMPT_TEMPLATE.format(
        concept=concept,
        gradient_description=gradient_desc
    )
    
    try:
        # Use direct REST API call
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {API_KEY}"
        }
        
        data = {
            "model": "dall-e-3",
            "prompt": prompt,
            "n": 1,
            "size": "1024x1024",
            "quality": "standard"
        }
        
        response = requests.post(
            "https://api.openai.com/v1/images/generations",
            headers=headers,
            json=data,
            timeout=120
        )
        
        if response.status_code != 200:
            print(f"   ❌ API Error: {response.status_code} - {response.text}")
            return False
        
        result = response.json()
        image_url = result['data'][0]['url']
        
        # Download the image
        img_response = requests.get(image_url, timeout=30)
        
        if img_response.status_code == 200:
            # Save to appropriate category directory
            category_dir = output_dir / icon_spec["category"]
            category_dir.mkdir(parents=True, exist_ok=True)
            
            output_path = category_dir / f"{name}.png"
            with open(output_path, 'wb') as f:
                f.write(img_response.content)
            
            print(f"   ✅ Saved to: {output_path}")
            return True
        else:
            print(f"   ❌ Failed to download image")
            return False
            
    except Exception as e:
        print(f"   ❌ Error: {str(e)}")
        return False


def update_icons_json(icons_data):
    """Update the icons.json token file with new icon metadata."""
    tokens_file = Path(__file__).parent.parent / "tokens" / "icons.json"
    
    with open(tokens_file, 'r') as f:
        tokens = json.load(f)
    
    # Add new categories
    for category in ["navigation", "actions", "status", "features", "content"]:
        if category not in tokens["icons"]:
            tokens["icons"][category] = {}
    
    # Add icon metadata
    for icon in icons_data:
        category = icon["category"]
        name = icon["name"]
        
        tokens["icons"][category][name] = {
            "name": name.replace("-", " ").title(),
            "concept": icon["concept"],
            "gradient": icon["gradient"],
            "colors": icon["colors"],
            "useCase": icon["use_case"],
            "file": f"{name}.png"
        }
    
    with open(tokens_file, 'w') as f:
        json.dump(tokens, f, indent=2)
    
    print(f"\n📝 Updated tokens/icons.json")


def main():
    # Check for API key
    if not os.getenv("OPENAI_API_KEY"):
        print("❌ Error: OPENAI_API_KEY environment variable not set")
        sys.exit(1)
    
    # Set output directory
    script_dir = Path(__file__).parent
    output_dir = script_dir.parent / "instica-style-site" / "docs" / "public" / "icons"
    
    print(f"🚀 Starting icon generation")
    print(f"📁 Output directory: {output_dir}")
    print(f"🎯 Total icons to generate: {len(ICONS)}")
    
    # Generate icons
    successful = 0
    failed = 0
    
    for icon in ICONS:
        if generate_icon(icon, output_dir):
            successful += 1
        else:
            failed += 1
    
    print(f"\n{'='*60}")
    print(f"✅ Successfully generated: {successful}/{len(ICONS)} icons")
    if failed > 0:
        print(f"❌ Failed: {failed} icons")
    
    # Update tokens file
    if successful > 0:
        update_icons_json(ICONS)
    
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
