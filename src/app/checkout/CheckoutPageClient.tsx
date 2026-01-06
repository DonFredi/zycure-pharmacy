"use client";
import PageContainer from "@/components/pages/PageContainer";
import ShippingCard from "./card/ShippingCard";

const CheckoutPageClient = () => {
  return (
    <PageContainer>
      <h2 className="text-xl font-bold mb-6">Checkout</h2>
      <ShippingCard />
    </PageContainer>
  );
};

export default CheckoutPageClient;
