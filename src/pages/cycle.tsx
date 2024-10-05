import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaChevronLeft } from "react-icons/fa";
import img2 from "../assets/flower.png";

const Cycle = () => {
  const [selectedDuration, setSelectedDuration] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleConfirm = () => {
    if (selectedDuration) {
      navigate("/herwaree/cycletracker");
    }
  };

  const handleNotSure = () => {
    navigate("/herwaree/cycletracker");
  };

  return (
    <div className="min-h-screen flex-col items-center justify-center bg-white">
      {/* Main Container */}

      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md relative overflow-hidden">
        <div className="flex justify-between items-center mb-14">
          <div className="absolute top-4 left-4">
            <div
              className="p-2 rounded-full"
              style={{
                background: "linear-gradient(to right, #b976c5, #b390c9)",
              }}
              onClick={() => navigate(-1)}
            >
              <FaChevronLeft className="text-2xl text-white cursor-pointer" />
            </div>
          </div>

          {/* Decorative Flower */}
          <div className="absolute -top-16 -right-10 w-28 h-28">
            <img src={img2} alt="flower" className="object-contain" />
          </div>
        </div>

        {/* Question 1 */}
        <h2
          className="text-xl font-semibold"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          When was your last menstrual cycle?{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            (The first day)
          </span>
        </h2>
        <input
          type="text"
          placeholder="DD/MM"
          className="mt-4 w-full px-4 py-2 border rounded-full border-gray-300 text-center text-lg"
        />

        <div className="mt-8" />

        {/* Question 2 */}
        <h2
          className="text-xl font-semibold"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          How long does your period usually last?
        </h2>

        {/* Options */}
        <div className="mt-4 space-y-2">
          {["1-3 days", "4-6 days", "7-9 days", "10+ days", "Varies"].map(
            (option) => (
              <button
                key={option}
                onClick={() => setSelectedDuration(option)}
                className={`w-full py-2 rounded-full text-center ${
                  selectedDuration === option
                    ? "bg-gray-300 text-black"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {option}
              </button>
            )
          )}
        </div>

        <div className="mt-8" />

        {/* Pagination */}
        <div className="flex items-center justify-center mt-6 space-x-2">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`h-1 w-6 rounded-full ${
                index === 2
                  ? "bg-gradient-to-r from-purple-500 to-purple-300"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="mt-8" />

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleNotSure}
            className="px-6 py-2 text-gray-500 bg-gray-100 rounded-full"
          >
            Not Sure
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-2 text-white rounded-full"
            style={{
              backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cycle;
