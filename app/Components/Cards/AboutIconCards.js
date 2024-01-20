// "use client";

import React from "react";
import Icons from "../../Data.js";

const AboutIconCards = () => {
  return (
    <>
      {Icons.map((Icon) => {
        const [id, icon, content] = Icon;
        return (
          <article key={id} className="flex flex-col gap-2">
            <p>{icon}</p>
            <p className="text-[#0E0E0E] text-[1rem] font-medium">{content}</p>
          </article>
        );
      })}
    </>
  );
};

export default AboutIconCards;
