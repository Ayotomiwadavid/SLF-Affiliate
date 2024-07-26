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
  // const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

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
      console.log(userInfo);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        // logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
