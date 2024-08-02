import React from "react";
import PropTypes from "prop-types";
import { useAuth } from "../../context/AuthContext";

const DashboardReportCard = ({ report, index }) => {
  const { deposits, payouts, earnings, referral } = useAuth();

    // Ensure the inputs are numbers
    let depositsNumber = Number(deposits);
    let earningsNumber = Number(earnings);
    let walletBalance = depositsNumber + earningsNumber;

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
  const isFirstCard = index === 0;

  return (
    <div
      className={`flex gap-3 items-center max-w-sm p-4 border border-gray-200 rounded-lg shadow ${
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
          {addDollarSign && <>&#8358;</>}
          {getValue(report.title)}
        </p>
      </div>
    </div>
  );
};

// Prop validation
DashboardReportCard.propTypes = {
  report: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DashboardReportCard;
