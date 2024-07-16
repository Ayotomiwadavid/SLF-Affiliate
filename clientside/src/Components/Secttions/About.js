import React from "react";
import AboutImage from "../../Images/shape2.png";
import checkMark from '../../Images/check.png'
import Button from "../Re-useAble/Button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="w-full h-fit flex py-10 px-[15px]items-center justify-between gap-3 bg-white overflow-x-hidden md:py-10 md:px-0">
      <article className="w-full h-full flex flex-col pl-[5vw] items-start justify-center md:w-1/2">
        <div className="w-full flex flex-col items-start justify-center gap-3">
          <h5 className="text-[#F46B45] font-semibold font-sans tracking-widest uppercase text-xl">
            WHO WE ARE
          </h5>
          <h1 className="font-bold text-3xl capitalize ">
            Welcome To SaveHyip
          </h1>
          <span className="p-[2px] bg-[#F46B45] w-[20%]"></span>
        </div>
        <main className="flex flex-col items-center justify-start py-4 gap-3">
          <p className="text-[#797979] text-md text-wrap font-sans font-light">
            Put your investing ideas into action with full range of investments.
            Duis auteir ure dolor in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Enjoy real benefits and rewards on your
            accrue investing.
          </p>
          <p className="text-[#797979] text-md text-wrap font-sans font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut
            enim ad an minim veniam Quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </main>

        <aside className="flex flex-col items-start justify-center gap-3 py-3">
            <div className="flex cursor-pointer group items-center justify-start py-2 gap-3">
                <div className="w-[45px] h-[45px] transition-all duration-500 group-hover:bg-[#F46B45] rounded-full flex items-center justify-center bg-[#F0A23C]">
                    <img src={checkMark} className="h-[50%] w-[50%]"  alt="check mark"/>
                </div>
                <h3 className="font-normal text-2xl transition-all duration-500 group-hover:text-[#F46B45] capitalize">We Innovate</h3>
            </div>
            <div className="flex cursor-pointer group items-center justify-start py-2 gap-3">
                <div className="w-[45px] h-[45px] transition-all duration-500 group-hover:bg-[#F46B45] rounded-full flex items-center justify-center bg-[#F0A23C]">
                    <img src={checkMark} className="h-[50%] w-[50%]"  alt="check mark"/>
                </div>
                <h3 className="font-normal text-2xl transition-all duration-500 group-hover:text-[#F46B45] capitalize">Licenced & Certified</h3>
            </div>
            <div className="flex cursor-pointer group items-center justify-start py-2 gap-3">
                <div className="w-[45px] h-[45px] transition-all duration-500 group-hover:bg-[#F46B45] rounded-full flex items-center justify-center bg-[#F0A23C]">
                    <img src={checkMark} className="h-[50%] w-[50%]"  alt="check mark"/>
                </div>
                <h3 className="font-normal text-2xl transition-all duration-500 group-hover:text-[#F46B45] capitalize">Licenced & Certified</h3>
            </div>

            <div className="w-full flex items-center justify-start py-3">
            <Link to='/sign-up'>
             <Button classStyle='h-[45px] w-[150px] bg-[#F0A23C] rounded-full text-white capitalize hover:bg-transparent hover:border-2 hover:border-[#FA6B45] hover:text-[#FA6B45] transition-all duration-500' buttonContent='get more'/>
             </Link>
            </div>
        </aside>
      </article>
      <aside className="abooutAside w-1/2 overflow-hidden items-center justify-center hidden md:flex">
        <img
          src={AboutImage}
          alt="about img"
          className="h-[600px] w-[1000px] ml-[130px]"
        />
      </aside>
    </section>
  );
};

export default About;
