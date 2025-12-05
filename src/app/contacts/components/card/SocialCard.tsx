import { Socials } from "@/types/socials";

export const SocialCard = ({ icon, text }: Socials) => {
  return (
    <div className="w-[294px] h-[72px] text-white flex flex-row rounded-sm gap-3.5 px-6 py-5 justify-center items-center bg-primary hover:bg-secondary">
      {icon}
      <span>{text}</span>
    </div>
  );
};
