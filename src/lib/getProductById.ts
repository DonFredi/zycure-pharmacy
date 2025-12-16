// lib/getProductById.ts
import { adminDb } from "./firebaseAdmin";
import { Product } from "@/types/products";

export async function getProductById(id: string): Promise<Product | null> {
  if (!id) return null;

  const docRef = adminDb.doc(`products/${id}`);
  const snap = await docRef.get(); // ✅ correct for admin SDK

  if (!snap.exists) return null;

  return {
    id: snap.id,
    ...(snap.data() as Omit<Product, "id">),
  };
}
