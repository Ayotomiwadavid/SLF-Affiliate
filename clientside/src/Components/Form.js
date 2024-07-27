import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";


const Form = ({ type }) => {
  const apiUrl = "https://softlife-baxk.onrender.com";
  // const apiUrl = import.meta.env.VITE_API_URL;
  const { packageList } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [package_id, setPackageId] = useState("");
  const [referralID, setReferralID] = useState("");
  const [transactionPin, setTransactionPin] = useState("");
  const [confirmTransactionPin, setConfirmTransactionPin] = useState("");

  const [selectedPackage, setSelectedPackage] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [loading, setLoading] = useState(false);


  const handlePackageChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  // =====================================================
  // =====================[ SIGN IN ]=====================
  // =====================================================

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/accounts/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          user: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.access);
        toast.success("Login successful!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else if (response) {
        toast.error(data.detail);
        console.log(data.detail)
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


  // =====================================================
  // =====================[ SIGN UP ]=====================
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password || !firstName || !lastName || !username || !confirmPassword
      // referralID || transactionPin || confirmTransactionPin
    ) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/accounts/registration/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          email,
          password,
          confirmPassword,
          package_id: selectedPackage,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.access);
        toast.success("Register Successful 🥳");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else if (response) {
        // toast.error(data.username);
        setErrorUsername(data.username);
        setErrorPassword(password[0])
        // console.log(data.username)
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


  return (
    <form
      className={
        type === "signup"
          ? "bg-[#f5f5f5] md:grid md:grid-cols-2 md:place-items-start flex flex-col items-center justify-center md:max-h-[550px] h-fit rounded-lg shadow-lg py-7 px-3 gap-5"
          : "bg-[#f5f5f5] flex flex-col items-center justify-center max-h-[550px] h-fit rounded-lg shadow-lg py-7 px-3 gap-5"
      }
    >
      <input
        className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />

      <div>
        <input
          className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <small>{errorPassword && <p className="text-[red] mb-3 mt-1">Ensure this field has at least 8 characters.</p>}</small>
      </div>


      {type === "signup" && (
        <>
          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="password"
            placeholder="Confirm Password"
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />

          <div>
            <input
              className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
              type="text"
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
            <small>{errorUsername && <p className="text-[red] mb-3 mt-1">user with this username already exists.</p>}</small>
          </div>

          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="text"
            placeholder="First Name"
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
          />
          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="text"
            placeholder="Last Name"
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </>
      )}

      {type === "signup" && (
        <>
          {/* <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="number"
            placeholder="Transaction Pin"
            onChange={e => setTransactionPin(e.target.value)}
            value={transactionPin}
          />
          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="number"
            placeholder="Confirm Transaction Pin"
            onChange={e => setConfirmTransactionPin(e.target.value)}
            value={confirmTransactionPin}
          /> */}

          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="text"
            placeholder="Referral Id"
            onChange={e => setReferralID(e.target.value)}
            value={referralID}
          />

          <select
            className="h-[55px] p-3 w-[350px] outline-none rounded-md bg-white"
            value={selectedPackage}
            onChange={handlePackageChange}
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
        </>
      )}


      {type === "login" && (
        <button
          onClick={handleLogin}
          type="submit"
          className="col-span-2 w-3/4 bg-[#F46B45] h-[45px] text-white capitalize rounded-lg font-semibold text-xl cursor-pointer transition-all duration-500 hover:scale-110"
        >
          {loading ? (
            <div className="flex gap-3 justify-center items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
              Loading...
            </div>
          ) : (
            "Log in"
          )}</button>
      )
      }

      {type === "signup" && (
        <button
          onClick={handleSubmit}
          type="submit"
          className="col-span-2 w-3/4 bg-[#F46B45] h-[45px] text-white capitalize rounded-lg font-semibold text-xl cursor-pointer transition-all duration-500 hover:scale-110"
        >
          {loading ? (
            <div className="flex gap-3 justify-center items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
              Loading...
            </div>
          ) : (
            "Sign Up"
          )}</button>
      )
      }
    </form>
  );
};

export default Form;




// firstName
// lastName
// username
// confirmPassword
// referralID
// transactionPin
// confirmTransactionPin