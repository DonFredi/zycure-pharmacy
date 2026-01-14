"use client";
import SectionContainer from "@/components/section/SectionContainer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";
import { useOrder } from "@/hooks/useOrder";
import { Order } from "@/types/order";
import Link from "next/link";
import { useForm } from "react-hook-form";

const ShippingCard = () => {
  const { placeOrder, isSubmitting, error, orderId } = useOrder();
  const { cart, totalAmount } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Order>({
    defaultValues: {
      paymentMethod: "mpesa",
    },
  });

  const onSubmit = (data: Order) => {
    placeOrder({
      ...data,
      phone: Number(data.phone),
    });
  };

  //   const [name, setName] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [location, setLocation] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [paymentMethod, setPaymentMethod] = useState<"mpesa" | "cash">("mpesa");

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();

  //     placeOrder({
  //       name,
  //       phone: Number(phone),
  //       location,
  //       email,
  //       paymentMethod,
  //     });
  //   };

  if (orderId) {
    return (
      <SectionContainer className=" flex flex-col items-center justify-around rounded-sm">
        <h2 className="text-xl font-bold">Order placed successfully</h2>
        Order ID: <strong>{orderId}</strong>
        <Link href="/" className="text-primary hover:underline">
          Go back to Homepage
        </Link>
      </SectionContainer>
    );
  }

  return (
    <div className=" flex flex-col md:flex-row justify-between gap-2">
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <Input {...register("name", { required: "Name is required" })} placeholder="Enter your name" />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Shipping Address</label>
            <Input {...register("location", { required: "Address is required" })} placeholder="Enter your location" />
            {errors.location && <p className="text-sm text-red-500">{errors.location.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Phone</label>
            <Input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 9,
                  message: "Phone number is too short",
                },
              })}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Payment Method</label>
            <select {...register("paymentMethod")} className="border rounded p-2 w-full bg-background">
              <option value="mpesa">M-Pesa</option>
              <option value="cash">Cash on Delivery</option>
            </select>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <Button type="submit" disabled={isSubmitting} className="w-full rounded-none mt-4">
            {isSubmitting ? "Placing Order..." : "Place Order"}
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
