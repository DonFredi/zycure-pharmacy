"use client";
import { useProducts } from "@/hooks/useProducts";
import CategoryBar from "./components/section/CategoryBar";
import ProductsSection from "./components/section/ProductsSection";
import Breadcrumb from "@/components/ui/Breadcrumb";

const ProductsClient = () => {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading products...</p>;
  return (
    <div className="flex flex-row w-full justify-start gap-2">
      <div className="flex-col justify-start">
        <Breadcrumb />
        <CategoryBar />
      </div>

      <ProductsSection products={products} />
    </div>
  );
};
export default ProductsClient;
