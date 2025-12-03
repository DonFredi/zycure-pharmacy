import { features } from "@/data/features";
import FeatureCard from "../card/FeatureCard";

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 my-12">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};
export default FeaturesSection;
