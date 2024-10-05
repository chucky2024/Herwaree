import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WeightHeight: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/herwaree/calendar");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 p-8 relative">
      {/* Back Button */}
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

      {/* Personal Details Heading */}
      <div className="flex flex-col items-center mt-20">
        <h1
          className="text-xl font-bold mb-6 text-center"
          style={{
            background: "linear-gradient(to right, #b976c5, #b390c9)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Personal details
        </h1>

        {/* Weight Input */}
        <div className="mb-4 w-full max-w-md">
          <label
            className="block text-lg font-bold mb-2"
            htmlFor="weight"
            style={{
              background: "linear-gradient(to right, #b976c5, #b390c9)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Weight (kg)
          </label>
          <input
            id="weight"
            type="text"
            placeholder="kg"
            className="border rounded-lg px-3 py-2 w-full text-center"
          />
        </div>

        {/* Height Input */}
        <div className="mb-4 w-full max-w-md">
          <label
            className="block text-lg font-bold mb-2"
            htmlFor="height"
            style={{
              background: "linear-gradient(to right, #b976c5, #b390c9)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Height (Inches)
          </label>
          <input
            id="height"
            type="text"
            placeholder="Inches"
            className="border rounded-lg px-3 py-2 w-full text-center"
          />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center space-x-4 mt-20">
        <span className="h-1 w-6 bg-gray-300 rounded-full"></span>
        <span className="h-1 w-6 bg-gray-300 rounded-full"></span>
        <span
          className="h-1 w-6 rounded-full"
          style={{
            background: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        ></span>
        <span className="h-1 w-6 bg-gray-300 rounded-full"></span>
        <span className="h-1 w-6 bg-gray-300 rounded-full"></span>
      </div>

      {/* Continue Button */}
      <button
        className="text-white px-4 py-2 rounded-lg w-full max-w-md"
        onClick={handleContinue}
        style={{
          background: "linear-gradient(to right, #b976c5, #b390c9)",
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default WeightHeight;
