import React from "react";

const ManagerDocumentCards = ({ ManagerDocument }) => {
  return (
    <>
      {ManagerDocument.map((document) => {
        const { id, image, content } = document;
        return (
          <div
            key={id}
            className="flex flex-col lg:gap-8 gap-6 shadow-md py-[1rem] px-[1.1rem] rounded-[0.35rem] max-w-[10rem]"
          >
            <img src={image} alt="" className="w-[2rem] h-[2rem]" />
            <p className="text-[#008080] text-[0.825rem] underline">
              {content}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default ManagerDocumentCards;
