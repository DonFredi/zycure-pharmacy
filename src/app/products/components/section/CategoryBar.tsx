"use client";
import CategoryDrop from "../card/CategoryDrop";
import { useCategories } from "@/hooks/useCategory";

interface CategoryBarProps {
  onSelect: (category?: string) => void;
}

const CategoryBar = ({ onSelect }: CategoryBarProps) => {
  const { categories } = useCategories();
  if (!categories.length) {
    return <p>No categories</p>;
  }
  return (
    <div className="hidden md:flex flex-col justify-start gap-6 w-67.5">
      {categories.map((category) => (
        <CategoryDrop key={category.id} {...category} onClick={() => onSelect(category.name)} />
      ))}
    </div>
  );
};
export default CategoryBar;
