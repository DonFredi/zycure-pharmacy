// src/app/products/page.tsx

import SectionContainer from "@/components/section/SectionContainer";

import ProductsClient from "./ProductsClient";

export default async function ProductsPage() {
  return (
    <SectionContainer>
      <ProductsClient />
    </SectionContainer>
  );
}
