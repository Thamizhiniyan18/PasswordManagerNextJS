"use client";

import React from "react";
import { Passwords } from "../../../models/passwordModel";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  password: string;
  password_score: number;
  _id: string;
  username: string;
  account_description: string;
};

const Password = ({
  password,
  password_score,
  _id,
  username,
  account_description,
}: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const onClick__Handler = (password_id: string) => {
    const params = new URLSearchParams(searchParams);
    if (password_id) {
      params.set("id", password_id);
    } else {
      params.delete("id");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      className={clsx(
        "w-[95%] rounded-lg flex justify-between cursor-pointer my-1 shadow-xl min-w-[570px] hover:bg-sky-100"
        // { "bg-red-600": password_score === 1 },
        // { "bg-orange-600": password_score === 2 },
        // { "bg-yellow-600": password_score === 3 },
        // { "bg-lime-500": password_score === 4 },
        // { "bg-green-500": password_score === 5 }
      )}
    >

      <div
        className="p-2 w-[calc(100%-80px)]"
        onClick={() => onClick__Handler(_id)}
      >
        <label className="text-sky-600 text-xs" htmlFor="">
          Account Description
        </label>
        <p>{account_description}</p>
        <label className="text-sky-600 text-xs" htmlFor="">
          Username
        </label>
        <p>{username}</p>
        <label className="text-sky-600 text-xs" htmlFor="">
          Password
        </label>
        <p>{password}</p>
      </div>

      <div className="h-full w-10 p-2">
        <br />
        <p>H</p>
        <br />
        <p>H</p>
        <br />
        <p>H</p>
      </div>
      
      <div
        className={clsx(
          "h-full w-10 rounded-e-lg",
          { "bg-red-600": password_score === 1 },
          { "bg-orange-600": password_score === 2 },
          { "bg-yellow-600": password_score === 3 },
          { "bg-lime-500": password_score === 4 },
          { "bg-green-500": password_score === 5 }
        )}
      ></div>
    </div>
  );
};

export default Password;
