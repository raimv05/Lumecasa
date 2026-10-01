import { Metadata } from "next";
import ProductClient from "./ProductClient";

type Props = {
  params: Promise<{ slug: string }>;
};

// Next.js requires awaiting params in dynamic segments starting from Next.js 15,
// but for standard Next 14/13 it works directly as params.slug.
// Using standard async pattern for robust compatibility.
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  
  // Clean up slug for title (e.g. spiral-pebble-chandelier -> Spiral Pebble Chandelier)
  const title = resolvedParams.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} | LUMECASA Collections`,
    description: `Discover the ${title}. Detailed technical specifications, finishes, and 3D visualization.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  return <ProductClient slug={resolvedParams.slug} />;
}
