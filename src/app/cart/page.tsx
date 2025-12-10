"use client";

import { useCart } from "@/hooks/useCart";

const CartPage = () => {
  const { cart, totalAmount, totalQuantity } = useCart();

  // ✅ Loading state
  if (!cart) {
    return <p>Loading cart...</p>;
  }

  // ✅ Empty cart
  if (cart.items.length === 0) {
    return <p>No items in cart</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* CART ITEMS */}
      <div className="space-y-4">
        {cart.items.map((item) => (
          <div key={item.productId} className="flex items-center justify-between border p-4 rounded">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">
                KES {item.price} × {item.quantity}
              </p>
            </div>

            <p className="font-bold">KES {item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="border-t pt-4 space-y-2">
        <p>Total Items: {totalQuantity}</p>
        <p className="text-lg font-bold">Total: KES {totalAmount}</p>

        <button className="w-full bg-black text-white py-3 rounded">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
