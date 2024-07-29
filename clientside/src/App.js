import React, { useEffect } from "react";
import LandingPage from "./Pages/LandingPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";  // Corrected import
import NotFound from "./Pages/NotFound";
import MyAccount from "./Pages/Dashboard/MyAccount";
import Plans from "./Pages/Dashboard/Plans";
import Referrals from "./Pages/Dashboard/Referrals";
import Deposit from "./Pages/Dashboard/Deposits";
import Profile from "./Pages/Dashboard/Profile";




const App = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate('/login');
  //   }
  // }, [navigate]);
  
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/dashboard" element={<MyAccount />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/referrals" element={<Referrals />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  // return children;
};


export default App;