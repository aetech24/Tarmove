import { NavLink } from "@/app/lib/types";
import NavItem from "@/app/components/NavItem";

interface DrawerProps {
  navLinks: NavLink[];
}

export const Drawer: React.FC<DrawerProps> = ({ navLinks }) => {
  return (
    <div className="drawer lg:hidden z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="flex-none">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[#FDFDFD] min-h-full w-80 p-4">
          {navLinks.map((link, index) => (
            <NavItem key={index} link={link} isMobile={true} />
          ))}
        </ul>
      </div>
    </div>
  );
};
