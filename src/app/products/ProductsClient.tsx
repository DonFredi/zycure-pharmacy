"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import { useDebounce } from "@/hooks/useDebounce";
import MobileCategorySearch from "./components/card/MobileCategorySearch";
import ProductsSection from "./components/section/ProductsSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SearchBar from "./components/card/SearchBar";

const ProductsClient = () => {
  const searchParams = useSearchParams();

  // 🔹 Category from URL (?category=xyz)
  const urlCategory = searchParams.get("category") || undefined;

  // 🔹 Local state
  const [category, setCategory] = useState<string | undefined>(urlCategory);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState(false);

  //   // 🔹 Keep state in sync when URL changes
  //   useEffect(() => {
  //     setCategory(urlCategory);
  //   }, [urlCategory]);
  const debouncedSearch = useDebounce(searchTerm, 800);
  const { products, loading } = useProducts(category, debouncedSearch);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="flex flex-col justify-start gap-4">
      <Breadcrumb />

      {/* <CategoryBar onSelect={setCategory} /> */}
      <div className="flex flex-row justify-start gap-4 w-full">
        <MobileCategorySearch onSelect={setCategory} />
        <SearchBar value={searchTerm} onChange={setSearchTerm} open={open} setOpen={setOpen} />
      </div>

      <ProductsSection products={products} />
    </div>
  );
};

export default ProductsClient;
