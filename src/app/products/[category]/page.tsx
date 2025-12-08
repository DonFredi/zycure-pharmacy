import { useProducts } from "@/hooks/useProducts";
import ProductsSection from "../components/section/ProductsSection";

interface Props {
  params: { category: string };
}

export default function CategoryPage({ params }: Props) {
  const products = useProducts(params.category);

  return (
    <div>
      <h2 className="text-2xl font-bold capitalize">{params.category.replace("-", " ")}</h2>

      <ProductsSection products={products} />
    </div>
  );
}
