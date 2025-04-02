// types.ts (Separate file for types)

// NavItem.tsx (Reusable Navigation Item Component)
import Link from "next/link";
import { NavLink } from "@/app/lib/types";

interface NavItemProps {
  link: NavLink;
  isMobile: boolean;
}

const NavItem = ({ link, isMobile }: NavItemProps) => {
  const baseClasses = "text-[#1E1E1E] font-semibold text-[20px]";
  
  if (link.submenu) {
    return (
      <li>
        <details>
          <summary className={baseClasses}>{link.label}</summary>
          <ul className={`p-2 bg-[#FDFDFD] ${!isMobile ? "drop-shadow-lg" : ""}`}>
            {link.submenu.map((subItem, subIndex) => (
              <li key={subIndex}>
                <Link href={subItem.href} className={baseClasses}>
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
    );
  }

  return (
    <li>
      <Link href={link.href} className={baseClasses}>
        {link.label}
      </Link>
    </li>
  );
};

export default NavItem;

