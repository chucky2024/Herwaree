import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/flower.png";
import img2 from "../assets/flower2.png";
import logo from "../assets/wom2.png";

const BreastFront: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/herwaree/BreastMonitor");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen relative bg-white overflow-hidden">
      <div className="absolute -top-11 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>
      <div className="absolute -top-11 -left-10 w-28 h-28">
        <img src={img1} alt="flower" className="object-contain" />
      </div>
      <div className="text-center z-10 w-full">
        <img
          src={logo}
          alt="Herwaree Logo"
          className="inline-block w-52 h-auto rounded-lg"
        />
        {/* Gradient text */}
        <h1
          className="text-2xl font-bold mb-10"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Welcome to Breast Health Monitoring
        </h1>

        {/* Gradient button */}
        <button
          onClick={handleGetStarted}
          className="px-11 py-2 max-w-xs w-full text-white rounded-full text-lg absolute bottom-20 left-1/2 transform -translate-x-1/2 focus:outline-none"
          style={{
            background: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        >
          Enter, Boss
        </button>
      </div>

      {/* Rounded background elements */}
      <div
        className="absolute -right-12 w-20 h-20 rounded-full"
        style={{
          background: "linear-gradient(to right, #b976c5, #b390c9)",
        }}
      ></div>
    </div>
  );
};

export default BreastFront;
