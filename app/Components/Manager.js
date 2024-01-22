import React from "react";
import ManagerCard from "./Cards/ManagerCard";
import { ManagerCards } from "../Data.js";
import { ManagerDocument } from "../Data.js";
import ManagerDocumentCards from "./Cards/ManagerDocumentCards";

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
        {/* CARDS  ------------------------>*/}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-3 grid-cols-2 gap-5 justify-items-start">
          <ManagerDocumentCards ManagerDocument={ManagerDocument} />
        </div>
      </article>
      {/* right side ------------------> */}
      <article className="flex flex-col justify-center items-start">
        <ManagerCard ManagerCards={ManagerCards} />
      </article>
    </section>
  );
};

export default Manager;
