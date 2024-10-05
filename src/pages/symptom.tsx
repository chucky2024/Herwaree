import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import img2 from "../assets/flower2.png";

const SymptomTracker: React.FC = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [cycleChanges, setCycleChanges] = useState<string | null>(null);
  const navigate = useNavigate();

  const symptoms = [
    "Cramps",
    "Bloating",
    "Mood swings",
    "Fatigue",
    "Breast tenderness",
    "Headaches",
    "Acne",
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
      navigate("/herwaree/flowchanges");
    }
  };

  const handleNotSure = () => {
    navigate("/herwaree/flowchanges");
  };

  return (
    <div className="relative max-w-lg mx-auto bg-white p-4 overflow-x-hidden">
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

      <div className="absolute -top-12 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      <h2
        className="text-lg font-semibold text-center mt-14 mb-4"
        style={{
          background: "linear-gradient(to right, #b976c5, #b390c9)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Do you experience any symptoms before or during your period?
      </h2>

      <div className="flex flex-col space-y-4 mb-8">
        {symptoms.map((symptom) => (
          <button
            key={symptom}
            onClick={() => toggleSymptom(symptom)}
            className={`w-10/12 mx-auto py-2 px-6 rounded-full text-sm font-medium border ${
              selectedSymptoms.includes(symptom)
                ? "border-transparent"
                : "border-gray-300 text-gray-600"
            }`}
            style={{
              background: selectedSymptoms.includes(symptom)
                ? "linear-gradient(to right, #b976c5, #b390c9)"
                : "bg-gray-100",
              color: selectedSymptoms.includes(symptom) ? "white" : "gray-600",
            }}
          >
            {symptom}
          </button>
        ))}
      </div>

      <h2
        className="text-lg font-semibold text-center mb-4"
        style={{
          background: "linear-gradient(to right, #b976c5, #b390c9)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Have you noticed changes in your cycle recently?
      </h2>

      <div className="flex flex-col space-y-4">
        {cycleOptions.map((option) => (
          <button
            key={option}
            onClick={() => setCycleChanges(option)}
            className={`inline-flex items-center justify-start py-1 px-3 rounded-full text-sm font-medium border max-w-max ${
              cycleChanges === option
                ? "border-transparent"
                : "border-gray-300 text-gray-600"
            }`}
            style={{
              background:
                cycleChanges === option
                  ? "linear-gradient(to right, #b976c5, #b390c9)"
                  : "bg-gray-100",
              color: cycleChanges === option ? "white" : "gray-600",
            }}
          >
            <span className="text-left">{option}</span>
          </button>
        ))}
      </div>

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
