import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaChevronLeft } from "react-icons/fa";
import img2 from "../assets/flower2.png";

const CycleTracker: React.FC = () => {
  const [selectedCycle, setSelectedCycle] = useState<string | null>(null);
  const [selectedLength, setSelectedLength] = useState<string | null>(null);
  const navigate = useNavigate();

  const cycleOptions = [
    "Very Regular (same time each month)",
    "Somewhat Regular (few days difference)",
    "Regular (varies by weeks or more)",
    "Not Sure",
  ];

  const lengthOptions = [
    "21–24 days",
    "25–28 days",
    "29–32 days",
    "33–35 days",
    "Varies",
    "Not Sure",
  ];

  const handleConfirm = () => {
    if (selectedCycle && selectedLength) {
      navigate("/herwaree/symptom"); // Navigate to the next page if an option is selected
    }
  };

  const handleNotSure = () => {
    navigate("/herwaree/symptom"); // Navigate to the not sure page
  };

  return (
    <div className="relative max-w-lg mx-auto bg-white p-4 overflow-x-hidden">
      {/* Back button */}
      <div className="absolute top-4 left-4">
        <div
          className="p-2 rounded-full cursor-pointer"
          style={{
            background: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
          onClick={() => navigate(-1)} // Navigate back
        >
          <FaChevronLeft className="text-2xl text-white cursor-pointer" />
        </div>
      </div>

      {/* Flower Decoration */}
      <div className="absolute -top-12 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      {/* Question 1 */}
      <h2
        className="text-lg font-semibold text-center mt-12 mb-4"
        style={{
          background: "linear-gradient(to right, #b976c5, #b390c9)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        How regular are your cycles?
      </h2>
      <div className="flex flex-col space-y-4 mb-8">
        {cycleOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedCycle(option)}
            className={`w-full py-2 px-6 rounded-full text-sm font-medium border ${
              selectedCycle === option
                ? "border-transparent"
                : "border-gray-300 text-gray-600"
            }`}
            style={{
              background:
                selectedCycle === option
                  ? "linear-gradient(to right, #b976c5, #b390c9)"
                  : "bg-gray-100",
              color: selectedCycle === option ? "white" : "gray-600",
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Question 2 */}
      <h2
        className="text-lg font-semibold text-center mb-4"
        style={{
          background: "linear-gradient(to right, #b976c5, #b390c9)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        How long is your average menstrual cycle?
      </h2>
      <div className="flex flex-col space-y-4">
        {lengthOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedLength(option)}
            className={`w-full py-2 px-6 rounded-full text-sm font-medium border ${
              selectedLength === option
                ? "border-transparent"
                : "border-gray-300 text-gray-600"
            }`}
            style={{
              background:
                selectedLength === option
                  ? "linear-gradient(to right, #b976c5, #b390c9)"
                  : "bg-gray-100",
              color: selectedLength === option ? "white" : "gray-600",
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 my-6">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className={`w-6 h-1 rounded-full ${
              idx === 3
                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handleNotSure}
          className="py-2 px-6 rounded-full text-sm font-medium border border-gray-300 text-gray-500"
        >
          Not Sure
        </button>
        <button
          onClick={handleConfirm}
          className="py-2 px-6 rounded-full text-sm font-medium text-white"
          style={{
            background: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CycleTracker;
