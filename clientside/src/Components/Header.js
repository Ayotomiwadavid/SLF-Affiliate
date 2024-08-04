import React, { useState } from "react";
import Logo from "../Images/SoftlifeLogo.png";
import { Link } from "react-router-dom";
import Button from "./Re-useAble/Button";
import munuToggler from "../Images/MenuToggler.png";
import MenuCancel from "../Images/close.png";

const Header = () => {
  let [siderBarVisibility, setSiderBarVisibility] = useState(false);

  const handleSideBarVisibility = () => {
    setSiderBarVisibility((prevValue) => !prevValue);
  };

  return (
    <header className="w-full md:fixed flex items-center justify-between py-[15px] px-[05vw]  shadow-lg bg-white z-50 top-0 left-0">
      <div className="flex items-center justify-center">
        <img src={Logo} alt="logo" className="h-[50px] w-[200px]" />
      </div>
      <nav className="hidden items-center justify-center md:flex">
        <ul className="flex items-center justify-center list-none">
          <a
            href='#heroSection'
            className="font-serif  p-3 font-semibold  cursor-pointer text-[#3C3C3C] capitalize text-base hover:text-[#F46B45] transition duration-300"
          >
            <li>home</li>
          </a>
          <a
            href="#aboutSection"
            className="font-serif p-3 font-semibold  cursor-pointer text-[#3C3C3C] capitalize text-base hover:text-[#F46B45] transition duration-300"
          >
            <li>About</li>
          </a>
          <a
            href="#planSection"
            className="font-serif p-3 font-semibold  cursor-pointer text-[#3C3C3C] capitalize text-base hover:text-[#F46B45] transition duration-300"
          >
            <li>Investment plan</li>
          </a>
          <a
            href="https://wa.link/8foxzl"
            target="_blank"
            rel="noreferrer"
            className="font-serif p-3 font-semibold  cursor-pointer text-[#3C3C3C] capitalize text-base hover:text-[#F46B45] transition duration-300"
          >
            <li>support</li>
          </a>
        </ul>
      </nav>

      {/* SIDEBAR FOR MOBILE RESPONSIVENESS STARTS HERE*/}
      <nav
        className={
          siderBarVisibility
            ? "flex flex-col shadow-xl items-start justify-center md:hidden fixed left-0 top-0 h-[100%] w-[90%] overflow-hidden bg-white transition-all duration-500"
            : "flex flex-col shadow-xl items-start justify-center md:hidden fixed left-0 top-0 h-[100%] w-0 overflow-hidden bg-white transition-all duration-500"
        }
      >
        <main className="w-full flex items-center justify-between py-5 px-4 mb-2 border-[1px] border-[#979797] border-r-0 border-l-0">
          <div className="flex h-full items-center justify-center">
            <img src={Logo} alt="logo" className="h-8" />
          </div>
          <div
            className="flex h-full items-center justify-center"
            onClick={handleSideBarVisibility}
          >
            <img src={MenuCancel} alt="logo" className="h-8 w-8" />
          </div>
        </main>
        <ul className="flex flex-col h-full items-start justify-start list-none">
          <a
            href="#heroSection"
            className="font-serif p-3 font-semibold  cursor-pointer text-[#3C3C3C] capitalize text-base hover:text-[#F46B45] transition duration-300"
          >
            <li>home</li>
          </a>
          <a
            href="#aboutSection"
            className="font-serif p-3 font-semibold  cursor-pointer text-[#3C3C3C] capitalize text-base hover:text-[#F46B45] transition duration-300"
          >
            <li>About</li>
          </a>
          <a
            href="#planSection"
            className="font-serif p-3 font-semibold  cursor-pointer text-[#3C3C3C] capitalize text-base hover:text-[#F46B45] transition duration-300"
          >
            <li>investment plan</li>
          </a>
          <a
            href="https://wa.link/8foxzl"
            className="font-serif p-3 font-semibold  cursor-pointer text-[#3C3C3C] capitalize text-base hover:text-[#F46B45] transition duration-300"
          >
            <li>support</li>
          </a>
          <Link to="/sign-up" className="font-serif p-3 font-semibold  cursor-pointer text-[#3C3C3C] capitalize text-base hover:text-[#F46B45] transition duration-300">
          Sign Up
          </Link>
          <Link to="/login" className="font-serif p-3 font-semibold  cursor-pointer text-[#3C3C3C] capitalize text-base hover:text-[#F46B45] transition duration-300">
          Login
          </Link>
        </ul>
      </nav>
      {/* SIDEBAR FOR MOBILE RESPONSIVENESS EndS HERE*/}

      <aside className="hidden gap-0 items-center justify-center md:flex">
        <Link to="/sign-up">
          <Button
            classStyle="h-[50px] w-[120px] bg-[#F0A23C] rounded-l-full text-white text-md hover:bg-transparent hover:text-[#F0A23C] hover:border-2 hover:border-[#F0A23C] transition duration-500"
            buttonContent="Sign Up"
          />
        </Link>
        <Link to="/login">
          <Button
            classStyle="h-[50px] w-[120px] bg-[#F46B45] rounded-r-full text-white text-md hover:bg-transparent hover:text-[#F46B45] hover:border-2 hover:border-[#F46B45] transition duration-500"
            buttonContent="Login"
          />
        </Link>
      </aside>

      <div
        className="flex items-center justify-center md:hidden"
        onClick={handleSideBarVisibility}
      >
        <img src={munuToggler} alt="menu icon" className="h-8 w-8" />
      </div>
    </header>
  );
};

export default Header;
