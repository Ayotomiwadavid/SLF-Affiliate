import React, { useState } from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const Withdrawal = () => {
  const apiUrl = "https://softlife-baxk.onrender.com";
  const { packageList } = useAuth();
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [account_name, setAccountName] = useState("");
  const [account_number, setAccountNum] = useState("");
  const [bank_name, setBankName] = useState("");

  const [loading, setLoading] = useState(false);

  const handleWithdrawal = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!amount || !account_name || !account_number || !bank_name) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/finances/withdrawal-request/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          amount,
          account_name,
          account_number,
          bank_name,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Withdrawal initiated");
      } else {
        toast.error(data.amount[0]);
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
    <div>
      <DashboardLayout />
      <div className="container sm:ml-64 mt-16 mx-auto p-6">
        <h1 className="text-4xl font-bold text-left mb-8">Request for a withdrawal</h1>

        <div className="bg-white py-6 px-3 md:px-12 rounded-lg shadow-md mb-8">
          <form onSubmit={handleWithdrawal}>
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
                className="shadow w-full appearance-none border rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="account_name"
              >
                Account Name
              </label>
              <input
                id="account_name"
                type="text"
                value={account_name}
                onChange={(e) => setAccountName(e.target.value)}
                className="shadow w-full appearance-none border rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="account_number"
              >
                Account Number
              </label>
              <input
                id="account_number"
                type="number"
                value={account_number}
                onChange={(e) => setAccountNum(e.target.value)}
                className="shadow w-full appearance-none border rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bank_name"
              >
                Bank Name
              </label>
              <input
                id="bank_name"
                type="text"
                value={bank_name}
                onChange={(e) => setBankName(e.target.value)}
                className="shadow w-full appearance-none border rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={loading}
            >
              {loading ? (
                <div className="flex gap-3 justify-center items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
                  Loading...
                </div>
              ) : (
                "Withdrawal"
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Withdrawal;
