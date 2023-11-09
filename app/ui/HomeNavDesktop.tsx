import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const HomeNavDesktop = () => {
  const links = [
    { name: "Home", path: "/", notStartsWith: true },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Login", path: "/login" },
    { name: "SignUp", path: "/signup" },
    // { name: "Logout", path: "/logout" },
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
          <NavLink key={link.name} link={link} />
        ))}
      </div>
    </div>
  );
};

export default HomeNavDesktop;
