import React from "react";
import TransactionButton from "./TransactionButton";
import { Navigate, useNavigate } from "react-router-dom";

const DepositIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 12a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m-.71-6.29a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21L15 7.46A1 1 0 1 0 13.54 6l-.54.59V3a1 1 0 0 0-2 0v3.59L10.46 6A1 1 0 0 0 9 7.46ZM19 15a1 1 0 1 0-1 1a1 1 0 0 0 1-1m1-7h-3a1 1 0 0 0 0 2h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3a1 1 0 0 0 0-2H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3M5 15a1 1 0 1 0 1-1a1 1 0 0 0-1 1"
    />
  </svg>
);

const WithdrawalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 12a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m-.71-6.29a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21L15 7.46A1 1 0 1 0 13.54 6l-.54.59V3a1 1 0 0 0-2 0v3.59L10.46 6A1 1 0 0 0 9 7.46ZM19 15a1 1 0 1 0-1 1a1 1 0 0 0 1-1m1-7h-3a1 1 0 0 0 0 2h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3a1 1 0 0 0 0-2H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3M5 15a1 1 0 1 0 1-1a1 1 0 0 0-1 1"
    />
  </svg>
);

const TransactionButtonGroup = () => {
const navigate = useNavigate()

  const handleDepositClick = () => {
    console.log("Deposit button clicked");
    navigate("/plans")
  };

  const handleWithdrawalClick = () => {
    console.log("Withdrawal button clicked");
    navigate("/withdrawal")
  };

  return (
    <div className="flex space-x-4">
      <TransactionButton
        icon={<DepositIcon />}
        label="Change Plan"
        onClick={handleDepositClick}
      />
      <TransactionButton
        icon={<WithdrawalIcon />}
        label="Withdrawal"
        onClick={handleWithdrawalClick}
      />
    </div>
  );
};

export default TransactionButtonGroup;
