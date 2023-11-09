import React from "react";
import Password from "@/app/ui/dashboard/passwords/Password";
import { getPasswords } from "@/app/lib/fetchData";
import { Passwords } from "@/app/models/passwordModel";

const PasswordsTable = ({
  searchParams,
  passwords,
}: {
  searchParams?: {
    search?: string;
  };
  passwords: Passwords[];
}) => {
  console.log(passwords);

  const searchedPasswords: undefined | any | Passwords[] = passwords.filter(
    (password: Passwords) => {
      if (searchParams?.search) {
        return password.account_description.startsWith(searchParams?.search);
      } else return 0;
    }
  );

  console.log(passwords);

  return (
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
  );
};

export default PasswordsTable;
