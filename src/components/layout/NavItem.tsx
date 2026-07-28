import Link from "next/link";

export function NavItem({
  href,
  active,
  className,
  children,
}: {
  href: string;
  active: boolean;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} aria-current={active ? "page" : undefined} className={className}>
      {children}
    </Link>
  );
}
