"use client";

import Link from "next/link";
import { useState } from "react";
import ArrowDown from "../icons/ArrowDown";
import ArrowUp from "../icons/ArrowUp";
import Cancel from "../icons/Cancel";
import Logo from "./Logo";
import { useCategories } from "@/hooks/useCategory";
import Copyright from "../icons/Copyright";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const [openProducts, setOpenProducts] = useState(true);
  const { categories } = useCategories();
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div
      className={`fixed top-0 left-0 h-full w-74 bg-white shadow-lg 
  transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
  transition-transform duration-300 z-50`}
    >
      <div className="flex flex-row justify-between p-1 items-center">
        <Logo />
        <button
          className="p-2 text-xl border border-primary w-fit h-fit text-primary rounded-sm"
          onClick={() => setIsOpen(false)}
        >
          <Cancel />
        </button>
      </div>

      <ul className="flex flex-col gap-6 p-6 text-lg">
        <li>
          <a href="/">Home</a>
        </li>
        <button
          className={`flex justify-between items-center py-2 hover:text-primary ${openProducts ? "py-2" : "py-0"}`}
          onClick={() => setOpenProducts(!openProducts)}
        >
          <span>Products</span>
          <span className="transition-transform duration-300">{openProducts ? <ArrowUp /> : <ArrowDown />}</span>
        </button>

        <div
          className={`
            ml-4 flex flex-col gap-2 text-sm overflow-hidden 
            transition-all duration-300 ease-in-out
            ${openProducts ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          {categories.map((cat) => (
            <Link key={cat.id} href={`/products/${cat.slug}`} className="hover:text-primary">
              {cat.title}
            </Link>
          ))}
        </div>

        <li>
          <a href="/contacts">Contact</a>
        </li>
      </ul>
      <p className="text-foreground flex flex-row text-wrap items-center">
        <Copyright />
        {year} ZyCure Pharmacy.All Rights Reserved.
      </p>
    </div>
  );
};
export default Sidebar;
