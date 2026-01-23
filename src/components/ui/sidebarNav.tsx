"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import { sidebarLinks } from "@/lib/sidebarMenu";
import Cancel from "../icons/Cancel";
import { Button } from "./Button";
import Facebook from "../icons/Facebook";
import TikTok from "../icons/TikTok";
import Instagram from "../icons/Instagram";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const SidebarNav = ({ isOpen, setIsOpen }: Props) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setIsOpen(false)} />
      <Button
        variant="outline"
        onClick={() => setIsOpen(false)}
        className="bg-white text-primary fixed top-0 left-[calc(75%+0.1rem)] z-60 shadow-md rounded-sm h-4 w-4 flex items-center justify-center"
      >
        <Cancel />
      </Button>
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs bg-background shadow-lg flex flex-col justify-between">
        {/* ───────── TOP ───────── */}
        <div className="p-2 ">
          <Logo />
        </div>

        {/* ───────── MIDDLE ───────── */}
        <nav>
          <ul className="flex flex-col gap-2">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-6 py-4 transition-colors
                      ${isActive ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted"}
                    `}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ───────── BOTTOM ───────── */}
        <div className="border-t p-4">
          <ul className="flex flex-row gap-4 text-primary justify-center items-center">
            <Link href={"/"}>
              <Facebook />
            </Link>
            <Link href={"/products"}>
              <TikTok />
            </Link>
            <Link href={"/contacts"}>
              <Instagram />
            </Link>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarNav;
