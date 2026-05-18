import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`relative px-5 py-3 text-primary transition-all duration-300 ease-out
      hover:-translate-y-0.5 hover:scale-[1.03]

      after:absolute after:left-0 after:bottom-1
      after:h-0.5 after:w-0
      after:bg-primary
      after:transition-all after:duration-300

      hover:after:w-full

      ${isActive ? "after:w-full scale-95" : ""}`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
