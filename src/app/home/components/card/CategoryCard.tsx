import Title from "@/components/ui/Title";
import { Category } from "@/types/categories";
import Image from "next/image";

const CategoryCard = ({ imageSrc, title }: Category) => {
  return (
    <div className="px-4 py-2 flex flex-col items-center">
      {imageSrc && <Image src={imageSrc} alt="category-image" width={88} height={88} />}
      <Title text={title} as="h3" size="lg" align="center" color="text-foreground" className="text-wrap" />
    </div>
  );
};
export default CategoryCard;
