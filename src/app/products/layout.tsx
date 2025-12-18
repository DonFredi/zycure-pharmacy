import PageContainer from "@/components/pages/PageContainer";
import { ReactNode } from "react";

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return <PageContainer className="px-4 py-2">{children}</PageContainer>;
}
