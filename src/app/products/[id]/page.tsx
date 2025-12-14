import ProductDetailsClient from "./ProductDetailsClient";
import { getProductById } from "@/lib/firebase";

interface PageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  if (!id) return <div>Product ID not provided</div>;

  let product = null;
  try {
    product = await getProductById(id);
  } catch (err) {
    console.error(err);
    return <div>Product not found</div>;
  }

  return <ProductDetailsClient product={product} />;
}
