import React from "react";
import { ImYoutube } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";
import { FLinks } from "../Data.js";
import { Downloads } from "../Data.js";
import FooterCard from "./Cards/FooterCard.js";

const Footer = () => {
  return (
    <div className="bg-[#008080]">
      <section className="pt-[4rem] ">
        <div className="flex justify-between items-start">
          {/* Left side------------> */}
          <article className="flex flex-col gap-7">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/Assets/FooterLogo.svg"
                alt=""
                className="w-[2.3rem] h-[2.3rem]"
              />
              <p className="text-[#FAF9F6] text-[1.2rem] font-normal">
                JJA Investment
              </p>
            </div>
            <p className="text-[#FAF9F6] text-[0.9rem] font-normal max-w-[19.9rem]">
              JJA Investment is a property management agency with a focus on
              transforming properties to maximize returns.
            </p>
            {/* Icons  -----------> */}
            <div className="flex items-center gap-5">
              <ImYoutube className="text-[#008080] bg-[white] py-[0.425rem] px-[0.357rem] rounded-[100px] text-[2.3rem]" />
              <FaTiktok className="text-[#008080] bg-[white] py-[0.425rem] px-[0.357rem] rounded-[100px] text-[2.3rem]" />
            </div>
          </article>
          {/* Right side -------------> */}
          <article className="flex gap-8">
            {/* Footer Links   -----------> */}
            <div className="flex flex-col gap-5">
              <h3 className="text-[#FAF9F6] text-[1.5rem]">Quick Links</h3>
              <div className="flex flex-col gap-2">
                {FLinks.map((Flink, index) => {
                  return (
                    <p key={index} className="text-[#FAF9F6] text-[1rem]">
                      {Flink}
                    </p>
                  );
                })}
              </div>
            </div>
            {/* Footer Downloads   -----------> */}
            <div className="flex flex-col gap-5 max-w-[20rem]">
              <h3 className="text-[#FAF9F6] text-[1.5rem]">Free Downloads</h3>
              <div className="flex flex-col gap-4">
                {Downloads.map((Download, index) => {
                  return (
                    <p key={index} className="text-[#FAF9F6] text-[1rem]">
                      {Download}
                    </p>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
        <FooterCard />
      </section>
    </div>
  );
};

export default Footer;
