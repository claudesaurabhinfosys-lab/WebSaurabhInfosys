# Saurabh Infosys — Portfolio API Documentation

> **Complete integration guide for external and internal developers.**  
> Everything you need to consume, filter, and render Saurabh Infosys portfolio projects and curated case-study media.

> ⚡ **Quick Reference for Developers:**
> - **Live Portfolio Catalogue:** [`https://saurabhinfosys.vercel.app/api/portfolio.json`](https://saurabhinfosys.vercel.app/api/portfolio.json)
> - **Single Project Example:** [`https://saurabhinfosys.vercel.app/api/portfolio/ai-assist.json`](https://saurabhinfosys.vercel.app/api/portfolio/ai-assist.json)
> - **Image Assets CDN:** `https://saurabhinfosys.vercel.app/images/work/{slug}/{index}.webp`
> - **Format:** Pure JSON, CORS enabled (`*`), zero authentication needed.

---

## 📌 Table of Contents
1. [Overview & Base URLs](#1-overview--base-urls)
2. [Quick Start](#2-quick-start)
3. [API Endpoints Reference](#3-api-endpoints-reference)
   - [3.1 Get All Projects](#31-get-all-projects-catalogue)
   - [3.2 Get Single Project by Slug](#32-get-single-project-by-slug)
   - [3.3 Dynamic Filter & Search (PHP Endpoint)](#33-dynamic-filter--search-php-endpoint)
   - [3.4 Static JSON Fallback](#34-static-json-fallback)
4. [Query Parameters Reference](#4-query-parameters-reference)
5. [Data Schema & Field Descriptions](#5-data-schema--field-descriptions)
   - [Project Object (`ApiProjectItem`)](#project-object-apiprojectitem)
   - [Image Object (`ApiImageItem`)](#image-object-apiimageitem)
   - [Image Roles & Dimensions](#image-roles--dimensions)
6. [TypeScript Interfaces (Copy & Paste)](#6-typescript-interfaces-copy--paste)
7. [How to Display in UI (Step-by-Step UI Guide)](#7-how-to-display-in-ui-step-by-step-ui-guide)
   - [7.1 Portfolio Card (Listing Grid)](#71-portfolio-card-listing-grid)
   - [7.2 Category Filter Tabs](#72-category-filter-tabs)
   - [7.3 Project Detail Page](#73-project-detail-page)
8. [Code Examples](#8-code-examples)
   - [React / Next.js (TypeScript)](#react--nextjs-typescript)
   - [Vanilla JavaScript / Fetch](#vanilla-javascript--fetch)
   - [Flutter / Dart](#flutter--dart)
9. [Error Handling & Edge Cases](#9-error-handling--edge-cases)

---

## 1. Overview & Base URLs

The Portfolio API provides complete access to all Saurabh Infosys portfolio works, client case studies, technologies, highlights, and responsive `.webp` visual assets.

### 🌐 Base URLs
- **Active Vercel URL:** `https://saurabhinfosys.vercel.app`
- **Production URL:** `https://saurabhinfosys.com`
- **Local Development URL:** `http://localhost:3000`

### 🔒 CORS & Security
- **CORS:** Unrestricted (`Access-Control-Allow-Origin: *`).
- **Methods:** `GET`, `OPTIONS`.
- **Authentication:** Public endpoint — **no API keys or authentication required**.
- **Content Type:** `application/json; charset=utf-8`

---

## 2. Quick Start

### Fetch all projects with cURL:
```bash
# Direct JSON endpoint (Recommended for all environments including Vercel/Static CDN)
curl -X GET "https://saurabhinfosys.vercel.app/api/portfolio.json"

# Clean URL endpoint
curl -X GET "https://saurabhinfosys.vercel.app/api/portfolio"
```

### Fetch a specific project (e.g., `ai-assist`):
```bash
# Direct JSON endpoint
curl -X GET "https://saurabhinfosys.vercel.app/api/portfolio/ai-assist.json"

# Clean URL endpoint
curl -X GET "https://saurabhinfosys.vercel.app/api/portfolio/ai-assist"
```

---

## 3. API Endpoints Reference

### 3.1 Get All Projects (Catalogue)
Fetches the entire portfolio catalogue including image asset sets, category definitions, and database metadata.

- **Direct File URL (Recommended for all platforms):** `https://saurabhinfosys.vercel.app/api/portfolio.json`
- **Clean URL:** `https://saurabhinfosys.vercel.app/api/portfolio`
- **Method:** `GET`
- **Format:** JSON

#### Success Response (`200 OK`):
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "slug": "ai-assist",
      "title": "AI Assist",
      "category": "AI",
      "description": "AI-powered educational platform with live tests, instant results, and personalised study material for students.",
      "overview": null,
      "tech": ["Flutter", "OpenAI", "Firebase"],
      "highlights": [
        "OpenAI-powered personalised study paths",
        "Live test engine with instant results and explanations",
        "Progress tracking across subjects and topics",
        "Adaptive difficulty that adjusts to each student's level"
      ],
      "hasImages": true,
      "imagesCount": 4,
      "images": [
        {
          "index": 1,
          "role": "cover",
          "label": "Main Cover Card",
          "url": "/images/work/ai-assist/01.webp",
          "absoluteUrl": "https://saurabhinfosys.com/images/work/ai-assist/01.webp",
          "aspectRatio": "1080:763",
          "width": 1080,
          "height": 763
        },
        {
          "index": 2,
          "role": "banner",
          "label": "Panoramic Hero Banner",
          "url": "/images/work/ai-assist/02.webp",
          "absoluteUrl": "https://saurabhinfosys.com/images/work/ai-assist/02.webp",
          "aspectRatio": "1920:900",
          "width": 1920,
          "height": 900
        },
        {
          "index": 3,
          "role": "gallery",
          "label": "Gallery Detail 1",
          "url": "/images/work/ai-assist/03.webp",
          "absoluteUrl": "https://saurabhinfosys.com/images/work/ai-assist/03.webp",
          "aspectRatio": "900:640",
          "width": 900,
          "height": 640
        },
        {
          "index": 4,
          "role": "gallery",
          "label": "Gallery Detail 2",
          "url": "/images/work/ai-assist/04.webp",
          "absoluteUrl": "https://saurabhinfosys.com/images/work/ai-assist/04.webp",
          "aspectRatio": "900:640",
          "width": 900,
          "height": 640
        }
      ],
      "liveUrl": "https://saurabhinfosys.com/portfolio/ai-assist"
    }
  ],
  "pagination": {
    "total": 58,
    "page": 1,
    "limit": 58,
    "totalPages": 1,
    "hasNextPage": false,
    "hasPrevPage": false,
    "nextPage": null,
    "prevPage": null
  },
  "filters": {
    "category": null,
    "tech": null,
    "search": null,
    "hasImages": null,
    "sort": "id_asc"
  },
  "meta": {
    "availableCategories": [
      "All",
      "AI",
      "Education",
      "Health",
      "Transport",
      "Gig",
      "Fintech",
      "SaaS",
      "NGO",
      "Custom Dev"
    ],
    "totalProjectsInDatabase": 57,
    "totalProjectsWithImages": 38,
    "baseUrl": "https://saurabhinfosys.com"
  }
}
```

---

### 3.2 Get Single Project by Slug
Returns detailed information for a single project, including **Previous** and **Next** project links for seamless pagination/navigation.

- **Direct File URL (Recommended for all platforms):** `https://saurabhinfosys.vercel.app/api/portfolio/:slug.json`
- **Clean URL:** `https://saurabhinfosys.vercel.app/api/portfolio/:slug`
- **Method:** `GET`
- **URL Parameter:** `:slug` (string, e.g. `ai-assist`, `banigi-ai`, `contractor-easy`)

#### Success Response (`200 OK`):
```json
{
  "success": true,
  "data": {
    "id": 1,
    "slug": "ai-assist",
    "title": "AI Assist",
    "category": "AI",
    "description": "AI-powered educational platform with live tests, instant results, and personalised study material for students.",
    "overview": null,
    "tech": ["Flutter", "OpenAI", "Firebase"],
    "highlights": [
      "OpenAI-powered personalised study paths",
      "Live test engine with instant results and explanations",
      "Progress tracking across subjects and topics",
      "Adaptive difficulty that adjusts to each student's level"
    ],
    "hasImages": true,
    "imagesCount": 4,
    "images": [
      {
        "index": 1,
        "role": "cover",
        "label": "Main Cover Card",
        "url": "/images/work/ai-assist/01.webp",
        "absoluteUrl": "https://saurabhinfosys.com/images/work/ai-assist/01.webp",
        "aspectRatio": "1080:763",
        "width": 1080,
        "height": 763
      }
    ],
    "liveUrl": "https://saurabhinfosys.com/portfolio/ai-assist"
  },
  "navigation": {
    "prev": null,
    "next": {
      "id": 2,
      "slug": "banigi-ai",
      "title": "Banigi AI"
    }
  }
}
```

#### Not Found Response (`404 Not Found`):
```json
{
  "success": false,
  "error": "Project with slug 'unknown-slug' was not found."
}
```

---

### 3.3 Dynamic Filter & Search (PHP Endpoint)
On Apache/cPanel production hosting, query params can be used for server-side filtering, searching, and pagination.

- **URL:** `https://saurabhinfosys.com/api/portfolio.php`
- **Method:** `GET`

#### Example Requests:
```http
# Filter by category
GET /api/portfolio.php?category=AI

# Filter by technology stack
GET /api/portfolio.php?tech=Flutter

# Keyword search across title, description & highlights
GET /api/portfolio.php?search=education

# Pagination
GET /api/portfolio.php?page=1&limit=6

# Fetch only projects that have curated webp screenshots
GET /api/portfolio.php?has_images=true

# Combined query with sorting
GET /api/portfolio.php?category=AI&sort=title_asc&page=1&limit=10
```

---

### 3.4 Static JSON Fallback
If you are deploying a static site generator or need a static fallback file hosted directly on CDN/cPanel:
- **URL:** `https://saurabhinfosys.com/api/portfolio.json`
- **Method:** `GET`
- **Description:** Pre-rendered static JSON with all projects and category metadata.

---

## 4. Query Parameters Reference

When querying `portfolio.php` (or client-side filtering via utility):

| Parameter | Type | Default | Description | Example |
| :--- | :--- | :--- | :--- | :--- |
| `page` | `integer` | `1` | Page number for pagination. | `?page=2` |
| `limit` | `integer` | `12` | Items per page (use `0` for all items). | `?limit=6` |
| `category` | `string` | `null` | Filter by category name (case-insensitive). | `?category=AI` |
| `tech` | `string` | `null` | Filter projects containing this technology. | `?tech=Flutter` |
| `search` | `string` | `null` | Keyword match on title, description, and highlights. | `?search=platform` |
| `has_images` | `boolean` | `null` | Filter projects having images (`true` or `false`). | `?has_images=true` |
| `slug` | `string` | `null` | Lookup single project by its slug. | `?slug=ai-assist` |
| `id` | `integer` | `null` | Lookup single project by numeric ID. | `?id=1` |
| `sort` | `string` | `id_asc` | Sorting criteria: `id_asc`, `id_desc`, `title_asc`, `title_desc`, `images_desc` | `?sort=title_asc` |

---

## 5. Data Schema & Field Descriptions

### Project Object (`ApiProjectItem`)

| Field | Type | Description | How to Use |
| :--- | :--- | :--- | :--- |
| `id` | `number` | Unique numeric identifier. | React list `key={project.id}` |
| `slug` | `string` | URL-friendly slug. | Generate detail link: `/portfolio/${slug}` |
| `title` | `string` | Project name. | Card heading / Page `<h1>` |
| `category` | `string` | Industry/domain (`AI`, `Fintech`, `Health`, etc.). | Badge / Filter pill |
| `description` | `string` | Short 1–2 sentence summary. | Card summary or hero intro paragraph |
| `overview` | `string \| null`| Detailed project brief (if available). | Extended description / Case study body |
| `tech` | `string[]` | Array of technologies used. | Tech stack pills (e.g. `Flutter`, `Firebase`) |
| `highlights` | `string[]` | Key features and outcomes. | Bulleted checklist in detail view |
| `hasImages` | `boolean` | Whether project has image assets. | Conditional gallery rendering |
| `imagesCount` | `number` | Total number of images for this project. | Badges (e.g., "4 photos") |
| `images` | `ApiImageItem[]` | Array of image asset objects. | Render cover, banner, and gallery |
| `liveUrl` | `string` | Absolute link to the project on saurabhinfosys.com. | Canonical link / External reference |
| `client` | `string \| optional` | Client name (or 'Confidential'). | Meta stats block |
| `year` | `string \| optional` | Completion year (e.g. '2025'). | Meta stats block |
| `location` | `string \| optional` | Client location (e.g. 'United States'). | Meta stats block |

---

### Image Object (`ApiImageItem`)

Each item in `project.images` is already structured with optimal aspect ratios and responsive dimensions:

```json
{
  "index": 1,
  "role": "cover",
  "label": "Main Cover Card",
  "url": "/images/work/ai-assist/01.webp",
  "absoluteUrl": "https://saurabhinfosys.com/images/work/ai-assist/01.webp",
  "aspectRatio": "1080:763",
  "width": 1080,
  "height": 763
}
```

| Field | Type | Description | Best Practice |
| :--- | :--- | :--- | :--- |
| `index` | `number` | Sequence index (1-based: 1, 2, 3, 4). | Ordering |
| `role` | `string` | `"cover"` \| `"banner"` \| `"gallery"` | Defines where to place this image in the UI! |
| `label` | `string` | Friendly human-readable label. | Tooltip or accessible `alt` text |
| `url` | `string` | Relative path starting with `/`. | Use if your app is hosted on the same domain |
| `absoluteUrl` | `string` | Fully-qualified URL with `https://...`. | Use for direct linking |
| `aspectRatio` | `string` | Aspect ratio string (e.g. `1080:763`). | Prevents layout shift (CLS) in CSS/React |
| `width` | `number` | Intrinsic pixel width. | Pass to `next/image` or `<img width={...}>` |
| `height` | `number` | Intrinsic pixel height. | Pass to `next/image` or `<img height={...}>` |

> 💡 **Image Resolution Tip:**  
> To guarantee images always load on external apps, websites, or Flutter/mobile apps, resolve the image URL using:  
> `const fullImageUrl = image.url.startsWith('http') ? image.url : 'https://saurabhinfosys.vercel.app' + image.url;`  
> All WebP assets are served directly from Vercel's fast global CDN.

---

### Image Roles & Dimensions

The images are pre-optimized in WebP format with dedicated roles:

```
┌────────────────────────────────────────────────────────┐
│ role: "cover"                                          │
│ Dimension: 1080 x 763 px  (Aspect: ~1.41:1)            │
│ Usage: Main card preview on portfolio grid & hero      │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│ role: "banner"                                         │
│ Dimension: 1920 x 900 px  (Panoramic wide banner)     │
│ Usage: Full-width hero banner underneath intro         │
└────────────────────────────────────────────────────────┘

┌────────────────────────────┐┌───────────────────────────┐
│ role: "gallery" (Index 3)   ││ role: "gallery" (Index 4)  │
│ Dimension: 900 x 640 px    ││ Dimension: 900 x 640 px   │
│ Usage: 2-column screenshot ││ Usage: 2-column screenshot│
└────────────────────────────┘└───────────────────────────┘
```

> **Image Helper Tip:**
> - To get the cover image: `project.images.find(img => img.role === 'cover') || project.images[0]`
> - To get the banner: `project.images.find(img => img.role === 'banner') || project.images[1]`
> - To get gallery shots: `project.images.filter(img => img.role === 'gallery')`

---

## 6. TypeScript Interfaces (Copy & Paste)

Copy this into your frontend project (e.g. `types/portfolio.ts`):

```typescript
export interface ApiImageItem {
  index: number;
  role: "cover" | "banner" | "gallery";
  label: string;
  url: string;
  absoluteUrl: string;
  aspectRatio: string;
  width: number;
  height: number;
}

export interface ApiProjectItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  overview: string | null;
  tech: string[];
  highlights: string[];
  hasImages: boolean;
  imagesCount: number;
  images: ApiImageItem[];
  liveUrl: string;
  client?: string;
  location?: string;
  year?: string;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
}

export interface PortfolioApiResponse {
  success: boolean;
  data: ApiProjectItem[];
  pagination: PaginationMeta;
  filters: {
    category: string | null;
    tech: string | null;
    search: string | null;
    hasImages: boolean | null;
    sort: string;
  };
  meta: {
    availableCategories: string[];
    totalProjectsInDatabase: number;
    totalProjectsWithImages: number;
    baseUrl: string;
  };
}

export interface SingleProjectResponse {
  success: boolean;
  data: ApiProjectItem;
  navigation: {
    prev: { id: number; slug: string; title: string } | null;
    next: { id: number; slug: string; title: string } | null;
  };
}
```

---

## 7. How to Display in UI (Step-by-Step UI Guide)

### 7.1 Portfolio Card (Listing Grid)

When rendering a project card inside a 2-column or 3-column grid:

```
+------------------------------------------+
|  [Cover Image: 1080x763 webp]            |
|                                          |
+------------------------------------------+
|  CATEGORY BADGE (e.g. AI / Fintech)      |
|  Project Title                           |
|  Short description paragraph...          |
|  [Flutter] [OpenAI] [Firebase] (Tags)    |
+------------------------------------------+
```

#### What to wire up:
1. **Thumbnail:** Use `img.role === 'cover'` (or fallback to `img[0]`). Always use `image.absoluteUrl` for cross-origin hosting.
2. **Category Badge:** Display `project.category` inside a pill badge (`background: #00A0E315`, `color: #00A0E3`).
3. **Tech Tags:** Loop over `project.tech.slice(0, 3)` so cards stay clean and aligned.
4. **Link:** Navigate to `/portfolio/${project.slug}` on click.

---

### 7.2 Category Filter Tabs

Display filter tabs at the top of the grid using `meta.availableCategories`:
```tsx
const categories = ["All", "AI", "Education", "Health", "Transport", "Fintech", "SaaS"];

<div className="filter-pill-row">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={selectedCategory === cat ? "active" : ""}
    >
      {cat}
    </button>
  ))}
</div>
```

---

### 7.3 Project Detail Page

The project detail page layout maps directly to the API data fields:

```
┌─────────────────────────────────────────────────────────────┐
│  TAG: "Our portfolio"                                       │
│  H1: {project.title}                                        │
│                                                             │
│  META STRIP:                                                │
│  Year: {project.year}       Client: {project.client}        │
│  Category: {project.category}   Tech: {project.tech.join("·")}│
│                                                             │
│  [Hero Cover Image - 1080 x 763]                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  WIDE BANNER: {banner.absoluteUrl} (1920 x 900)             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  SECTION: The Brief                                         │
│  {project.description}                                      │
│  {project.overview}                                         │
├─────────────────────────────────────────────────────────────┤
│  SECTION: What We Built (Key Highlights)                    │
│  • {highlight 1}                                            │
│  • {highlight 2}                                            │
│  • {highlight 3}                                            │
├─────────────────────────────────────────────────────────────┤
│  GALLERY GRID (2 Columns):                                  │
│  [ Gallery Shot 1: 900x640 ]   [ Gallery Shot 2: 900x640 ]  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  NAVIGATION:                                                │
│  [← Previous: {navigation.prev.title}]                      │
│                               [Next: {navigation.next.title} →]│
└─────────────────────────────────────────────────────────────┘
```

---

## 8. Code Examples

### React / Next.js (TypeScript)

#### 1. Fetching Projects Hook:
```tsx
// hooks/usePortfolio.ts
import { useEffect, useState } from "react";
import type { PortfolioApiResponse, ApiProjectItem } from "@/types/portfolio";

export function usePortfolio(category?: string) {
  const [projects, setProjects] = useState<ApiProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        // Uses the active Vercel static JSON endpoint
        const res = await fetch("https://saurabhinfosys.vercel.app/api/portfolio.json");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        
        const json: PortfolioApiResponse = await res.json();
        let list = json.data;

        if (category && category !== "All") {
          list = list.filter((p) => p.category.toLowerCase() === category.toLowerCase());
        }

        setProjects(list);
      } catch (err: any) {
        setError(err.message || "Failed to load projects");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [category]);

  return { projects, loading, error };
}
```

#### 2. Project Card Component:
```tsx
// components/ProjectCard.tsx
import React from "react";
import type { ApiProjectItem } from "@/types/portfolio";

export function ProjectCard({ project }: { project: ApiProjectItem }) {
  const cover = project.images.find((img) => img.role === "cover") || project.images[0];
  
  // Resolve image URL (compatible with active Vercel preview and production)
  const imageUrl = cover 
    ? (cover.url.startsWith("http") ? cover.url : `https://saurabhinfosys.vercel.app${cover.url}`)
    : "";

  return (
    <a
      href={`/portfolio/${project.slug}`}
      className="block rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-xl transition duration-300"
    >
      {/* Responsive Cover Container */}
      <div className="relative aspect-[1080/763] w-full bg-slate-100 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={cover?.label || project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-slate-400">
            No preview available
          </div>
        )}
      </div>

      {/* Content Block */}
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-sky-50 text-[#00A0E3] mb-3">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
        <p className="text-sm text-slate-600 line-clamp-2 mb-4">{project.description}</p>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
```

---

### Vanilla JavaScript / Fetch
```javascript
// Fetch and render portfolio
async function renderPortfolio() {
  const container = document.getElementById("portfolio-grid");

  try {
    // 1. Fetch from active Vercel endpoint
    const res = await fetch("https://saurabhinfosys.vercel.app/api/portfolio.json");
    const json = await res.json();

    if (!json.success) {
      console.error("API error:", json);
      return;
    }

    // 2. Render cards
    container.innerHTML = json.data
      .map((project) => {
        const cover = project.images.find((img) => img.role === "cover") || project.images[0];
        const imageUrl = cover 
          ? (cover.url.startsWith("http") ? cover.url : `https://saurabhinfosys.vercel.app${cover.url}`)
          : "";

        return `
          <div class="card">
            ${imageUrl ? `<img src="${imageUrl}" alt="${project.title}" loading="lazy" />` : ""}
            <div class="card-body">
              <span class="badge">${project.category}</span>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <a href="/portfolio/${project.slug}">View Case Study &rarr;</a>
            </div>
          </div>
        `;
      })
      .join("");
  } catch (error) {
    console.error("Network error:", error);
  }
}

renderPortfolio();
```

---

### Flutter / Dart

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class Project {
  final int id;
  final String slug;
  final String title;
  final String category;
  final String description;
  final List<String> tech;
  final String? coverImageUrl;

  Project({
    required this.id,
    required this.slug,
    required this.title,
    required this.category,
    required this.description,
    required this.tech,
    this.coverImageUrl,
  });

  factory Project.fromJson(Map<String, dynamic> json) {
    String? coverUrl;
    if (json['images'] != null && (json['images'] as List).isNotEmpty) {
      final images = json['images'] as List;
      final cover = images.firstWhere(
        (img) => img['role'] == 'cover',
        orElse: () => images.first,
      );
      final raw = cover['url'] as String? ?? '';
      coverUrl = raw.startsWith('http') 
          ? raw 
          : 'https://saurabhinfosys.vercel.app$raw';
    }

    return Project(
      id: json['id'],
      slug: json['slug'],
      title: json['title'],
      category: json['category'],
      description: json['description'],
      tech: List<String>.from(json['tech'] ?? []),
      coverImageUrl: coverUrl,
    );
  }
}

Future<List<Project>> fetchPortfolio() async {
  final response = await http.get(
    Uri.parse('https://saurabhinfosys.vercel.app/api/portfolio.json'),
  );

  if (response.statusCode == 200) {
    final Map<String, dynamic> decoded = json.decode(response.body);
    final List list = decoded['data'];
    return list.map((item) => Project.fromJson(item)).toList();
  } else {
    throw Exception('Failed to load portfolio: ${response.statusCode}');
  }
}
```

---

## 9. Error Handling & Edge Cases

| Scenario | Behavior | Recommended Developer Handling |
| :--- | :--- | :--- |
| **Project has no images** (`hasImages: false`) | `images: []` (empty array) | Provide a styled gradient or fallback placeholder illustration. |
| **Slug not found** (e.g. `/api/portfolio/invalid`) | Returns HTTP `404` with `{ success: false, error: "..." }` | Redirect to a 404 page or show an `<EmptyState />` UI. |
| **Cross-Origin Requests (CORS)** | `Access-Control-Allow-Origin: *` is sent on all responses | No proxy needed; you can fetch directly from browser apps. |
| **Localhost vs Production Images** | `absoluteUrl` points to `https://saurabhinfosys.com/images/...` | Always use `absoluteUrl` so images resolve correctly from localhost or external apps. |
| **Prev/Next Navigation Limits** | For first project, `navigation.prev` is `null`. For last project, `navigation.next` is `null`. | Disable or hide previous/next buttons when value is `null`. |

---

## 📞 Support & Contacts
- **Technical Inquiries:** info@saurabhinfosys.com
- **Website:** [https://saurabhinfosys.com](https://saurabhinfosys.com)
- **Primary Brand Color:** `#00A0E3`
