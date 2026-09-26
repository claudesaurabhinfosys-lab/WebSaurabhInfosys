import { BLOG_POSTS, PORTFOLIO_PROJECTS, SERVICES } from "./data";

/**
 * Topic clusters for internal linking. Every blog category and project
 * category belongs to one service, so a service page can surface its work and
 * articles, and every post and case study can point back at its service —
 * services, work and writing reinforce each other instead of sitting apart.
 */
const BLOG_SERVICE: Record<string, string> = {
  "AI App Fixes": "app-development",
  "Mobile Development": "app-development",
  Technology: "app-development",
  "AI Development": "ai-automation-services",
  "AI Automation": "ai-automation-services",
  "Artificial Intelligence": "ai-automation-services",
  "AI Integration": "integration-services",
};

const PROJECT_SERVICE: Record<string, string> = {
  AI: "ai-automation-services",
  SaaS: "white-label-software",
};
const DEFAULT_SERVICE = "app-development";

export function serviceForBlogCategory(category: string) {
  return BLOG_SERVICE[category] ?? DEFAULT_SERVICE;
}

export function serviceForProjectCategory(category: string) {
  return PROJECT_SERVICE[category] ?? DEFAULT_SERVICE;
}

export function serviceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

/**
 * `count` items related to the one at `index`: the very next item, then the
 * same group, then the rest — all walked cyclically from just after `index`.
 * Always including the next item chains the whole list together, so every
 * post or project — even one alone in its category — is linked from its
 * neighbour; the first few can never soak up every link.
 */
function related<T>(items: T[], index: number, sameGroup: (item: T) => boolean, count: number) {
  const order = items.map((_, i) => items[(index + 1 + i) % items.length]).slice(0, items.length - 1);
  const [next, ...after] = order;
  const first = after.filter(sameGroup);
  const rest = after.filter((item) => !sameGroup(item));
  return [next, ...first, ...rest].slice(0, count);
}

export function relatedPosts(slug: string, count = 3) {
  const index = BLOG_POSTS.findIndex((post) => post.slug === slug);
  if (index < 0) return [];
  const category = BLOG_POSTS[index].category;
  return related(BLOG_POSTS, index, (post) => post.category === category, count);
}

export function relatedProjects(slug: string, count = 2) {
  const index = PORTFOLIO_PROJECTS.findIndex((project) => project.slug === slug);
  if (index < 0) return [];
  const category = PORTFOLIO_PROJECTS[index].category;
  return related(PORTFOLIO_PROJECTS, index, (project) => project.category === category, count);
}

/** Case studies for a service page — ones with real images first. */
export function projectsForService(serviceSlug: string, count = 3) {
  return PORTFOLIO_PROJECTS.filter((project) => serviceForProjectCategory(project.category) === serviceSlug)
    .toSorted((a, b) => Number(Boolean(b.images?.length)) - Number(Boolean(a.images?.length)))
    .slice(0, count);
}

export function postsForService(serviceSlug: string, count = 3) {
  return BLOG_POSTS.filter((post) => serviceForBlogCategory(post.category) === serviceSlug).slice(0, count);
}
