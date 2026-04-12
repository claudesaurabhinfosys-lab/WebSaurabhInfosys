import type { MetadataRoute } from "next";

const BASE = "https://saurabhinfosys.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE,                                          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,                               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`,                             lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/portfolio`,                           lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/services/ai-agents`,                  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/flutter`,                    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/vibe-coding`,                lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/gps`,                        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/saas`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/digital-marketing`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/ssms`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/mysociety`,                  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/products/mysampark`,                  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`,                                lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
  ];
}
