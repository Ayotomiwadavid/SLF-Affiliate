import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Form = ({ type }) => {
  const apiUrl = "https://softlife-baxk.onrender.com";
  const {
    packageList,
    fetchBalance,
    fetchWalletBalance,
    fetchTransaction,
    fetchReferral,
    fetchPackages,
    fetchUserpackage,
  } = useAuth();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const referralCode = queryParams.get("referral_code");

  let referral_Code = Number(referralCode);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phone_number, setPhone] = useState("");
  const [referral_code, setReferralID] = useState(referral_Code || "");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //   Let { referral_code } = useParams();

  // Let referralCode = Number(referral_code);

  //   SetreferralCode(referralCode);

  const handlePackageChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  const getSelectedPackagePrice = (packageId) => {
    const selectedPkg = packageList.find((pkg) => pkg.id === parseInt(packageId));
    return selectedPkg ? selectedPkg.price : "";
  };

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
        fetchBalance();
        fetchWalletBalance();
        fetchTransaction();
        fetchReferral();
        fetchPackages();
        fetchUserpackage();
      } else {
        toast.error(data.detail);
        console.log(data.detail);
      }
    } catch (error) {
      console.error("An error occurred. Please try again later.", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !username ||
      !confirmPassword
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
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          username,
          email,
          password: password,
          confirmPassword,
          package_id: selectedPackage,
          referral_code
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.access_token);
        toast.success("Register Successful 🥳");
        setTimeout(() => {
          const packagePrice = getSelectedPackagePrice(selectedPackage);
          navigate(`/deposit?packagePrice=${packagePrice}`);
        }, 2000);
        fetchBalance();
        fetchWalletBalance();
        fetchTransaction();
        fetchReferral();
        fetchPackages();
        fetchUserpackage();
      } else {
        if (data.error_msg) {
          toast.error(data.error_msg);
        } else {
          toast.error("Registration failed. Please try again.");
        }
        setErrorUsername(data.username);
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
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />



      {type === "login" && (
        <div>
          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <small>
            {errorPassword && (
              <p className="text-[red] mb-3 mt-1">
                Ensure this field has at least 8 characters.
              </p>
            )}
          </small>
        </div>
      )}

      {type === "signup" && (
        <>
          <div>
            <input
              className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <small>
              {errorUsername && (
                <p className="text-[red] mb-3 mt-1">
                  user with this username already exists.
                </p>
              )}
            </small>
          </div>

          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />

          <div>
            <input
              className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <small>
              {errorPassword && (
                <p className="text-[red] mb-3 mt-1">
                  Ensure this field has at least 8 characters.
                </p>
              )}
            </small>
          </div>

          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />

          <input
            className="h-[55px] p-3 w-[350px] outline-none rounded-md placeholder:text-[#9999A6]"
            type="text"
            placeholder="Referral Id"
            onChange={(e) => setReferralID(e.target.value)}
            value={referral_code}
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
              <option key={pkg.id} value={pkg.id}>
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
          )}
        </button>
      )}

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
          )}
        </button>
      )}
    </form>
  );
};

export default Form;
