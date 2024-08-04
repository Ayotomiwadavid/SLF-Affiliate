import React from "react";
import Anaysis from "../../Images/analysis.png";
import Button from "../Re-useAble/Button";
import CoinIcon from "../../Images/coin.png"
import CalendarIcon from '../../Images/calendar.png'
import MoneyIcon from '../../Images/money.png'
import PlanCards from "../Cards/PlanCards";
import { Link } from "react-router-dom";


const Plan = () => {
  let plans = [
    {
      icon: Anaysis,
      title: "Silver Plan",
      minDeposit: "10,000",
      maxDeposit: "30,000",
      minWithdrawal: "50,000",
      maxWithdrawal: "150,000"
    },

    {
      icon: CoinIcon,
      title: "Bronze Plan",
      minDeposit: "40,000",
      maxDeposit: "60,000",
      minWithdrawal: "200,000",
      maxWithdrawal: "300,000"
    },

    {
      icon: CalendarIcon,
      title: "Copper Plan",
      minDeposit: "70,000",
      maxDeposit: "90,000",
      minWithdrawal: "350,000",
      maxWithdrawal: "450,000"
    },

    {
      icon: MoneyIcon,
      title: "Premium Plan",
      minDeposit: "10,000",
      maxDeposit: "30,000",
      minWithdrawal: "50,000",
      maxWithdrawal: "150,000"
    }


  ]
  return (
    <section id="planSection" className="w-full h-fit flex flex-col py-10 px-[10px] items-center justify-between gap-3 bg-white overflow-x-hidden md:py-10 md:px-0">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <h5 className="text-[#F46B45] font-semibold font-sans tracking-widest uppercase text-xl">
          OUR PLANS
        </h5>
        <h1 className="font-bold text-3xl capitalize ">Our membership Plans</h1>
        <span className="p-[2px] bg-[#F46B45] w-[20%] md:w-[5%]"></span>
      </div>
      <main className="flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 items-center w-full justify-center gap-3 py-10">
        {plans.map((plan, index) => (
          <div className="w-full p-4 cursor-pointer rounded-lg bg-white shadow-xl group">
            <div className=" w-full flex items-center justify-center py-3">
              <img src={plan.icon} alt="icon" className="h-[15%] w-[15%]" />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-2">
              <h1 className="font-bold text-2xl capitalize w-full text-center">
                {plan.title} <span className="text-sm">(Lvl {index + 1}.)</span>
              </h1>
              <span className="p-[2px] bg-[#F46B45] w-[20%]"></span>
            </div>

            <div className="w-full flex flex-col items-center justify-center py-7">
              <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Up to 5% Daily for for login</p>
              <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Min deposit: <>&#8358;</>{plan.minDeposit}</p>
              <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Max deposit: <>&#8358;</>{plan.maxDeposit}</p>
              <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Min withdrawal: <>&#8358;</>{plan.minWithdrawal}</p>
              <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Max withdrawal: <>&#8358;</>{plan.maxWithdrawal}</p>
            </div>

            <Link to="http://localhost:3000/sign-up" className="w-full flex items-center justify-center py-2 mb-3">
              <Button buttonContent='Start Now' classStyle='w-[200px] border-[#F46B45] rounded-full transition-all duration-500 h-[45px] group-hover:bg-[#F46B45] group-hover:text-[#fff] cursor-pointer border-2 bg-transparent text-[#F46B45] font-bold text-lg' />
            </Link>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Plan;
