import type { Metadata } from "next";
import { brandTitle, breadcrumbLd, jsonLd, ogImages } from "@/lib/seo";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { PROJECT_META_DESCRIPTIONS } from "@/lib/meta-descriptions";
import ProjectDetailPage from "@/components/stodio/portfolio/project-detail-page";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  const description = PROJECT_META_DESCRIPTIONS[project.slug] ?? project.description;

  return {
    title: brandTitle(`${project.title} — Case Study | Saurabh Infosys`),
    description,
    // Built from the project's own data, so each case study targets its own
    // name, category and stack instead of inheriting the site-wide list.
    keywords: [
      project.title,
      `${project.title} case study`,
      `${project.category} app development`,
      ...project.tech.map((tech) => `${tech} development`),
      "Saurabh Infosys portfolio",
      "software development company India",
    ],
    alternates: { canonical: `https://saurabhinfosys.com/portfolio/${project.slug}` },
    openGraph: {
      images: ogImages(`/og/portfolio/${project.slug}.png`),
      title: `${project.title} | Saurabh Infosys Portfolio`,
      description,
      url: `https://saurabhinfosys.com/portfolio/${project.slug}`,
      type: "website",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  return (
    <>
      {project ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(
            breadcrumbLd([["Home", "/"], ["Portfolio", "/portfolio"], [project.title, `/portfolio/${slug}`]]),
          )}
        />
      ) : null}
      <ProjectDetailPage slug={slug} />
    </>
  );
}
