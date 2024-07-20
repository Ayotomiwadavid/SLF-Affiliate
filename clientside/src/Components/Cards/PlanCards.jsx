import React from 'react'

const PlanCards = ({ plan }) => {
    return (
        <div>
            <div className="md:w-[250px] w-[95%] cursor-pointer h-fit rounded-lg bg-white shadow-xl group">
                <div className=" w-full flex items-center justify-center py-3">
                    <img src="{Anaysis}" alt="icon" className="h-[15%] w-[15%]" />
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-2">
                    <h1 className="font-bold text-2xl capitalize w-full text-center">
                        {plan.title} <span className="text-sm">(Lvl 1.)</span>
                    </h1>
                    <span className="p-[2px] bg-[#F46B45] w-[20%]"></span>
                </div>

                <div className="w-full flex flex-col items-center justify-center py-7">
                    <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Up to 5% Daily for for login</p>
                    <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Min deposit: NGN{plan.minDeposit}</p>
                    <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Max deposit: NGN{plan.maxDeposit}</p>
                    <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Min withdrawal: NGN{plan.minWithdrawal}</p>
                    <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Max withdrawal: NGN{plan.maxWithdrawal}</p>
                </div>

                <div className="w-full flex items-center justify-center py-2 mb-3">
                    {/* <Button buttonContent='Start Now' classStyle='w-[200px] border-[#F46B45] rounded-full transition-all duration-500 h-[45px] group-hover:bg-[#F46B45] group-hover:text-[#fff] cursor-pointer border-2 bg-transparent text-[#F46B45] font-bold text-lg' /> */}
                </div>
            </div>
        </div>
    )
}

export default PlanCards