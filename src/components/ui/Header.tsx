"use client";

import NavLink from "./NavLink";
import Logo from "./Logo";
import Cart from "../icons/Cart";

const Header = () => {
  return (
    <header className="flex align-center justify-between p-6 ">
      <Logo />
      <nav className="flex flex-row gap-6 justify-center h-fit">
        <NavLink href="/" label="Home" />
        <NavLink href="/products" label="Products" />
        <NavLink href="/contacts" label="Contact" />
      </nav>

      <Cart />
    </header>
  );
};

export default Header;
