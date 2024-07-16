import React from "react";
import Anaysis from "../../Images/analysis.png";
import Button from "../Re-useAble/Button";
import CoinIcon from "../../Images/coin.png"
import CalendarIcon from '../../Images/calendar.png'
import MoneyIcon from '../../Images/money.png'

const Plan = () => {
  return (
    <section className="w-full h-fit flex flex-col py-10 px-[15px]items-center justify-between gap-3 bg-white overflow-x-hidden md:py-10 md:px-0">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <h5 className="text-[#F46B45] font-semibold font-sans tracking-widest uppercase text-xl">
        OUR PLANS
        </h5>
        <h1 className="font-bold text-3xl capitalize ">Our Investment Plans</h1>
        <span className="p-[2px] bg-[#F46B45] w-[20%] md:w-[5%]"></span>
      </div>
      <main className="flex flex-col items-center justify-center gap-5 py-10 md:flex-row">
        <div className="md:w-[250px] w-[85%] cursor-pointer h-fit rounded-lg bg-white shadow-xl group">
          <div className=" w-full flex items-center justify-center py-3">
            <img src={Anaysis} alt="icon" className="h-[15%] w-[15%]" />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-2xl capitalize w-full text-center">
              silver plan <span className="text-sm">(Lvl 1.)</span>
            </h1>
            <span className="p-[2px] bg-[#F46B45] w-[20%]"></span>
          </div>

          <div className="w-full flex flex-col items-center justify-center py-7">
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Up to 5% Daily for for login</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Min deposit: NGN10,000</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Max deposit: NGN30,000</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Min withdrawal: NGN50,000</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Max withdrawal: NGN150,000</p>
          </div>

          <div className="w-full flex items-center justify-center py-2 mb-3">
            <Button buttonContent='Start Now' classStyle='w-[200px] border-[#F46B45] rounded-full transition-all duration-500 h-[45px] group-hover:bg-[#F46B45] group-hover:text-[#fff] cursor-pointer border-2 bg-transparent text-[#F46B45] font-bold text-lg'/>
          </div>
        </div>

        <div className="md:w-[250px] w-[85%] cursor-pointer h-fit rounded-lg bg-white shadow-xl group">
          <div className=" w-full flex items-center justify-center py-3">
            <img src={MoneyIcon} alt="icon" className="h-[15%] w-[15%]" />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-2xl capitalize w-full text-center">
              Bronze plan <span className="text-sm">(Lvl 2.)</span>
            </h1>
            <span className="p-[2px] bg-[#F46B45] w-[20%]"></span>
          </div>

          <div className="w-full flex flex-col items-center justify-center py-7">
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Up to 5% Daily for for login</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Min deposit: NGN40,000</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Max deposit: NGN60,000</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Min withdrawal: NGN200,000</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Max withdrawal: NGN300,000</p>
          </div>

          <div className="w-full flex items-center justify-center py-2 mb-3">
            <Button buttonContent='Start Now' classStyle='w-[200px] border-[#F46B45] rounded-full transition-all duration-500 h-[45px] group-hover:bg-[#F46B45] group-hover:text-[#fff] cursor-pointer border-2 bg-transparent text-[#F46B45] font-bold text-lg'/>
          </div>
        </div>

        <div className="md:w-[250px] w-[85%] cursor-pointer h-fit rounded-lg bg-white shadow-xl group">
          <div className=" w-full flex items-center justify-center py-3">
            <img src={CoinIcon} alt="icon" className="h-[15%] w-[15%]" />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-2xl capitalize w-full text-center">
              Copper plan <span className="text-sm">(Lvl 3.)</span>
            </h1>
            <span className="p-[2px] bg-[#F46B45] w-[20%]"></span>
          </div>

          <div className="w-full flex flex-col items-center justify-center py-7">
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Up to 5% Daily for for login</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Min deposit: NGN70,000</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Max deposit: NGN90,000</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Min withdrawal: NGN350,000</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Max withdrawal: NGN450,000</p>
          </div>

          <div className="w-full flex items-center justify-center py-2 mb-3">
            <Button buttonContent='Start Now' classStyle='w-[200px] border-[#F46B45] rounded-full transition-all duration-500 h-[45px] group-hover:bg-[#F46B45] group-hover:text-[#fff] cursor-pointer border-2 bg-transparent text-[#F46B45] font-bold text-lg'/>
          </div>
        </div>

        <div className="md:w-[250px] w-[85%] cursor-pointer h-fit rounded-lg bg-white shadow-xl group">
          <div className=" w-full flex items-center justify-center py-3">
            <img src={CalendarIcon} alt="icon" className="h-[15%] w-[15%]" />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-2xl capitalize w-full text-center">
              Premium plan
            </h1>
            <span className="p-[2px] bg-[#F46B45] w-[20%]"></span>
          </div>

          <div className="w-full flex flex-col items-center justify-center py-7">
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Up to 5% Daily for for login</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Min deposit: NGN10,000</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Max deposit: NGN30,000</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Min withdrawal: NGN50,000</p>
            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Max withdrawal: NGN150,000</p>
          </div>

          <div className="w-full flex items-center justify-center py-2 mb-3">
            <Button buttonContent='Start Now' classStyle='w-[200px] border-[#F46B45] rounded-full transition-all duration-500 h-[45px] group-hover:bg-[#F46B45] group-hover:text-[#fff] cursor-pointer border-2 bg-transparent text-[#F46B45] font-bold text-lg'/>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Plan;
