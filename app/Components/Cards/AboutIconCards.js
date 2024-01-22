// "use client";

import React from "react";
import { Icons } from "../../Data";

const AboutIconCards = () => {
  return (
    <>
      {Icons.map((Icon) => {
        return (
          <article
            key={Icon.id}
            className="flex flex-col gap-2 items-center mt-[4rem] "
          >
            <p className="animate-bounce">{Icon.icon}</p>
            <p className="text-[#0E0E0E] text-[1rem] font-medium text-center">
              {Icon.content}
            </p>
          </article>
        );
      })}
    </>
  );
};

export default AboutIconCards;
