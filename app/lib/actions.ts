"use server";

import { z } from "zod";
import passwordModel from "../models/passwordModel";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { error } from "console";

const PasswordSchema = z.object({
  user_id: z.string(),
  username: z.string(),
  password: z
    .string()
    .min(1, { message: "Password must be 1 or more characters long" })
    .max(50, { message: "Password must be 50 or fewer characters long" }),
  account_description: z.string(),
  password_score: z
    .string()
    .min(1, { message: "Password Score must be between 1 to 5" })
    .max(5, { message: "Password Score must be between 1 to 5" }),
  // .number()
  // .gte(1, { message: "Password Score must be between 1 to 5" })
  // .lte(5, { message: "Password Score must be between 1 to 5" }),
  url: z
    .string()
    .url({ message: "Please provide a valid URL" })
    .optional()
    .or(z.literal("")),
});

const CreatePassword = PasswordSchema.omit({});
const UpdatePassword = PasswordSchema.omit({ user_id: true });

export const createPassword = async (formData: FormData) => {
  const parsedFormData = CreatePassword.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (parsedFormData.success === false) {
    console.log(parsedFormData.error);
    return;
  } else {
    try {
      await passwordModel.create({
        user_id: parsedFormData.data.user_id,
        username: parsedFormData.data.username,
        password: parsedFormData.data.password,
        account_description: parsedFormData.data.account_description,
        password_score: parsedFormData.data.password_score,
        url: parsedFormData.data.url,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create password");
    }
    console.log(parsedFormData.data);
  }

  revalidatePath("/dashboard/passwords");
  redirect("/dashboard/passwords");
};

export const updatePassword = async (
  password_id: string,
  formData: FormData
) => {
  const { account_description, password, password_score, username, url } =
    UpdatePassword.parse({
      username: formData.get("username"),
      password: formData.get("password"),
      account_description: formData.get("account_description"),
      password_score: formData.get("password_score"),
      url: formData.get("url"),
    });

  await passwordModel.findByIdAndUpdate(password_id, {
    username,
    password,
    account_description,
    password_score,
    url,
  });

  revalidatePath("/dashboard/passwords");
  redirect("/dashboard/passwords");
};

export const deletePassword = async (password_id: string) => {
  await passwordModel.findByIdAndDelete(password_id);

  revalidatePath("/dashboard/passwords");
  redirect("/dashboard/passwords");
};
