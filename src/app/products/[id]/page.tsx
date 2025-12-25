import ProductDetailsClient from "./ProductDetailsClient";
import { db } from "@/lib/firebaseClient";
import { Product } from "@/types/products";
import { doc, getDoc, Timestamp } from "firebase/firestore";

export const dynamic = "force-dynamic";

interface PageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = params instanceof Promise ? await params : params;

  // ✅ Client SDK way
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);
  if (!snap.exists) {
    return <div>Product not found</div>;
  }

  const data = snap.data()!;

  const product: Product = {
    id: snap.id,
    title: data.title,
    price: data.price,
    categoryId: data.categoryId,
    imageSrc: data.imageSrc,
    description: data.description,
    benefit: data.benefit,
    use: data.use,

    // ✅ SERIALIZED timestamps
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate().toISOString() : null,

    updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate().toISOString() : null,
  };

  return <ProductDetailsClient product={product} />;
}
