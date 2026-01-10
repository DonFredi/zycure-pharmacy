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
      className={`relative  transition-all duration-300 ease-out
    hover:-translate-y-0.5 hover:scale-[1.03] text-primary px-5 py-3 flex items-center rounded-md hover:outline outline-primary ${
      isActive ? "text-white bg-primary scale-95" : "text-primary"
    }`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
