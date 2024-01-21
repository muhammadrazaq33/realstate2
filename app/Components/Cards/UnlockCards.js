import React from "react";

const UnlockCards = ({ UCards }) => {
  return (
    <>
      {UCards.map((card) => {
        const { id, img, text } = card;
        return (
          <article
            key={id}
            className="flex flex-col items-center justify-center gap-4"
          >
            <img src={img} alt="" />
            <p className="text-[#FAF9F6] text-[1rem]">{text}</p>
          </article>
        );
      })}
    </>
  );
};

export default UnlockCards;
