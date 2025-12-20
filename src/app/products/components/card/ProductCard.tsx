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
      image: product.image,
      category: product.category,
      benefit: product.benefit,
      description: product.description,
      use: product.use,
    });
  };
  // const alreadyInCart = cart?.items?.some((item) => item.productId === product.id) ?? false;

  return (
    <Link href={`/products/${product.id}`} className="w-70 h-fit flex flex-col  border-color rounded-sm">
      <div className="flex w-full h-auto">
        <Image src={product.image} alt={product.title} width={300} height={240} />
      </div>
      <div className="flex flex-col items-center gap-2 px-4 py-2 h-fit">
        <span>{product.category}</span>
        <span className="font-bold">{product.title}</span>
        <span className="text-primary font-semibold">{`Kshs ${product.price}`}</span>
        <Button onClick={handleAddCart}>Add to cart</Button>
      </div>
    </Link>
  );
};
export default ProductCard;
