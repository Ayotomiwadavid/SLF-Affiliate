import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfirmPlanChange, useConfirmPlanChange } from "./ConfirmPlanChange";
import { useAuth } from "../../context/AuthContext";

const InvestmentPlans = () => {
  const navigate = useNavigate();
  const { userPackage, packageList } = useAuth();
  const [selectedPackageId, setSelectedPackageId] = useState(null);

  const handleConfirm = () => {
    navigate(`/deposit?packagePrice=${selectedPackageId}`);
  };

  const { isOpen, openModal, closeModal } = useConfirmPlanChange(
    () => {
      console.log("Confirmed!");
      // Add your custom confirmation logic here
    }
  );

  const handleOpenModal = (packageId) => {
    setSelectedPackageId(packageId);
    openModal();
  };

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
              onClick={() => handleOpenModal(plan.price)}
              className="bg-purple-900 text-white px-4 py-2 rounded"
            >
              Choose plan
            </button>
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
