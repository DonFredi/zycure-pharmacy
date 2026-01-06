// src/app/products/page.tsx

import SectionContainer from "@/components/section/SectionContainer";

import ProductsClient from "./ProductsClient";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export default function ProductsPage() {
  return (
    <Suspense fallback={<Loader message="Loading Products.." />}>
      <SectionContainer>
        <ProductsClient />
      </SectionContainer>
    </Suspense>
  );
}
