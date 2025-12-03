import Title from "@/components/ui/Title";
import CauroselSection from "./CauroselSection";

const CategorySection = () => {
  return (
    <section className=" mt-4 w-full p-2 flex flex-col gap-6">
      <Title
        text="Shop by Category"
        as="h2"
        size="xxl"
        align="center"
        color="text-foreground"
        className="text-xl font-bold"
      />
      <CauroselSection />
    </section>
  );
};
export default CategorySection;
