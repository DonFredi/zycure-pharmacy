"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";
import { useOrder } from "@/hooks/useOrder";
import { useRouter } from "next/router";
import { useState } from "react";

const ShippingCard = () => {
  const { placeOrder, isSubmitting, error, orderId } = useOrder();
  const { cart, totalAmount } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"mpesa" | "cash">("mpesa");
  const router = useRouter();

  const goBack = () => {
    router.back(); // navigates to the previous page
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    placeOrder({
      name,
      phone: Number(phone),
      location,
      email,
      paymentMethod,
    });
  };

  if (orderId) {
    return (
      <div className="w-3/4 h-40 mx-auto border border-foreground flex flex-col items-center justify-around rounded-sm">
        <h2 className="text-xl font-bold">Order placed successfully</h2>
        Order ID: <strong>{orderId}</strong>
        <button onClick={goBack} className="text-primary hover:underline">
          Go back to previous page
        </button>
      </div>
    );
  }

  return (
    <div className=" flex flex-col md:flex-row justify-between gap-4">
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Full Name:
            </label>
            <Input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email:
            </label>
            <Input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="location" className="text-sm font-medium text-foreground">
              Shipping Address:
            </label>
            <Input
              type="text"
              placeholder="Enter your location"
              name="name"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium text-foreground">
              Phone:
            </label>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="payment" className="text-sm font-medium text-foreground">
              Payment Method:
            </label>
            <select
              className="border rounded p-2 w-full bg-background"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value as "mpesa" | "cash")}
            >
              <option value="mpesa">M-Pesa</option>
              <option value="cash">Cash on Delivery</option>
            </select>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-none text-center my-4"
            onSubmit={handleSubmit}
          >
            {isSubmitting ? "Placing Order.." : "Place Order"}
          </Button>
        </form>
      </div>

      <div className="w-full md:w-1/2 flex flex-col p-2">
        <h3 className="font-semibold mb-3">Order Summary</h3>

        {cart.items.map((item) => (
          <div key={item.id} className="flex  flex-row justify-between border border-foreground p-4 rounded-sm">
            <p>
              {item.title} × {item.quantity}
            </p>
            <p>KES {item.price * item.quantity}</p>
          </div>
        ))}

        <p className="font-bold pt-4">Total: KES {totalAmount}</p>
      </div>
    </div>
  );
};
export default ShippingCard;
