import ProductDetailsClient from "./ProductDetailsClient";
import { db } from "@/lib/firebaseClient";
import { Product } from "@/types/products";
import { doc, getDoc, Timestamp } from "firebase/firestore";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

interface PageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = params instanceof Promise ? await params : params;

  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    return {
      title: "Product not found | ZyCure Pharmacy",
      description: "This product does not exist.",
    };
  }

  const product = snap.data();

  return {
    title: `${product.title} | ZyCure Pharmacy`,
    description: product.description?.slice(0, 155) || `Buy ${product.title} at the best price from ZyCure Pharmacy.`,

    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.imageSrc?.url || "/images/og-default.png",
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.imageSrc?.url || "/images/og-default.png"],
    },
  };
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
