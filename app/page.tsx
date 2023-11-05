import dbConnect from "./lib/db-connect";
import passwordModel, { Passwords } from "./models/passwordModel";

export default async function Home() {
  // await dbConnect();

  // const passwords: Passwords[] = await passwordModel.find({});

  return (
    <main className="">
      {/* {passwords.map((password, index) => (
        <div key={index}>{password.user_id}</div>
      ))} */}
      Home
    </main>
  );
}
