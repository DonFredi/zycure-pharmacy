"use client";

import SectionContainer from "@/components/section/SectionContainer";
import { Button } from "@/components/ui/Button";
import { Product } from "@/types/products";
import Image from "next/image";
import { useState } from "react";
import RelatedProductsSection from "../components/section/RelatedProductsSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import QuantitySelector from "@/components/ui/QuantitySelector";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsProps) {
  const [activeTab, setActiveTab] = useState<"description" | "use">("description");
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>Product not found</div>;
  console.log(product);
  console.log(quantity);
  return (
    <div>
      <Breadcrumb lastLabel={product.title} />
      <SectionContainer className="flex flex-col md:flex-row gap-2 py-4">
        <div>
          <Image src={product.image} alt={product.title} width={470} height={260} />
        </div>
        <div className="gap-2 flex flex-col items-left">
          <p className="text-foreground-disabled">{product.category}</p>
          <h4 className="font-semibold">{product.title}</h4>
          <p className="text-primary font-bold">Kshs {product.price}</p>
          <p>{product.benefit}</p>
          <div className="flex flex-row justify-start gap-2 ">
            <QuantitySelector initialQuantity={1} min={1} max={10} onChange={(qty) => setQuantity(qty)} />
            <Button>Add to cart</Button>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="flex flex-col gap-6 p-4">
        <div className="flex gap-4">
          <button
            className={`${activeTab === "description" ? "underline text-primary" : "no-underline"}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`${activeTab === "use" ? "underline text-primary" : "no-underline"}`}
            onClick={() => setActiveTab("use")}
          >
            How to Use
          </button>
        </div>

        <div className="mt-2">
          {activeTab === "description" && <p>{product.description}</p>}
          {activeTab === "use" && <p>{product.use}</p>}
        </div>

        <RelatedProductsSection />
      </SectionContainer>
    </div>
  );
}
