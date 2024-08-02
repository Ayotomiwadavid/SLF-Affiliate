import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const ReferralLinkClipboard = () => {
  const { referral_code } = useAuth();
  const [tooltipMessage, setTooltipMessage] = useState("Copy link");
  const [iconState, setIconState] = useState("default-icon");
  const currentURL = window.location.origin;
  const referralLink = `${currentURL}/sign-up?referral_code=${referral_code}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setTooltipMessage("Copied!");
      setIconState("success-icon");
      setTimeout(() => {
        setTooltipMessage("Copy link");
        setIconState("default-icon");
      }, 2000);
    });
  };

  return (
    <div className="w-full max-w-sm">
      <div className="mb-2 flex justify-between items-center">
        <label
          htmlFor="url-shortener"
          className="text-sm font-medium text-gray-900 dark:text-white"
        >
          Shorten URL:
        </label>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative w-full">
          <input
            id="url-shortener"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-500 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={referralLink}
            readOnly
            disabled
          />
        </div>
        <button
          onClick={copyToClipboard}
          className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 hover:text-gray-900 bg-purple-600 border border-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
          type="button"
        >
          <span id={iconState}>
            {iconState === "default-icon" ? (
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            )}
          </span>
        </button>
        <div
          id="tooltip-url-shortener"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          <span id="tooltip-message">{tooltipMessage}</span>
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <p
        id="helper-text-explanation"
        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        Make sure that your URL is valid
      </p>
    </div>
  );
};

export default ReferralLinkClipboard;
