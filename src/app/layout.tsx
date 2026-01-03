import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "ZyCure Pharmacy Kenya | Trusted Online Pharmacy in Kenya",
    template: "%s | ZyCure Pharmacy Kenya",
  },
  description:
    "ZyCure Pharmacy Kenya is a licensed online pharmacy offering genuine medicines, prescriptions, and healthcare products with fast delivery across Kenya.",
  keywords: [
    "online pharmacy Kenya",
    "buy medicine online Kenya",
    "pharmacy in Kenya",
    "prescription drugs Kenya",
    "OTC medicines Kenya",
    "Nairobi pharmacy delivery",
  ],
  authors: [{ name: "ZyCure Pharmacy Kenya" }],
  creator: "ZyCure Pharmacy Kenya",
  publisher: "ZyCure Pharmacy Kenya",
  metadataBase: new URL("https://zycurepharmacy.co.ke"),

  openGraph: {
    title: "ZyCure Pharmacy Kenya | Trusted Online Pharmacy",
    description: "Order genuine medicines and healthcare products online with fast delivery across Kenya.",
    url: "https://zycurepharmacy.co.ke",
    siteName: "ZyCurePharmacy Kenya",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YourPharmacy Kenya Online Pharmacy",
      },
    ],
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "YourPharmacy Kenya | Online Pharmacy",
    description: "Licensed online pharmacy delivering quality medicines across Kenya.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Banner from "../components/ui/Banner";
import Footer from "../components/ui/Footer";
import ClientLayout from "@/components/layout/ClientLayout";
import { CartProvider } from "@/contexts/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col `}>
        <Banner />
        <CartProvider>
          <ClientLayout>{children}</ClientLayout>
        </CartProvider>
      </body>
    </html>
  );
}
