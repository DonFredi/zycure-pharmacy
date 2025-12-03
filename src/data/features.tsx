import { Feature } from "@/types/features";
import Truck from "@/components/icons/Truck";
import Badge from "@/components/icons/Badge";
import Hours from "@/components/icons/Hours";

// data/features.ts
export const features = [
  {
    id: 1,
    icon: <Truck />,
    title: "Fast Delivery",
    description: "Swift doorstep delivery for all your medical needs.",
  },
  {
    id: 2,
    icon: <Badge />,
    title: "Certified Pharmacist",
    description: "All our products are handled by licensed pharmacists.",
  },
  {
    id: 3,
    icon: <Hours />,
    title: "24/7 Support",
    description: "We are here anytime you need us for quick assistance.",
  },
];
