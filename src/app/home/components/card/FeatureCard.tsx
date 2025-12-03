// app/sections/components/FeatureCard.tsx
import { Feature } from "@/types/features";
import Title from "@/components/ui/Title";

const FeatureCard = ({ icon, title, description }: Feature) => {
  return (
    <div className=" gap-4 px-8 py-6 flex flex-col items-center text-center">
      {icon && <div className="rounded-full bg-neutral p-6 text-primary">{icon}</div>}

      <Title text={title} as="h3" size="xxl" align="center" color="text-foreground" className="text-lg font-bold" />
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
