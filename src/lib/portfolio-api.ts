import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES, type PortfolioProject } from "./data";
import { SITE_CONFIG } from "./constants";

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

export interface PortfolioFilterParams {
  category?: string | null;
  tech?: string | null;
  search?: string | null;
  hasImages?: boolean | null;
  slug?: string | null;
  id?: number | null;
  sort?: "id_asc" | "id_desc" | "title_asc" | "title_desc" | "images_desc" | null;
  page?: number | null;
  limit?: number | null;
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
    availableCategories: readonly string[];
    totalProjectsInDatabase: number;
    totalProjectsWithImages: number;
    baseUrl: string;
    documentation: {
      endpoints: {
        all: "/api/portfolio";
        single: "/api/portfolio/[slug]";
        staticJson: "/api/portfolio.json";
        dynamicQueryPhp: "/api/portfolio.php?page=1&limit=10&category=AI&search=keyword";
      };
      supportedParams: string[];
    };
  };
}

const BASE_URL = SITE_CONFIG.url.replace(/\/$/, "");

/**
 * Maps an image URL to a structured API image object with metadata.
 */
export function formatApiImage(url: string, index: number): ApiImageItem {
  const filename = url.split("/").pop() || "";
  let role: "cover" | "banner" | "gallery" = "gallery";
  let label = `Gallery Image ${index + 1}`;
  let aspectRatio = "900:640";
  let width = 900;
  let height = 640;

  if (filename.startsWith("01") || index === 0) {
    role = "cover";
    label = "Main Cover Card";
    aspectRatio = "1080:763";
    width = 1080;
    height = 763;
  } else if (filename.startsWith("02") || index === 1) {
    role = "banner";
    label = "Panoramic Hero Banner";
    aspectRatio = "1920:900";
    width = 1920;
    height = 900;
  } else if (filename.startsWith("03") || index === 2) {
    role = "gallery";
    label = "Gallery Detail 1";
    aspectRatio = "900:640";
    width = 900;
    height = 640;
  } else if (filename.startsWith("04") || index === 3) {
    role = "gallery";
    label = "Gallery Detail 2";
    aspectRatio = "900:640";
    width = 900;
    height = 640;
  }

  const cleanUrl = url.startsWith("http") ? url : `${url.startsWith("/") ? "" : "/"}${url}`;
  const absoluteUrl = url.startsWith("http") ? url : `${BASE_URL}${cleanUrl}`;

  return {
    index: index + 1,
    role,
    label,
    url: cleanUrl,
    absoluteUrl,
    aspectRatio,
    width,
    height,
  };
}

/**
 * Formats a project entity into an ApiProjectItem.
 */
export function formatApiProject(project: PortfolioProject): ApiProjectItem {
  const rawImages: string[] = project.images || [];
  const images = rawImages.map((img: string, idx: number) => formatApiImage(img, idx));

  return {
    id: project.id,
    slug: project.slug,
    title: project.title,
    category: project.category,
    description: project.description,
    overview: project.overview || null,
    tech: project.tech,
    highlights: project.highlights || [],
    hasImages: images.length > 0,
    imagesCount: images.length,
    images,
    liveUrl: `${BASE_URL}/portfolio/${project.slug}`,
    client: project.client,
    location: project.location,
    year: project.year,
  };
}

/**
 * Returns all formatted projects from the database.
 */
export function getAllApiProjects(): ApiProjectItem[] {
  return PORTFOLIO_PROJECTS.map(formatApiProject);
}

/**
 * Finds a single project by slug.
 */
export function getApiProjectBySlug(slug: string): ApiProjectItem | null {
  const p = PORTFOLIO_PROJECTS.find(
    (item: PortfolioProject) => item.slug.toLowerCase() === slug.toLowerCase()
  );
  return p ? formatApiProject(p) : null;
}

/**
 * Finds a single project by numeric ID.
 */
export function getApiProjectById(id: number): ApiProjectItem | null {
  const p = PORTFOLIO_PROJECTS.find((item: PortfolioProject) => item.id === id);
  return p ? formatApiProject(p) : null;
}

/**
 * Filters, sorts, and paginates projects according to query parameters.
 */
