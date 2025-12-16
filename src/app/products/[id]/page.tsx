import { Product } from "@/types/products";
import ProductDetailsClient from "./ProductDetailsClient";
import { getProductById } from "@/lib/getProductById";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseClient";

interface PageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  // Unwrap params if it is a promise
  const { id } = params instanceof Promise ? await params : params;

  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return <div>Product not found</div>;
  }

  const product: Product = {
    id: snap.id,
    ...(snap.data() as Omit<Product, "id">),
  };

  return <ProductDetailsClient product={product} />;
}
