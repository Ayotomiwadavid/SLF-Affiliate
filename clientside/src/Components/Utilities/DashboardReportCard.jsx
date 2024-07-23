import React from 'react';

const DashboardReportCard = ({ report, index }) => {
    const addDollarSign = ["Wallet Balance", "Deposits", "Payouts", "Earnings"].includes(report.title);
    const isFirstCard = index === 0; // Check if it's the first card

    return (
        // <div className={`p-4 shadow rounded grid grid-cols-2 justify-start md:grid-cols-1 ${isFirstCard ? 'bg-purple-800' : 'bg-white'}`}>
        //     <div className="p-2 rounded-md">
        //         {report.icon}
        //     </div>
        //     <div>
        //         <h3 className={`text-sm font-normal ${isFirstCard ? 'text-white' : 'text-black'}`}>{report.title}</h3>
        //         <p className={`font-bold text-3xl ${isFirstCard ? 'text-white' : 'text-black'}`}>
        //             <span>{addDollarSign ? "$" : ""}</span>
        //             {report.value}
        //         </p>
        //     </div>
        // </div>



        <div className={`flex gap-4 items-center max-w-sm p-6 border border-gray-200 rounded-lg shadow ${isFirstCard ? 'bg-purple-800' : 'bg-white'}`}>
            <div className={`w-16 h-16 flex justify-center items-center rounded-md bg-gray-100 ${isFirstCard ? 'bg-purple-400' : 'bg-white'}`}>
                {report.icon}
            </div>
            <div className="">
                <a href="#">
                    <h5 className={`mb-2 text-sm font-semibold tracking-tight  ${isFirstCard ? 'text-white' : 'text-black'}`}>{report.title}</h5>
                </a>
                <p className={`font-bold text-3xl ${isFirstCard ? 'text-white' : 'text-black'}`}> <span>{addDollarSign ? "$" : ""}</span>
                    {report.value}
                </p>
            </div>
        </div>




    );
};

export default DashboardReportCard;
