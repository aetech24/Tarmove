import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import "../globals.css";
const Nav = () => {
  return (
    <div className="px-3">
      <div className="navbar bg-[#FDFDFD] text-[#1E1E1E] h-[100px] ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#FDFDFD] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href="/"
                  className="text-[#1E1E1E] font-[600px] text-[20px]"
                >
                  Home
                </Link>
              </li>
              <details>
                <summary className="text-[#1E1E1E] font-[600px] text-[20px]">
                  Services
                </summary>
                <ul className="p-2 bg-[#FDFDFD]">
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
              <li>
                <Link
                  href={"/about"}
                  className="text-[#1E1E1E] font-[600px] text-[20px]"
                >
                  About
                </Link>
              </li>
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
          <Image
            src="/assets/TarmoveLogo.png"
            alt="Logo"
            className="lg:w-[172px] lg:h-[42.5px] w-[132px] h-[32.5px] "
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="navbar-center hidden lg:flex sticky px-6">
          <ul className="menu menu-horizontal px-1 bg-[#FDFDFD]">
            <li>
              <Link
                href="/"
                className="text-[#1E1E1E] font-[600px] text-[20px]"
              >
                Home
              </Link>
            </li>
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
            <li>
              <Link
                href={"/about"}
                className="text-[#1E1E1E] font-[600px] text-[20px]"
              >
                About
              </Link>
            </li>
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
        <div className="navbar-end gap-2 lg:gap-4 flex flex-row items-center relative">
          <div className="relative group">
            {/* Profile Icon (Triggers Dropdown) */}
            <button className="flex items-center">
              <BiUserCircle className="lg:w-[52px] lg:h-[52px] w-[32px] h-[32px] text-[#1E1E1E]" />
              <MdKeyboardArrowDown className="lg:w-[22px] lg:h-[22px] w-[22px] h-[22px] text-[#1E1E1E]" />
            </button>

            {/* Dropdown Menu */}
            <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
              <li>
                <Link
                  href="/login"
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200 rounded-md text-[16px] font-medium"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200 rounded-md text-[16px] font-medium"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200 rounded-md text-[16px] font-medium"
                >
                  Logout
                </Link>
              </li>
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

          {/* Call-to-Action Button */}
          <Link
            href={"/"}
            className="btn bg-gradient-to-b from-[#DD1234] to-[#B30F2A] lg:w-[168px] md:w-[168px] w-[100px] border-none rounded-[100px] shadow-custom-2 text-[20px] text-[#FFFFFF] font-[600]"
          >
            Button
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
