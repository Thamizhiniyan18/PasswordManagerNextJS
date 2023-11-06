"use client";

import { redirect } from "next/navigation";

const page = () => {
  redirect("/dashboard/passwords");
};

export default page;
