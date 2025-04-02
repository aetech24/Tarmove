import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

const UserDropdown = () => {
  const userLinks = [
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
    { href: "/logout", label: "Logout" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <div className="relative group">
      <button className="flex items-center">
        <BiUserCircle className="lg:w-[52px] lg:h-[52px] w-[32px] h-[32px] text-[#1E1E1E]" />
        <MdKeyboardArrowDown className="lg:w-[22px] lg:h-[22px] w-[22px] h-[22px] text-[#1E1E1E]" />
      </button>
      <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
        {userLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200 rounded-md text-[16px] font-medium"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDropdown;
