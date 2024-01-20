import React from "react";
import Button from "../GlobalComponents.js/Button";
import AboutIconCards from "./Cards/AboutIconCards";

const About = () => {
  return (
    <section className="">
      {/* About Us ----------> */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        {/* About Info ------> */}
        <article className="flex flex-col gap-7 items-start justify-center">
          <button className="CoreService text-[#FF7F50] font-normal px-[1.25rem] py-[0.625rem]">
            Our Core Services
          </button>
          <h1 className="text-[2rem] font-normal text-[#0E0E0E]">
            Reliable Property Care
          </h1>
          <p className="text-[1rem] text-[#0E0E0E] font-normal lg:max-w-[35rem]">
            At JJA Investment, our team is composed of seasoned professionals
            who are experts in the various facets of property management. From
            tenant relations and legal compliance to maintenance and financial
            oversight, we ensure every aspect of your property is managed with
            precision and care.
          </p>
          <Button color={"bg-[#008080]"}>Book Free Consultation</Button>
        </article>
        {/* About Video ------> */}
        <article className="">
          <img
            src="/Assets/image_1.png"
            alt=""
            className="lg:w-[34rem] w-full  object-cover"
          />
        </article>
      </div>
      {/* About Icons ----------.>*/}
      <div className="flex justify-between items-center gap-3">
        {/* <AboutIconCards /> */}
      </div>
    </section>
  );
};

export default About;

// import React from "react";
// import Button from "../GlobalComponents.js/Button";

// const Home = () => {
//   return (
//     <section className="mt-[0rem] flex  relative h-screen w-full border-[5px] border-black">
//       {/* Hero image ------> */}
//       <div className="max-w-[60rem] absolute right-0 top-0 h-full ">
//         <img src="/Assets/Hero.png" />
//       </div>
//       {/* Card --------> */}
//       <div className="flex flex-col gap-3 md:gap-6 bg-[#008080] py-[3rem] md:py-[4rem] md:px-[3rem] px-[2rem] md:h-[33.3rem] h-[26rem] z-10 absolute md:top-[4rem] top-[20rem] max-w-[37rem]">
//         <p className="text-[#FAF9F6] HeroCardBg p-[0.65rem]">
//           Exceptional Management for Growth-Focused Investors
//         </p>
//         <h1 className="text-[2rem] md:text-[2.975rem] text-[#FAF9F6] font-normal leading:[2rem] md:leading-[4rem]">
//           Transforming Properties, Maximizing Returns
//         </h1>
//         <p className="text-[#FAF9F6]">
//           Learn more about our strategies to enhance Property Value and Market
//           Appeal
//         </p>
//         <div className="flex gap-6 mt-[10px]">
//           <button className="bg-[white] text-[#008080] text-[0.7rem] md:text-[0.85rem] md:px-[1.86rem] px-[1.4rem] py-[0.7rem]">
//             Book Free Consultation
//           </button>
//           <button className="text-[#FAF9F6] md:text-[0.85rem] text-[0.7rem] px-[1.4rem] md:px-[1.86rem] py-[0.7rem] border-[1px] border-white">
//             View Our Services
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
