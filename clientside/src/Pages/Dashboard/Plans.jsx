import React from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import InvestmentPlans from "../../Components/Utilities/InvesmentPlans";
import Footer from "../../Components/Navigation/Footer";
import Breadcrumb from "../../Components/Navigation/BreadCrumb";
import TransactionButtonGroup from "../../Components/Utilities/TransactionButtonGroup";
import { useAuth } from "../../context/AuthContext";

const Plans = () => {
  const { userPackage } = useAuth();

  return (
    <div>
      <DashboardLayout />
      <div className="sm:ml-64 mt-16">
        <div className="p-4">
          <Breadcrumb />
        </div>
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-pink-800 mx-4 rounded-lg p-4 py-10">
          <h1 className="sm:text-8xl text-4xl text-white text-center">Plans</h1>
        </div>
        <div className="my-8 grid grid-cols-1 md:grid-cols-2">
          <InvestmentPlans />
          <div className="col md:shadow p-4  h-auto flex items-center">
            <div className="box md:p-8 bg-white  md:border md:my-8  h-auto flex items-center">
              <div className="col-span-2 h-78 md:h-74 pb-10 flex justify-start items-center p-5 py-8 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600">
                <div className="">
                  <div className="date font-semibold text-xs pt-4 sm:text-sm">
                    {" "}
                    <span className="text-gray-300">Current Plan</span>
                  </div>
                  <h1 className="text-4xl md:text-9xl text-white font-medium">
                    {userPackage ? (
                      <>{userPackage.package_name}</>
                    ) : (
                      <>No LEVEL</>
                    )}
                  </h1>
                  {/* <p className="text-gray-100 font-bold text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                  </p> */}

                  <div className="mt-8">
                    <TransactionButtonGroup />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Plans;
