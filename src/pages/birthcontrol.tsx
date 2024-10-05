import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaChevronLeft } from "react-icons/fa";
import img2 from "../assets/flower2.png";

const SymptomTracker: React.FC = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [cycleChanges, setCycleChanges] = useState<string | null>(null);
  const navigate = useNavigate();

  const symptoms = [
    "Stress",
    "Diet",
    "Exercise",
    "Weight Changes",
    "Illness",
    "Travel",
    "None",
    "Others (please specify)",
  ];

  const cycleOptions = ["Yes", "No", "Not sure", "Skip for now"];

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prevSymptoms) =>
      prevSymptoms.includes(symptom)
        ? prevSymptoms.filter((item) => item !== symptom)
        : [...prevSymptoms, symptom]
    );
  };

  const handleConfirm = () => {
    if (selectedSymptoms.length > 0 || cycleChanges) {
      navigate("/herwaree/WeightHeight");
    }
  };

  const handleNotSure = () => {
    navigate("/herwaree/WeightHeight");
  };

  return (
    <div className="relative max-w-lg mx-auto bg-white p-4 overflow-x-hidden">
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
      <div className="absolute -top-8 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      {/* Lifestyle Factors Heading */}
      <h2
        className="text-lg font-semibold text-center mt-20 mb-6"
        style={{
          background: "linear-gradient(to right, #b976c5, #b390c9)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Any Lifestyle factors influencing your cycle?
      </h2>

      {/* Symptoms Buttons */}
      <div className="flex flex-col space-y-4 mb-8">
        {symptoms.map((symptom) => (
          <button
            key={symptom}
            onClick={() => toggleSymptom(symptom)}
            className={`w-10/12 mx-auto py-2 px-6 rounded-full text-sm font-medium border ${
              selectedSymptoms.includes(symptom)
                ? "text-white"
                : "bg-gray-100 border-gray-300 text-gray-600"
            }`}
            style={{
              background: selectedSymptoms.includes(symptom)
                ? "linear-gradient(to right, #b976c5, #b390c9)"
                : undefined,
            }}
          >
            {symptom}
          </button>
        ))}
      </div>

      {/* Birth Control Heading */}
      <h2
        className="text-lg font-semibold text-center mb-4"
        style={{
          background: "linear-gradient(to right, #b976c5, #b390c9)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Are you on any form of birth control or medication?
      </h2>

      {/* Cycle Options */}
      <div className="flex flex-col space-y-4">
        {cycleOptions.map((option) => (
          <button
            key={option}
            onClick={() => setCycleChanges(option)}
            className={`inline-flex items-center justify-start py-1 px-3 rounded-full text-sm font-medium border max-w-max ${
              cycleChanges === option
                ? "text-white border-transparent"
                : "bg-gray-100 border-gray-300 text-gray-600"
            }`}
            style={{
              background:
                cycleChanges === option
                  ? "linear-gradient(to right, #b976c5, #b390c9)"
                  : undefined,
            }}
          >
            <span className="text-left">{option}</span>
          </button>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 my-6">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className={`w-8 h-1 rounded-full ${
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

export default SymptomTracker;
