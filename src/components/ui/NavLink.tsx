import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-primary px-5 py-3 flex items-center rounded-md hover:outline outline-primary transition ${
        isActive ? "text-white bg-primary" : "text-primary"
      }`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
