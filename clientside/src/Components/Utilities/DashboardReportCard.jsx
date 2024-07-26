import React from "react";
import { useAuth } from "../../context/AuthContext";

const DashboardReportCard = ({ report, index }) => {
  const { walletBalance, deposits, payouts, earnings, referral } = useAuth();

  const getValue = (title) => {
    switch (title) {
      case "Wallet Balance":
        return walletBalance;
      case "Deposits":
        return deposits;
      case "Payouts":
        return payouts;
      case "Earnings":
        return earnings;
      case "Referral":
        return referral;
      default:
        return 0;
    }
  };

  const addDollarSign = [
    "Wallet Balance",
    "Deposits",
    "Payouts",
    "Earnings",
  ].includes(report.title);
  const isFirstCard = index === 0; // Check if it's the first card

  return (
    <div
      className={`flex gap-4 items-center max-w-sm p-6 border border-gray-200 rounded-lg shadow ${
        isFirstCard ? "bg-purple-800" : "bg-white"
      }`}
    >
      <div
        className={`w-16 h-16 flex justify-center items-center rounded-md ${
          isFirstCard ? "bg-purple-400" : "bg-gray-100"
        }`}
      >
        {report.icon}
      </div>
      <div>
        <a href="#">
          <h5
            className={`mb-2 text-sm font-semibold tracking-tight ${
              isFirstCard ? "text-white" : "text-black"
            }`}
          >
            {report.title}
          </h5>
        </a>
        <p
          className={`font-bold text-3xl ${
            isFirstCard ? "text-white" : "text-black"
          }`}
        >
          <span>{addDollarSign ? "$" : ""}</span>
          {getValue(report.title)}
        </p>
      </div>
    </div>
  );
};

export default DashboardReportCard;
