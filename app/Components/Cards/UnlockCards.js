import React from "react";

const UnlockCards = ({ UCards }) => {
  return (
    <>
      {UCards.map((card) => {
        const { id, img, text } = card;
        return (
          <article
            key={id}
            className="sm:w-full max-w-[25.25rem] mx-auto flex flex-col items-center gap-4 text-center"
          >
            <div className="overflow-hidden">
              <img src={img} alt="" className="hover:scale-125 duration-500" />
            </div>
            <p className="text-[#FAF9F6] text-[1rem]">{text}</p>
          </article>
        );
      })}
    </>
  );
};

export default UnlockCards;
