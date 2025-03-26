import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Drawer } from "@/app/components/drawer";
import UserDropdown from "@/app/components/UserDropdown";
import NavItem from "@/app/components/NavItem";
import { NavLink } from "@/app/lib/types";

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "#",
    label: "Services",
    submenu: [
      { href: "/services/service1", label: "Submenu 1" },
      { href: "/services/service2", label: "Submenu 2" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Nav = () => {
  return (
    <nav className="navbar bg-[#FDFDFD] text-[#1E1E1E] h-[100px] px-4">
      <div className="navbar-start">
        <Drawer navLinks={navLinks} />
        <Image src="/assets/TarmoveLogo.png" alt="Logo" width={172} height={42.5} />
      </div>

      <div className="navbar-center hidden lg:flex sticky px-6">
        <ul className="menu menu-horizontal px-1 bg-[#FDFDFD]">
          {navLinks.map((link, index) => (
            <NavItem key={index} link={link} isMobile={false} />
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2 lg:gap-4 flex flex-row items-center relative">
        <UserDropdown />
        <Link href="/" className="btn bg-gradient-to-b from-[#DD1234] to-[#B30F2A] lg:w-[168px] w-[100px] border-none rounded-[100px] shadow-custom-2 text-[20px] text-[#FFFFFF] font-[600] hover:scale-105 duration-200 hover:opacity-80">
          Button
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
