import React from "react";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";

const AddPasswordButton = () => {
  return (
    <>
      <Link
        href="/dashboard/passwords/create"
        className="hidden md:flex w-40 h-14 bg-sky-400 text-white justify-center items-center cursor-pointer rounded-full my-0.5 hover:shadow-lg"
      >
        Add Password
      </Link>
      <Link
        href="/dashboard/passwords/create"
        className="flex md:hidden w-10 h-10 bg-sky-400 text-white justify-center items-center cursor-pointer rounded-full my-0.5"
      >
        <PlusIcon className="w-8 h-8" />
      </Link>
    </>
  );
};

export default AddPasswordButton;
