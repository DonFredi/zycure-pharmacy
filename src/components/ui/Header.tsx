"use client";

import NavLink from "./NavLink";
import Logo from "./Logo";
import Cart from "../icons/Cart";
import { useState } from "react";
import Menu from "../icons/Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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

      <Cart className="text-primary" />
    </header>
  );
};

export default Header;
