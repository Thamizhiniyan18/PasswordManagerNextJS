"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import NavLink from "./NavLink";
import HomeNavOpen from "./buttons/HomeNavOpen";
import HomeNavClose from "./buttons/HomeNavClose";
import { useSearchParams } from "next/navigation";

const HomeNavMobile = () => {
  const searchParams = useSearchParams();
  const navState = searchParams.get("navState");

  const links = [
    { name: "Home", path: "/", notStartsWith: true },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Login", path: "/login" },
    { name: "SignUp", path: "/signup" },
    // { name: "Logout", path: "/logout" },
  ];

  return (
    <div className="md:hidden relative flex items-center justify-between w-screen h-20 p-2">
      <Link
        className="w-52 h-14 text-lg flex justify-center items-center rounded-full hover:bg-slate-200"
        href="/"
      >
        PasswordManager
      </Link>
      {navState === "true" ? <HomeNavClose /> : <HomeNavOpen />}
      <div
        className={clsx(
          "fixed top-20 h-[calc(100vh-80px)] w-[250px] right-0 p-2 flex flex-col justify-start items-center bg-white rounded-lg shadow-xl duration-1000",
          { "opacity-100": navState === "true" },
          { "translate-x-[250px] opacity-0": !navState }
        )}
        onClick={() => {}}
      >
        {links.map((link) => (
          <NavLink key={link.name} link={link} />
        ))}
      </div>
    </div>
  );
};

export default HomeNavMobile;
