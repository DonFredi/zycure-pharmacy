"use client";
import { Product } from "@/types/products";
import ProductCard from "../card/ProductCard";
import { useProducts } from "@/hooks/useProducts";

const ProductsSection = () => {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (!products?.length) return <p>No products available</p>;

  return (
    <div className="flex flex-wrap gap-4 p-0 md:px-4 md:py-2 items-center">
      {products
        .filter((product): product is Product => !!product && !!product.id) // ✅ type guard
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductsSection;
