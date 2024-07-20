import React from 'react';
import TransactionButton from './TransactionButton';


const DepositIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 0v4m0-4h4m-4 0H8m13 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-1m3-4h10a3 3 0 013 3v1m-1-5V7a4 4 0 00-4-4H9a4 4 0 00-4 4v5h14z" />
    </svg>
);

const WithdrawalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
    </svg>
);

const TransactionButtonGroup = () => {
    const handleDepositClick = () => {
        console.log("Deposit button clicked");
    };

    const handleWithdrawalClick = () => {
        console.log("Withdrawal button clicked");
    };

    return (
        <div className="flex space-x-4">
            <TransactionButton icon={<DepositIcon />} label="Deposit" onClick={handleDepositClick} />
            <TransactionButton icon={<WithdrawalIcon />} label="Withdrawal" onClick={handleWithdrawalClick} />
        </div>
    );
};

export default TransactionButtonGroup;
