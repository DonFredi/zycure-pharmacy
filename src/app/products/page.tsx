"use client";
import ProductsSection from "./components/section/ProductsSection";
import CategoryBar from "./components/section/CategoryBar";
import SectionContainer from "@/components/section/SectionContainer";
import { Product } from "@/types/products";

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.API_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function page() {
  const products = await getProducts();
  return (
    <SectionContainer>
      <h1>This is the Products page</h1>
      <div className="flex flex-row w-full justify-beteeen gap-8">
        <CategoryBar />
        <ProductsSection products={products} />
      </div>
    </SectionContainer>
  );
}
