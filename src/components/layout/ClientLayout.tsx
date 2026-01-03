"use client";

import { useState } from "react";
import Header from "../ui/Header";
import SidebarNav from "@/components/ui/sidebarNav";
import Footer from "../ui/Footer";
import { CartProvider } from "@/contexts/CartContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartProvider>
      <Header setIsOpen={setIsOpen} />
      <SidebarNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex-1">{children}</main>
      <Footer />
    </CartProvider>
  );
}
