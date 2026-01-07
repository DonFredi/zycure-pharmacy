import { Socials } from "@/types/socials";

export const SocialCard = ({ icon, text, href }: Socials) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-73.5 h-18 transition-all duration-300 ease-out  hover:-translate-y-0.5 hover:scale-[1.03]
    active:scale-95 text-white flex flex-row rounded-sm gap-3.5 px-6 py-5 justify-center items-center hover:bg-primary bg-secondary"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};
