"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { Bars3Icon } from "@heroicons/react/24/outline";

type breadCrumb = {
  name: string;
  href: string;
};

const DashboardBreadCrumbs = () => {
  const pathname = usePathname();
  const splittedPath = pathname.split("/");
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();
  const breadCrumbs: breadCrumb[] = [];
  splittedPath.forEach((path) => {
    if (path !== "") {
      breadCrumbs.push({
        name: path,
        href: pathname.slice(0, pathname.indexOf(path) + path.length),
      });
    }
  });

  return (
    <div className="flex items-center justify-start md:min-w-[500px] pr-2 pb-2 pt-2 md:p-2 text-xs overflow-hidden">
      <div
        className="md:hidden h-10 w-10 mr-2 back bg-sky-400 rounded-r-full flex justify-center items-center"
        onClick={() => {
          params.set("dashNavState", "true");
          replace(`${pathname}?${params.toString()}`);
        }}
      >
        <Bars3Icon className="md:hidden h-6 w-6 mr-2 text-white " />
      </div>
      {breadCrumbs.map((path, index) => (
        <Link
          className="flex items-center justify-start text-sm"
          key={`${path.name}_${path.href}_${index}`}
          href={path.href}
        >
          <p className="px-0.5">/</p>
          <p
            className={clsx("px-1 ", {
              "text-sky-400": pathname.endsWith(path.name),
              "text-slate-500": !pathname.endsWith(path.name),
            })}
          >
            {path.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default DashboardBreadCrumbs;
