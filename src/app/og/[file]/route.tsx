import { ogCard } from "@/lib/og";

export const dynamic = "force-static";

/* Social preview images live under /og/*.png as real .png files. The
   opengraph-image file convention exports extensionless files, and Apache
   picks the Content-Type from the extension — so these are route handlers
   whose static params carry the ".png" themselves. */
export function generateStaticParams() {
  return [{ file: "default.png" }];
}

export function GET() {
  return ogCard({
    eyebrow: "AI automation · Apps · SaaS",
    title: "AI agents, automation and apps that ship in weeks",
  });
}
