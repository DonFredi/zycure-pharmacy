// src/app/products/page.tsx

import SectionContainer from "@/components/section/SectionContainer";
import CartPageClient from "./CartPageClient";

export const metadata = {
  title: "Cart | ZyCure Pharmacy Kenya",
  robots: {
    index: false,
    follow: false,
  },
};
export default async function CartPage() {
  return (
    <SectionContainer>
      <CartPageClient />
    </SectionContainer>
  );
}
