import React from "react";
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/flower.png"; 
import img2 from "../assets/flower2.png"; 
import logo from "../assets/Fold.jpg"; 
import { FaVideo, FaHome, FaHistory, FaCog, FaPalette, FaEllipsisH } from 'react-icons/fa'; 

const ScreeningExercise: React.FC = () => {
  const navigate = useNavigate();

  const handleViewSymptoms = () => {
    navigate("/herwaree/report-symptoms"); 
  };

  const handleScreeningExercise = () => {
    navigate("/herwaree/ScreeningExercise"); 
  };

  const handleGetDoctorsGuide = () => {
    navigate("/herwaree/doctor-guide"); 
  };

  const handleVideoClick = () => {
    navigate("/herwaree/video"); 
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen relative bg-white overflow-hidden">
      <img
        src={img1}
        alt="Flower Top Left"
        className="absolute -inset-y-6 -left-8 w-32 h-32 transform scale-110 drop-shadow-lg"
      />
      <img
        src={img2}
        alt="Flower Top Right"
        className="absolute -inset-y-6 -right-8 w-32 h-32 transform scale-110 drop-shadow-lg"
      />

    
      <div className="text-center z-10 w-full px-8 mb-4">
        <h1 className="text-purple-500 text-2xl font-bold">
          SYMPTOMS
        </h1>
        <p className="text-gray-700 text-xl font-normal mt-1">
          Check, Track, Manage
        </p>
      </div>

      <div className="relative w-full flex justify-center">
        <img src={logo} alt="Woman Breast Health" className="inline-block mt-14 w-60 h-auto rounded-xl mb-8" />
        <button
          onClick={handleVideoClick}
          className="absolute top-0 right-7 flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-full shadow-md focus:outline-none">
          <FaVideo className="mr-1" /> 
          <span>Video</span>
        </button>
      </div>

      <div className="space-y-4 w-full flex flex-col items-center">
        <button 
          onClick={handleViewSymptoms} 
          className="w-11/12 md:w-3/4 px-6 py-3 bg-purple-500 text-white rounded-full text-lg focus:outline-none">
          View / Report Symptoms
        </button>

        <button 
          onClick={handleScreeningExercise} 
          className="w-11/12 md:w-3/4 px-6 py-3 bg-purple-500 text-white rounded-full text-lg focus:outline-none">
          Screening Exercise
        </button>

        <button 
          onClick={handleGetDoctorsGuide} 
          className="w-11/12 md:w-3/4 px-6 py-3 bg-purple-500 text-white rounded-full text-lg focus:outline-none">
          Get Doctor's Guide
        </button>
      </div>

      <>
        <div className="absolute bottom-5 left-4 w-24 h-24 bg-purple-300 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute -right-11 w-24 h-24 bg-purple-300 rounded-full"></div>
      </>

      <footer className="absolute bottom-0 w-full py-1 bg-white border-t border-gray-200 flex justify-around items-center">
        <button className="text-purple-500 text-3xl shadow-lg p-2 rounded-full bg-white">
          <FaHome />
        </button>
        <button className="text-purple-500 text-3xl shadow-lg p-2 rounded-full bg-white">
          <FaHistory />
        </button>
        <button className="text-purple-500 text-3xl shadow-lg p-2 rounded-full bg-white">
          <FaCog />
        </button>
        <button className="text-purple-500 text-3xl shadow-lg p-2 rounded-full bg-white">
          <FaPalette />
        </button>
        <button className="text-purple-500 text-3xl shadow-lg p-2 rounded-full bg-white">
          <FaEllipsisH />
        </button>
      </footer>
    </div>
  );
};

export default ScreeningExercise;