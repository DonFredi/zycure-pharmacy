"use client";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/types/products";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  const { cart, addToCart } = useCart();

  const handleAddCart = () => {
    addToCart({
      productId: product.id, // ✅ SAME ID as products collection
      title: product.title,
      price: product.price,
      image: product.image,
    });
  };

  const alreadyInCart = cart?.items?.some((item) => item.productId === product.id) ?? false;

  return (
    <div className="w-[280px] h-fit flex flex-col  border rounded-sm">
      <div className="border-b-2 flex w-full h-auto">
        <Image src={product.image} alt={product.title} width={300} height={240} />
      </div>
      <div className="flex flex-col items-center gap-2 px-4 py-2 h-fit">
        <span>{product.category}</span>
        <span className="font-bold">{product.title}</span>
        <span className="text-primary font-semibold">{`Kshs ${product.price}`}</span>
        <Button disabled={alreadyInCart} onClick={handleAddCart}>
          {alreadyInCart ? "In Cart" : "Add to Cart"}
        </Button>
        <Button variant={"outline"} className="text-primary outline outline-primary">
          View Product
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
