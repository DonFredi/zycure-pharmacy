"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebaseClient";
import { Category } from "@/types/categories";
import { collection, getDocs } from "firebase/firestore";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      try {
        const ref = collection(db, "categories");
        const snapshot = await getDocs(ref);

        const list: Category[] = snapshot.docs
          .map((doc) => ({
            ...(doc.data() as Omit<Category, "id">),
            id: doc.id, // ✅ string
          }))
          .filter((c) => c.id);

        setCategories(list);
      } catch (err) {
        console.error("Error loading categories", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return { categories, loading };
}
