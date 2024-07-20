import React from "react";
import LandingPage from "./Pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";  // Corrected import
import NotFound from "./Pages/NotFound";
import MyAccount from "./Pages/Dashboard/MyAccount";
import Plans from "./Pages/Dashboard/Plans";
import Referrals from "./Pages/Dashboard/Referrals";
import Deposit from "./Pages/Dashboard/Deposits";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/login" element={<SignIn />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/referrals" element={<Referrals />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;