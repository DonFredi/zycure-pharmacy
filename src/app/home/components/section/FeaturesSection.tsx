import { features } from "@/data/features";
import FeatureCard from "../card/FeatureCard";
import SectionContainer from "@/components/section/SectionContainer";

const FeaturesSection = () => {
  return (
    <SectionContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 my-12">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </SectionContainer>
  );
};
export default FeaturesSection;
