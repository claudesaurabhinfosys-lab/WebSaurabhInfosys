import PortfolioPage from "@/components/stodio/portfolio";
import { workImage } from "@/components/stodio/lib/work-images";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from "@/lib/data";

export default function Page() {
  const projects = PORTFOLIO_PROJECTS.map((project, index) => ({
    slug: project.slug,
    title: project.title,
    category: project.category,
    image: workImage(project.images, index, 0),
  }));
  return <PortfolioPage projects={projects} categories={PORTFOLIO_CATEGORIES} />;
}
