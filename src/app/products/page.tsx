// src/app/products/page.tsx
"use client";
import SectionContainer from "@/components/section/SectionContainer";

import ProductsClient from "./ProductsClient";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || undefined;
  return (
    <SectionContainer>
      <ProductsClient initialCategory={category} />
    </SectionContainer>
  );
}
