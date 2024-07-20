import React from 'react';

const TransactionHistory = ({ transactions }) => {
    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return 'text-green-600';
            case 'pending':
                return 'text-orange-600';
            case 'failed':
                return 'text-red-600';
            default:
                return 'text-gray-700';
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Date</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Transaction ID</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Amount</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                <td className="py-2 px-4 text-md text-gray-700">{transaction.date}</td>
                                <td className="py-2 px-4 text-md text-gray-700">{transaction.id}</td>
                                <td className="py-2 px-4 text-md text-gray-700">{transaction.amount}</td>
                                <td className={`py-2 px-4 text-md ${getStatusColor(transaction.status)}`}>{transaction.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Card format for small screens */}
            <div className="grid gap-4 mt-6 md:hidden">
                {transactions.map((transaction, index) => (
                    <div key={index} className="bg-white shadow rounded-lg p-4 border border-gray-200">
                        <div className="text-sm font-semibold text-gray-600">Date</div>
                        <div className="text-sm text-gray-700">{transaction.date}</div>
                        <div className="mt-2 text-sm font-semibold text-gray-600">Transaction ID</div>
                        <div className="text-sm text-gray-700">{transaction.id}</div>
                        <div className="mt-2 text-sm font-semibold text-gray-600">Amount</div>
                        <div className="text-sm text-gray-700">{transaction.amount}</div>
                        <div className="mt-2 text-sm font-semibold text-gray-600">Status</div>
                        <div className={`text-sm ${getStatusColor(transaction.status)}`}>{transaction.status}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionHistory;
