import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const apiUrl = "https://softlife-baxk.onrender.com";
  // const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [walletBalance, setBalance] = useState("");
  const [referral, setReferral] = useState("");

  const [transactions, setTransaction] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchBalance = async () => {
    const response = await fetch(
      `${apiUrl}/finances/balance/?_csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setBalance(data.data.total_earnings);
          localStorage.setItem(
            "balance",
            JSON.stringify(data.data.total_earnings)
          );
          // console.log(data.data.total_earnings);
          setLoading(true);
        });
      } else if (response) {
        response.json().then((data) => {});
      }
    });
  };


  const fetchTransaction = async () => {
    const response = await fetch(
      `${apiUrl}/finances/transaction-history/?_csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setTransaction(data);
          localStorage.setItem(
            "transactions",
            JSON.stringify(data.results)
          );
          // console.log(data.data.total_earnings);
          setLoading(true);
        });
      } else if (response) {
        response.json().then((data) => {});
      }
    });
  };


  const fetchReferral = async () => {
    const response = await fetch(
      `${apiUrl}/finances/referral/?_csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setReferral(data.referral_count);
          localStorage.setItem(
            "referral",
            JSON.stringify(data.results)
          );
          // console.log(data.data.total_earnings);
          setLoading(true);
        });
      } else if (response) {
        response.json().then((data) => {});
      }
    });
  };


  useEffect(() => {
    fetchBalance();
    fetchTransaction();
    fetchReferral();
  }, []);

  // const logOut = () => {
  //   signOut(auth);
  //   localStorage.removeItem("userInfo");
  //   setUser("");
  // };

  // Retrieve user details from localStorage
  useEffect(() => {
    const storedUserDetails = localStorage.getItem("userInfo");

    if (storedUserDetails) {
      const userInfo = JSON.parse(storedUserDetails);
      setUser(userInfo);
      // console.log(userInfo);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        walletBalance,
        referral,
        transactions,
        // loading,
        // logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
