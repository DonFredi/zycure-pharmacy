import { socials } from "@/data/socials";

import { SocialCard } from "./SocialCard";

const Social = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center">
      {socials.map((social) => (
        <SocialCard key={social.id} {...social} />
      ))}
    </div>
  );
};
export default Social;
