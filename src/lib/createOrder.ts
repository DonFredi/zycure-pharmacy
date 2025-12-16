import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";
import { CartProductItem } from "@/types/cartItem";

interface OrderFormData {
  name: string;
  phone: string;
  location?: string;
  email: string;
}
async function createOrder(formData: OrderFormData, cartItems: CartProductItem[], total: number) {
  const order = {
    clientName: formData.name,
    clientPhone: formData.phone, // ✅ client ID
    email: formData.email,
    location: formData.location || "",
    items: cartItems.map((item) => ({
      productId: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    })),
    totalAmount: total,
    status: "pending",
    createdAt: serverTimestamp(),
  };

  await addDoc(collection(db, "orders"), order);
}
