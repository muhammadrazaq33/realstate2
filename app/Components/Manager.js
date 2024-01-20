import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Manager = () => {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[4rem] gap-[2rem] my-[5rem]">
      {/* left side -------------> */}
      <article className="flex flex-col lg:gap-10 gap-6 items-start">
        <button className="text-[0.875rem] text-[#FF7F50] font-medium manager px-[1.25rem] py-[0.625rem]">
          Why Us: Discover the Difference
        </button>
        <h1 className="text-[#0E0E0E] text-[2rem] font-normal">
          A Property Manager That Can Answer you…
        </h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-3 grid-cols-2 gap-5 justify-items-start">
          <article className="flex flex-col lg:gap-8 gap-6 shadow-md py-[1rem] px-[1.1rem] rounded-[0.35rem] max-w-[10rem]">
            <img
              src="/Assets/document_1.svg"
              alt=""
              className="w-[2rem] h-[2rem]"
            />
            <p className="text-[#008080] text-[0.825rem] underline">
              18 Types of Hidden Income from Australian Real Estate
            </p>
          </article>
          <article className="flex flex-col lg:gap-8 gap-6 shadow-md py-[1rem] px-[1.1rem] rounded-[0.35rem] max-w-[10rem]">
            <img
              src="/Assets/document_1.svg"
              alt=""
              className="w-[2rem] h-[2rem]"
            />
            <p className="text-[#008080] text-[0.825rem] underline">
              Make Your House Earn an Extra $10,000 Each Year
            </p>
          </article>
          <article className="flex flex-col  shadow-md py-[1rem] px-[1.1rem] rounded-[0.35rem] max-w-[10rem] lg:gap-8 gap-6">
            <img
              src="/Assets/document_1.svg"
              alt=""
              className="w-[2rem] h-[2rem]"
            />
            <p className="text-[#008080] text-[0.825rem] underline">
              18 Indicators You Must Consider Before Buying a House in Australia
            </p>
          </article>
        </div>
      </article>
      {/* right side ------------------> */}
      <article className="flex flex-col justify-center items-start">
        <div className="flex items-center justify-start lg:gap-2 gap-4 border-t-[1px] py-3 lg:py-6">
          <FaCheckCircle className="text-[#008080] text-[2rem]" />
          <p className="text-[#0E0E0E] text-[0.875rem] font-normal">
            How to quickly enhance the property's value to refinance and cash
            out?
          </p>
        </div>
        <div className="flex items-center justify-start lg:gap-2 gap-4 border-t-[1px] py-3 lg:py-6">
          <FaCheckCircle className="text-[#008080] text-[2rem]" />
          <p className="text-[#0E0E0E] text-[0.875rem] font-normal">
            Are there any other hidden ways to make money from my house?
          </p>
        </div>
        <div className="flex items-center justify-start lg:gap-2 gap-4 border-t-[1px] py-3 lg:py-6">
          <FaCheckCircle className="text-[#008080] text-[2rem]" />
          <p className="text-[#0E0E0E] text-[0.875rem] font-normal">
            Is now a good time to buy a property?
          </p>
        </div>
        <div className="flex items-center justify-start lg:gap-2 gap-4 border-t-[1px] py-3 lg:py-6">
          <FaCheckCircle className="text-[#008080] text-[2rem]" />
          <p className="text-[#0E0E0E] text-[0.875rem] font-normal">
            Planning to sell the house and hoping to sell it at a better price?
          </p>
        </div>
        <div className="flex items-center justify-start lg:gap-2 gap-4 border-t-[1px] py-3 lg:py-6">
          <FaCheckCircle className="text-[#008080] text-[2rem]" />
          <p className="text-[#0E0E0E] text-[0.875rem] font-normal">
            Want to organize the entire property investment portfolio to make it
            more profitable overall?
          </p>
        </div>
      </article>
    </section>
  );
};

export default Manager;
