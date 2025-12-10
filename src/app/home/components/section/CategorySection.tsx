"use client";
import Title from "@/components/ui/Title";
import CauroselSection from "./CauroselSection";
import SectionContainer from "@/components/section/SectionContainer";

const CategorySection = () => {
  return (
    <SectionContainer>
      <Title
        text="Shop by Category"
        as="h2"
        size="xxl"
        align="center"
        color="text-foreground"
        className="text-xl font-bold"
      />
      <CauroselSection />
    </SectionContainer>
  );
};
export default CategorySection;
