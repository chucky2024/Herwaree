import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img2 from "../assets/flower2.png";

const Symptomor: React.FC = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const navigate = useNavigate();

  const symptomCategories = [
    {
      heading: "Breast Symptoms",
      symptoms: [
        "Lumps or thickening",
        "Changes in size or shape",
        "Persistent pain in one area",
      ],
    },
    {
      heading: "Skin Changes",
      symptoms: ["Dimpling", "Redness", "Puckering"],
    },
    {
      heading: "Nipple Changes",
      symptoms: ["Inversion", "position", "Discharge"],
    },
    {
      heading: "Texture Changes",
      symptoms: ["Scaly", "Itchy", "Orange peel Texture"],
    },
    {
      heading: "Swelling",
      symptoms: ["Breast", "Collarbone area", "Underarm"],
    },
    {
      heading: "Nipple Discharge",
      symptoms: ["Clear", "Bloody", "Pus-like"],
    },
  ];

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prevSymptoms) =>
      prevSymptoms.includes(symptom)
        ? prevSymptoms.filter((item) => item !== symptom)
        : [...prevSymptoms, symptom]
    );
  };

  const handleApply = () => {
    navigate("/herwaree/check");
  };

  return (
    <div className="relative max-w-lg mx-auto bg-white p-4 overflow-x-hidden">
      <div className="absolute top-4 left-4">
        <FaChevronLeft
          className="text-2xl cursor-pointer"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        />
      </div>

      <div className="absolute -top-12 -right-8 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      <h2
        className="text-xl font-semibold text-center mt-12 mb-4"
        style={{
          backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Track Your Symptoms
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {symptomCategories.map((category, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3
              className="text-lg font-semibold mb-2"
              style={{
                backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {category.heading}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.symptoms.map((symptom) => (
                <button
                  key={symptom}
                  onClick={() => toggleSymptom(symptom)}
                  className={`py-1 px-3 rounded-full text-sm font-medium border ${
                    selectedSymptoms.includes(symptom)
                      ? "border-purple-500 text-purple-600"
                      : "bg-gray-200 border-gray-300 text-gray-600"
                  }`}
                  style={
                    selectedSymptoms.includes(symptom)
                      ? {
                          background: "rgba(255, 255, 255, 0.2)", // Transparent glass effect
                          backdropFilter: "blur(5px)", // Frosted glass effect
                          borderColor: "#b390c9",
                          color: "#b390c9",
                        }
                      : {}
                  }
                >
                  {symptom}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-2 my-6">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className={`w-6 h-1 rounded-full ${
              idx === 3 ? "bg-purple-500" : "bg-gray-300"
            }`}
            style={{
              background:
                idx === 3
                  ? "linear-gradient(to right, #b976c5, #b390c9)"
                  : undefined,
            }}
          ></div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleApply}
          className="h-10 w-full rounded-full text-sm font-medium text-white hover:bg-purple-600"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Symptomor;
