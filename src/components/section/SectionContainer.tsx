import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionContainer({ children, className }: SectionProps) {
  return <section className={twMerge("w-[98%] md:w-[96%] mx-auto max-w-[1200px] py-4", className)}>{children}</section>;
}
