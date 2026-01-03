"use client";

import NavLink from "./NavLink";
import Logo from "./Logo";
import Cart from "../icons/Cart";
import Menu from "../icons/Menu";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";

type HeaderProps = {
  setIsOpen: (open: boolean) => void;
};
const Header = ({ setIsOpen }: HeaderProps) => {
  const { totalItems } = useCart();

  return (
    <>
      <header className="flex flex-row items-center justify-between w-full p-6">
        <button className="md:hidden rounded-sm p-2 border border-primary text-primary" onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
        <Logo />
        <nav className="hidden md:flex flex-row gap-6 justify-center h-fit">
          <NavLink href="/" label="Home" />
          <NavLink href="/products" label="Products" />
          <NavLink href="/contacts" label="Contact" />
        </nav>
        <div className="relative">
          <Link className="text-primary relative" href={"/cart"}>
            <Cart />
          </Link>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold text-white bg-error-dark">
              {totalItems}
            </span>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
