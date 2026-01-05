// src/app/products/page.tsx
"use client";
import SectionContainer from "@/components/section/SectionContainer";

import ProductsClient from "./ProductsClient";

export default function ProductsPage() {
  return (
    <SectionContainer>
      <ProductsClient />
    </SectionContainer>
  );
}
