"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type NavLinkProps = {
  to: string;
  exact?: boolean;
  activeClassName?: string;
  className?: string;
} & PropsWithChildren;

/** <NavLink to="/" activeClassName="text-blue-500 font-bold" className="text-gray-500"> Home </NavLink>  */
export default function NavLink({
  children,
  to,
  exact = true,
  className,
  activeClassName,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === to : pathname.startsWith(to);

  const resolvedClassName = twMerge(
    [className, isActive ? activeClassName : ""].filter(Boolean).join(" "),
  );

  return (
    <Link href={to} className={resolvedClassName}>
      {children}
    </Link>
  );
}
