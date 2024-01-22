import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ManagerCard = ({ ManagerCards }) => {
  return (
    <>
      {ManagerCards.map((card) => {
        const { id, content } = card;
        return (
          <div
            key={id}
            className="flex items-center justify-start lg:gap-2 gap-4 border-t-[1px] py-3 lg:py-6"
          >
            <FaCheckCircle className="text-[#008080] text-[2rem]" />
            <p className="text-[#0E0E0E] text-[0.875rem] font-normal">
              {content}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default ManagerCard;
