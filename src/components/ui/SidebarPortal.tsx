"use client";

import { createPortal } from "react-dom";
import SidebarNav from "@/components/ui/sidebarNav";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function SidebarPortal({ isOpen, setIsOpen }: Props) {
  if (typeof window === "undefined") return null;

  return createPortal(<SidebarNav isOpen={isOpen} setIsOpen={setIsOpen} />, document.body);
}
