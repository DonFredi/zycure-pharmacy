"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebaseClient";
import { doc, getDoc } from "firebase/firestore";
import { Product } from "@/types/products";

export function useProduct(id: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (!id) {
      setLoading(false);
      return;
    }

    async function fetchProduct() {
      try {
        const ref = doc(db, "products", id);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
          setProduct({
            id: snapshot.id,
            ...(snapshot.data() as Omit<Product, "id">),
          });
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  return { product, loading };
}
