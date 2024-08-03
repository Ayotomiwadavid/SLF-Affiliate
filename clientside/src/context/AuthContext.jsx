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
  const [total_withdrawals, WithdrawalsBalance] = useState("");
  const [referral, setReferral] = useState("");
  const [deposits, setDeposits] = useState("");
  const [referralUsers, setReferralUsers] = useState([]);
  const [referral_code, setReferralCode] = useState("");
  const [earnings, setEarnings] = useState("");

  const [transactions, setTransaction] = useState([]);
  const [packageList, setPackageList] = useState([]);
  const [userPackage, setUserPackage] = useState([]);

  const [loading, setLoading] = useState(false);

  // =====================================================
  // =================[ wallet-balance ]==================
  // =====================================================

  const fetchWalletBalance = async () => {
    const response = await fetch(
      `${apiUrl}/finances/wallet-balance/?_csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setBalance(data.data.wallet_balance);
          setLoading(true);
        });
      } else if (response) {
        response.json().then((data) => {});
      }
    });
  };


  // =====================================================
  // =====================[ balance ]=====================
  // =====================================================

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
          setEarnings(data.data.total_referral_earnings);
          setDeposits(data.data.total_deposits);
          // console.log(data.data.total_earnings);
          setLoading(true);
        });
      } else if (response) {
        response.json().then((data) => {});
      }
    });
  };


  // =====================================================
  // ================[ total-withdrawals ]================
  // =====================================================

  const fetchWithdrawalsBalance = async () => {
    const response = await fetch(
      `${apiUrl}/finances/total-withdrawals/?_csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          WithdrawalsBalance(data.total_withdrawals);
          setLoading(true);
        });
      } else if (response) {
        response.json().then((data) => {});
      }
    });
  };


  // =====================================================
  // ===============[ transaction-history ]===============
  // =====================================================

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
          setTransaction(data.results);
          localStorage.setItem("transactions", JSON.stringify(data.results[0]));
          // console.log(data.results[0].amount);
          setLoading(true);
        });
      } else if (response) {
        response.json().then((data) => {});
      }
    });
  };


  // =====================================================
  // ===================[ all_packages ]==================
  // =====================================================

  const fetchPackages = () => {
    // const response = await
    fetch(`${apiUrl}/finances/all_packages/`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setPackageList(data);
          localStorage.setItem("packageList", JSON.stringify(data));
          setLoading(true);
        });
      } else if (response) {
        response.json().then((data) => {});
      }
    });
  };


  // =====================================================
  // ===================[ userpackage ]===================
  // =====================================================

  const fetchUserpackage = async () => {
    const response = await fetch(
      `${apiUrl}/finances/userpackage/?_csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setUserPackage(data[0]);
          // console.log(data);
          setLoading(true);
        });
      } else if (response) {
        response.json().then((data) => {});
      }
    });
  };

  
  // =====================================================
  // =====================[ referral ]=====================
  // =====================================================

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
          setReferralUsers(data.referred_users);
          setReferralCode(data.referral_code);
          localStorage.setItem("referral", JSON.stringify(data.results));
          // console.log(data.referred_users[0]);
          setLoading(true);
        });
      } else if (response) {
        response.json().then((data) => {});
      }
    });
  };

  useEffect(() => {
    fetchBalance();
    fetchWalletBalance();
    fetchWithdrawalsBalance();
    fetchTransaction();
    fetchReferral();
    fetchPackages();
    fetchUserpackage();
  }, []);

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
        total_withdrawals,
        referral,
        referralUsers,
        referral_code,
        earnings,
        deposits,
        transactions,
        packageList,
        userPackage,
        fetchWalletBalance,
        fetchBalance,
        fetchWithdrawalsBalance,
        fetchTransaction,
        fetchReferral,
        fetchPackages,
        fetchUserpackage,
        // loading,
        // logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
