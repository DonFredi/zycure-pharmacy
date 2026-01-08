"use client";
import ProductCard from "@/app/products/components/card/ProductCard";
import SectionContainer from "@/components/section/SectionContainer";
import Title from "@/components/ui/Title";
import { Product } from "@/types/products";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface ProductsSectionProps {
  products: Product[];
  title: string;
  limit?: number;
  viewMoreHref?: string;
}

const ProductSection = ({ products, title, limit = 4, viewMoreHref }: ProductsSectionProps) => {
  const visibleProducts = products.filter((p) => !!p?.id).slice(0, limit);

  return (
    <SectionContainer>
      <div className="flex flex-row justify-between gap-6 p-2 items-center">
        <Title text={title} as="h2" size="xxl" align="left" color="text-foreground" className="text-xl font-bold" />
        {viewMoreHref && (
          <Link href={viewMoreHref} className="text-primary hover:underline flex items-center gap-1">
            View More <MoveRight size={16} />
          </Link>
        )}
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 px-4 py-2 items-center md:overflow-visible overflow-x-auto">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </SectionContainer>
  );
};
export default ProductSection;
