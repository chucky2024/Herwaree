import React, { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import img2 from "../assets/flower2.png";

const PeriodUpsAndDowns: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState<number | null>(4);

  const handleConfirm = () => {
    alert(
      `Confirmed: ${selectedRange ? `${selectedRange} days` : "No selection"}`
    );
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col justify-end items-center h-screen bg-white relative overflow-hidden">
      <div className="absolute top-5 left-5">
        <button className="text-purple-700 hover:text-purple-900">
          <FaChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute -top-10 -right-10 w-28 h-28">
        <img src={img2} alt="flower" className="object-contain" />
      </div>

      <div className="w-full px-6 pb-12 space-y-10">
        <h1 className="text-lg font-bold text-left text-purple-700 w-full max-w-md">
          Period Ups and Downs
        </h1>

        <div className="w-full flex flex-col items-center space-y-4 max-w-md">
          <div className="w-full">
            <label className="block text-gray-700 mb-2">
              How long does your period last?
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter the duration"
            />
          </div>

          <div className="w-full">
            <label className="block text-gray-700 mb-2">
              Are your periods super heavy, medium or light?
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Describe the flow"
            />
          </div>

          <div className="w-full">
            <label className="block text-gray-700 mb-2">
              What is the range of your menstrual period?
            </label>
            <div className="flex justify-between space-x-2">
              <button
                onClick={() => setSelectedRange(2)}
                className={`flex-1 px-3 py-2 rounded-lg border ${
                  selectedRange === 2
                    ? "bg-purple-100 border-purple-600"
                    : "border-gray-300"
                }`}
              >
                2 - 3 days
              </button>
              <button
                onClick={() => setSelectedRange(4)}
                className={`flex-1 px-3 py-2 rounded-lg border ${
                  selectedRange === 4
                    ? "bg-purple-100 border-purple-600"
                    : "border-gray-300"
                }`}
              >
                4 - 5 days
              </button>
              <button
                onClick={() => setSelectedRange(6)}
                className={`flex-1 px-3 py-2 rounded-lg border ${
                  selectedRange === 6
                    ? "bg-purple-100 border-purple-600"
                    : "border-gray-300"
                }`}
              >
                6 - 7 days
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-2 ">
          <span className="block h-1 w-6 rounded-full bg-gray-300"></span>
          <span className="block h-1 w-6 rounded-full bg-purple-700"></span>
          <span className="block h-1 w-6 rounded-full bg-gray-300"></span>
        </div>

        <div className="flex space-x-4 w-full max-w-xs">
          <button
            className="text-gray-700 flex-1 px-8 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-all"
            onClick={() => alert("Not Sure clicked")}
          >
            Not Sure
          </button>
          <button
            className="bg-purple-700 flex-1 text-white px-8 py-2 rounded-full hover:bg-purple-800 transition-all"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-300 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute right-0 bottom-0 w-20 h-20 bg-purple-300 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
};

export default PeriodUpsAndDowns;
