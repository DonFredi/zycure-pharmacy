import { Button } from "@/components/ui/Button";
import { Product } from "@/types/products";
import Image from "next/image";

const ProductCard = ({ image, title, caption, price }: Product) => {
  return (
    <div className="w-[280px] h-[400px] flex flex-col gap-2 items-center border rounded-sm">
      <div className="border-b-2 flex w-fit">
        <Image src={image} alt={title} width={300} height={240} />
      </div>
      <div className="flex flex-col items-center gap-2 px-4 py-2">
        <span>{caption}</span>
        <span className="font-bold">{title}</span>
        <span className="text-primary font-semibold">{price}</span>
        <Button>Add to Cart</Button>
        <Button variant={"outline"} className="text-primary outline outline-primary">
          View Product
        </Button>
      </div>
    </div>
  );
};
export default ProductCard;
