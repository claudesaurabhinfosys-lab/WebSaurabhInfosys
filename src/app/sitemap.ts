import type { MetadataRoute } from "next";

const BASE = "https://saurabhinfosys.com";

const BLOG_SLUGS = [
  "agentic-ai-vs-chatbots",
  "aiinwebdevelopment2025",
  "ai-transforming-web-development-2025",
  "designsystemsconsistentuiux",
  "discuss-how-custom-graphics-and-visuals-elevate-a-websites-design",
  "discuss-how-website-speed-affects-user-retention-seo-rankings-and-overall-performance",
  "discuss-the-advantages-and-limitations-of-using-wordpress-for-ecommerce-websites",
  "emergingtechstacks2025",
  "explore-how-good-uiux-design-can-significantly-affect-user-satisfaction",
  "flutter-ai-enabled-apps",
  "fluttervsreactnative",
  "flutter-vs-react-native-2025",
  "futureofseo2025",
  "futuresoftwaredevelopment2025",
  "future-software-development-emerging-tech",
  "google-gemma-4-vs-chatgpt",
  "google-signin-in-flutter",
  "how-to-integrate-ai-existing-software",
  "laravel-livewire-dynamic-applications",
  "laravelvsdotnet",
  "mobile-first-development-2025",
  "mobilefirstdevelopment2025",
  "nodejsvsphp",
  "progressivewebapps2025",
  "pwa-essential-2025",
  "the-future-of-flutter",
  "the-future-of-nodejs",
  "the-importance-of-quality-assurance-in-web-and-mobile-app-development",
  "top-ai-automation-use-cases-india",
  "userexperiencecriticalbusinesssuccess2025",
  "vuejsvsangular",
  "what-is-vibe-coding",
  "whatsapp-ai-bot-indian-business",
  "whychooseflutter2025",
  "why-flutter-2025",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
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
    { url: `${BASE}/usa`,                                 lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/singapore`,                           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
