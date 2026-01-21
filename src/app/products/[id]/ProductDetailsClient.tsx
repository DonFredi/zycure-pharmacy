"use client";

import SectionContainer from "@/components/section/SectionContainer";
import { Button } from "@/components/ui/Button";
import { Product } from "@/types/products";
import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import QuantitySelector from "@/components/ui/QuantitySelector";
import { useCart } from "@/hooks/useCart";
import PageContainer from "@/components/pages/PageContainer";
import { getRelatedProducts } from "@/lib/getRelatedProducts";
import { useProducts } from "@/hooks/useProducts";
import ProductSection from "@/app/home/components/section/ProductSection";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsProps) {
  if (!product) {
    return <div>Product not found</div>;
  }
  const { addToCart } = useCart();
  const { products } = useProducts();
  const [activeTab, setActiveTab] = useState<"description" | "use">("description");
  const [quantity, setQuantity] = useState(1);
  const relatedProducts = getRelatedProducts(products, product, 4);

  const handleAddCart = () => {
    addToCart(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        originalPrice: product.originalPrice ?? 0,
        isDiscounted: product.isDiscounted,
        isNew: product.isNew,
        imageSrc: product.imageSrc ?? null,
        categoryId: product.categoryId,
        benefit: product.benefit,
        description: product.description,
        use: product.use,
      },
      quantity,
    );
  };

  return (
    <PageContainer>
      <Breadcrumb lastLabel={product.title} />
      <SectionContainer className="flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-1/2">
          <Image
            src={product.imageSrc?.url || "/images/placeholder.png"}
            alt={product.title}
            width={480}
            height={150}
            className="object-cover"
          />
        </div>
        <div className="gap-2 flex flex-col items-left w-full md:w-1/2 h-full">
          {/* <p className="text-foreground-disabled">{product.categoryId}</p> */}
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

        {relatedProducts.length > 0 && (
          <ProductSection
            title="Related Products"
            products={relatedProducts}
            limit={4}
            viewMoreHref={`/products?category=${product.categoryId}`}
          />
        )}
      </SectionContainer>
    </PageContainer>
  );
}
