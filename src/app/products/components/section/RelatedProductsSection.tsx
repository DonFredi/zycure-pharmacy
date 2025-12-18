"use client";
import ProductCard from "@/app/products/components/card/ProductCard";
import SectionContainer from "@/components/section/SectionContainer";
import Title from "@/components/ui/Title";
import { useProducts } from "@/hooks/useProducts";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function RelatedProductsSection() {
  const { products } = useProducts();
  return (
    <SectionContainer className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <Title
          text="Related Products"
          as="h2"
          size="lg"
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
      <div className="flex flex-wrap gap-4 px-4 py-2 items-center">
        {products
          .filter((p) => !!p && !!p.id) // optional safety
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </SectionContainer>
  );
}
