// src/app/products/page.tsx

import SectionContainer from "@/components/section/SectionContainer";

import ProductsClient from "./ProductsClient";
import Loader from "@/components/loader";
import { Suspense } from "react";

export default function ProductsPage() {
  return (
    <Suspense fallback={<Loader message="Loading Products.." />}>
      <SectionContainer>
        <ProductsClient />
      </SectionContainer>
    </Suspense>
  );
}
