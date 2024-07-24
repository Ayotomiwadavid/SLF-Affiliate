import React, { useState } from 'react';
import ConfirmPlanChange from './ConfirmPlanChange';


const InvestmentPlans = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const confirmDeletion = () => {
        // Handle the deletion logic here
        console.log("Item deleted");
        closeModal();
    };

    const plans = [
        { title: 'Silver Plan', details: 'Details about Plan A.' },
        { title: 'Bronze Plan', details: 'Details about Plan B.' },
        { title: 'Copper Plan', details: 'Details about Plan C.' },
        { title: 'Premium Plan', details: 'Details about Plan D.' },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-left mb-8">Our Investment Plans</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {plans.map((plan, index) => (
                    <div className={`plan bg-white border p-6 rounded-lg shadow-md `} key={index}>
                        <h2 className={`text-xl font-semibold mb-4`}>{plan.title}</h2>
                        <h2 className={`text-4xl font-semibold mb-4`}>$50/month</h2>
                        <p className={`text-gray-700 mb-4`}>{plan.details}</p>
                        <div className="w-full flex flex-col ">
                            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className='text-green-600' width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M10.243 16.314L6 12.07l1.414-1.414l2.829 2.828l5.656-5.657l1.415 1.415z" /><path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd" /></g></svg>
                                Up to 5% Daily for for login
                            </p>
                            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans  flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className='text-green-600' width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M10.243 16.314L6 12.07l1.414-1.414l2.829 2.828l5.656-5.657l1.415 1.415z" /><path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd" /></g></svg>
                                Min deposit: NGN10,000
                            </p>
                            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans  flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className='text-green-600' width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M10.243 16.314L6 12.07l1.414-1.414l2.829 2.828l5.656-5.657l1.415 1.415z" /><path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd" /></g></svg>
                                Max deposit: NGN30,000
                            </p>
                            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans  flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className='text-green-600' width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M10.243 16.314L6 12.07l1.414-1.414l2.829 2.828l5.656-5.657l1.415 1.415z" /><path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd" /></g></svg>
                                Min withdrawal: NGN50,000
                            </p>
                            <p className="text-[16px] py-1 capitalize text-[#818181] font-sans  flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className='text-green-600' width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M10.243 16.314L6 12.07l1.414-1.414l2.829 2.828l5.656-5.657l1.415 1.415z" /><path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18" clip-rule="evenodd" /></g></svg>
                                Max withdrawal: NGN150,000
                            </p>
                        </div>
                        <button className="bg-gray-900 text-white px-4 py-2 rounded">Choose plan</button>
                        <div className="flex justify-center m-5">
                            <button onClick={openModal} className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
                                Show delete confirmation
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ConfirmPlanChange isOpen={isModalOpen} onClose={closeModal} onConfirm={confirmDeletion} />
        </div>
    );
}

export default InvestmentPlans;
