"use client";

import React, { useState } from "react";
import { Passwords } from "../../../models/passwordModel";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ClipboardDocumentIcon,
  ArrowTopRightOnSquareIcon,
  PencilSquareIcon,
  TrashIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import Link from "next/link";
import { deletePassword } from "@/app/lib/actions";

type Props = {
  password: string;
  password_score: number;
  _id: string;
  username: string;
  account_description: string;
  url: string;
};

const Password = ({
  password,
  password_score,
  _id,
  username,
  account_description,
  url,
}: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [isVisible, setIsVisible] = useState(false);

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
        "w-[95%] rounded-lg flex justify-between cursor-pointer my-1 shadow-xl min-w-[400px] hover:bg-sky-50"
      )}
    >
      <div
        className="p-2 w-[calc(100%-120px)]"
        onClick={() => onClick__Handler(_id)}
      >
        <label className="text-sky-600 text-xs" htmlFor="">
          Account Description
        </label>
        <p className="w-full overflow-y-hidden">{account_description}</p>
        <label className="text-sky-600 text-xs" htmlFor="">
          Username
        </label>
        <p className="w-full overflow-y-hidden">{username}</p>
        <label className="text-sky-600 text-xs" htmlFor="">
          Password
        </label>
        {isVisible ? (
          <p className="w-full overflow-y-hidden">{password}</p>
        ) : (
          <p>********</p>
        )}
      </div>

      <div className="h-full w-10 p-2">
        <br />
        {url ? (
          <Link href={url}>
            <ArrowTopRightOnSquareIcon className="text-sky-400 hover:text-white hover:bg-sky-400 w-6 h-6 flex justify-center items-center rounded-md" />
          </Link>
        ) : (
          <ArrowTopRightOnSquareIcon
            title="No URL Mentioned"
            className="text-slate-400 w-6 h-6 flex justify-center items-center rounded-md"
          />
        )}
        <br />
        <p>
          <ClipboardDocumentIcon
            title="Click to Copy Username"
            className="text-sky-400 hover:text-white hover:bg-sky-400 w-6 h-6 flex justify-center items-center rounded-md"
            onClick={() =>
              navigator.clipboard
                .writeText(username)
                .then(() => toast.success("Username Copied Successfully"))
                .catch((error) => () => toast.error("Unable to Copy Username"))
            }
          />
        </p>
        <br />
        <p>
          <ClipboardDocumentIcon
            title="Click to Copy Password"
            className="text-sky-400 hover:text-white hover:bg-sky-400 w-6 h-6 flex justify-center items-center rounded-md"
            onClick={() =>
              navigator.clipboard
                .writeText(password)
                .then(() => toast.success("Password Copied Successfully"))
                .catch((error) => () => toast.error("Unable to Copy Password"))
            }
          />
        </p>
      </div>

      <div className="h-full w-10 p-2">
        <br />
        <Link title="Click to Edit" href={`/dashboard/passwords/edit/${_id}`}>
          <PencilSquareIcon className="text-sky-400 hover:text-white hover:bg-sky-400 w-6 h-6 flex justify-center items-center rounded-md" />
        </Link>
        <br />
        <p>
          <TrashIcon
            title="Click to Delete"
            className="text-red-500 hover:text-white hover:bg-red-500 w-6 h-6 flex justify-center items-center rounded-md"
            onClick={() => deletePassword(_id)}
          />
        </p>
        <br />
        <p>
          {isVisible ? (
            <EyeIcon
              title="Click to Hide the Password"
              onClick={() => setIsVisible(false)}
            />
          ) : (
            <EyeSlashIcon
              title="Click to View the Password"
              onClick={() => setIsVisible(true)}
            />
          )}
        </p>
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
