import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const page = () => {
  return <div className="w-full h-full">
    Dashboard
  </div>;
};

export default page;
