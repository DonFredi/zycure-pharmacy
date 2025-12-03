import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CategoryCard from "../card/CategoryCard";
import { categories } from "@/data/categories";

const CauroselSection = () => {
  return (
    <Carousel opts={{ align: "center" }} className="max-w-screen overflow-hidden">
      <CarouselContent className="flex items-center">
        {categories.map((category) => (
          <CarouselItem
            key={category.id}
            className="flex justify-center px-4
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

      <CarouselPrevious className="left-2 -translate-x-4 z-20 bg-white/80 shadow-md hover:bg-white rounded-full" />
      <CarouselNext className="right-2 translate-x-4 z-20 bg-white/80 shadow-md hover:bg-white rounded-full" />
    </Carousel>
  );
};

export default CauroselSection;
