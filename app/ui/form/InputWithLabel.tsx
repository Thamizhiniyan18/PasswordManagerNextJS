import React from "react";

export type InputTypes = {
  id: string;
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  textToBeDisplayed: string;
  value?: string;
};

const InputWithLabel = ({
  id,
  type,
  name,
  placeholder,
  required,
  textToBeDisplayed,
}: InputTypes) => {
  return (
    <div
      key={id}
      className="w-full flex flex-col justify-start items-start my-2"
    >
      <label htmlFor={id} className="text-md text-sky-400 mb-1">
        {textToBeDisplayed}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full h-10 border-2 border-slate-200 px-4 rounded-full  focus:outline-sky-400 focus:border-none"
      />
    </div>
  );
};

export default InputWithLabel;
