import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className }: PageContainerProps) {
  return <div className={cn("flex flex-col gap-8 md:gap-10 lg:gap-12", className)}>{children}</div>;
}
