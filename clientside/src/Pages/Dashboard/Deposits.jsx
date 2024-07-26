import React, { useState } from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Deposit = () => {
  const apiUrl = "https://softlife-baxk.onrender.com";
  // const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [recentDeposits, setRecentDeposits] = useState([
    { amount: '100', account: 'Savings', date: '2024-07-19' },
    { amount: '200', account: 'Checking', date: '2024-07-18' },
]);

  // =====================================================
  // =====================[ SIGN IN ]=====================
  // =====================================================

  const handleDeposit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!amount) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/accounts/deposit/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          amount: amount,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.access);
        toast.success("Login successful!");
        //   setTimeout(() => {
        //     navigate("/");
        //   }, 2000);
      } else if (response) {
        toast.error(data.detail);
        console.log(data.detail);
      } else {
        // toast.error(password[0]);
      }
    } catch (error) {
      console.error("An error occurred. Please try again later.", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // const handleDeposit = () => {
  //     const newDeposit = {
  //         amount,
  //         account,
  //         date: new Date().toISOString().split('T')[0],
  //     };
  //     setRecentDeposits([newDeposit, ...recentDeposits]);
  //     setAmount('');
  //     setAccount('');
  // };

  return (
    <div className="">
      <DashboardLayout />
      <div className="container sm:ml-64 mt-16 mx-auto p-4">
        <h1 className="text-4xl font-bold text-left mb-8">Make a Deposit</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mx-16 mb-8">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="account"
            >
              Account
            </label>
            <input
              id="account"
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            onClick={handleDeposit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Deposit
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">Recent Deposits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentDeposits.map((deposit, index) => (
            <div className="bg-white p-6 rounded-lg shadow-md" key={index}>
              <p className="text-gray-700 mb-2">Amount: ${deposit.amount}</p>
              <p className="text-gray-700 mb-2">Account: {deposit.account}</p>
              <p className="text-gray-500">Date: {deposit.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deposit;
