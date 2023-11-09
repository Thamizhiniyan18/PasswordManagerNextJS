import React from "react";
import { useFormState } from "react-dom";
import { createPassword } from "@/app/lib/actions";
import InputWithLabel, { InputTypes } from "../../form/InputWithLabel";
import SubmitButton from "../../buttons/SubmitButton";

const CreatePasswordForm = () => {
  const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createPasswordWithID, initialState);
  // const [state, dispatch] = useFormState(createPasswordWithID, initialState);

  const InputElements: InputTypes[] = [
    {
      id: "account_description",
      type: "text",
      name: "account_description",
      placeholder: "Enter the Account Description",
      required: true,
      textToBeDisplayed: "Account Description",
    },
    {
      id: "url",
      type: "url",
      name: "url",
      placeholder: "Enter the Website URL",
      required: false,
      textToBeDisplayed: "Website URL [If Applicable]",
    },
    {
      id: "username",
      type: "text",
      name: "username",
      placeholder: "Enter the Username",
      required: true,
      textToBeDisplayed: "Username",
    },
  ];

  return (
    <form
      action={createPassword}
      className="flex flex-col w-screen items-center justify-start p-2"
    >
      <input type="hidden" name="user_id" value={"user_id"} />
      {InputElements.map((element) => (
        <InputWithLabel
          key={element.id}
          id={element.id}
          name={element.name}
          placeholder={element.placeholder}
          required={element.required}
          textToBeDisplayed={element.textToBeDisplayed}
          type={element.type}
        />
      ))}
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
      <SubmitButton width="w-40" height="h-14" fontSize="text-2xl" textToBeDisplayed="Create"/>
    </form>
  );
};

export default CreatePasswordForm;
