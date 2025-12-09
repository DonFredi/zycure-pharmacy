export type CartItem = {
  id: string;
  clientId: number;
  totalPrice: number;
  quantity: number;
  image?: string;
  items: Products[];
  createdAt?: any;
  updatedAt?: any;
};
