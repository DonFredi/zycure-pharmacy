"use client";

import { useRouter } from "next/navigation";
import Cancel from "@/components/icons/Cancel";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Loader from "@/components/Loader";
import Link from "next/link";
import SectionContainer from "@/components/section/SectionContainer";

const CartPageClient = () => {
  const { cart, totalAmount, totalQuantity, removeFromCart } = useCart();
  const router = useRouter();

  const goBack = () => {
    router.back(); // navigates to the previous page
  };
  const goToCheckout = () => {
    router.push("/checkout");
  };

  if (!cart) {
    return <Loader message="Loading your cart..." />;
  }

  // ✅ Empty cart
  if (cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-start h-[50vh]">
        {" "}
        <p className="font-bold">No items in your cart.</p>
        <Link href="/" className="text-primary hover:underline">
          Go back to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className=" p-4 space-y-6">
      <p className="font-bold text-center text-primary">Items in your cart</p>
      {/* CART ITEMS */}
      <div className="space-y-4">
        {cart.items.map((item) => (
          <div key={item.id} className="flex items-center justify-between border p-4 rounded-sm border-foreground my-2">
            <Image src={item.imageSrc?.url || "/placeholder.png"} alt={item.title} width={50} height={100} />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm">
                KES {item.price} × {item.quantity}
              </p>
              <p className="font-bold">KES {item.price * item.quantity}</p>
            </div>

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

export default CartPageClient;
