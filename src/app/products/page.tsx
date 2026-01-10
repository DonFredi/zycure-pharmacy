// src/app/products/page.tsx

import SectionContainer from "@/components/section/SectionContainer";

import ProductsClient from "./ProductsClient";
import { Suspense } from "react";
import Loader from "@/components/ui/Loader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | ZyCure Pharmacy",
  description: "Browse genuine pharmacy products, supplements, and healthcare essentials at ZyCure Pharmacy.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<Loader message="Loading Products..." />}>
      <SectionContainer>
        <ProductsClient />
      </SectionContainer>
    </Suspense>
  );
}
