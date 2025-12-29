"use client";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
  // const alreadyInCart = cart?.items?.some((item) => item.productId === product.id) ?? false;

  return (
    <Link href={`/products/${product.id}`} className="w-70 h-fit flex flex-col  border rounded-sm cursor-pointer">
      <div className="relative w-full h-48 overflow-hidden ">
        <Image
          src={product.imageSrc?.url || "/images/placeholder.png"}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <div className="flex flex-col items-center gap-2 px-4 py-2 h-fit">
        {/* <span>{product.categoryId}</span> */}
        <span className="font-bold">{product.title}</span>
        <span className="text-primary font-semibold">{`Kshs ${product.price}`}</span>
        <Button onClick={handleAddCart}>Add to cart</Button>
      </div>
    </Link>
  );
};
export default ProductCard;
