import ProductsSection from "../products/components/section/ProductsSection";
import { Product } from "@/types/products";

interface Props {
  params: { category: string };
}

// Server-side fetch function
async function getProductsByCategory(category: string): Promise<Product[]> {
  const res = await fetch(`${process.env.API_URL}/products?category=${category}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function CategoryPage({ params }: Props) {
  const products = await getProductsByCategory(params.category);

  return (
    <div>
      <h2 className="text-2xl font-bold capitalize">{params.category.replace("-", " ")}</h2>

      <ProductsSection products={products} />
    </div>
  );
}
