"use client";

import NavLink from "./NavLink";
import Logo from "./Logo";
import Cart from "../icons/Cart";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Menu from "../icons/Menu";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between p-6 ">
        <button className="md:hidden rounded-sm p-2 border border-primary text-primary" onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
        <Logo />
        <nav className="hidden md:flex flex-row gap-6 justify-center h-fit">
          <NavLink href="/" label="Home" />
          <NavLink href="/products" label="Products" />
          <NavLink href="/contacts" label="Contact" />
        </nav>
        <Link className="text-primary" href={"/cart"}>
          <Cart />
        </Link>
      </header>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Header;
