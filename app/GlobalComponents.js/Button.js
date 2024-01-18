import React from "react";

const Button = ({ children }) => {
  return (
    <button className="text-[#FAF9F6] text-[1rem] bg-[#008080] px-[1.86rem] py-[0.7rem]">
      {children}
    </button>
  );
};

export default Button;
