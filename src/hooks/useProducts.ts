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
        const q = category ? query(productsRef, where("categoryId", "==", category)) : productsRef;

        const snapshot = await getDocs(q);

        const list: Product[] = snapshot.docs.map((doc) => {
          const data = doc.data();

          return {
            id: doc.id,
            title: data.title ?? "",
            price: data.price ?? 0,
            categoryId: data.categoryId ?? "",

            imageSrc: data.imageSrc
              ? {
                  url: data.imageSrc.url ?? "",
                  publicId: data.imageSrc.publicId ?? "",
                }
              : null,

            description: data.description ?? "",
            benefit: data.benefit ?? "",
            use: data.use ?? "",

            createdAt: data.createdAt?.toDate?.().toISOString() ?? null,
            updatedAt: data.updatedAt?.toDate?.().toISOString() ?? null,
          };
        });

        setProducts(list);
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
