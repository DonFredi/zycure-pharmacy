import PageContainer from "@/components/pages/PageContainer";
import Social from "./components/card/Social";
import ContactSection from "./components/section/ContactSection";
import EmbedMap from "./components/section/EmbedMap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ZyCure Pharmacy Kenya",
  description:
    "Contact ZyCure Pharmacy Kenya for medicine orders, prescriptions, and customer support. Reach us via phone or online for fast assistance across Kenya.",
  keywords: [
    "contact pharmacy Kenya",
    "online pharmacy support Kenya",
    "pharmacy customer care Kenya",
    "medicine delivery contact Kenya",
  ],
  openGraph: {
    title: "Contact ZyCure Pharmacy Kenya",
    description:
      "Get in touch with ZyCure Pharmacy Kenya for medicine orders, prescriptions, and healthcare support across Kenya.",
    locale: "en_KE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <PageContainer>
      <ContactSection />
      <EmbedMap />
      <Social />
    </PageContainer>
  );
};

export default page;
