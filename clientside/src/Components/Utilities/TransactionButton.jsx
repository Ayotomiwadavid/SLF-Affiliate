import React from 'react'

const TransactionButton = ({ icon, label, onClick }) => {
    return (
        <button onClick={onClick} className="flex items-center space-x-2 bg-white hover:bg-blue-700 text-gray-800 font-bold py-2 px-4 rounded transition duration-200">
            <span>{icon}</span>
            <span>{label}</span>
        </button>
    )
}

export default TransactionButton