import React from "react";
import UnlockCards from "./Cards/UnlockCards";
import { UCards } from "../Data.js";

const Unlock = () => {
  return (
    <div className="bg-[#008080]">
      <section className="py-[5rem] flex flex-col gap-12">
        {/* Title --------> */}
        <div className="md:flex justify-between items-start gap-8">
          <article className="flex flex-col gap-6 md:gap-5 items-start">
            <button className="HeroCardBg py-[0.625rem] px-[1.25rem]">
              Value-Added Offerings
            </button>
            <h3 className="text-[#FAF9F6] text-[2rem] font-normal w-full max-w-[16rem] lg:max-w-[20rem]">
              Unlock Your Property Potential
            </h3>
          </article>
          <article>
            <p className="text-[#FAF9F6] lg:text-[1.1rem] md:text-[0.975rem] w-full lg:max-w-[31rem] md:max-w-[22rem] leading-[1.75rem] md:mt-0 mt-3">
              Proudly, we are more than just a basic property management agency;
              we are your strategic partner in real estate investment growth.
              With a focus on transforming properties to maximize returns, we
              bring a unique and innovative approach to each project we
              undertake.
            </p>
          </article>
        </div>
        {/* Unlock Cards --------------> */}
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-3  gap-y-8">
          <UnlockCards UCards={UCards} />
        </div>
      </section>
    </div>
  );
};

export default Unlock;
