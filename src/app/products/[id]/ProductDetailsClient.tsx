"use client";

import SectionContainer from "@/components/section/SectionContainer";
import { Button } from "@/components/ui/Button";
import { Product } from "@/types/products";
import Image from "next/image";
import { useState } from "react";
import RelatedProductsSection from "../components/section/RelatedProductsSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import QuantitySelector from "@/components/ui/QuantitySelector";
import { useCart } from "@/hooks/useCart";
import PageContainer from "@/components/pages/PageContainer";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsProps) {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<"description" | "use">("description");
  const [quantity, setQuantity] = useState(1);

  const handleAddCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      imageSrc: product.imageSrc ?? null,
      categoryId: product.categoryId,
      benefit: product.benefit,
      description: product.description,
      use: product.use,
    });
  };
  if (!product) return <div>Product not found</div>;
  console.log(product);
  console.log(quantity);
  return (
    <PageContainer>
      <Breadcrumb lastLabel={product.title} />
      <SectionContainer className="flex flex-col md:flex-row gap-2 py-4">
        <div>
          <Image
            src={product.imageSrc?.url || "/images/placeholder.png"}
            alt={product.title}
            width={480}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="gap-2 flex flex-col items-left">
          <p className="text-foreground-disabled">{product.categoryId}</p>
          <h4 className="font-semibold">{product.title}</h4>
          <p className="text-primary font-bold text-xl">Kshs {product.price}</p>
          <p className="">{product.description}</p>
          <div className="flex flex-row justify-start gap-2 ">
            <QuantitySelector initialQuantity={1} min={1} max={10} onChange={(qty) => setQuantity(qty)} />
            <Button onClick={handleAddCart}>Add to cart</Button>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="flex flex-col gap-6">
        <div className="flex gap-2">
          <button
            className={`${activeTab === "description" ? " text-primary" : "no-underline"}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          |
          <button
            className={`${activeTab === "use" ? " text-primary" : "no-underline"}`}
            onClick={() => setActiveTab("use")}
          >
            How to Use
          </button>
        </div>

        <div className="mt-2">
          {activeTab === "description" && <p className="leading relaxed">{product.description}</p>}
          {activeTab === "use" && <p className="leading relaxed">{product.use}</p>}
        </div>

        <RelatedProductsSection />
      </SectionContainer>
    </PageContainer>
  );
}
