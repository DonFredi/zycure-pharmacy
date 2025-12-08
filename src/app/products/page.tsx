import ProductsSection from "./components/section/ProductsSection";
import CategoryBar from "./components/section/CategoryBar";
import SectionContainer from "@/components/section/SectionContainer";

const page = () => {
  return (
    <SectionContainer>
      <h1>This is the Products page</h1>
      <div className="flex flex-row w-full justify-beteeen gap-8">
        <CategoryBar />
        <ProductsSection />
      </div>
    </SectionContainer>
  );
};

export default page;
