import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/flower.png";
import img2 from "../assets/flower2.png";
import logo from "../assets/logo.jpg";

const Front: React.FC = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/herwaree/signUp");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen relative bg-white overflow-hidden">
      <div className="absolute -top-11 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      <div className="absolute -top-11 -left-10 w-28 h-28">
        <img src={img1} alt="flower" className="object-contain" />
      </div>

      {/* Main Content */}
      <div className="text-center z-10 w-full">
        <img
          src={logo}
          alt="Herwaree Logo"
          className="inline-block w-32 h-auto rounded-lg"
        />
        <p className="text-purple-500 text-lg mb-10"></p>

        {/* Welcome Text with Gradient */}
        <h1
          className="text-2xl font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        >
          WELCOME TO HERWAREE!
        </h1>

        {/* Get Started Button with Gradient */}
        <button
          onClick={handleGetStarted}
          className="px-11 py-2 max-w-xs w-full text-white rounded-full text-lg absolute bottom-20 left-1/2 transform -translate-x-1/2 focus:outline-none"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        >
          Get Started
        </button>

        <a
          href="herwaree/login"
          className="text-purple-400 text-base mt-3 block absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          Log in and restore data
        </a>
      </div>
    </div>
  );
};

export default Front;
