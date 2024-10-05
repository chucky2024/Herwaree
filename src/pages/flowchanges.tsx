import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img2 from "../assets/flower2.png";

const FlowChanges: React.FC = () => {
  const [selectedFlow, setSelectedFlow] = useState<string | null>(null);
  const [spotting, setSpotting] = useState<string | null>(null);
  const navigate = useNavigate();

  const flowOptions = ["Light", "Medium", "Heavy", "Varies", "Not sure"];
  const spottingOptions = ["Yes", "No", "Occasionally"];

  const handleNotSure = () => {
    navigate("/herwaree/birthcontrol");
  };

  const handleConfirm = () => {
    navigate("/herwaree/birthcontrol");
  };

  return (
    <div className="relative bg-white h-full max-w-md mx-auto p-4 overflow-x-hidden">
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

      {/* Decorative Flower */}
      <div className="absolute -top-12 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      {/* Flow Changes Heading */}
      <div className="relative z-10 mt-16">
        <h1
          className="text-center text-lg font-semibold mb-4"
          style={{
            background: "linear-gradient(to right, #b976c5, #b390c9)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Do you notice changes in your flow?
        </h1>

        {/* Flow Options */}
        <div className="space-y-3">
          {flowOptions.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFlow(option)}
              className={`w-full py-3 rounded-full text-sm font-medium transition ${
                selectedFlow === option
                  ? "text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              style={{
                background:
                  selectedFlow === option
                    ? "linear-gradient(to right, #b976c5, #b390c9)"
                    : undefined,
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Spotting Heading */}
      <div className="relative z-10 mt-8">
        <h2
          className="text-center text-lg font-semibold mb-4"
          style={{
            background: "linear-gradient(to right, #b976c5, #b390c9)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Do you experience any spotting between periods?
        </h2>

        {/* Spotting Options */}
        <div className="flex flex-col space-y-4">
          {spottingOptions.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSpotting(option)}
              className={`inline-flex items-center justify-start py-1 px-3 rounded-full text-sm font-medium border max-w-max ${
                spotting === option
                  ? "border-transparent text-white"
                  : "bg-gray-100 border-gray-300 text-gray-600"
              }`}
              style={{
                background:
                  spotting === option
                    ? "linear-gradient(to right, #b976c5, #b390c9)"
                    : undefined,
              }}
            >
              <span className="text-left">{option}</span>
            </button>
          ))}
        </div>
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
      <div className="relative z-10 mt-6 flex justify-between">
        <button
          onClick={handleNotSure}
          className="text-gray-500 border-gray-300 py-2 px-6 rounded-full border text-sm font-medium"
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

export default FlowChanges;
