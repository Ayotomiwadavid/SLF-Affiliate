import React from 'react';

const InvestmentPlans = () => {
    const plans = [
        { title: 'Silver Plan', details: 'Details about Plan A.' },
        { title: 'Bronze Plan', details: 'Details about Plan B.' },
        { title: 'Copper Plan', details: 'Details about Plan C.' },
        { title: 'Premium Plan', details: 'Details about Plan D.' },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-left mb-8">Our Investment Plans</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {plans.map((plan, index) => (
                    <div className="plan bg-white p-6 rounded-lg shadow-md" key={index}>
                        <h2 className="text-xl font-semibold mb-4">{plan.title}</h2>
                        <p className="text-gray-700 mb-4">{plan.details}</p>
                        <div className="w-full flex flex-col py-7">
                            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Up to 5% Daily for for login</p>
                            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Min deposit: NGN10,000</p>
                            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Max deposit: NGN30,000</p>
                            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Min withdrawal: NGN50,000</p>
                            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans">Max withdrawal: NGN150,000</p>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InvestmentPlans;
