import React from "react";

const Links = ({ links }) => {
  return (
    <>
      {links.map((link, index) => {
        return (
          <div key={index}>
            <p className="text-[#0E0E0E] text-[1rem] hover:text-[#267777] cursor-pointer">
              {link}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Links;
