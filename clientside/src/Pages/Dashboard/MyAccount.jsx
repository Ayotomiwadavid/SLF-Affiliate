import React from 'react'
import DashboardLayout from '../../Components/Layout/DashboardLayout'
import DashboardReportCard from '../../Components/Utilities/DashboardReportCard'
import WelcomeUser from '../../Components/Utilities/WelcomeUser'
import TransactionHistory from '../../Components/Utilities/TransactionHistory'


const WalletBalanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 0v4m0-4h4m-4 0H8m13 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-1m3-4h10a3 3 0 013 3v1m-1-5V7a4 4 0 00-4-4H9a4 4 0 00-4 4v5h14z" />
    </svg>
);

const DepositsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const PayoutsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8m-3 4h-5m1-2V5m0 14v-5m-2 0H4m8 0h2m4 0h4M6 18h2m6-6h4m-6 2h2" />
    </svg>
);

const EarningsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h2m4 0h12M5 6h2m4 0h10M9 14h6m-2 4h6m-2-4h2M3 14h2m4 0h2m-4 4h2m4 0h2" />
    </svg>
);

const InterestEarnIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m-2 4h6m-6-4h2m-6-8h6M9 4h6m-2 8h2m-6-4h6M7 16h2M5 20h14m-2-4h-2M3 4h18M5 4h2m10 0h2M3 8h18M7 4h2m10 0h2" />
    </svg>
);

const ReferralIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4H9v-4h6v4h-3v4zm2 0h4v4H7v-4h4m-3 4V6h6v10h-6zm0 4h6v-4h4v-6h-4v-4H9v4H5v6h4v4z" />
    </svg>
);

const MyAccount = () => {
    let report = [
        { title: "Wallet Balance", value: "10,000", icon: <WalletBalanceIcon /> },
        { title: "Deposits", value: "20m", icon: <DepositsIcon /> },
        { title: "Payouts", value: "40,000", icon: <PayoutsIcon /> },
        { title: "Earnings", value: "20,000", icon: <EarningsIcon /> },
        { title: "Interest Earn", value: "20%", icon: <InterestEarnIcon /> },
        { title: "Referral", value: "10", icon: <ReferralIcon /> },
    ];

    const transactions = [
        { date: '2023-07-01', id: 'TXN123456', amount: '$500', status: 'Completed' },
        { date: '2023-07-02', id: 'TXN123457', amount: '$250', status: 'Pending' },
        { date: '2023-07-03', id: 'TXN123458', amount: '$100', status: 'Failed' },
        // Add more transactions as needed
    ];

    return (
        <div>
            <DashboardLayout>
                <WelcomeUser />
                <h1 className='text-2xl py-8 font-semibold'>Overview</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {report.map((item, index) => (
                        <DashboardReportCard key={index} report={item} />
                    ))}
                </div>

                <div>
                    <h1 className='text-2xl py-8 pb-2 font-semibold'>Transaction History</h1>
                    <TransactionHistory transactions={transactions} />
                </div>
            </DashboardLayout>
        </div>
    )
}

export default MyAccount;
