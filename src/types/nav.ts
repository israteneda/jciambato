export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};
