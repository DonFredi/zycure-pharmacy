"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";
import { useCart } from "@/hooks/useCart";
import { Order } from "@/types/order";

export function useOrder() {
  const { items, totalAmount, totalQuantity, clearCart } = useCart();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);

  const placeOrder = async (details: Order) => {
    if (!items.length) {
      setError("Cart is empty");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const docRef = await addDoc(collection(db, "orders"), {
        customer: {
          name: details.name,
          phone: details.phone,
          location: details.location,
          email: details.email,
        },
        items,
        totalQuantity,
        totalPrice: totalAmount,
        paymentMethod: details.paymentMethod,
        status: "pending",
        createdAt: serverTimestamp(),
      });

      setOrderId(docRef.id);

      // ✅ Clear cart AFTER successful order
      clearCart();
    } catch (err) {
      console.error("Order error:", err);
      setError("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    placeOrder,
    isSubmitting,
    error,
    orderId,
  };
}
