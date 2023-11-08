import React from "react";
import { useFormState } from "react-dom";
import { createPassword } from "@/app/lib/actions";

const CreatePasswordForm = () => {
  const initialState = { message: null, errors: {} };
  const createPasswordWithID = createPassword.bind(null, "userID");
  const [state, dispatch] = useFormState(createPasswordWithID, initialState);

  return <div>CreatePasswordForm</div>;
};

export default CreatePasswordForm;
