import React from "react";
import { Links } from "../Data.js";
import Button from "../GlobalComponents.js/Button.js";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
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
            {Links.map((link) => {
              return <p className="text-[#0E0E0E] text-[1rem]">{link}</p>;
            })}
          </div>
          {/* Button */}
          <div className="lg:block hidden">
            <Button color={"bg-[#008080]"}>Free Consaltation</Button>
          </div>
          {/* menu */}
          <GiHamburgerMenu className="lg:hidden block text-[1.8rem]" />
        </div>
        {/* <Hero /> */}
      </nav>
    </>
  );
};

export default Navbar;
