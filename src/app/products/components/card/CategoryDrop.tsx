import ArrowUp from "@/components/icons/ArrowUp";
import { Category } from "@/types/categories";

const CategoryDrop = ({ title }: Category) => {
  return (
    <div className="flex flex-row justify-between items-center rounded-sm border border-foreground p-1 md:px-4 md:py-3 gap-2">
      {title}
      <ArrowUp />
    </div>
  );
};
export default CategoryDrop;
