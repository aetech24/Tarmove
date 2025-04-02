export type NavLink = {
  href: string;
  label: string;
  submenu?: {
    href: string;
    label: string;
  }[];
};
