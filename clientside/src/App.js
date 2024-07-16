import React from "react";
import LandingPage from "./Pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";  // Corrected import
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/login" element={<SignIn />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;