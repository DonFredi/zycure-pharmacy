import { features } from "@/src/data/features";
import FeatureCard from "../card/FeatureCard";

const FeaturesSection = () => {
  return (
    <section className="w-full">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};
export default FeaturesSection;
