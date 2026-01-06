"use client";

import { Button } from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { Upload } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP;
  const whatsappMessage = encodeURIComponent("Hello ZyCure, I would like to upload a prescription");

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return (
    <div className="bg-primary md:rounded-full rounded-none p-6 md:w-[90%] md:mx-auto  flex flex-col md:flex-row justify-between items-center text-center gap-4">
      <Title
        text="Upload Prescription"
        as="h3"
        size="xxl"
        align="center"
        color="text-white"
        className="text-xl font-bold"
      />
      <p className="text-white text-wrap">
        Do you have a prescription and need advice? Please upload your prescription here.
      </p>

      <Button variant={"outline"} className="bg-white hover:bg-neutral" asChild>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Upload />
          Upload Prescription
        </a>
      </Button>
    </div>
  );
};
export default CTASection;
