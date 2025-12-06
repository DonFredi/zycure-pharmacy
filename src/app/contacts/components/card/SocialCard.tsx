import { Socials } from "@/types/socials";

export const SocialCard = ({ icon, text, href }: Socials) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[294px] h-[72px] text-white hover:underline flex flex-row rounded-sm gap-3.5 px-6 py-5 justify-center items-center hover:bg-primary bg-secondary"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};
