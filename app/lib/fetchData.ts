import passwordModel from "../models/passwordModel";
import { unstable_noStore } from "next/cache";
import dbConnect from "./db-connect";

export const getPasswords = async () => {
  unstable_noStore();
  try {
    await dbConnect();
    return await passwordModel.find({});
  } catch (error) {
    console.log("Database Error", error);
    throw new Error("Failed to Fetch the Data");
  }
};
