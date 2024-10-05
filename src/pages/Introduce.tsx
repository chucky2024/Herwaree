import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineEllipsis } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";

const Introduce: React.FC = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (name.trim() !== "") {
      navigate("/herwaree/yay", { state: { name } });
    } else {
      alert("Please enter your name");
    }
  };

  const handleSkip = () => {
    navigate("/herwaree/default");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 p-8 relative">
      {/* Chevron Left Button with Gradient */}
      <div className="absolute top-4 left-4">
        <div
          className="p-2 rounded-full"
          style={{
            background: "linear-gradient(to right, #b976c5, #b390c9)",
          }}
          onClick={() => navigate(-1)} // Navigate back
        >
          <FaChevronLeft className="text-2xl text-white cursor-pointer" />
        </div>
      </div>

      {/* Content Area  */}
      <div className="flex flex-col items-center flex-grow justify-center">
        <h1
          className="text-xl font-bold mb-2 text-center text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          Hello beautiful, I’m Herwaree and you are?
        </h1>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full max-w-md text-center mt-4"
        />
      </div>

      {/* Navigation Dots and Buttons at the Bottom */}
      <div className="flex flex-col items-center">
        <AiOutlineEllipsis className="text-3xl text-gray-400 mb-4" />{" "}
        {/* Navigation Dots */}
        <div className="flex justify-between w-full max-w-md">
          <button
            onClick={handleSkip} // Add skip navigation
            className="text-transparent hover:underline"
            style={{
              backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Skip
          </button>

          {/* Confirm Button with Gradient */}
          <button
            className="px-4 py-2 rounded-lg text-white"
            style={{
              backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
            }}
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
