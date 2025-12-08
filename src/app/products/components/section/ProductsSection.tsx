import { products } from "@/data/products";
import ProductCard from "../card/ProductCard";

const ProductsSection = () => {
  return (
    <div className="flex flex-wrap gap-4 p-0 md:px-4 md:py-2 items-center">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
export default ProductsSection;
