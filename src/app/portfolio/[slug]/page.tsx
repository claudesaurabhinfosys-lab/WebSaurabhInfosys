import type { Metadata } from "next";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { ProjectDetailPage } from "@/components/pages/portfolio/project-detail-page";

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

  return {
    title: `${project.title} — Case Study | Saurabh Infosys`,
    description: project.description,
    alternates: { canonical: `https://saurabhinfosys.com/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} | Saurabh Infosys Portfolio`,
      description: project.description,
      url: `https://saurabhinfosys.com/portfolio/${project.slug}`,
      type: "website",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <ProjectDetailPage slug={slug} />;
}
