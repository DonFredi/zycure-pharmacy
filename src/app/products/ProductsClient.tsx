"use client";
import { useState, useEffect } from "react";
import { useProducts } from "@/hooks/useProducts";
import CategoryBar from "./components/section/CategoryBar";
import ProductsSection from "./components/section/ProductsSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import MobileCategorySearch from "./components/card/MobileCategorySearch";
import { useSearchParams } from "next/navigation";

const ProductsClient = ({ initialCategory }: { initialCategory?: string }) => {
  const [category, setCategory] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category") || undefined; // category ID
  const { products, loading } = useProducts(category);
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
