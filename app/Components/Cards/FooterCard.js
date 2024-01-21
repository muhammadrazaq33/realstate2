import React from "react";

const FooterCard = () => {
  return (
    <div className=" sm:flex-row flex flex-col gap-3 justify-between items-center mt-[6rem] py-[1.5rem] border-t-[1px] border-[#EFEFEF]">
      <p className="text-[#FAF9F6] text-[0.875rem]">
        © Copyright & Create with love by Azis Maliek
      </p>
      <div className="flex sm:gap-4 gap-7 items-center">
        <p className="text-[#FAF9F6] text-[0.875rem]">Terms & Conditions</p>
        <p className="text-[#FAF9F6] text-[0.875rem]">Privacy Policy</p>
      </div>
    </div>
  );
};

export default FooterCard;
