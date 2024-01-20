import React from "react";

const Button = ({ children, color, text }) => {
  return (
    <button
      className={`text-[#FAF9F6] text-[1rem] ${color} ${text} px-[1.86rem] py-[0.7rem]`}
    >
      {children}
    </button>
  );
};

export default Button;
