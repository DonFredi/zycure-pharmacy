"use client";
import ProductCard from "@/app/products/components/card/ProductCard";
import SectionContainer from "@/components/section/SectionContainer";
import Title from "@/components/ui/Title";
import { Product } from "@/types/products";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface ProductsSectionProps {
  products: Product[];
}

const ProductSection = ({ products }: ProductsSectionProps) => {
  return (
    <SectionContainer>
      <div className="flex flex-row justify-between gap-6 p-2 items-center">
        <Title
          text="Our Products"
          as="h2"
          size="xxl"
          align="left"
          color="text-foreground"
          className="text-xl font-bold"
        />
        <Link href="/products" className="text-primary hover:underline flex flex-row gap-1 items-center">
          {" "}
          View More
          <MoveRight />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 px-4 py-2 items-center md:justify-start">
        {products
          .filter((p) => !!p && !!p.id) // optional safety
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </SectionContainer>
  );
};
export default ProductSection;
