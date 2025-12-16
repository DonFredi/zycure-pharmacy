export type CartProductItem = {
  id: string; // products collection ID
  title: string;
  price: number;
  quantity: number;
  category: string;
  benefit: string;
  description: string;
  image?: string;
  use: string;
};
export type CartItem = {
  id: string;
  clientId: number | null;
  totalPrice: number;
  status: "pending" | "confirmed" | "delivered";
  totalQuantity?: number;
  totalAmount?: number;
  items: CartProductItem[];
  createdAt?: any;
  updatedAt?: any;
};
export type ClientCart = {
  items: CartProductItem[];
  totalQuantity: number;
  totalAmount: number;
};
