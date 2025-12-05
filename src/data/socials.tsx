"use client";
import Email from "@/components/icons/Email";
import Phone from "@/components/icons/Phone";
import Pin from "@/components/icons/Pin";
import Whatsapp from "@/components/icons/Whatsapp";

const whatsapp = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP!}`;
const phone = `tel:${process.env.NEXT_PUBLIC_PHONE!}`;
const email = `mailto:${process.env.NEXT_PUBLIC_EMAIL!}`;
const location = process.env.NEXT_PUBLIC_LOCATION_URL!;

export const socials = [
  {
    id: 1,
    icon: <Email />,
    text: "Send us a message",
    href: email,
  },
  {
    id: 2,
    icon: <Whatsapp />,
    text: "Chat with us",
    href: whatsapp,
  },
  {
    id: 3,
    icon: <Pin />,
    text: "Visit our shop",
    href: location,
  },
  {
    id: 4,
    icon: <Phone />,
    text: "Call us",
    href: phone,
  },
];
