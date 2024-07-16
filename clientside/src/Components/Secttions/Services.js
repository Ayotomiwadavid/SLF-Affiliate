import React from "react";
import certified from "../../Images/quality.png";
import EastIcon from "@mui/icons-material/East";
import shield from '../../Images/shield.png'
import Bar from '../../Images/bars.png'
import BitCoin from '../../Images/bitcoin.png'
import Support from '../../Images/support.png'
import Globe from '../../Images/globe.png'

const Services = () => {
  return (
    <section className="w-full h-fit flex flex-col py-10 px-[15px]items-center justify-between gap-3 bg-white overflow-x-hidden md:py-10 md:px-0">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <h5 className="text-[#F46B45] font-semibold font-sans tracking-widest uppercase text-xl">
          SERVICES
        </h5>
        <h1 className="font-bold text-3xl capitalize ">Our Features</h1>
        <span className="p-[2px] bg-[#F46B45] w-[20%] md:w-[5%]"></span>
      </div>

      <main className="w-full flex flex-col items-center justify-center md:grid md:grid-cols-3 md:place-items-center px-[15vw] py-[50px] gap-5">
        <div className="w-[300px] h-[300px] rounded-md border-[2px] transition-all duration-500 group cursor-pointer hover:shadow-xl hover:border-[#F46B45] py-3 px-3 flex flex-col">
          <div className="py-2 px-2 flex items-center justify-start">
            <img src={certified} alt="certification" className="h-10 w-10" />
          </div>
          <h1 className="text-2xl px-2 py-2 font-semibold group-hover:text-[#F46B45] transition-all duration-500">
            We're Certified
          </h1>

          <p className="px-2 py-2 leading-7 text-wrap text-base text-[#797979]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut
            enim ad minim veniam
          </p>

          <div className="flex items-center justify-center h-[45px] w-[45px] border-[2px] rounded-full transition-all duration-500 group-hover:border-[#F46B45] border-[#F0A23C] m-2">
            <EastIcon
              style={{
                fontSize: "20px",
              }}
            />
          </div>
        </div>

        <div className="w-[300px] h-[300px] rounded-md border-[2px] transition-all duration-500 group cursor-pointer hover:shadow-xl hover:border-[#F46B45] py-3 px-3 flex flex-col">
          <div className="py-2 px-2 flex items-center justify-start">
            <img src={shield} alt="certification" className="h-10 w-10" />
          </div>
          <h1 className="text-2xl px-2 py-2 font-semibold group-hover:text-[#F46B45] transition-all duration-500">
          We're Secure
          </h1>

          <p className="px-2 py-2 leading-7 text-wrap text-base text-[#797979]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut
            enim ad minim veniam
          </p>

          <div className="flex items-center justify-center h-[45px] w-[45px] border-[2px] rounded-full transition-all duration-500 group-hover:border-[#F46B45] border-[#F0A23C] m-2">
            <EastIcon
              style={{
                fontSize: "20px",
              }}
            />
          </div>
        </div>

        <div className="w-[300px] h-[300px] rounded-md border-[2px] transition-all duration-500 group cursor-pointer hover:shadow-xl hover:border-[#F46B45] py-3 px-3 flex flex-col">
          <div className="py-2 px-2 flex items-center justify-start">
            <img src={Bar} alt="certification" className="h-10 w-10" />
          </div>
          <h1 className="text-2xl px-2 py-2 font-semibold group-hover:text-[#F46B45] transition-all duration-500">
          We're Profitable
          </h1>

          <p className="px-2 py-2 leading-7 text-wrap text-base text-[#797979]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut
            enim ad minim veniam
          </p>

          <div className="flex items-center justify-center h-[45px] w-[45px] border-[2px] rounded-full transition-all duration-500 group-hover:border-[#F46B45] border-[#F0A23C] m-2">
            <EastIcon
              style={{
                fontSize: "20px",
              }}
            />
          </div>
        </div>

        <div className="w-[300px] h-[300px] rounded-md border-[2px] transition-all duration-500 group cursor-pointer hover:shadow-xl hover:border-[#F46B45] py-3 px-3 flex flex-col">
          <div className="py-2 px-2 flex items-center justify-start">
            <img src={BitCoin} alt="certification" className="h-10 w-10" />
          </div>
          <h1 className="text-2xl px-2 py-2 font-semibold group-hover:text-[#F46B45] transition-all duration-500">
          We Accept Crypto
          </h1>

          <p className="px-2 py-2 leading-7 text-wrap text-base text-[#797979]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut
            enim ad minim veniam
          </p>

          <div className="flex items-center justify-center h-[45px] w-[45px] border-[2px] rounded-full transition-all duration-500 group-hover:border-[#F46B45] border-[#F0A23C] m-2">
            <EastIcon
              style={{
                fontSize: "20px",
              }}
            />
          </div>
        </div>

        <div className="w-[300px] h-[300px] rounded-md border-[2px] transition-all duration-500 group cursor-pointer hover:shadow-xl hover:border-[#F46B45] py-3 px-3 flex flex-col">
          <div className="py-2 px-2 flex items-center justify-start">
            <img src={Support} alt="certification" className="h-10 w-10" />
          </div>
          <h1 className="text-2xl px-2 py-2 font-semibold group-hover:text-[#F46B45] transition-all duration-500">
          Best Support
          </h1>

          <p className="px-2 py-2 leading-7 text-wrap text-base text-[#797979]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut
            enim ad minim veniam
          </p>

          <div className="flex items-center justify-center h-[45px] w-[45px] border-[2px] rounded-full transition-all duration-500 group-hover:border-[#F46B45] border-[#F0A23C] m-2">
            <EastIcon
              style={{
                fontSize: "20px",
              }}
            />
          </div>
        </div>

        <div className="w-[300px] h-[300px] rounded-md border-[2px] transition-all duration-500 group cursor-pointer hover:shadow-xl hover:border-[#F46B45] py-3 px-3 flex flex-col">
          <div className="py-2 px-2 flex items-center justify-start">
            <img src={Globe} alt="certification" className="h-10 w-10" />
          </div>
          <h1 className="text-2xl px-2 py-2 font-semibold group-hover:text-[#F46B45] transition-all duration-500">
          We're Global
          </h1>

          <p className="px-2 py-2 leading-7 text-wrap text-base text-[#797979]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut
            enim ad minim veniam
          </p>

          <div className="flex items-center justify-center h-[45px] w-[45px] border-[2px] rounded-full transition-all duration-500 group-hover:border-[#F46B45] border-[#F0A23C] m-2">
            <EastIcon
              style={{
                fontSize: "20px",
              }}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Services;
