import React from "react";

export type SubmitButton = {
  width: string;
  height: string;
  textToBeDisplayed: string;
  fontSize?: string;
};

const SubmitButton = ({
  textToBeDisplayed,
  width,
  height,
  fontSize,
}: SubmitButton) => {
  return (
    <button
      className={`${width} ${height} ${fontSize} bg-sky-400 text-white flex justify-center items-center rounded-full focus:outline-sky-400`}
    >
      {textToBeDisplayed}
    </button>
  );
};

export default SubmitButton;
