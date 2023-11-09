import React from "react";
import { useFormState } from "react-dom";
import { createPassword } from "@/app/lib/actions";

const CreatePasswordForm = () => {
  const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createPasswordWithID, initialState);
  // const [state, dispatch] = useFormState(createPasswordWithID, initialState);

  return (
    <form action={createPassword} className="flex flex-col w-[500px]">
      <input type="hidden" name="user_id" value={"user_id"} />
      <label htmlFor="account_description">Account Description</label>
      <input
        id="account_description"
        type="text"
        name="account_description"
        placeholder="Enter the Account Description"
        required
      />
      <label htmlFor="url">URL [ If Applicable ]</label>
      <input
        id="url"
        type="url"
        name="url"
        placeholder="Enter the URL, if applicable"
      />
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="Enter the Username"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="text"
        name="password"
        placeholder="Enter the Password"
        required
      />
      <label htmlFor="password_score">Password Score</label>
      <input
        id="password_score"
        type="number"
        name="password_score"
        placeholder="Enter the Password Score"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePasswordForm;
