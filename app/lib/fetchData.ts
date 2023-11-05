import passwordModel from "../models/passwordModel";
import { unstable_noStore } from "next/cache";
import dbConnect from "./db-connect";

export const getPasswords = async () => {
  unstable_noStore();
  await dbConnect();
  return await passwordModel.find({});
  // try {
  //   await dbConnect();
  //   return await passwordModel.find({});
  // } catch (error) {
  //   return { error };
  // }
};
