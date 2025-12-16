"use client";

import { useRouter } from "next/navigation";
import Cancel from "@/components/icons/Cancel";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/Button";

const CartPage = () => {
  const { cart, totalAmount, totalQuantity, removeFromCart } = useCart();
  const router = useRouter();

  const goBack = () => {
    router.back(); // navigates to the previous page
  };
  const goToCheckout = () => {
    router.push("/checkout");
  };

  if (!cart) {
    return <p>Loading cart...</p>;
  }

  // ✅ Empty cart
  if (cart.items.length === 0) {
    return (
      <div className="max-w-3xl h-40 mx-auto border border-foreground flex flex-col items-center justify-center">
        {" "}
        <p>NO ITEMS IN THE CART</p>
        <Button onClick={goBack} variant={"default"}>
          BACK
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <p className="font-bold text-center text-primary">ITEMS IN YOUR CART</p>
      {/* CART ITEMS */}
      <div className="space-y-4">
        {cart.items.map((item) => (
          <div key={item.id} className="flex items-center justify-between border p-4 rounded-sm border-foreground">
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm">
                KES {item.price} × {item.quantity}
              </p>
            </div>

            <p className="font-bold">KES {item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>
              <Cancel />
            </button>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="border-t pt-4 space-y-2">
        <p>Total Items: {totalQuantity}</p>
        <p className="text-lg font-bold">Total: KES {totalAmount}</p>
        <div className="flex flex-col md:flex-row justify-center gap-9">
          <Button variant={"outline"} onClick={goBack}>
            Continue Shopping
          </Button>
          <Button variant={"default"} onClick={goToCheckout}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
