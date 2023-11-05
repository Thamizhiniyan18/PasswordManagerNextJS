"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const DashboardNav = () => {
  const pathname = usePathname();

  const links = [
    { name: "Passwords", path: "/dashboard/passwords" },
    { name: "Recovery Keys", path: "/dashboard/recoverykeys" },
    { name: "Notes", path: "/dashboard/notes" },
  ];

  return (
    <div className="left-0 flex flex-col w-72 h-[calc(100vh-80px)] justify-start items-center border-r px-10">
      <Link
        href="/dashboard"
        className="w-full h-12 flex justify-center items-center text-3xl mb-10 hover:bg-slate-200 rounded-full"
      >
        Dashboard
      </Link>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={clsx(
            "w-60 h-12 flex justify-center items-center cursor-pointer rounded-full mx-0.5",
            {
              "bg-sky-400 text-white": pathname === link.path,
              "hover:bg-slate-200": pathname !== link.path,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default DashboardNav;
