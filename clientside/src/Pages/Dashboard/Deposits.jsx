import React, { useState } from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const Deposit = () => {
  const apiUrl = "https://softlife-baxk.onrender.com";
  const { packageList } = useAuth();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const packagePrice = queryParams.get("packagePrice");

  const navigate = useNavigate();
  const [amount, setAmount] = useState(packagePrice || "");
  const [account, setAccount] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [recentDeposits, setRecentDeposits] = useState([
    { amount: "100", account: "Savings", date: "2024-07-19" },
    { amount: "200", account: "Checking", date: "2024-07-18" },
  ]);

  const handleDeposit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!amount) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/finances/deposit/`, {
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
        toast.success("Deposit initiated");
        const newDeposit = {
          amount,
          account: "Savings", // Or the correct account type
          date: new Date().toISOString().split("T")[0],
        };
        window.location.href = data.payment_url
        setRecentDeposits([newDeposit, ...recentDeposits]);
        setAmount("");
        setAccount("");
      } else {
        toast.error(data.detail);
      }
    } catch (error) {
      console.error("An error occurred. Please try again later.", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <DashboardLayout />
      <div className="container sm:ml-64 mt-16 mx-auto p-6">
        <h1 className="text-4xl font-bold text-left mb-8">Make a Deposit</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            {/* <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="shadow appearance-none border rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            /> */}
            <select
              className="h-[55px] px-3 w-[350px] outline-none border rounded-md bg-white"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            >
              <option value="" disabled>
                Choose Package
              </option>
              {packageList.map((pkg) => (
                <option key={pkg.id} value={pkg.price}>
                  {pkg.name} ({pkg.price})
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleDeposit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? (
              <div className="flex gap-3 justify-center items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
                Loading...
              </div>
            ) : (
              "Deposit"
            )}
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">Recent Deposits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentDeposits.map((deposit, index) => (
            <div className="bg-white p-6 rounded-lg shadow-md" key={index}>
              <p className="text-gray-700 mb-2">Amount: {deposit.amount}</p>
              <p className="text-gray-700 mb-2">Account: <span>&#8358;</span> {deposit.account}</p>
              <p className="text-gray-500">Date: {deposit.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deposit;
