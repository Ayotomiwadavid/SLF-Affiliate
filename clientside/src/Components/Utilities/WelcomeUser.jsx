import React, { useEffect, useState } from "react";
import TransactionButtonGroup from "./TransactionButtonGroup";
import { useAuth } from "../../context/AuthContext";

const WelcomeUser = () => {
  const { userPackage } = useAuth();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getCurrentTime = () => {
      const now = new Date();
      const currentHour = now.getHours();

      if (currentHour >= 0 && currentHour < 12) {
        setGreeting("Good Morning");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }
    };

    getCurrentTime();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-2 mt-4">
      <div className="col-span-2 h-78 md:h-74 pb-10 flex justify-start items-center p-5 py-8 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600">
        <div className="">
          <div className="date font-semibold text-xs pt-4 sm:text-sm">
            {" "}
            <span className="text-gray-300">Current Plan</span>
          </div>
          <h1 className="text-4xl md:text-9xl text-white font-medium">
            {userPackage ? <>{userPackage.package_name}</> : <>No LEVEL</>}
          </h1>
          {/* <p className="text-gray-100 font-bold text-sm">
            Lorem ipsum dolor sit amet consectetur.
          </p> */}

          <div className="mt-8">
            <TransactionButtonGroup />
          </div>
        </div>

        {/* <div className="md:block hidden img">
                    <img src="@/assets/img/hero-2.png" className="w-full object-fit -mt-0" alt="" />
                </div> */}
      </div>

      {/* <div className="hidden md:block col bg-white shadow-lg rounded-2xl border">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-lg font-semibold">Stats</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <circle cx="8" cy="2.5" r=".75" />
              <circle cx="8" cy="8" r=".75" />
              <circle cx="8" cy="13.5" r=".75" />
            </g>
          </svg>
            <h1 className="text-md">Stats</h1>
        </div>
        <div className="flex flex-col items-center p-5">
          <div className=" bg-purple-200 rounded-full border border-4 border-purple-600 flex items-center justify-center mb-3">
            <img
              className="w-30 h-30 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="avatar"
            />
          </div>
          <p className="text-xl text-gray-900 font-medium">
            {greeting}, Johhny
          </p>
          <p className="text-gray-300 text-md">
            Lorem ipsum dolor sit, amet consectetu.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default WelcomeUser;
