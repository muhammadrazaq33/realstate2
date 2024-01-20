import React from "react";

const Features = () => {
  return (
    <section className="flex flex-col gap-12">
      {/* TITLE --------------------->*/}
      <h1 className="text-[#0E0E0E] text-[2rem] font-medium max-w-[31rem] mx-auto">
        Featured Case Study
      </h1>
      {/* FeaTUrE carDS --------------> */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-16">
        {[0, 1, 2, 3, 4, 5].map((card) => {
          return (
            <article className="flex flex-col gap-3">
              <img
                src="/Assets/Feature_1.png"
                alt=""
                className="rounded-[0.31rem]"
              />
              <h1 className="text-[#0E0E0E] text-[1.5rem] font-semibold">
                Granny flat
              </h1>
              <p className="text-[#9CA3AF] text-[0.875rem] font-normal">
                An additional $500 AUD in weekly rental income, quickly
                enhancing rental revenue.
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
