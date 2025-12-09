"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export function useProducts(category?: string) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      try {
        const productsRef = collection(db, "products");

        // If category is provided: filter
        const q = category ? query(productsRef, where("category", "==", category)) : productsRef;

        const snapshot = await getDocs(q);

        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(list);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [category]);

  return { products, loading };
}
