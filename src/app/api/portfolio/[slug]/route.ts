import { NextResponse } from "next/server";
import { PORTFOLIO_PROJECTS, type PortfolioProject } from "@/lib/data";
import { getApiProjectBySlug, getAllApiProjects } from "@/lib/portfolio-api";

export const dynamic = "force-static";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Content-Type": "application/json; charset=utf-8",
};

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project: PortfolioProject) => ({
    slug: project.slug,
  }));
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = getApiProjectBySlug(slug);

  if (!project) {
    return NextResponse.json(
      {
        success: false,
        error: `Project with slug '${slug}' was not found.`,
      },
      {
        status: 404,
        headers: corsHeaders,
      }
    );
  }

  const all = getAllApiProjects();
  const currentIndex = all.findIndex((p) => p.slug.toLowerCase() === slug.toLowerCase());
  const prev =
    currentIndex > 0
      ? {
          id: all[currentIndex - 1].id,
          slug: all[currentIndex - 1].slug,
          title: all[currentIndex - 1].title,
        }
      : null;
  const next =
    currentIndex >= 0 && currentIndex < all.length - 1
      ? {
          id: all[currentIndex + 1].id,
          slug: all[currentIndex + 1].slug,
          title: all[currentIndex + 1].title,
        }
      : null;

  return NextResponse.json(
    {
      success: true,
      data: project,
      navigation: {
        prev,
        next,
      },
    },
    {
      headers: corsHeaders,
    }
  );
}
