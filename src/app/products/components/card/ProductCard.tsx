import { Button } from "@/components/ui/Button";
import { Product } from "@/types/products";
import Image from "next/image";

const ProductCard = ({ image, title, caption, price }: Product) => {
  return (
    <div className="w-[280px] h-[400px] flex flex-col gap-2 items-center border rounded-sm">
      <Image src={image} alt={title} width={300} height={160} />
      <span>{caption}</span>
      <span>{title}</span>
      <span>{price}</span>
      <Button>Add to Cart</Button>
      <Button variant={"outline"} className="text-primary outline outline-primary">
        View Product
      </Button>
    </div>
  );
};
export default ProductCard;
