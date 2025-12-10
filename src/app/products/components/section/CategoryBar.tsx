"use client";
import CategoryDrop from "../card/CategoryDrop";
import { useCategories } from "@/hooks/useCategory";

const CategoryBar = () => {
  const { categories } = useCategories();
  if (!categories.length) {
    return <p>No categories</p>;
  }
  return (
    <div className="hidden md:flex flex-col justify-start gap-6 w-[270px]">
      {categories.map((category) => (
        <CategoryDrop key={category.id} {...category} />
      ))}
    </div>
  );
};
export default CategoryBar;
