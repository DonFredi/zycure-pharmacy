import { useCategories } from "@/hooks/useCategory";
import { Product } from "@/types/products";

export const getRelatedProducts = (products: Product[], currentProduct: Product, limit = 4) => {
  const { categories } = useCategories();
  return products
    .filter((product) => product.id !== currentProduct.id && product.categoryId === currentProduct.categoryId)
    .slice(0, limit);
};
