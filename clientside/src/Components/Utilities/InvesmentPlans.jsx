import React, { useState } from "react";
import { ConfirmPlanChange, useConfirmPlanChange } from "./ConfirmPlanChange";
import { useAuth } from "../../context/AuthContext";

const InvestmentPlans = () => {
  const { userPackage, packageList } = useAuth();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const plans = [
  //   { title: "Silver Plan", details: "Details about Plan A." },
  //   { title: "Bronze Plan", details: "Details about Plan B." },
  //   { title: "Copper Plan", details: "Details about Plan C." },
  //   { title: "Premium Plan", details: "Details about Plan D." },
  // ];

  const { isOpen, openModal, closeModal, handleConfirm } = useConfirmPlanChange(
    () => {
      console.log("Confirmed!");
      // Add your custom confirmation logic here
    }
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-left mb-8">
        Our Investment Plans
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {packageList.map((plan, index) => (
          <div
            className={`plan bg-white border p-6 rounded-lg shadow-md `}
            key={index}
          >
            <h2 className={`text-xl font-semibold mb-4`}>{plan.name}</h2>
            <h2 className={`text-4xl font-semibold mb-4`}>{plan.price}</h2>
            <p className={`text-gray-700 mb-4`}>{plan.description}</p>

            <button
              onClick={openModal}
              className="bg-purple-900 text-white px-4 py-2 rounded"
            >
              Choose plan
            </button>
            {/* <div className="flex justify-center m-5">
              <button
                onClick={openModal}
                className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="button"
              >
                Show delete confirmation
              </button>
            </div> */}
          </div>
        ))}
      </div>
      <ConfirmPlanChange
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default InvestmentPlans;


// let packageList = [
//   {
//     id: 1,
//     description: "Level 1",
//     level: "LEVEL1",
//     name: "Level 1",
//     price: "1000.00",
//   },
//   {
//     id: 2,
//     description: "Level 2",
//     level: "LEVEL2",
//     name: "Level 2",
//     price: "2000.00",
//   },
//   {
//     id: 3,
//     description: "Level 3",
//     level: "LEVEL3",
//     name: "Level 3",
//     price: "3000.00",
//   },
//   {
//     id: 4,
//     description: "Premium",
//     level: "PREMIUM",
//     name: "Premium",
//     price: "5000.00",
//   },
// ];
