"use client";

import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange__handler = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="w-[calc(100%-170px)] h-14 border-2 border-sky-400 rounded-full flex justify-between items-center">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(event) => onChange__handler(event.target.value)}
        className="rounded-s-full h-12 w-[90%] flex items-center justify-start p-2 focus:outline-none"
      />
      <div className="w-14 h-14 rounded-full flex justify-center items-center bg-sky-400">
        <MagnifyingGlassIcon className="w-8 h-8 text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
