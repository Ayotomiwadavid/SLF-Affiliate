import React from 'react';
import DashboardLayout from '../../Components/Layout/DashboardLayout';


const referrals = [
    { name: 'John Doe', referralCode: 'ABC123', date: '2024-07-20' },
    { name: 'Jane Smith', referralCode: 'XYZ456', date: '2024-07-19' },
    { name: 'Michael Johnson', referralCode: 'DEF789', date: '2024-07-18' },
    { name: 'Emily Davis', referralCode: 'GHI012', date: '2024-07-17' },
];

const Referrals = () => {
    return (
        <div className="container mx-auto p-4">
            <DashboardLayout>
                <h1 className="text-3xl font-bold text-center mb-8">Your Referrals</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {referrals.map((referral, index) => (
                        <div className="bg-white p-6 rounded-lg shadow-md" key={index}>
                            <h2 className="text-xl font-semibold mb-4">{referral.name}</h2>
                            <p className="text-gray-700 mb-2">Referral Code: {referral.referralCode}</p>
                            <p className="text-gray-500 mb-4">Date: {referral.date}</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
                        </div>
                    ))}
                </div>
            </DashboardLayout>

        </div>
    );
}

export default Referrals;
