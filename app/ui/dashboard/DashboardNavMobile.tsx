"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const DashboardNavMobile = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();
  const dashNavState = searchParams.get("dashNavState");

  const links = [
    { name: "Passwords", path: "/dashboard/passwords" },
    { name: "Recovery Keys", path: "/dashboard/recoverykeys" },
    { name: "Notes", path: "/dashboard/notes" },
  ];

  return (
    <div
      className={clsx(
        "fixed left-0 h-[calc(100vh-80px)] w-[250px] bg-white shadow-xl duration-1000",
        { "opacity-100": dashNavState === "true" },
        { "translate-x-[-250px] opacity-0": !dashNavState }
      )}
    >
      <div className="w-full h-10 flex justify-end items-center mb-5">
        <button className="w-11 h-10 flex justify-center items-center rounded-l-full bg-sky-400 text-white">
          <div
            className="w-full h-full flex justify-center items-center rounded-full"
            onClick={() => {
              params.delete("dashNavState");
              replace(`${pathname}?${params.toString()}`);
            }}
          >
            <XMarkIcon className="w-8 h-8" />
          </div>
        </button>
      </div>

      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={clsx(
            "md:w-full lg:w-60 h-12 flex justify-center items-center cursor-pointer rounded-full my-0.5 mx-5",
            {
              "bg-sky-400 text-white": pathname.startsWith(link.path),
              "hover:bg-slate-200": !pathname.startsWith(link.path),
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default DashboardNavMobile;
