import React from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

export const PasswordsSkeleton = () => {
  const index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="w-full h-full flex">
      <div className="w-1/2 h-full mr-1 flex flex-col justify-start items-center max-h-full overflow-hidden">
        <div className="w-[95%] h-14 flex justify-between items-center mb-1">
          <SearchBar placeholder="Search Password" />
          <Link
            href="/dashboard/passwords/create"
            className="w-40 h-14 bg-sky-400 text-white flex justify-center items-center cursor-pointer rounded-full my-0.5 hover:shadow-lg"
          >
            Add Password
          </Link>
        </div>
        {index.map((index: number) => (
          <div
            key={index}
            className="animate-pulse w-[95%] h-[160px] min-h-[160px] rounded-lg flex justify-between cursor-pointer my-1 shadow-xl min-w-[570px]"
          >
            <div className="p-2 flex flex-col justify-evenly items-start">
              <p className="w-40 h-2.5 rounded-full bg-gray-200"></p>
              <p className="w-80 h-3.5 rounded-full bg-gray-200"></p>
              <p className="w-40 h-2.5 rounded-full bg-gray-200"></p>
              <p className="w-80 h-3.5 rounded-full bg-gray-200"></p>
              <p className="w-40 h-2.5 rounded-full bg-gray-200"></p>
              <p className="w-80 h-3.5 rounded-full bg-gray-200"></p>
            </div>
            <div className="h-full w-10 rounded-e-lg bg-gray-200"></div>
          </div>
        ))}
      </div>
      <div className="animate-pulse w-1/2 h-full ml-1">
        {/* <p>{selectedPassword?._id}</p>
        <p>{selectedPassword?.account_description}</p>
        <p>{selectedPassword?.username}</p>
        <p>{selectedPassword?.password}</p>
        <p>{selectedPassword?.password_score}</p> */}
      </div>
    </div>
  );
};
