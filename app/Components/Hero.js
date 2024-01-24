import React from "react";
import Button from "../GlobalComponents.js/Button";

const Home = () => {
  return (
    <section className="my-[5rem] flex w-full relative">
      {/* Hero image ------> */}
      <div className=" absolute top-0 right-0">
        <img
          src="/Assets/Hero.png"
          className="md:h-screen h-auto md:max-w-[60rem] w-full"
        />
      </div>
      {/* Card --------> */}
      <div className="flex flex-col gap-3 md:gap-6 bg-[#008080] py-[3rem] md:py-[4rem] md:px-[3rem] px-[2rem] md:h-[33.3rem] h-[26rem] z-20  max-w-[37rem] mt-[4rem]">
        <p className="text-[#FAF9F6] HeroCardBg p-[0.65rem]">
          Exceptional Management for Growth-Focused Investors
        </p>
        <h1 className="text-[2rem] md:text-[2.975rem] text-[#FAF9F6] font-normal leading:[2rem] md:leading-[4rem]">
          Transforming Properties, Maximizing Returns
        </h1>
        <p className="text-[#FAF9F6]">
          Learn more about our strategies to enhance Property Value and Market
          Appeal
        </p>
        <div className="flex gap-6 mt-[10px]">
          <button className="bg-[white] text-[#008080] text-[0.7rem] md:text-[0.85rem] md:px-[1.86rem] px-[1.4rem] py-[0.7rem]">
            Book Free Consultation
          </button>
          <button className="text-[#FAF9F6] md:text-[0.85rem] text-[0.7rem] px-[1.4rem] md:px-[1.86rem] py-[0.7rem] border-[1px] border-white">
            View Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
