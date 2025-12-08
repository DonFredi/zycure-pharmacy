import { categories } from "@/data/categories";
import CategoryDrop from "../card/CategoryDrop";

const CategoryBar = () => {
  return (
    <div className="hidden md:flex flex-col justify-start gap-6 w-[270px]">
      {categories.map((category) => (
        <CategoryDrop key={category.id} {...category} />
      ))}
    </div>
  );
};
export default CategoryBar;