export function queryApiProjects(params: PortfolioFilterParams = {}): PortfolioApiResponse {
  const allProjects = getAllApiProjects();
  let filtered = [...allProjects];

  // 1. Filter by specific ID
  if (params.id != null && !isNaN(Number(params.id))) {
    const targetId = Number(params.id);
    filtered = filtered.filter((p) => p.id === targetId);
  }

  // 2. Filter by specific Slug
  if (params.slug) {
    const targetSlug = params.slug.trim().toLowerCase();
    filtered = filtered.filter((p) => p.slug.toLowerCase() === targetSlug);
  }

  // 3. Filter by Category
  if (params.category && params.category.toLowerCase() !== "all") {
    const cat = params.category.trim().toLowerCase();
    filtered = filtered.filter((p) => p.category.toLowerCase() === cat);
  }

  // 4. Filter by Tech
  if (params.tech) {
    const t = params.tech.trim().toLowerCase();
    filtered = filtered.filter((p) =>
      p.tech.some((item) => item.toLowerCase().includes(t))
    );
  }

  // 5. Filter by Has Images
  if (params.hasImages === true) {
    filtered = filtered.filter((p) => p.hasImages);
  } else if (params.hasImages === false) {
    filtered = filtered.filter((p) => !p.hasImages);
  }

  // 6. Search keyword
  if (params.search && params.search.trim()) {
    const q = params.search.trim().toLowerCase();
    filtered = filtered.filter((p) => {
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchOverview = p.overview ? p.overview.toLowerCase().includes(q) : false;
      const matchTech = p.tech.some((t) => t.toLowerCase().includes(q));
      const matchHighlights = p.highlights.some((h) => h.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchOverview || matchTech || matchHighlights;
    });
  }

  // 7. Sort
  const sortMode = params.sort || "id_asc";
  filtered.sort((a, b) => {
    switch (sortMode) {
      case "id_desc":
        return b.id - a.id;
      case "title_asc":
        return a.title.localeCompare(b.title);
      case "title_desc":
        return b.title.localeCompare(a.title);
      case "images_desc":
        return b.imagesCount - a.imagesCount || a.id - b.id;
      case "id_asc":
      default:
        return a.id - b.id;
    }
  });

  const total = filtered.length;

  // 8. Pagination handling
  const isAll = params.limit != null && Number(params.limit) <= 0;
  const rawLimit = params.limit == null ? 12 : Number(params.limit);
  const limit = isAll ? total : Math.max(1, Math.min(100, isNaN(rawLimit) ? 12 : rawLimit));

  const rawPage = params.page == null ? 1 : Number(params.page);
  const page = Math.max(1, isNaN(rawPage) ? 1 : rawPage);

  const totalPages = isAll || limit === 0 ? (total > 0 ? 1 : 0) : Math.ceil(total / limit);

  const startIndex = (page - 1) * limit;
  const paginatedData = isAll ? filtered : filtered.slice(startIndex, startIndex + limit);

  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1 && totalPages > 0;

  return {
    success: true,
    data: paginatedData,
    pagination: {
      total,
      page,
      limit: isAll ? total : limit,
      totalPages,
      hasNextPage,
      hasPrevPage,
      nextPage: hasNextPage ? page + 1 : null,
      prevPage: hasPrevPage ? page - 1 : null,
    },
    filters: {
      category: params.category || null,
      tech: params.tech || null,
      search: params.search || null,
      hasImages: params.hasImages ?? null,
      sort: sortMode,
    },
    meta: {
      availableCategories: PORTFOLIO_CATEGORIES,
      totalProjectsInDatabase: allProjects.length,
      totalProjectsWithImages: allProjects.filter((p) => p.hasImages).length,
      baseUrl: BASE_URL,
      documentation: {
        endpoints: {
          all: "/api/portfolio",
          single: "/api/portfolio/[slug]",
          staticJson: "/api/portfolio.json",
          dynamicQueryPhp: "/api/portfolio.php?page=1&limit=10&category=AI&search=keyword",
        },
        supportedParams: [
          "page (integer, default: 1)",
          "limit (integer 1-100 or 0 for all, default: 12)",
          "category (string, e.g. AI, Custom Dev, Health, Transport)",
          "tech (string, e.g. Flutter, React, Next.js, Node.js)",
          "search (string, search across title, description, tech, highlights)",
          "has_images (boolean: true | false)",
          "slug (string, fetch single project by slug)",
          "id (integer, fetch single project by id)",
          "sort (id_asc | id_desc | title_asc | title_desc | images_desc)",
        ],
      },
    },
  };
}
