import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/flower.png";
import img2 from "../assets/flower2.png";
import logo from "../assets/Fold.jpg";
import { FaVideo } from "react-icons/fa";
import Navigation from "../components/navigation";

const Check: React.FC = () => {
  const navigate = useNavigate();

  const handleViewSymptoms = () => {
    navigate("/herwaree/symptomor");
  };

  const handleScreeningExercise = () => {
    navigate("/herwaree/Walkthrough");
  };

  const handleGetDoctorsGuide = () => {
    navigate("/herwaree/doctor-guide");
  };

  const handleMyCalendar = () => {
    navigate("/herwaree/calendar");
  };

  const handleVideoClick = () => {
    navigate("/herwaree/video");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative bg-white overflow-x-hidden pb-16">
      {/* Top Decorative Elements */}
      <div className="absolute -top-11 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      <div className="absolute -top-11 -left-10 w-28 h-28">
        <img src={img1} alt="flower" className="object-contain" />
      </div>

      {/* Main Content */}
      <div className="text-center z-10 w-full px-8 mb-6 mt-8">
        {/* Gradient header text */}
        <h1
          className="text-2xl font-bold"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          SYMPTOMS
        </h1>
        <p className="text-gray-700 text-xl font-normal mt-1">
          Check, Track, Manage
        </p>
      </div>

      <div className="relative w-full flex justify-center">
        <img
          src={logo}
          alt="Woman Breast Health"
          className="inline-block mt-14 w-60 h-auto rounded-xl mb-8"
        />
        <button
          onClick={handleVideoClick}
          className="absolute top-12 right-7 flex items-center space-x-5 px-4 py-2 bg-opacity-50 backdrop-blur-sm border border-white/30 text-white rounded-full shadow-md focus:outline-none"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        >
          <FaVideo className="mr-1" />
          <span>Video</span>
        </button>
      </div>

      {/* Buttons with gradient background */}
      <div className="space-y-4 w-full flex flex-col items-center">
        <button
          onClick={handleViewSymptoms}
          className="w-10/12 mx-auto py-2 px-6 rounded-full text-sm font-medium border text-white focus:outline-none"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        >
          View / Report Symptoms
        </button>

        <button
          onClick={handleScreeningExercise}
          className="w-10/12 mx-auto py-2 px-6 rounded-full text-sm font-medium border text-white focus:outline-none"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        >
          Screening Exercise
        </button>

        <button
          onClick={handleGetDoctorsGuide}
          className="w-10/12 mx-auto py-2 px-6 rounded-full text-sm font-medium border text-white focus:outline-none"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        >
          Get Doctor's Guide
        </button>

        <button
          onClick={handleMyCalendar}
          className="w-10/12 mx-auto py-2 px-6 rounded-full text-sm font-medium border text-white focus:outline-none"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
        >
          Calendar
        </button>
      </div>

      {/* Navigation Component */}
      <Navigation />
    </div>
  );
};

export default Check;
