import { getPasswords } from "@/app/lib/fetchData";
import { Passwords } from "@/app/models/passwordModel";
import Password from "@/app/ui/dashboard/passwords/Password";
import SearchBar from "@/app/ui/SearchBar";
import Link from "next/link";
import React from "react";
import { PasswordsSkeleton } from "@/app/ui/Skeletons";
import AddPasswordButton from "@/app/ui/buttons/dashboard/passwords/AddPasswordButton";

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
    <div className="w-full h-full md:h-[calc(100%-56px)] flex overflow-hidden">
      <div className="w-full lg:w-[95%] xl:w-1/2 h-full md:mr-1 flex flex-col justify-start items-center max-h-full overflow-hidden">
        <div className="w-[95%] h-12 md:h-14 flex justify-between items-center mb-1">
          <SearchBar placeholder="Search Password" />
          <AddPasswordButton />
        </div>

        <div className="w-full h-full flex flex-col justify-start items-center mb-1 overflow-x-hidden">
          {passwords.length === 0 && <p>No Passwords Created</p>}
          {searchedPasswords
            ? searchedPasswords.map((password: Passwords, index: number) => (
                <Password
                  key={index}
                  _id={password._id.toString()}
                  account_description={password.account_description}
                  username={password.username}
                  password={password.password}
                  password_score={password.password_score}
                  url={password.url}
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
                  url={password.url}
                />
              ))}
        </div>
      </div>
      <div className="hidden xl:block w-1/2 h-full ml-1">
        <p>{selectedPassword?._id.toString()}</p>
        <p>{selectedPassword?.account_description}</p>
        <p>{selectedPassword?.username}</p>
        <p>{selectedPassword?.password}</p>
        <p>{selectedPassword?.password_score}</p>
      </div>
    </div>
  );
};

export default page;
