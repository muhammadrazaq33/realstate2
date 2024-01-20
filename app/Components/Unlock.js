import React from "react";
import UnlockCards from "./Cards/UnlockCards";
import { UCards } from "../Data.js";

const Unlock = () => {
  return (
    <div className="bg-[#008080]">
      <section className="py-[5rem] flex flex-col gap-10">
        {/* Title --------> */}
        <div className="sm:flex justify-between items-center">
          <article className="flex flex-col gap-5 items-start">
            <button className="HeroCardBg py-[0.625rem] px-[1.25rem]">
              Value-Added Offerings
            </button>
            <h3 className="text-[#FAF9F6] text-[2rem] font-normal max-w-[20rem]">
              Unlock Your Property Potential
            </h3>
          </article>
          <article>
            <p className="text-[#FAF9F6] text-[0.825rem] max-w-[31rem] leading-[1.75rem]">
              Proudly, we are more than just a basic property management agency;
              we are your strategic partner in real estate investment growth.
              With a focus on transforming properties to maximize returns, we
              bring a unique and innovative approach to each project we
              undertake.
            </p>
          </article>
        </div>
        {/* Unlock Cards --------------> */}
        <div className="grid grid-cols-4 gap-4">
          {/* <UnlockCards UCards={UCards} /> */}
        </div>
      </section>
    </div>
  );
};

export default Unlock;
