"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export function useSingleProduct(id: string) {
  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        const ref = doc(db, "products", id);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  return { product, loading };
}
