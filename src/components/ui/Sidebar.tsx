"use client";

import Cancel from "../icons/Cancel";
import Logo from "./Logo";
import Copyright from "../icons/Copyright";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
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
        <li>
          <a href="/products">Products</a>
        </li>

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
