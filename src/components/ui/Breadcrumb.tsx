"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  lastLabel?: string;
}

const labelMap: Record<string, string> = {
  products: "Products",
};

const Breadcrumb = ({ lastLabel }: BreadcrumbProps) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-600">
      <ol className="flex items-center gap-1">
        <li>
          <Link href="/" className="hover:text-black">
            Home
          </Link>
        </li>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          const label = isLast && lastLabel ? lastLabel : labelMap[segment] || segment;

          return (
            <li key={href} className="flex items-center gap-1">
              <span>/</span>

              {isLast ? (
                <span className="font-medium text-gray-900">{label}</span>
              ) : (
                <Link href={href} className="hover:text-black">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
