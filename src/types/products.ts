export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  isDiscounted?: boolean;
  isNew?: boolean;
  categoryId: string;
  imageSrc: { url: string; publicId: string } | null;
  description: string;
  benefit: string;
  use: string;
  createdAt?: string | null;
  updatedAt?: string | null;
}
