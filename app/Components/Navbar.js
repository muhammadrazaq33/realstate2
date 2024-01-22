"use client";
import React, { useState } from "react";
import { links } from "../Data.js";
import Button from "../GlobalComponents.js/Button.js";
import { GiHamburgerMenu } from "react-icons/gi";
import Links from "../GlobalComponents.js/Links.js";
import { FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [ShowSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className="">
        <div className="h-[4rem] flex justify-between items-center mt-[1.3rem]">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src="/Assets/Logo.png"
              alt=""
              className="w-[2.5rem] h-[2.5rem]"
            />
            <p className="text-[#0E0E0E] text-[1.25rem] font-normal">
              JJA Investment
            </p>
          </div>
          {/* Links -------------->*/}
          <div className="lg:flex hidden items-center gap-8">
            <Links links={links} />
          </div>
          {/* Button */}
          <div className="lg:block hidden">
            <Button color={"bg-[#008080]"}>Free Consaltation</Button>
          </div>
          {/* menu */}
          <GiHamburgerMenu
            className="lg:hidden block text-[1.8rem]"
            onClick={() => setShowSidebar(true)}
          />
        </div>
        {/* <Hero /> */}
        {/* hamgurger for small screen ---------> */}
        {ShowSidebar && (
          <div className="flex flex-col lg:hidden items-center gap-8 h-screen w-full max-w-[30rem] fixed right-0 top-0 bg-[#d2dfdf] py-[2rem] px-[2rem] backdrop-blur-3xl">
            <button
              onClick={() => setShowSidebar(false)}
              className="text-[2rem] ml-auto text-[#267777]"
            >
              <FaWindowClose />
            </button>
            {links.map((link, index) => {
              return (
                <p
                  key={index}
                  className="hover:text-[#b99789] text-[1.6rem] text-[#267777] hover:scale-[1.5] hover:underline cursor-pointer"
                >
                  {link}
                </p>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
