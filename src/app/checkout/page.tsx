"use client";
import ShippingCard from "./card/ShippingCard";

const CheckoutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-6">Checkout</h2>
      <ShippingCard />
    </div>
  );
};

export default CheckoutPage;
