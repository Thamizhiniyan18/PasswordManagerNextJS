import { getPasswords } from "@/app/lib/fetchData";
import { Passwords } from "@/app/models/passwordModel";
import Password from "@/app/ui/dashboard/passwords/Password";
import SearchBar from "@/app/ui/SearchBar";
import Link from "next/link";
import React from "react";
import { PasswordsSkeleton } from "@/app/ui/Skeletons";

const page = async ({
  searchParams,
}: {
  searchParams?: {
    id?: string;
    search?: string;
  };
}) => {
  const passwords = await getPasswords();

  const selectedPassword: Passwords =
    searchParams?.id &&
    passwords.find((password) => password.id === searchParams?.id);

  const searchedPasswords: undefined | any | Passwords[] =
    searchParams?.search &&
    passwords.filter((password) =>
      password.account_description.startsWith(searchParams?.search)
    );


  return (
    // <PasswordsSkeleton />
    <div className="w-full h-full flex ">
      <div className="w-1/2 h-full mr-1 flex flex-col justify-start items-center max-h-full overflow-x-hidden">
        <div className="w-[95%] h-14 flex justify-between items-center mb-1">
          <SearchBar placeholder="Search Password" />
          <Link
            href="/dashboard/passwords/create"
            className="w-40 h-14 bg-sky-400 text-white flex justify-center items-center cursor-pointer rounded-full my-0.5 hover:shadow-lg"
          >
            Add Password
          </Link>
        </div>
        {searchedPasswords
          ? searchedPasswords.map((password: Passwords, index: number) => (
              <Password
                key={index}
                _id={password._id.toString()}
                account_description={password.account_description}
                username={password.username}
                password={password.password}
                password_score={password.password_score}
              />
            ))
          : passwords.map((password: Passwords, index) => (
              <Password
                key={index}
                _id={password._id.toString()}
                account_description={password.account_description}
                username={password.username}
                password={password.password}
                password_score={password.password_score}
              />
            ))}
      </div>
      <div className="w-1/2 h-full ml-1">
        <p>{selectedPassword?._id}</p>
        <p>{selectedPassword?.account_description}</p>
        <p>{selectedPassword?.username}</p>
        <p>{selectedPassword?.password}</p>
        <p>{selectedPassword?.password_score}</p>
      </div>
    </div>
  );
};

export default page;
