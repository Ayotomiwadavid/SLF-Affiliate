import React, { PureComponent } from 'react'
import DashboardLayout from '../../Components/Layout/DashboardLayout'
import DashboardReportCard from '../../Components/Utilities/DashboardReportCard'
import WelcomeUser from '../../Components/Utilities/WelcomeUser'
import TransactionHistory from '../../Components/Utilities/TransactionHistory'
import DashboardChart from '../../Components/Chart/DashboardChart'
import Footer from '../../Components/Navigation/Footer'



const WalletBalanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className='text-white' width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h-1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3M5 5h10a1 1 0 0 1 1 1v1H5a1 1 0 0 1 0-2m15 10h-1a1 1 0 0 1 0-2h1Zm0-4h-1a3 3 0 0 0 0 6h1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.83A3 3 0 0 0 5 9h14a1 1 0 0 1 1 1Z" /></svg>
);

const DepositsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className='text-blue-600' width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 24c5.119 0 9.061-3.942 9.061-9.06S17.119 5.88 12 5.88c-5.117 0-9.059 3.942-9.059 9.06S6.883 24 12 24m0-5.598c-1.954 0-3.461-1.508-3.461-3.462s1.507-3.462 3.461-3.462c1.955 0 3.462 1.507 3.462 3.462c0 1.954-1.507 3.462-3.462 3.462m2.634-12.241h6.161V0h-6.161z" /></svg>
);

const PayoutsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className='text-purple-500' width="2em" height="2em" viewBox="0 0 512 512"><path fill="currentColor" d="M298.9 24.31c-14.9.3-25.6 3.2-32.7 8.4l-97.3 52.1l-54.1 73.59c-11.4 17.6-3.3 51.6 32.3 29.8l39-51.4c49.5-42.69 150.5-23.1 102.6 62.6c-23.5 49.6-12.5 73.8 17.8 84l13.8-46.4c23.9-53.8 68.5-63.5 66.7-106.9l107.2 7.7l-1-112.09zM244.8 127.7c-17.4-.3-34.5 6.9-46.9 17.3l-39.1 51.4c10.7 8.5 21.5 3.9 32.2-6.4c12.6 6.4 22.4-3.5 30.4-23.3c3.3-13.5 8.2-23 23.4-39m-79.6 96c-.4 0-.9 0-1.3.1c-3.3.7-7.2 4.2-9.8 12.2c-2.7 8-3.3 19.4-.9 31.6c2.4 12.1 7.4 22.4 13 28.8c5.4 6.3 10.4 8.1 13.7 7.4c3.4-.6 7.2-4.2 9.8-12.1c2.7-8 3.4-19.5 1-31.6c-2.5-12.2-7.5-22.5-13-28.8c-4.8-5.6-9.2-7.6-12.5-7.6m82.6 106.8c-7.9.1-17.8 2.6-27.5 7.3c-11.1 5.5-19.8 13.1-24.5 20.1c-4.7 6.9-5.1 12.1-3.6 15.2c1.5 3 5.9 5.9 14.3 6.3c8.4.5 19.7-1.8 30.8-7.3s19.8-13 24.5-20c4.7-6.9 5.1-12.2 3.6-15.2c-1.5-3.1-5.9-5.9-14.3-6.3c-1.1-.1-2.1-.1-3.3-.1m-97.6 95.6c-4.7.1-9 .8-12.8 1.9c-8.5 2.5-13.4 7-15 12.3c-1.7 5.4 0 11.8 5.7 18.7c5.8 6.8 15.5 13.3 27.5 16.9c11.9 3.6 23.5 3.5 32.1.9c8.6-2.5 13.5-7 15.1-12.3c1.6-5.4 0-11.8-5.8-18.7c-5.7-6.8-15.4-13.3-27.4-16.9c-6.8-2-13.4-2.9-19.4-2.8" /></svg>
);

const EarningsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className='text-green-700' width="2em" height="2em" viewBox="0 0 32 32"><g fill="currentColor"><path d="M11.9 19.52v-7.64h1.66v7.64zm3.31 0v-7.64h1.69v7.64zm3.35 0v-7.64h1.62v7.64z" /><path d="M16 27c6.075 0 11-4.925 11-11S22.075 5 16 5S5 9.925 5 16s4.925 11 11 11m6.73-5.86c.11.35-.15.7-.5.71H9.78c-.35 0-.61-.34-.51-.68l.35-1.25c.06-.23.27-.39.51-.39h.11v-7.77c-.42-.28-.5-.97.02-1.28l5.4-3.26c.24-.15.54-.15.78 0l5.39 3.26c.52.31.44 1 .01 1.28v7.76h-.03c.23 0 .44.15.51.37z" /><path d="M16 1C7.716 1 1 7.716 1 16c0 8.284 6.716 15 15 15c8.284 0 15-6.716 15-15c0-8.284-6.716-15-15-15M3 16C3 8.82 8.82 3 16 3s13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16" /></g></svg>
);

const InterestEarnIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className='text-purple-600' width="2em" height="2em" viewBox="0 0 512 512"><path fill="currentColor" d="M470.7 9.4c3 3.1 5.3 6.6 6.9 10.3s2.4 7.8 2.4 12.2V128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-18.7L310.6 214.6c-11.8 11.8-30.8 12.6-43.5 1.7L176 138.1l-91.2 78.2c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l112-96c12-10.3 29.7-10.3 41.7 0l89.5 76.7L370.7 64H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c8.8 0 16.8 3.6 22.6 9.3zM0 304c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm48 112v48h48c0-26.5-21.5-48-48-48m48-112H48v48c26.5 0 48-21.5 48-48m368 112c-26.5 0-48 21.5-48 48h48zm-48-112c0 26.5 21.5 48 48 48v-48zm-96 80a64 64 0 1 0-128 0a64 64 0 1 0 128 0" /></svg>
);

const ReferralIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className='text-orange-500' width="2em" height="2em" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M10 13c.552 0 1.01-.452.9-.994a5.002 5.002 0 0 0-9.802 0c-.109.542.35.994.902.994zm2.5-9.5a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 .75-.75" /></svg>
);

const MyAccount = () => {
    let report = [
        { title: "Wallet Balance", value: "10k", icon: <WalletBalanceIcon /> },
        { title: "Deposits", value: "20k", icon: <DepositsIcon /> },
        { title: "Payouts", value: "1.0k", icon: <PayoutsIcon /> },
        { title: "Earnings", value: "1.5k", icon: <EarningsIcon /> },
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
            <DashboardLayout />
            <div className="sm:ml-64 sm:p-4 mb-16">
                <div className="flex items-center gap-2 mx-2  mt-16 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6l2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2z" clip-rule="evenodd" /></svg>
                    Home
                </div>
                <WelcomeUser />
                <div className="mt-4">
                    <div className="">
                        <div className="col-span-3 bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <h1 className="text-gray-900 text-2xl font-bold py-4">My Portfolio</h1>
                                <div className="date font-semibold text-xs sm:text-sm"> <span className="text-gray-300">Wednesday</span>, 14th June 2024</div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 '>
                                    {report.map((item, index) => (
                                        <DashboardReportCard key={index} index={index} report={item} />
                                    ))}
                                </div>

                                <div className="chart col-span-2 my-4 sm:my-0">
                                    <DashboardChart />
                                </div>
                            </div>
                        </div>

                        {/* <div className="col">
                            <div className="bg-white rounded shadow p-4">
                                <h1 className='text-2xl font-bold'>Active Plan</h1>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='bg-gray-50 p-4 rounded-lg my-4'>
                    <h1 className='text-2xl  pb-2 font-semibold'>Transaction History</h1>
                    <TransactionHistory transactions={transactions} />
                </div>
                <Footer />
            </div>


        </div>
    )
}

export default MyAccount;
