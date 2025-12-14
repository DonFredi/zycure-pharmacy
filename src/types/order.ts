export interface Order {
  name: string;
  phone: number;
  location: string;
  email: string;
  paymentMethod: "cash" | "mpesa";
}
