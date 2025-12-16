// lib/getProductById.ts
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseClient";
import { Product } from "@/types/products";

export async function getProductById(id: string): Promise<Product | null> {
  if (!id) return null;

  // Example: Get a single product
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);
  if (!snap.exists) return null;

  return {
    id: snap.id,
    ...(snap.data() as Omit<Product, "id">),
  };
}
