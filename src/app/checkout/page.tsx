import SectionContainer from "@/components/section/SectionContainer";
import CheckoutPageClient from "./CheckoutPageClient";

export const metadata = {
  title: "Checkout | ZyCure Pharmacy Kenya",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ProductsPage() {
  return (
    <SectionContainer>
      <CheckoutPageClient />
    </SectionContainer>
  );
}
