import React from "react";
import Button from "../Re-useAble/Button";
import { Link } from "react-router-dom";
import TelegramLogo from "../../Images/telegram.png";
import WhatSappLogo from "../../Images/whatsapp.png";

const Hero = () => {
  return (
    <section id="heroSection" className="w-full flex items-center justify-between gap-2 h-lvh herosection">
      <article className="w-full h-full px-3 flex flex-col items-center justify-center gap-4 md:pl-[05vw] md:w-[40%]">
        <div className="flex w-full gap-2 items-center justify-start">
          <span className="p-[2PX] w-[50px] bg-[#F46B45] md:w-[20%]"></span>
          <p className="capitalize text-2xl text-nowrap ">Become a SoftLiver</p>
          <span className=" hidden p-[2PX] w-[20%] bg-[#F46B45] md:flex"></span>
        </div>
        <h1 className="font-serif text-3xl text-left w-[100%] py-2 font-bold md:text-5xl">
        Prosper and secure your<span className="text-[#F46B45]"> Future</span> with SLP
        </h1>
        <p className="leading-6 text-[#979797] text-base">
        Welcome to the Soft Life Project, where we empower Africans through networking and teamwork. Join us to enhance your life, achieve your goals, and secure a prosperous future. Together, we create opportunities and build a better tomorrow for everyone involved. Connect, collaborate, and thrive with the SLP community today.
        </p>
        <div className="flex w-full items-center justify-start py-4 gap-3">
          <Link to="/sign-up">
            <Button
              classStyle="runded-full bg-[#F0A23C] text-white w-[170px] h-[50px]  capitalize rounded-full font-semibold capitalize text-lg hover:border-2 hover:border-[#F0A23C] hover:text-[#F0A23C] transition duration-700 hover:bg-transparent md:w-[200px] md:h-[50px]"
              buttonContent="start now"
            />
          </Link>
          <a target="_blank" href="http://www.jettecktelecom.com.ng">
            <Button
              classStyle="runded-full bg-[#F46B45] text-white capitalize rounded-full w-[170px] h-[50px] font-semibold capitalize text-lg hover:border-2 hover:border-[#F46B45] hover:text-[#F46B45] transition duration-700 hover:bg-transparent md:w-[200px] md:h-[50px]"
              buttonContent="Get cheap data"
            />
          </a>
        </div>

        {/* SOCIAL ICONS ON HERO SECTION */}
        <div className="flex items-center gap-3 w-full justify-start ml-4 py-2">
          <a target="_blank" href="https://wa.link/8foxzl">
            <div className="border-[2px] border-[#F0A23C] w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer">
              <img
                src={WhatSappLogo}
                alt="whatsApp Icon"
                className="w-[50%] h-[50%]"
              />
            </div>
          </a>
          <a href="" target="_blank">
            <div className="border-[2px] border-[#F0A23C] w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer">
              <img
                src={TelegramLogo}
                alt="Telegram Icon"
                className="w-[50%] h-[50%]"
              />
            </div>
          </a>
        </div>
      </article>
      <aside className="w-[60%] hidden h-full heroAside md:flex"></aside>
    </section>
  );
};

export default Hero;
