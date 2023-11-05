"use server";

import passwordModel from "../models/passwordModel";

export const createPassword = async (formData: FormData) => {
  const rawFormData = {
    username: formData.get("username"),
    password: formData.get("password"),
    account_description: formData.get("account_description"),
    password_score: formData.get("password_score"),
  };
};
