import React from "react";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import Breadcrumb from "../../Components/Navigation/BreadCrumb";
import ReferralLinkClipboard from "../../Components/Utilities/ReferralClipboard";
import ReferredUsersTable from "../../Components/Utilities/ReferredUsers";

const referrals = [
  { name: "John Doe", referralCode: "ABC123", date: "2024-07-20" },
  { name: "Jane Smith", referralCode: "XYZ456", date: "2024-07-19" },
  { name: "Michael Johnson", referralCode: "DEF789", date: "2024-07-18" },
  { name: "Emily Davis", referralCode: "GHI012", date: "2024-07-17" },
];

const Referrals = () => {
  return (
    <>
      <DashboardLayout />

      <div className="sm:ml-64 mt-16">
        <div className="p-4">
          <Breadcrumb />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="m-4">
            <h1 className="text-4xl font-bold text-left">Referrals</h1>
            <p className="text-gray-400 text-md">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="mt-8">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                necessitatibus nostrum, architecto asperiores aspernatur maxime
                voluptatem dicta vitae quas totam?
              </p>
            </div>

            <ReferralLinkClipboard />
          </div>

          <div className="px-4">
            <ReferredUsersTable />
          </div>
        </div>

        {/* <div className="">
                    {referrals.map((referral, index) => (
                        <div className="bg-white p-6 rounded-lg shadow-md" key={index}>
                            <h2 className="text-xl font-semibold mb-4">{referral.name}</h2>
                            <p className="text-gray-700 mb-2">Referral Code: {referral.referralCode}</p>
                            <p className="text-gray-500 mb-4">Date: {referral.date}</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
                        </div>
                    ))}
                </div> */}
      </div>
    </>
  );
};

export default Referrals;
