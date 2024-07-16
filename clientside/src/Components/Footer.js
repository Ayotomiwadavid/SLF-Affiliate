import React from "react";
import Logo from "../Images/logo_resp.png";
import User from "../Images/user.png";
import Saving from "../Images/saving.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Footer = () => {
  return (
    <footer className="py-[50px] px-[10vw] flex flex-col items-center justify-center bg-[#F0A23C]">
      <main className="h-[90%] w-full items-start justify-between flex gap-6">
        <div className="flex flex-col items-start justify-center gap-5">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="logo" />
          </div>
          <p className="text-wrap w-[70%]">
            We are a full service Digital Marketing Agency all the foundational
            tool you need.
          </p>
          <div className="flex items-center justify-start gap-2">
            <img src={User} alt="user img" className="h-10 w-10" />
            <div className="flex flex-col">
              <h4 className="font-semibold text-xl">500,000+</h4>
              <p className="font-light">Total Member</p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2">
            <img src={Saving} alt="user img" className="h-[50px] w-10" />
            <div className="flex flex-col">
              <h4 className="font-semibold text-xl">162million</h4>
              <p className="font-light">Total Deposited</p>
            </div>
          </div>
        </div>

        {/* useful links */}
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-2xl font-bold text-left capitalize">
            Useful Links
          </h1>
          <span className="p-[1px] w-[50%] bg-black mt-[5px]"></span>
          <ul className="w-full flex flex-col items-start justify-center py-5 gap-3">
            <li>
              {" "}
              <KeyboardArrowRightIcon /> About Us
            </li>
            <li>
              {" "}
              <KeyboardArrowRightIcon /> Contact Us
            </li>
            <li>
              {" "}
              <KeyboardArrowRightIcon /> Sign Up
            </li>
            <li>
              {" "}
              <KeyboardArrowRightIcon /> Sign In
            </li>
            <li>
              {" "}
              <KeyboardArrowRightIcon /> Services
            </li>
          </ul>
        </div>

        {/* CONATCT US */}

        <div className="flex flex-col items-start justify-center">
          <h1 className="text-2xl font-bold text-left capitalize">
          Contact Us
          </h1>
          <span className="p-[1px] w-[50%] bg-black mt-[5px]"></span>
          <h1 className="text-4xl font-bold py-4">+2348102743259</h1>
          <ul className="w-full flex flex-col items-start justify-center py-5 gap-3">
            <li>
              {" "}
              <KeyboardArrowRightIcon /> About Us
            </li>
            <li>
              {" "}
              <KeyboardArrowRightIcon /> Contact Us
            </li>
            <li>
              {" "}
              <KeyboardArrowRightIcon /> Sign Up
            </li>
            <li>
              {" "}
              <KeyboardArrowRightIcon /> Sign In
            </li>
            <li>
              {" "}
              <KeyboardArrowRightIcon /> Services
            </li>
          </ul>
        </div>
      </main>
      <aside></aside>
    </footer>
  );
};

export default Footer;
