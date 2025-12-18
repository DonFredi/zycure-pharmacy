"use client";
import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import CategoryBar from "./components/section/CategoryBar";
import ProductsSection from "./components/section/ProductsSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import MobileCategorySearch from "./components/card/MobileCategorySearch";

const ProductsClient = () => {
  const { products, loading } = useProducts();
  const [category, setCategory] = useState<string | undefined>();

  if (loading) return <p>Loading products...</p>;
  return (
    <div className="flex flex-col md:flex-row w-full justify-start">
      <div className="flex-col justify-start gap-2">
        <Breadcrumb />
        <CategoryBar onSelect={setCategory} />
        <MobileCategorySearch onSelect={setCategory} />
      </div>

      <ProductsSection products={products} />
    </div>
  );
};
export default ProductsClient;
