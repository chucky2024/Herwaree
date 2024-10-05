import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/flower.png";
import img2 from "../assets/flower2.png";
import logo from "../assets/wom3.png";

const Further: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/herwaree/check");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen relative bg-white overflow-hidden">
      <div className="absolute -top-11 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      <div className="absolute -top-11 -left-10 w-28 h-28">
        <img src={img1} alt="flower" className="object-contain" />
      </div>

      <div className="text-center z-10 w-full px-8">
        <img
          src={logo}
          alt="Herwaree Logo"
          className="inline-block w-60 h-auto rounded-xl mb-8"
        />

        {/* Gradient header text */}
        <h1
          className="text-2xl font-bold mb-8"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          <span className="block">Take results from our quiz</span>
          <span className="block">to have a chat with your</span>
          <span className="block">doctor and get further</span>
          <span className="block">instructions.</span>
        </h1>

        {/* Gradient button */}
        <button
          onClick={handleGetStarted}
          className="px-11 py-2 -mb-11 max-w-xs w-full text-white rounded-full text-lg absolute bottom-20 left-1/2 transform -translate-x-1/2 focus:outline-none"
          style={{
            background: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        >
          Gotcha!, Let's get going
        </button>
      </div>
    </div>
  );
};

export default Further;
