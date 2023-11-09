import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const page = () => {
  return <div className="w-full h-full">
    Whoami
  </div>;
};

export default page;
