"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useCart } from "@/hooks/useCart";
import { ClientCart, CartProductItem } from "@/types/cartItem";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";
import { toast } from "react-toastify";

type CartContextType = {
  cart: ClientCart;
  items: CartProductItem[];
  totalItems: number;
  totalQuantity: number;
  totalAmount: number;
  addToCart: (product: Omit<CartProductItem, "quantity">, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  submitOrder: (orderDetails: { customerName: string; phone: string; address?: string }) => Promise<void>;
};

export const CartContext = createContext<CartContextType | null>(null);
const CART_STORAGE_KEY = "guest_cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ClientCart>({
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  });

  const calculateTotals = (items: CartProductItem[]) => {
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = items.length;

    return { totalQuantity, totalAmount, totalItems };
  };

  /* ----------------------------------------
     ✅ Restore cart from localStorage
  -----------------------------------------*/
  useEffect(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (!storedCart) return;

    const items: CartProductItem[] = JSON.parse(storedCart);
    setCart({ items, ...calculateTotals(items) });
    // const totals = calculateTotals(items);
  }, []);

  //   const addToCart = (product: Omit<CartProductItem, "quantity">, quantity = 1) => {
  //     setCart((prev) => {
  //       const items = prev.items.some((i) => i.id === product.id)
  //         ? prev.items.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i))
  //         : [...prev.items, { ...product, quantity }];

  //       localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  //       return { items, ...calculateTotals(items) };
  //     });
  //   };

  const addToCart = (product: Omit<CartProductItem, "quantity">, quantity = 1) => {
    setCart((prev) => {
      const exists = prev.items.find((i) => i.id === product.id);

      let items: CartProductItem[];

      if (exists) {
        items = prev.items.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i));

        toast.info(`${product.title} quantity updated`, {
          toastId: `cart-${product.id}`,
        });
      } else {
        items = [...prev.items, { ...product, quantity }];

        toast.success(`${product.title} added to cart 🛒`, {
          toastId: `cart-${product.id}`,
        });
      }

      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      return { items, ...calculateTotals(items) };
    });
  };

  const removeFromCart = (id: string) => {
    let removedItemTitle: string | null = null;

    setCart((prev) => {
      const removedItem = prev.items.find((i) => i.id === id);

      if (!removedItem) return prev;

      removedItemTitle = removedItem.title;

      const items = prev.items.filter((i) => i.id !== id);

      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));

      return { items, ...calculateTotals(items) };
    });

    // ✅ Side effect AFTER state update
    if (removedItemTitle) {
      toast.warning(`${removedItemTitle} removed from cart 🗑️`, {
        toastId: `remove-${id}`,
      });
    }
  };

  //   const removeFromCart = (id: string) => {
  //     setCart((prev) => {
  //       console.log("Removing ID:", id);
  //       console.log(
  //         "Cart items:",
  //         prev.items.map((i) => i.id)
  //       );
  //       const items = prev.items.filter((i) => i.id !== id);
  //       console.log(
  //         "After removal:",
  //         items.map((i) => i.id)
  //       );
  //       localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  //       return { items, ...calculateTotals(items) };
  //     });
  //   };

  const clearCart = () => {
    localStorage.removeItem(CART_STORAGE_KEY);
    setCart({ items: [], totalQuantity: 0, totalAmount: 0 });
  };

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
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        items: cart.items,
        totalItems: cart.items.length,
        totalQuantity: cart.totalQuantity,
        totalAmount: cart.totalAmount,
        addToCart,
        removeFromCart,
        clearCart,
        submitOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
