"use client";

import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";
import { useRouter } from "next/navigation";
import { CartProductItem, ClientCart } from "@/types/cartItem";

const CART_STORAGE_KEY = "guest_cart";

export function useCart() {
  const [cart, setCart] = useState<ClientCart>({
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  });

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
     ✅ Restore cart from localStorage
  -----------------------------------------*/
  useEffect(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (!storedCart) return;

    const items: CartProductItem[] = JSON.parse(storedCart);
    const totals = calculateTotals(items);

    setCart({
      items,
      ...totals,
    });
  }, []);

  /* ----------------------------------------
     ✅ Persist cart to localStorage
  -----------------------------------------*/
  const persistCart = (items: CartProductItem[]) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    const totals = calculateTotals(items);

    setCart({
      items,
      ...totals,
    });
  };

  /* ----------------------------------------
     ✅ Add product to cart
  -----------------------------------------*/
  const addToCart = (product: Omit<CartProductItem, "quantity">, quantity: number = 1) => {
    const existingItems = cart.items;
    const updatedItems = existingItems.some((item) => item.id === product.id)
      ? existingItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item))
      : [...existingItems, { ...product, quantity }];

    persistCart(updatedItems);
    router.push("/cart");
  };

  /* ----------------------------------------
     ✅ Remove product
  -----------------------------------------*/
  const removeFromCart = (productId: string) => {
    const updatedItems = cart.items.filter((item) => item.id !== productId);
    persistCart(updatedItems);
  };

  /* ----------------------------------------
     ✅ Clear cart after checkout
  -----------------------------------------*/
  const clearCart = () => {
    localStorage.removeItem(CART_STORAGE_KEY);
    setCart({
      items: [],
      totalQuantity: 0,
      totalAmount: 0,
    });
  };

  /* ----------------------------------------
     ✅ Submit order to Firestore
  -----------------------------------------*/
  const submitOrder = async (orderDetails: { customerName: string; phone: string; address?: string }) => {
    if (cart.items.length === 0) return;

    await addDoc(collection(db, "orders"), {
      items: cart.items,
      totalQuantity: cart.totalQuantity,
      totalAmount: cart.totalAmount,
      customer: orderDetails,
      status: "pending",
      isGuest: true,
      createdAt: serverTimestamp(),
    });

    clearCart();
    router.push("/order-success");
  };

  /* ----------------------------------------
     ✅ Public API
  -----------------------------------------*/
  return {
    cart,
    items: cart.items,
    totalQuantity: cart.totalQuantity,
    totalAmount: cart.totalAmount,
    addToCart,
    removeFromCart,
    clearCart,
    submitOrder,
  };
}
