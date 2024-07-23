import React from 'react';

const DashboardReportCard = ({ report, index }) => {
    const addDollarSign = ["Wallet Balance", "Deposits", "Payouts", "Earnings"].includes(report.title);
    const isFirstCard = index === 0; // Check if it's the first card

    return (
        <div className={`p-4 shadow rounded ${isFirstCard ? 'bg-purple-800' : 'bg-white'}`}>
            <div className="p-2 rounded-md">
                {report.icon}
            </div>
            <div>
                <h3 className={`text-sm font-normal ${isFirstCard ? 'text-white' : 'text-black'}`}>{report.title}</h3>
                <p className={`font-bold text-3xl ${isFirstCard ? 'text-white' : 'text-black'}`}>
                    <span>{addDollarSign ? "$" : ""}</span>
                    {report.value}
                </p>
            </div>
        </div>
    );
};

export default DashboardReportCard;
