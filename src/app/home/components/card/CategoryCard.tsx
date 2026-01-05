import Title from "@/components/ui/Title";
import { Category } from "@/types/categories";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ id, imageSrc, name }: Category) => {
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/products?category=${id}`} className="px-4 py-2 flex flex-col items-center gap-2">
      <div className="relative w-22 h-22 md:w-24 md:h-24 rounded-full overflow-hidden bg-muted">
        <Image
          src={imageSrc || "/images/placeholder.png"}
          alt={`${name} -image`}
          fill
          loading="eager"
          sizes="96px"
          className="object-cover"
        />
      </div>
      <Title text={name} as="h3" size="lg" align="center" color="text-foreground" className="text-wrap font-semibold" />
    </Link>
  );
};
export default CategoryCard;
