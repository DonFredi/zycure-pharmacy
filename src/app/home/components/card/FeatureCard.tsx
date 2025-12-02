// app/sections/components/FeatureCard.tsx
import { Feature } from "@/src/types/features";
import Title from "@/src/components/ui/Title";

const FeatureCard = ({ imageSrc, title, description }: Feature) => {
  return (
    <div className=" gap-2 px-8 py-6 flex flex-col items-center text-center">
      {imageSrc && (
        <div className="rounded-full bg-neutral">
          {" "}
          <img src={imageSrc} alt={title} className="w-16 h-16" />{" "}
        </div>
      )}

      <Title text={title} as="h3" size="xxl" align="center" color="text-foreground" className="text-lg font-bold" />
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
