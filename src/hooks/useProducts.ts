"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Product } from "@/types/products";

export function useProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      try {
        const productsRef = collection(db, "products");

        const q = category ? query(productsRef, where("category", "==", category)) : productsRef;

        const snapshot = await getDocs(q);
        const list: Product[] = snapshot.docs
          .map((doc) => {
            const data = doc.data() as Omit<Product, "id">;
            if (!data.title || !data.price || !data.image) return null; // skip invalid

            return {
              ...data,
              id: doc.id,
            };
          })
          .filter((p): p is Product => p !== null); // type guard

        setProducts(list || []);
        console.log("Fetched products:", list);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [category]);

  return { products, loading };
}
