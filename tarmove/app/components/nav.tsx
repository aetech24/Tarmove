import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import "../globals.css";

// Our website's navigation menu
// Helps users move around the site easily
const Nav = () => {
  return (
    // Adds a bit of padding around our menu
    <div className="px-3">
      {/* The main navigation bar with a clean, light look */}
      <div className="navbar bg-[#FDFDFD] text-[#1E1E1E] h-[100px] ">
        {/* Where our logo or brand stuff goes */}
        <div className="navbar-start">
          {/* A hamburger menu for small screens */}
          <div className="dropdown">
            {/* The little menu button that appears on mobile */}
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* The three-line menu icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Dropdown menu for mobile users */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#FDFDFD] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/* Home link for mobile */}
              <li>
                <Link
                  href="/"
                  className="text-[#1E1E1E] font-[600px] text-[20px]"
                >
                  Home
                </Link>
              </li>

              {/* Services dropdown for mobile */}
              <details>
                <summary className="text-[#1E1E1E] font-[600px] text-[20px]">
                  Services
                </summary>
                <ul className="p-2 bg-[#FDFDFD]">
                  <li>
                    {/* More service links will go here */}
                    <Link
                      href={"/services/service1"}
                      className="text-[#1E1E1E] font-[600px] text-[20px]"
                    >
                      Submenu 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services/service2"}
                      className="text-[#1E1E1E] font-[600px] text-[20px]"
                    >
                      Submenu 2
                    </Link>
                  </li>
                </ul>
              </details>
              {/* About link for mobile */}
              <li>
                <Link
                  href={"/about"}
                  className="text-[#1E1E1E] font-[600px] text-[20px]"
                >
                  About
                </Link>
              </li>
              {/* Contact link for mobile */}
              <li>
                <Link
                  href={"/contact"}
                  className="text-[#1E1E1E] font-[600px] text-[20px]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Our website's logo */}
          <Image
            src="/assets/TarmoveLogo.png"
            alt="Logo"
            className="lg:w-[172px] lg:h-[42.5px] w-[132px] h-[32.5px] "
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        {/* Navigation links for larger screens */}
        <div className="navbar-center hidden lg:flex sticky px-6">
          <ul className="menu menu-horizontal px-1 bg-[#FDFDFD]">
            {/* Home link for larger screens */}
            <li>
              <Link
                href="/"
                className="text-[#1E1E1E] font-[600px] text-[20px]"
              >
                Home
              </Link>
            </li>
            {/* Services dropdown for larger screens */}
            <li>
              <details>
                <summary className="text-[#1E1E1E] font-[600px] text-[20px]">
                  Services
                </summary>
                <ul className="p-2 bg-[#FDFDFD] drop-shadow-lg">
                  <li>
                    <Link
                      href={"/services/service1"}
                      className="text-[#1E1E1E] font-[600px] text-[20px]"
                    >
                      Submenu 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services/service2"}
                      className="text-[#1E1E1E] font-[600px] text-[20px]"
                    >
                      Submenu 2
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            {/* About link for larger screens */}
            <li>
              <Link
                href={"/about"}
                className="text-[#1E1E1E] font-[600px] text-[20px]"
              >
                About
              </Link>
            </li>
            {/* Contact link for larger screens */}
            <li>
              <Link
                href={"/contact"}
                className="text-[#1E1E1E] font-[600px] text-[20px]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* User profile and call-to-action buttons */}
        <div className="navbar-end gap-2 lg:gap-4 flex flex-row items-center relative">
          {/* User profile dropdown */}
          <div className="relative group">
            {/* Profile icon that triggers the dropdown */}
            <button className="flex items-center">
              <BiUserCircle className="lg:w-[52px] lg:h-[52px] w-[32px] h-[32px] text-[#1E1E1E]" />
              <MdKeyboardArrowDown className="lg:w-[22px] lg:h-[22px] w-[22px] h-[22px] text-[#1E1E1E]" />
            </button>

            {/* Dropdown menu for user profile */}
            <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
              {/* Login link */}
              <li>
                <Link
                  href="/login"
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200 rounded-md text-[16px] font-medium"
                >
                  Login
                </Link>
              </li>
              {/* Register link */}
              <li>
                <Link
                  href="/register"
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200 rounded-md text-[16px] font-medium"
                >
                  Register
                </Link>
              </li>
              {/* Logout link */}
              <li>
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200 rounded-md text-[16px] font-medium"
                >
                  Logout
                </Link>
              </li>
              {/* Profile link */}
              <li>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200 rounded-md text-[16px] font-medium"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Call-to-action button */}
          <Link
            href={"/"}
            className="btn bg-gradient-to-b from-[#DD1234] to-[#B30F2A] lg:w-[168px] md:w-[168px] w-[100px] border-none rounded-[100px] shadow-custom-2 text-[20px] text-[#FFFFFF] font-[600] hover:scale-105 duration-200 hover:opacity-80 hover:text-[#FFFFFF]"
          >
            Button
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
