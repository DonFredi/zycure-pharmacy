"use client";
import { Button } from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP;
  const whatsappMessage = encodeURIComponent("Hello ZyCure, I would like to upload a prescription");

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="bg-neutral  grid md:grid-cols-2 grid-cols-1">
      <div className="flex flex-col max-w-163 items-center gap-6  p-4 md:p-12">
        <Title
          text="Fast. Reliable. Online Pharmacy You Can Trust."
          as="h1"
          size="xxl"
          align="left"
          color="text-foreground"
        />
        <p className="text-left">
          Get quality medicines and wellness products delivered right to your door — safely, quickly, and with care.
        </p>
        <div className="w-full flex justify-between md:justify-start gap-2">
          <Button>
            <Link href="/products">Shop Now</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Upload />
              Upload Prescription
            </a>
          </Button>
        </div>
      </div>
      <div className="relative h-75">
        <Image src="/images/hero-image.jpg" alt="hero-section-image" fill className="object-cover " />
      </div>
    </section>
  );
};
export default Hero;
