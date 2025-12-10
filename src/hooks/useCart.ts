"use client";

import { useEffect, useState } from "react";
import { addDoc, collection, doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { CartItem, CartProductItem } from "@/types/cartItem";

const ACTIVE_CART_ID = "active_cart_id";

export function useCart() {
  const [cart, setCart] = useState<CartItem | null>(null);
  const router = useRouter();

  /* ----------------------------------------
     ✅ Helpers
  -----------------------------------------*/
  const calculateTotals = (items: CartProductItem[]) => {
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return { totalQuantity, totalAmount };
  };

  /* ----------------------------------------
     ✅ Restore cart on reload
  -----------------------------------------*/
  useEffect(() => {
    const restoreCart = async () => {
      const storedCartId = localStorage.getItem(ACTIVE_CART_ID);
      if (!storedCartId) return;

      const snap = await getDoc(doc(db, "cartItems", storedCartId));

      if (!snap.exists()) return;

      const data = snap.data();

      setCart({
        id: snap.id,
        clientId: data.clientPhone ?? null,
        status: data.status,
        items: data.items ?? [],
        totalQuantity: data.totalQuantity ?? 0,
        totalAmount: data.totalAmount ?? 0,
      });
    };

    restoreCart();
  }, []);

  /* ----------------------------------------
     ✅ Create or update cart
  -----------------------------------------*/
  const syncCart = async (items: CartProductItem[]) => {
    const phone = localStorage.getItem("clientPhone");
    const { totalQuantity, totalAmount } = calculateTotals(items);

    // 🆕 Create cart
    if (!cart?.id) {
      const docRef = await addDoc(collection(db, "cartItems"), {
        clientPhone: phone,
        status: "pending",
        items,
        totalQuantity,
        totalAmount,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      setCart({
        id: docRef.id,
        clientId: phone,
        status: "pending",
        items,
        totalQuantity,
        totalAmount,
      });

      localStorage.setItem(ACTIVE_CART_ID, docRef.id);
      return;
    }

    // 🔁 Update existing cart
    await updateDoc(doc(db, "cartItems", cart.id), {
      items,
      totalQuantity,
      totalAmount,
      updatedAt: serverTimestamp(),
    });

    setCart((prev) =>
      prev
        ? {
            ...prev,
            items,
            totalQuantity,
            totalAmount,
          }
        : prev
    );
  };

  /* ----------------------------------------
     ✅ Add product to cart
  -----------------------------------------*/
  const addToCart = async (product: Omit<CartProductItem, "quantity">) => {
    const existingItems = cart?.items ?? [];

    const updatedItems = existingItems.some((item) => item.productId === product.productId)
      ? existingItems.map((item) =>
          item.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      : [...existingItems, { ...product, quantity: 1 }];

    await syncCart(updatedItems);
    router.push("/cart");
  };

  /* ----------------------------------------
     ✅ Clear cart after checkout
  -----------------------------------------*/
  const clearCart = async () => {
    if (!cart?.id) return;

    await updateDoc(doc(db, "cartItems", cart.id), {
      status: "checked_out",
      items: [],
      totalQuantity: 0,
      totalAmount: 0,
      updatedAt: serverTimestamp(),
    });

    setCart(null);
    localStorage.removeItem(ACTIVE_CART_ID);
  };

  /* ----------------------------------------
     ✅ Public API
  -----------------------------------------*/
  return {
    cart,
    cartId: cart?.id,
    items: cart?.items ?? [],
    totalQuantity: cart?.totalQuantity ?? 0,
    totalAmount: cart?.totalAmount ?? 0,
    addToCart,
    clearCart,
  };
}
