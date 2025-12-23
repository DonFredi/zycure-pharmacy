import Title from "@/components/ui/Title";
import { Category } from "@/types/categories";
import Image from "next/image";

const CategoryCard = ({ imageSrc, name }: Category) => {
  return (
    <div className="px-4 py-2 flex flex-col items-center gap-2">
      <div>
        {" "}
        {imageSrc && <Image src={imageSrc} alt="category-image" width={88} height={88} className="rounded-full" />}
      </div>
      <Title text={name} as="h3" size="lg" align="center" color="text-foreground" className="text-wrap font-semibold" />
    </div>
  );
};
export default CategoryCard;
