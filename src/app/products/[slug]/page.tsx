import type { Metadata } from "next";
import { OG_IMAGES, brandTitle } from "@/lib/seo";
import { PRODUCTS } from "@/lib/data";
import ProductDetailPage from "@/components/stodio/products/product-detail-page";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};

  const title = `${product.name} — ${product.fullName} | Saurabh Infosys`;

  return {
    title: brandTitle(title),
    description: product.description,
    keywords: [
      product.name,
      product.fullName,
      ...product.targetUsers,
      "Saurabh Infosys products",
      "software India",
    ],
    alternates: { canonical: `https://saurabhinfosys.com/products/${product.slug}` },
    openGraph: {
      images: OG_IMAGES,
      title,
      description: product.description,
      url: `https://saurabhinfosys.com/products/${product.slug}`,
      type: "website",
    },
    twitter: {
      images: OG_IMAGES,
      card: "summary_large_image",
      title,
      description: product.description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <ProductDetailPage slug={slug} />;
}
