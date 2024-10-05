import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import img2 from "../assets/flower2.png";

const NoticedSymptoms: React.FC = () => {
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);

  const selectSymptom = (symptom: string) => {
    setSelectedSymptom(symptom);
  };

  return (
    <div className="flex flex-col justify-between min-h-screen px-4 py-6 bg-white relative overflow-x-hidden">
      <header className="relative mb-6">
        <div className="flex items-center">
          <button className="text-purple-700">
            <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
          </button>
        </div>

        <div className="mt-4">
          <h1 className="text-lg font-medium text-left">
            Which of these symptoms have you noticed?
          </h1>
        </div>

        <div className="absolute -top-16 -right-16 w-28 h-28">
          <img src={img2} alt="flower" className="object-contain" />
        </div>
      </header>

      <section className="space-y-6">
        <div className="flex flex-wrap gap-3">
          {[
            "Lumps or thickening",
            "Changes in size or shape",
            "Persistent pain in one area",
            "Unusual warmth in the breast",
            "Changes in vein prominence or pattern",
          ].map((symptom) => (
            <button
              key={symptom}
              onClick={() => selectSymptom(symptom)}
              className={`py-2 px-4 rounded-full text-sm font-medium ${
                selectedSymptom === symptom
                  ? "bg-purple-400 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {symptom}
            </button>
          ))}
        </div>

        <hr className="border-t border-purple-400 my-4" />

        <div>
          <div className="text-sm text-gray-500 font-medium mb-2">
            Skin Changes
          </div>
          <div className="flex flex-wrap gap-3">
            {["Dimpling", "Redness", "Puckering", "Rash"].map((symptom) => (
              <button
                key={symptom}
                onClick={() => selectSymptom(symptom)}
                className={`py-2 px-4 rounded-full text-sm font-medium ${
                  selectedSymptom === symptom
                    ? "bg-purple-400 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {symptom}
              </button>
            ))}
          </div>
        </div>

        <hr className="border-t border-purple-400 my-4" />

        <div>
          <div className="text-sm text-gray-500 font-medium mb-2">
            Nipple Changes
          </div>
          <div className="flex flex-wrap gap-3">
            {["Inversion", "Position", "Discharge"].map((symptom) => (
              <button
                key={symptom}
                onClick={() => selectSymptom(symptom)}
                className={`py-2 px-4 rounded-full text-sm font-medium ${
                  selectedSymptom === symptom
                    ? "bg-purple-400 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {symptom}
              </button>
            ))}
          </div>
        </div>

        <hr className="border-t border-purple-400 my-4" />

        <div>
          <div className="text-sm text-gray-500 font-medium mb-2">
            Texture Changes
          </div>
          <div className="flex flex-wrap gap-3">
            {["Scaly", "Orange peel texture", "Itchy"].map((symptom) => (
              <button
                key={symptom}
                onClick={() => selectSymptom(symptom)}
                className={`py-2 px-4 rounded-full text-sm font-medium ${
                  selectedSymptom === symptom
                    ? "bg-purple-400 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {symptom}
              </button>
            ))}
          </div>
        </div>

        <hr className="border-t border-purple-400 my-4" />

        <div>
          <div className="text-sm text-gray-500 font-medium mb-2">Swelling</div>
          <div className="flex flex-wrap gap-3">
            {["Breast", "Collarbone area", "Underarm"].map((symptom) => (
              <button
                key={symptom}
                onClick={() => selectSymptom(symptom)}
                className={`py-2 px-4 rounded-full text-sm font-medium ${
                  selectedSymptom === symptom
                    ? "bg-purple-400 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {symptom}
              </button>
            ))}
          </div>
        </div>

        <hr className="border-t border-purple-400 my-4" />
        <div>
          <div className="text-sm text-gray-500 font-medium mb-2">
            Nipple Discharge
          </div>
          <div className="flex flex-wrap gap-3">
            {["Clear", "Bloody", "Pus-like"].map((symptom) => (
              <button
                key={symptom}
                onClick={() => selectSymptom(symptom)}
                className={`py-2 px-4 rounded-full text-sm font-medium ${
                  selectedSymptom === symptom
                    ? "bg-purple-400 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {symptom}
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-6">
        <button className="bg-gray-200 text-gray-500 py-2 px-8 rounded-full w-full">
          Apply
        </button>
      </footer>
    </div>
  );
};

export default NoticedSymptoms;
