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
   ✅ Restore cart from Firebase on reload
  -----------------------------------------*/
  useEffect(() => {
    const restoreCart = async () => {
      const storedCartId = localStorage.getItem(ACTIVE_CART_ID);
      if (!storedCartId) return;

      const cartSnap = await getDoc(doc(db, "cartItems", storedCartId));

      if (!cartSnap.exists()) return;

      const data = cartSnap.data();

      setCart({
        id: cartSnap.id,
        clientId: data.clientPhone ?? null,
        status: data.status,
        items: data.items ?? [],
      });
    };

    restoreCart();
  }, []);

  /* ----------------------------------------
   ✅ Create or update cart in Firestore
  -----------------------------------------*/
  const syncCart = async (items: CartProductItem[]) => {
    const phone = localStorage.getItem("clientPhone");

    // 🆕 Create new cart
    if (!cart?.id) {
      const docRef = await addDoc(collection(db, "cartItems"), {
        clientPhone: phone ?? null,
        status: "active",
        items,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      const newCart: CartItem = {
        id: docRef.id,
        clientId: phone,
        status: "active",
        items,
      };

      setCart(newCart);
      localStorage.setItem(ACTIVE_CART_ID, docRef.id);
      return;
    }

    // 🔁 Update existing cart
    await updateDoc(doc(db, "cartItems", cart.id), {
      items,
      updatedAt: serverTimestamp(),
    });

    setCart((prev) => (prev ? { ...prev, items } : prev));
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
      updatedAt: serverTimestamp(),
    });

    setCart(null);
    localStorage.removeItem(ACTIVE_CART_ID);
  };

  return {
    cart, // ✅ contains items[]
    cartId: cart?.id, // ✅ Firebase-generated ID
    addToCart,
    clearCart,
  };
}
