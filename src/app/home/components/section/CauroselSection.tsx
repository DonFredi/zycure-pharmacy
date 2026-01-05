"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CategoryCard from "../card/CategoryCard";
import { useCategories } from "@/hooks/useCategory";

const CauroselSection = () => {
  const { categories, loading } = useCategories();
  if (loading) return <p>Loading categories...</p>;
  if (!categories.length) return <p>No categories</p>;
  return (
    <Carousel opts={{ align: "start" }} className="w-full p-2 flex flex-col gap-2  ">
      <div className=" flex justify-between gap-2 z-20">
        <CarouselPrevious className="static bg-white shadow rounded-full" />
        <CarouselNext className="static bg-white shadow rounded-full" />
      </div>
      <CarouselContent className="gap-4 ">
        {categories.map((category) => (
          <CarouselItem
            key={category.id}
            className="
            basis-1/2
              sm:basis-1/3
              md:basis-1/4
              lg:basis-1/5
              xl:basis-1/6
              "
          >
            <CategoryCard {...category} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CauroselSection;
