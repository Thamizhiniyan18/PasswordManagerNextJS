"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const NavLink = ({
  link,
}: {
  link: { name: string; path: string; notStartsWith?: boolean };
}) => {
  const pathname = usePathname();

  return (
    <Link
      key={link.name}
      href={link.path}
      className={clsx(
        "w-28 h-12 flex justify-center items-center cursor-pointer rounded-full mx-0.5",
        {
          "bg-sky-400 text-white": link.notStartsWith
            ? pathname === link.path
            : pathname.startsWith(link.path),
          "hover:bg-slate-200": link.notStartsWith
            ? pathname !== link.path
            : !pathname.startsWith(link.path),
        }
      )}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
