import ProductCard from "@/app/products/components/card/ProductCard";
import SectionContainer from "@/components/section/SectionContainer";
import Title from "@/components/ui/Title";
import { products } from "@/data/products";
import Link from "next/link";

const ProductSection = () => {
  return (
    <SectionContainer>
      <div className="flex flex-row justify-between gap-6 p-2 items-center">
        <Title
          text="Our Products"
          as="h2"
          size="xxl"
          align="left"
          color="text-foreground"
          className="text-xl font-bold"
        />
        <Link href="/products"> View More </Link>
      </div>
      <div className="flex flex-wrap gap-2 px-4 py-2">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </SectionContainer>
  );
};
export default ProductSection;
