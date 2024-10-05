import React from 'react';
import { FaChevronLeft } from 'react-icons/fa'; // Importing a back icon
import { AiOutlineEllipsis } from 'react-icons/ai'; // Importing dots for navigation

const WeightHeight: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 p-8 relative">
      {/* Back Icon at the Top Left */}
      <div className="absolute top-4 py-10 left-4">
        <FaChevronLeft className="text-2xl text-gray-400 cursor-pointer" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-xl font-bold mb-6 text-purple-600 text-center">Personal details</h1>
        
        {/* Weight Input */}
        <div className="mb-4 w-full max-w-md">
          <label className="block text-purple-600 text-lg font-bold mb-2" htmlFor="weight">
            Weight (kg)
          </label>
          <input
            id="weight"
            type="text"
            placeholder="kg"
            className="border rounded-lg px-3 py-2 w-full text-center"
          />
        </div>
        
        {/* Height Input */}
        <div className="mb-4 w-full max-w-md">
          <label className="block text-purple-600 text-lg font-bold mb-2" htmlFor="height">
            Height (Inches)
          </label>
          <input
            id="height"
            type="text"
            placeholder="Inches"
            className="border rounded-lg px-3 py-2 w-full text-center"
          />
        </div>
      </div>

      {/* Navigation Dots and Buttons at the Bottom */}
      <div className="flex flex-col items-center">
        <AiOutlineEllipsis className="text-3xl text-gray-400 mb-4" /> {/* Navigation Dots */}
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 w-full max-w-md">
          Continue
        </button>
      </div>
    </div>
  );
};

export default WeightHeight;