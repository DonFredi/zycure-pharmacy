"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { Category } from "@/types/category";
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

        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Category[];

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
