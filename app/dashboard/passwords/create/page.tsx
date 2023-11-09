"use client";

import React from "react";
import { createPassword } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import CreatePasswordForm from "@/app/ui/dashboard/passwords/CreatePasswordForm";

const page = () => {
  return <CreatePasswordForm />;
};

export default page;
