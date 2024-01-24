import React from "react";

const QuestionAnswer = () => {
  return (
    <section className="w-full h-auto my-[6rem]">
      {/* Image ------------------> */}
      <div className="bg-[url('/Assets/QuestionImg.png')] object-fill bg-no-repeat bg-right h-[40rem] relative -z-20">
        {/* Data -------------> */}
        <div className="bg-[#008080] max-w-[31.5rem] py-[3rem] px-[2rem] flex flex-col gap-6 items-start justify-center absolute left-0 -bottom-[6rem]">
          <p className="text-[#FAF9F6] text-[0.875rem] font-normal">
            Exclusive Insights | Hidden Strategies | Behind-the-scenes Stories
          </p>
          <h1 className="text-[#FAF9F6] text-[2.5rem] font-medium leading-[3.2rem]">
            You Have Questions? We Have Answers
          </h1>
          <button className="text-[#008080] text-[1rem] px-[1.88rem] py-[1rem] bg-[white]">
            Book Free Consultation
          </button>
        </div>
      </div>

      {/* <img
        //   src="/Assets/QuestionImg.png"
        //   alt=""
        //   className="w-[70rem] h-[34rem] absolute right-0 top-5 -z-10"
        // /> */}
      {/* Data -----------------> */}
      {/* <div className="bg-[#008080] max-w-[31.5rem] py-[3rem] px-[2rem] flex flex-col gap-6 items-start justify-center absolute left-0 bottom-0">
        <p className="text-[#FAF9F6] text-[0.875rem] font-normal">
          Exclusive Insights | Hidden Strategies | Behind-the-scenes Stories
        </p>
        <h1 className="text-[#FAF9F6] text-[2.5rem] font-medium leading-[3.2rem]">
          You Have Questions? We Have Answers
        </h1>
        <button className="text-[#008080] text-[1rem] px-[1.88rem] py-[1rem] bg-[white]">
          Book Free Consultation
        </button>
      </div> */}
    </section>
  );
};

export default QuestionAnswer;
