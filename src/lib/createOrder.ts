import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

async function createOrder(formData, cartItems, total) {
  const order = {
    clientName: formData.name,
    clientPhone: formData.phone, // ✅ client ID
    email: formData.email,
    location: formData.location,
    items: cartItems.map((item) => ({
      productId: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
    totalAmount: total,
    status: "pending",
    createdAt: serverTimestamp(),
  };

  await addDoc(collection(db, "orders"), order);
}
