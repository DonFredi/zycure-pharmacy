"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebaseClient";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Product } from "@/types/products";

export function useProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const productsRef = collection(db, "products");
        const q = category ? query(productsRef, where("category", "==", category)) : productsRef;

        const snapshot = await getDocs(q);
        console.log("Firestore project:", db.app.options.projectId);
        console.log("Docs count:", snapshot.size);
        const list: Product[] = snapshot.docs.map((doc) => {
          const data = doc.data() as Omit<Product, "id">;

          return {
            id: doc.id,
            title: data.title || "",
            price: data.price ?? 0,
            image: data.image || "",
            category: data.category || "",
            benefit: data.benefit || "",
            description: data.description || "",
            use: data.use || "",
          };
        });

        setProducts(list);
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
