"use client";
import { socials } from "@/data/socials";

import { SocialCard } from "./SocialCard";
import SectionContainer from "@/components/section/SectionContainer";

const Social = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {socials.map((social) => (
          <SocialCard key={social.id} {...social} />
        ))}
      </div>
    </SectionContainer>
  );
};
export default Social;
