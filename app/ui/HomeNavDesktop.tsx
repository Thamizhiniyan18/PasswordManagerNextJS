"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const HomeNavDesktop = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Login", path: "/login" },
    { name: "SignUp", path: "/signup" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <div className="hidden md:flex w-screen h-20 justify-between items-center px-10">
      <Link
        className="w-52 h-14 text-lg flex justify-center items-center rounded-full hover:bg-slate-200"
        href="/"
      >
        PasswordManager
      </Link>

      <div className="flex items-center">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={clsx(
              "w-28 h-12 flex justify-center items-center cursor-pointer rounded-full mx-0.5",
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
    </div>
  );
};

export default HomeNavDesktop;
