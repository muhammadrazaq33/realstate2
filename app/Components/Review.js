import React from "react";

const Review = () => {
  return (
    <section className="flex flex-col gap-12">
      {/* Review Title -----------------> */}
      <div className="flex gap-3 items-center ">
        <img src="/Assets/TitleComma.svg" alt="" />
        <h1 className="text-[#0E0E0E] text-[2rem] font-normal">
          What Our Clients Are Saying
        </h1>
      </div>
      {/* Review CARDS  --------------------->*/}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {[0, 1, 2].map((card, index) => {
          return (
            <article
              key={index}
              className="flex flex-col gap-4 px-[1.5rem] py-[1.25rem] shadow-md pb-[2.5rem]"
            >
              <div className="flex justify-between items-center ">
                <img src="/Assets/GoogleReview.png" alt="" />
                <img src="/Assets/ReviewComma.svg" alt="" />
              </div>
              <div className="flex gap-4 ">
                <div className="bg-[#008080] w-[0.3875rem] h-[6.5rem]"></div>
                <p className="text-[#008080] text-[1rem] font-normal max-w-[20.8rem]">
                  Proudly, we are more than just a basic property management
                  agency; we are your strategic partner in real estate
                  investment growth.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/Assets/profileImg.png" alt="" />
                <div className="flex flex-col gap-1.5">
                  <h5 className="text-[#0E0E0E] text-[1rem] font-semibold">
                    James Cordornd
                  </h5>
                  <p className="text-[#008080] text-[0.75rem] font-semibold">
                    Glen Waverley, VIC
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Review;
