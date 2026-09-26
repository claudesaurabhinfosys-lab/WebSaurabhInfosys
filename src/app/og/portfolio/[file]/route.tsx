import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { ogCard } from "@/lib/og";

export const dynamic = "force-static";

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({ file: `${project.slug}.png` }));
}

/* Uses the project's real cover shot when there is one; projects without
   images get the text-only card rather than a placeholder. */
export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => `${p.slug}.png` === file);
  return ogCard({
    eyebrow: `Case study · ${project?.category ?? "Portfolio"}`,
    title: project?.title ?? "Saurabh Infosys Portfolio",
    image: project?.images?.[0],
  });
}
