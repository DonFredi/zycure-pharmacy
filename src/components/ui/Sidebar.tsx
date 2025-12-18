"use client";

import Cancel from "../icons/Cancel";
import Logo from "./Logo";
import Copyright from "../icons/Copyright";
import { navLinks } from "@/data/navLinks";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-75 flex flex-col justify-between p-2 bg-white shadow-lg 
  transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
  transition-transform duration-300 z-50`}
    >
      <div className="flex flex-row justify-between my-4 items-center">
        <Logo />
        <button
          className="p-2 text-xl border border-primary w-fit h-fit text-primary rounded-sm"
          onClick={() => setIsOpen(false)}
        >
          <Cancel />
        </button>
      </div>

      <ul className="flex flex-col gap-6 font-bold w-full">
        {navLinks.map((nav) => (
          <li key={nav.id} className="p-6 hover:bg-primary hover:text-white w-full text-center rounded-sm">
            <a href={nav.href}>{nav.link}</a>
          </li>
        ))}
      </ul>
      <p>Zycure pharmacy</p>
    </div>
  );
};
export default Sidebar;
