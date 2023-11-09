"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";

const HomeNavOpen = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  return (
    <button className="w-10 h-10 flex justify-center items-center rounded-full bg-sky-400 text-white">
      <div
        className="w-full h-full flex justify-center items-center rounded-full"
        onClick={() => {
          params.set("navState", "true");
          replace(`${pathname}?${params.toString()}`);
        }}
      >
        <Bars3Icon className="w-8 h-8" />
      </div>
    </button>
  );
};

export default HomeNavOpen;
